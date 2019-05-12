package com.lhq.loader.service;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import com.lhq.loader.bean.LngLat;
import com.lhq.loader.bean.Tile;
import com.lhq.loader.commons.DownloadProgress;
import com.lhq.loader.commons.Downloader;
import com.lhq.loader.commons.consts.ProgressStateEnum;
import com.lhq.loader.controller.vo.DownloadParamVO;
import com.lhq.loader.function.LngLatTrans;

/**
 * 地图下载器
 * 
 * @author lhq
 *
 */
//该注解的目的是给属性赋值
@Component
public class MapServiceToolkit {
    private static final Logger logger = LoggerFactory.getLogger(MapServiceToolkit.class);
    private static Downloader downloader;
    private static DownloadProgress downloadProgress;
    private static int oneNun;
    private static boolean useMongoStore = true;

    /**
     * 计算下载的瓦片数量
     * 
     */
    public static Long calculateCount(DownloadParamVO downloadParamVO, LngLatTrans transToolkit) {
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
     * 开始下载瓦片
     * 
     */
    public static void startDownload(DownloadParamVO downloadParamVO, String baseUrl, LngLatTrans transToolkit) {
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
        List<String> fileNames = new ArrayList<>();
        List<String> urls = new ArrayList<>();

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
                    sb.setLength(0);
                    if(!useMongoStore) {
                        fileName = sb.append(folder.getPath()).append(File.separator).append(y).append(".png").toString();
                    } else {
                        fileName = sb.append(zoom).append("_").append(x).append("_").append(y).append(".png").toString();
                    }
                    url = baseUrl.replace("{x}", String.valueOf(x)).replace("{y}", String.valueOf(y)).replace("{z}", String.valueOf(zoom));
                    urls.add(url);
                    fileNames.add(fileName);
                    // 当urls的数量达到oneNum时，或者是本次任务的最后一次时，启动下载任务
                    if (urls.size() == oneNun || (zoom == zooms[zooms.length - 1] && x == maxX && y == maxY)) {
                        downloader.download(urls, fileNames, downloadParamVO.getId(), downloadParamVO.getType());
                        urls = new ArrayList<>();
                        fileNames = new ArrayList<>();
                    }
                    // 校验当前任务的状态
                    while (true) {
                        long state = downloadProgress.get(downloadParamVO.getId()).get(DownloadProgress.STATE);
                        // 暂停状态，睡眠5秒后重试
                        if (state == ProgressStateEnum.PAUSE.getState()) {
                            try {
                                Thread.sleep(5000);
                            } catch (InterruptedException e) {
                                logger.error(e.getMessage(), e);
                                Thread.currentThread().interrupt();
                            }
                        } else if (state == ProgressStateEnum.STOP.getState()) {
                            // 停止状态，直接跳出最外层循环，结束本次任务
                            break outer;
                        } else {
                            // 启动状态，跳出本次循环，继续处理
                            break;
                        }
                    }
                }
            }
        }
    }

    @Autowired
    public void setDownloader(Downloader downloader) {
        MapServiceToolkit.downloader = downloader;
    }

    @Autowired
    public void setDownloadProgress(DownloadProgress downloadProgress) {
        MapServiceToolkit.downloadProgress = downloadProgress;
    }

    @Value("${config.downloader.oneNum}")
    public void setOneNun(int oneNun) {
        MapServiceToolkit.oneNun = oneNun;
    }

    @Value("${config.store.mongo}")
    public void setUseMongoStore(boolean useMongoStore) {
        MapServiceToolkit.useMongoStore = useMongoStore;
    }


}
