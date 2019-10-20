package com.lhq.loader.service;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;

import org.apache.http.client.fluent.Request;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.stereotype.Component;

import com.lhq.loader.bean.DownFile;
import com.lhq.loader.bean.SysConfig;
import com.lhq.loader.commons.DownloadProgress;

/**
 * @author lhq
 *
 */
@Component
@ConditionalOnProperty(value = "config.mongoStore", havingValue = "0")
public class LocalDownloaderService implements IDownloaderService {
    private static final Logger logger = LoggerFactory.getLogger(LocalDownloaderService.class);

    @Autowired
    private DownloadProgress downloadProgress;
    @Autowired
    private SysConfig sysConfig;

    @Override
    public void run() {
        while (true) {
            try {
                DownFile downFile = MapServiceToolkit.getTileQueue().take();
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
        if (new File(fileName).exists()) {
            return;
        }
        // 下载瓦片
        byte[] content = null;
        for (int retry = 1; retry < sysConfig.getRetryNum(); retry++) {
            try {
                content = Request.Get(url).connectTimeout(5000).socketTimeout(5000).execute().returnContent().asBytes();
                try (BufferedOutputStream out = new BufferedOutputStream(new FileOutputStream(new File(fileName)))) {
                    out.write(content);
                }
                break;
            } catch (Exception e) {

            }
        }
        if (content == null) {
            logger.info("{}下载失败:{}", fileName, url);
        }
    }

}
