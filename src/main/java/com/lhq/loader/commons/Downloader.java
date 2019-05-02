package com.lhq.loader.commons;

import java.io.BufferedOutputStream;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.util.ArrayList;
import java.util.List;

import org.apache.http.client.fluent.Request;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.mongodb.gridfs.GridFsOperations;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;

/**
 * 下载器
 * 
 * @author lhq
 *
 */
@Component
public class Downloader {
    private static final Logger logger = LoggerFactory.getLogger(Downloader.class);

    @Value("${config.retryNum}")
    private int retryNum;
    @Value("${config.store.mongo}")
    private boolean useMongoStore;
    @Autowired
    private DownloadProgress downloadProgress;
    @Autowired
    private GridFsOperations gridFsTemplate;

    @Async("downloaderExecutor")
    public void download(List<String> urls, List<String> fileNames, String id) {
        Long current = (long) urls.size();
        List<String> failedUrls = new ArrayList<>();
        List<String> failedFileNames = new ArrayList<>();
        // 下载失败会进行重试操作，但最大重试3次
        for (int retry = 1; retry < retryNum; retry++) {
            int size = urls.size();
            if (size > 0) {
                for (int i = 0; i < size; i++) {
                    String url = urls.get(i);
                    String fileName = fileNames.get(i);
                    try {
                        this.downloadFile(url, fileName);
                    } catch (Exception e) {
                        if (retry == retryNum) {
                            logger.info("{}下载失败:{}", fileName, url);
                        } else {
                            failedUrls.add(url);
                            failedFileNames.add(fileName);
                        }
                    }
                }
                urls = failedUrls;
                fileNames = failedFileNames;
                failedUrls = new ArrayList<>();
                failedFileNames = new ArrayList<>();
            } else {
                break;
            }
        }
        // 更新已完成瓦片的数量
        downloadProgress.addTaskCurrent(id, current);
    }

    /**
     * 下载瓦片并保存到服务器
     * 
     * @param url
     * @param fileName
     * @throws Exception
     */
    private void downloadFile(String url, String fileName) throws Exception {
//        Thread.sleep(1000);
//        logger.info("{}下载路径:{}", fileName, url);
        // 不重复下载
        // TODO 每次都进行查询，该方式需要调整
        if (useMongoStore && gridFsTemplate.getResource(fileName) != null && gridFsTemplate.getResource(fileName).exists()) {
            return;
        }
        if (!useMongoStore && new File(fileName).exists()) {
            return;
        }
        // 下载瓦片
        byte[] content = Request.Get(url).connectTimeout(5000).socketTimeout(5000).execute().returnContent().asBytes();
        if (useMongoStore) {
            gridFsTemplate.store(new ByteArrayInputStream(content), fileName);
        } else {
            try (BufferedOutputStream out = new BufferedOutputStream(new FileOutputStream(new File(fileName)))) {
                out.write(content);
            }
        }
	}
}
