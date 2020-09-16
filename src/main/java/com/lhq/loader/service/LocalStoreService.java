package com.lhq.loader.service;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;

import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.stereotype.Component;

/**
 * 下载保存到本地
 * 
 * @author 灯火-lhq910523@sina.com
 * @time 2020-09-16 13:50:10
 */
@Component
@ConditionalOnProperty(value = "config.mongoStore", havingValue = "0")
public class LocalStoreService implements IStoreService {

    @Override
    public boolean exsits(String fileName, String mapType) {
        return new File(fileName).exists();
    }

    @Override
    public void store(String fileName, String mapType, byte[] content) throws Exception {
        try (BufferedOutputStream out = new BufferedOutputStream(new FileOutputStream(new File(fileName)))) {
            out.write(content);
        }
    }
//
//    private void downloadFile(String url, String fileName, String type) {
////      Thread.sleep(1000);
////      logger.info("{}下载路径:{}", fileName, url);
//        // 不重复下载
//        if (new File(fileName).exists()) {
//            return;
//        }
//        // 下载瓦片
////        try {
////            executor.execute(Request.Get(url).connectTimeout(5000).socketTimeout(5000)).saveContent(new File(fileName));
////        } catch (IOException e) {
////            logger.info("{}下载失败:{}", fileName, url);
////            logger.error(e.getMessage(), e);
////        }
//    }


}
