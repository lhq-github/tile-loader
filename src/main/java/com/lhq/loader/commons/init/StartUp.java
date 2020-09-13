package com.lhq.loader.commons.init;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

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

    private static ExecutorService tilePool = null;
    @Autowired
    private IDownloaderService downloaderService;
    @Autowired
    private SysConfig sysConfig;

    @Override
    public void run(String... args) throws Exception {
        // 设置队列的大小，为线程池的3倍即可
        MapServiceToolkit.initTileQueue(sysConfig.getTilePoolSize() * 3);
        // 设置下载线程大小
        MapServiceToolkit.initDownPool(sysConfig.getDownPoolSize());

        // 启动多个线程处理瓦片下载
        initTilePool(sysConfig.getTilePoolSize());
        for (int i = 0; i < sysConfig.getTilePoolSize(); i++) {
            tilePool.execute(() -> downloaderService.run());
        }
    }

    private static synchronized void initTilePool(int tilePoolSize) {
        if (tilePool == null) {
            tilePool = Executors.newFixedThreadPool(tilePoolSize);
        }
    }

}
