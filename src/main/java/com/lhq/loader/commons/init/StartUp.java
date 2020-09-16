package com.lhq.loader.commons.init;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.lhq.loader.bean.SysConfig;
import com.lhq.loader.service.IStoreService;
import com.lhq.loader.service.MapServiceToolkit;

/**
 * @author lhq
 * 
 */
@Component
public class StartUp implements CommandLineRunner {

    private static ExecutorService tileDownPool = null;
    @Autowired
    private IStoreService storeService;
    @Autowired
    private SysConfig sysConfig;

    @Override
    public void run(String... args) throws Exception {
        // 设置队列的大小，为线程池的3倍即可
        MapServiceToolkit.initTileQueue(sysConfig.getTilePoolSize() * 3);
        // 设置下载线程大小
        MapServiceToolkit.initDownTaskPool(sysConfig.getDownPoolSize());
        // 初始化executor执行器
        MapServiceToolkit.initExecuor(sysConfig.getRetryNum());
        // 启动多个线程处理瓦片下载
        initTileDownPool(sysConfig.getTilePoolSize());
        for (int i = 0; i < sysConfig.getTilePoolSize(); i++) {
            tileDownPool.execute(() -> MapServiceToolkit.downTile(storeService));
        }
    }

    private static synchronized void initTileDownPool(int tilePoolSize) {
        if (tileDownPool == null) {
            tileDownPool = Executors.newFixedThreadPool(tilePoolSize);
        }
    }

}
