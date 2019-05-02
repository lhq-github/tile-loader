package com.lhq.loader.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import com.lhq.loader.bean.LngLat;
import com.lhq.loader.bean.Tile;
import com.lhq.loader.commons.DownloadProgress;
import com.lhq.loader.commons.toolkit.CoordinateToolkit;
import com.lhq.loader.controller.vo.DownloadParamVO;

/**
 * 百度地图下载器
 * 
 * @author lhq
 *
 */
@Service("bmapService")
public class BmapService implements IMapService {
    @Value("${config.baseUrl.bmap}")
    private String baseUrl;
    @Autowired
    private DownloadProgress downloadProgress;

    /**
     * 计算下载的瓦片数量
     * 
     */
    @Override
    public Long calculateCount(DownloadParamVO downloadParamVO) {
        return MapServiceToolkit.calculateCount(downloadParamVO, (LngLat lngLat, int zoom, Tile tile) -> CoordinateToolkit.bd09_LngLat_To_Tile(lngLat, zoom, tile));
    }

    /**
     * 开始下载瓦片
     * 
     */
    @Override
    @Async("servicesExecutor")
    public void startDownload(DownloadParamVO downloadParamVO) {
        downloadProgress.setTaskCount(downloadParamVO.getId(), this.calculateCount(downloadParamVO));
        MapServiceToolkit.startDownload(downloadParamVO, baseUrl, (LngLat lngLat, int zoom, Tile tile) -> CoordinateToolkit.bd09_LngLat_To_Tile(lngLat, zoom, tile), "BMAP");
    }

}
