package com.lhq.loader.controller;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.mongodb.MongoDbFactory;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.gridfs.GridFsCriteria;
import org.springframework.data.mongodb.gridfs.GridFsOperations;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lhq.loader.bean.SysConfig;
import com.lhq.loader.bean.Tile;
import com.lhq.loader.commons.DownloadProgress;
import com.lhq.loader.commons.bean.ResultData;
import com.lhq.loader.controller.vo.DownloadParamVO;
import com.lhq.loader.exception.BaseException;
import com.lhq.loader.service.IMapService;
import com.mongodb.client.gridfs.GridFSBuckets;
import com.mongodb.client.gridfs.model.GridFSFile;

@RestController
@RequestMapping("/map")
public class MapController {

    @Autowired
    private SysConfig sysConfig;
    @Autowired
    private DownloadProgress downloadProgress;
    @Autowired
    private IMapService amapService;
    @Autowired
    private IMapService bmapService;
    @Autowired
    private IMapService gmapService;

    @Autowired(required = false)
    @Qualifier("gridFsTemplateAmap")
    private GridFsOperations gridFsTemplateAmap;
    @Autowired(required = false)
    @Qualifier("gridFsTemplateBmap")
    private GridFsOperations gridFsTemplateBmap;
    @Autowired(required = false)
    @Qualifier("gridFsTemplateGmap")
    private GridFsOperations gridFsTemplateGmap;
    @Autowired(required = false)
    private MongoDbFactory mongoDbFactory;


    /**
     * 当使用mongo存储瓦片时，查看瓦片
     * 
     * @param response
     * @throws IOException
     */
    @GetMapping("/{type}/viewTile")
    public void viewTile(Tile tile, @PathVariable String type, HttpServletResponse response) throws IOException {
        if (sysConfig.getMongoStore() == 0) {
            throw new BaseException("使用mongo存储时才需要使用该方式查看瓦片，请切换至使用tomcat中的瓦片");
        }
        GridFsOperations gridFsTemplate = this.getGridFsOperations(type);
        Query query = new Query();
        query.addCriteria(GridFsCriteria.whereFilename().is(tile.getZoom() + "_" + tile.getX() + "_" + tile.getY() + ".png"));
        GridFSFile gridFSFile = gridFsTemplate.findOne(query);
        if (gridFSFile != null) {
            GridFSBuckets.create(mongoDbFactory.getDb(), type).downloadToStream(gridFSFile.getId(), response.getOutputStream());
        }
    }

    /**
     * 计算瓦片数量
     * 
     * @param downloadParamVO
     * @return
     */
    @PostMapping("/calculateCount")
    public ResultData<Long> calculateCount(@RequestBody DownloadParamVO downloadParamVO) {
        IMapService mapService = this.getMapService(downloadParamVO.getType());
        return new ResultData<Long>().success(mapService.calculateCount(downloadParamVO));
    }

    /**
     * 下载瓦片
     * 
     * @param downloadParamVO
     * @return
     */
    @PostMapping("/startDownload")
    public ResultData<String> startDownload(@RequestBody DownloadParamVO downloadParamVO) {
        downloadParamVO.setId(UUID.randomUUID().toString().replaceAll("-", ""));
        downloadParamVO.setPath(downloadParamVO.getPath() + File.separator + downloadParamVO.getType());
        if (!downloadProgress.startTask(downloadParamVO.getId())) {
            throw new BaseException("下载任务最大支持" + sysConfig.getMaxTask() + "个，请等待其他任务下载结束或暂停其他任务");
        }
        IMapService mapService = this.getMapService(downloadParamVO.getType());
        mapService.startDownload(downloadParamVO);
        return new ResultData<String>().success(downloadParamVO.getId());
    }

    /**
     * 开始任务
     * 
     * @param id
     * @return
     */
    @PostMapping("/start/{id}")
    public ResultData<Boolean> startTask(@PathVariable String id) {
        return new ResultData<Boolean>().success(downloadProgress.start(id));
    }

    /**
     * 暂停任务
     * 
     * @param id
     * @return
     */
    @PostMapping("/pause/{id}")
    public ResultData<Boolean> pauseTask(@PathVariable String id) {
        return new ResultData<Boolean>().success(downloadProgress.pause(id));
    }

    /**
     * 停止任务
     * 
     * @param id
     * @return
     */
    @PostMapping("/stop/{id}")
    public ResultData<Boolean> stopTask(@PathVariable String id) {
        return new ResultData<Boolean>().success(downloadProgress.stop(id));
    }

    /**
     * 获取指定目录的下一级目录结构
     * 
     * @param currentPath
     * @return
     */
    @PostMapping("/listFolder")
    public ResultData<List<String>> listFolder(String currentPath) {
        List<String> list = new ArrayList<>();
        File[] files = null;
        if (StringUtils.isBlank(currentPath)) {
            // 获取盘符
            files = File.listRoots();
            for (File file : files) {
                list.add(file.toString().replace(File.separator, ""));
            }
        } else {
            // 获取文件夹
            files = new File(currentPath, File.separator).listFiles();
            if (files != null) {
                for (File file : files) {
                    if (file.isDirectory() && !file.isHidden()) {
                        list.add(file.getName());
                    }
                }
            }
        }
        return new ResultData<List<String>>().success(list);
    }

    /**
     * 查看所有任务下载进度
     * 
     * @return
     */
    @PostMapping("/getProgress")
    public ResultData<Map<String, Map<String, Long>>> getProgress() {
        return new ResultData<Map<String, Map<String, Long>>>().success(downloadProgress);
    }
	
    /**
     * 获取地图服务类别
     * 
     * @param type
     * @return
     */
    private IMapService getMapService(String type) {
        if ("amap".equals(type)) {
            return amapService;
        } else if ("bmap".equals(type)) {
            return bmapService;
        } else if ("gmap".equals(type)) {
            return gmapService;
        }
        throw new BaseException("下载器类别" + type + "不支持，请选择amap/bmap/gmap其中之一");
    }

    private GridFsOperations getGridFsOperations(String type) {
        if ("amap".equals(type)) {
            return gridFsTemplateAmap;
        } else if ("bmap".equals(type)) {
            return gridFsTemplateBmap;
        } else {
            return gridFsTemplateGmap;
        }
    }
	
}
