package com.lhq.loader.service;

import java.io.File;
import java.util.concurrent.ArrayBlockingQueue;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.RejectedExecutionHandler;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;

import org.apache.http.client.fluent.Executor;
import org.apache.http.client.fluent.Request;
import org.apache.http.impl.client.HttpClientBuilder;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.lhq.loader.bean.DownFile;
import com.lhq.loader.bean.LngLat;
import com.lhq.loader.bean.SysConfig;
import com.lhq.loader.bean.Task;
import com.lhq.loader.bean.Tile;
import com.lhq.loader.commons.DownloadProgress;
import com.lhq.loader.commons.consts.TaskStateEnum;
import com.lhq.loader.commons.toolkit.SpringContextToolkit;
import com.lhq.loader.controller.vo.DownloadParamVO;
import com.lhq.loader.exception.BaseException;
import com.lhq.loader.function.LngLatTrans;

/**
 * 计算瓦片数量、瓦片地址，放到队列中让下载器下载
 * 
 * @author 灯火-lhq910523@sina.com
 * @time 2020-09-16 13:50:38
 */
public class MapServiceToolkit {
    private static final Logger logger = LoggerFactory.getLogger(MapServiceToolkit.class);
    private static ArrayBlockingQueue<DownFile> tileQueue;
    private static ExecutorService downTaskPool = null;
    private static Executor executor = null;
    
    private MapServiceToolkit() {
    }

    /**
     * 计算下载的瓦片数量
     * 
     */
    public static long calcTileCount(DownloadParamVO downloadParamVO, LngLatTrans transToolkit) {
        // 提前创建对象，重复利用，下面的循环次数可能到达百万次甚至千万次，每次创建对象效率太低
        Tile tile1 = new Tile();
        Tile tile2 = new Tile();
        LngLat northwest = downloadParamVO.getNorthwest();
        LngLat southeast = downloadParamVO.getSoutheast();
        Integer[] zooms = downloadParamVO.getZooms();
        long allSun = 0;
        for (int zoom : zooms) {
            // 经纬度转瓦片
            transToolkit.trans(northwest, zoom, tile1);
            transToolkit.trans(southeast, zoom, tile2);
            int minX = tile1.getX() < tile2.getX() ? tile1.getX() : tile2.getX();
            int minY = tile1.getY() < tile2.getY() ? tile1.getY() : tile2.getY();
            int maxX = tile1.getX() > tile2.getX() ? tile1.getX() : tile2.getX();
            int maxY = tile1.getY() > tile2.getY() ? tile1.getY() : tile2.getY();
            allSun += (maxX - minX + 1) * (maxY - minY + 1);
        }
        return allSun;
    }

    /**
     * 添加下载任务，计算瓦片地址，放入队列中等待下载器下载
     * 
     */
    public static synchronized void addDownTask(DownloadParamVO downloadParamVO, String baseUrl, IMapService mapService, LngLatTrans transToolkit) {
        DownloadProgress downloadProgress = SpringContextToolkit.getBean(DownloadProgress.class);
        if (downloadProgress.downPoolFull()) {
            throw new BaseException("下载任务已满，请等其他下载任务结束或删除其他下载任务");
        }

        downTaskPool.execute(() -> {
            long count = mapService.calculateCount(downloadParamVO);
            // 开启一个任务
            downloadProgress.openTask(downloadParamVO.getId(), count);

            // 提前创建对象，重复利用，下面的循环次数可能到达百万次甚至千万次，每次创建对象效率太低
            Tile tile1 = new Tile();
            Tile tile2 = new Tile();

            LngLat northwest = downloadParamVO.getNorthwest();
            LngLat southeast = downloadParamVO.getSoutheast();
            Integer[] zooms = downloadParamVO.getZooms();
            String path = downloadParamVO.getPath();

            int minX = 0;
            int minY = 0;
            int maxX = 0;
            int maxY = 0;
            File folder = null;
            String fileName;
            String url;
            StringBuilder sb = new StringBuilder();

            boolean useMongoStore = SpringContextToolkit.getBean(SysConfig.class).getMongoStore() == 1;
            outer: for (int zoom : zooms) {
                // 经纬度转瓦片
                transToolkit.trans(northwest, zoom, tile1);
                transToolkit.trans(southeast, zoom, tile2);

                minX = tile1.getX() < tile2.getX() ? tile1.getX() : tile2.getX();
                minY = tile1.getY() < tile2.getY() ? tile1.getY() : tile2.getY();
                maxX = tile1.getX() > tile2.getX() ? tile1.getX() : tile2.getX();
                maxY = tile1.getY() > tile2.getY() ? tile1.getY() : tile2.getY();

                for (int x = minX; x <= maxX; x++) {
                    sb.setLength(0);
                    if (!useMongoStore) {
                        sb.append(path).append(File.separator).append(zoom).append(File.separator).append(x);
                        folder = new File(sb.toString());
                        if (!folder.exists()) {
                            folder.mkdirs();
                        }
                    }

                    for (int y = minY; y <= maxY; y++) {
                        // 判断当前任务状态
                        Task task = downloadProgress.get(downloadParamVO.getId());
                        // 已停止的，直接跳出最外层循环，结束本次任务
                        if (task.getState() == TaskStateEnum.STOP) {
                            break outer;
                        } else if (task.getState() == TaskStateEnum.PAUSE) {
                            // 暂停中的，获取锁后在进行
                            try {
                                task.getSemaphore().acquire();
                            } catch (InterruptedException e) {
                                logger.error(e.getLocalizedMessage(), e);
                                Thread.currentThread().interrupt();
                            }
                        }
                        // 允许下载
                        sb.setLength(0);
                        if (!useMongoStore) {
                            fileName = sb.append(folder.getPath()).append(File.separator).append(y).append(".png").toString();
                        } else {
                            fileName = sb.append(zoom).append("_").append(x).append("_").append(y).append(".png").toString();
                        }
                        url = baseUrl.replace("{x}", String.valueOf(x)).replace("{y}", String.valueOf(y)).replace("{z}", String.valueOf(zoom));
                        try {
                            tileQueue.put(new DownFile(url, fileName, downloadParamVO.getType(), downloadParamVO.getId()));
                        } catch (InterruptedException e) {
                            logger.error(e.getLocalizedMessage(), e);
                            Thread.currentThread().interrupt();
                        }
                    }
                }
            }
        });
    }

    /**
     * 下载瓦片
     * 
     * @param storeService
     */
    public static void downTile(IStoreService storeService) {
        DownloadProgress downloadProgress = SpringContextToolkit.getBean(DownloadProgress.class);
        while (true) {
            try {
                DownFile downFile = tileQueue.take();
                try {
                    if (!storeService.exsits(downFile.getFileName(), downFile.getMapType())) {
                        byte[] content = executor.execute(Request.Get(downFile.getUrl()).connectTimeout(5000).socketTimeout(5000)).returnContent().asBytes();
                        storeService.store(downFile.getFileName(), downFile.getMapType(), content);
                    }
                } catch (Exception e) {
                    logger.info("{}下载失败:{}", downFile.getFileName(), downFile.getUrl());
                    logger.error(e.getMessage(), e);
                }
                downloadProgress.addTaskCurrent(downFile.getThreadId(), 1L);
            } catch (InterruptedException e) {
                logger.error(e.getLocalizedMessage(), e);
                Thread.currentThread().interrupt();
            }
        }
    }

    /**
     * 初始化队列
     * 
     * @param capacity
     */
    public static synchronized void initTileQueue(int capacity) {
        if(tileQueue == null) {
            tileQueue = new ArrayBlockingQueue<>(capacity);
        }
    }
    
    /**
     * 初始化线程池
     * @param downPoolSize
     */
    public static synchronized void initDownTaskPool(int downPoolSize) {
        if (downTaskPool == null) {
            downTaskPool = new ThreadPoolExecutor(downPoolSize, downPoolSize, 30, TimeUnit.SECONDS, 
                    new LinkedBlockingQueue<>(10), 
                    new RejectedExecutionHandler() {
                        @Override
                        public void rejectedExecution(Runnable r, ThreadPoolExecutor executor) {
                            throw new BaseException("下载任务已满，请等其他下载任务结束或删除其他下载任务");
                        }
                    });
        }
    }

    /**
     * 初始化executor执行器
     * 
     * @param retryNum
     */
    public static synchronized void initExecuor(int retryNum) {
        if(executor == null) {
            executor = Executor.newInstance(
                    HttpClientBuilder.create()
                        .setRetryHandler((exception, executionCount, context) -> {
                            return executionCount < retryNum;
                        })
                        .build());
        }
    }
    
}
