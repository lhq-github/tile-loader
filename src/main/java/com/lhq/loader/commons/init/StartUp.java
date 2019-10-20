package com.lhq.loader.commons.init;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.lhq.loader.bean.SysConfig;
import com.lhq.loader.service.IDownloaderService;

/**
 * @author lhq
 * 
 */
@Component
public class StartUp implements CommandLineRunner {

    @Autowired
    private IDownloaderService downloaderService;
    @Autowired
    private SysConfig sysConfig;

    @Override
    public void run(String... args) throws Exception {
        // 启动多个线程处理瓦片下载
        for (int i = 0; i < sysConfig.getTilePoolSize(); i++) {
            new Thread(() -> downloaderService.run()).start();
        }
    }

}
