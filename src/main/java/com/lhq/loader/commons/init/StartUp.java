package com.lhq.loader.commons.init;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.lhq.loader.bean.SysConfig;
import com.lhq.loader.service.IDownloaderService;
import com.lhq.loader.service.MapServiceToolkit;

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
        // 设置队列的大小，为线程池的3倍即可
        MapServiceToolkit.setTileQueue(sysConfig.getTilePoolSize() * 3);
        // 启动多个线程处理瓦片下载
        for (int i = 0; i < sysConfig.getTilePoolSize(); i++) {
            new Thread(() -> downloaderService.run()).start();
        }
    }

}
