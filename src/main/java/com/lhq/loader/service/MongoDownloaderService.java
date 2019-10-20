package com.lhq.loader.service;

import java.io.ByteArrayInputStream;
import java.util.concurrent.ArrayBlockingQueue;

import org.apache.http.client.fluent.Request;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.data.mongodb.gridfs.GridFsOperations;
import org.springframework.stereotype.Component;

import com.lhq.loader.bean.DownFile;
import com.lhq.loader.bean.SysConfig;
import com.lhq.loader.commons.DownloadProgress;

/**
 * @author lhq
 *
 */
@Component
@ConditionalOnProperty(value = "config.mongoStore", havingValue = "1")
public class MongoDownloaderService implements IDownloaderService {
    private static final Logger logger = LoggerFactory.getLogger(MongoDownloaderService.class);
    private static ArrayBlockingQueue<DownFile> tileQueue = MapServiceToolkit.getTileQueue();

    @Autowired
    private DownloadProgress downloadProgress;
    @Autowired(required = false)
    @Qualifier("gridFsTemplateAmap")
    private GridFsOperations gridFsTemplateAmap;
    @Autowired(required = false)
    @Qualifier("gridFsTemplateBmap")
    private GridFsOperations gridFsTemplateBmap;
    @Autowired(required = false)
    @Qualifier("gridFsTemplateGmap")
    private GridFsOperations gridFsTemplateGmap;
    @Autowired
    private SysConfig sysConfig;

    @Override
    public void run() {
        while (true) {
            try {
                DownFile downFile = tileQueue.take();
                this.downloadFile(downFile.getUrl(), downFile.getFileName(), downFile.getMapType());
                downloadProgress.addTaskCurrent(downFile.getThreadId(), 1L);
            } catch (InterruptedException e) {
                logger.error(e.getLocalizedMessage(), e);
                Thread.currentThread().interrupt();
            }
        }
    }

    private void downloadFile(String url, String fileName, String type) {
//      Thread.sleep(1000);
//      logger.info("{}下载路径:{}", fileName, url);
        // 不重复下载
        GridFsOperations gridFsTemplate = this.getGridFsOperations(type);
        if (gridFsTemplate.getResource(fileName) != null && gridFsTemplate.getResource(fileName).exists()) {
            return;
        }
        // 下载瓦片
        byte[] content = null;
        for (int retry = 1; retry < sysConfig.getRetryNum(); retry++) {
            try {
                content = Request.Get(url).connectTimeout(5000).socketTimeout(5000).execute().returnContent().asBytes();
                gridFsTemplate.store(new ByteArrayInputStream(content), fileName);
                break;
            } catch (Exception e) {

            }
        }
        if (content == null) {
            logger.info("{}下载失败:{}", fileName, url);
        }
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
