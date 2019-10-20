package com.lhq.loader.bean;

import java.io.Serializable;

/**
 * 系统配置信息类
 * 
 * @author lhq
 *
 */
public class SysConfig implements Serializable {
    private static final long serialVersionUID = 1L;

    private int maxTask;// 最大支持的下载任务数量
    private int retryNum;// 同一个瓦片，下载失败后最大重试次数
    private int tilePoolSize;// 后台瓦片下载线程数量，这个是java线程数，现在个人电脑配置50基本没压力
    private int mongoStore;// 是否使用mongodb存储数据，(0:本地存储，1:mongo存储)，不使用mongo存储时，从@SpringBootApplication中去掉mongo的自动化配置
    private int openClient;// 是否开启客户端，(0:不开启，1:开启)，客户端是指jxbrowser客户端

    public int getMaxTask() {
        return maxTask;
    }

    public void setMaxTask(int maxTask) {
        this.maxTask = maxTask;
    }

    public int getRetryNum() {
        return retryNum;
    }

    public void setRetryNum(int retryNum) {
        this.retryNum = retryNum;
    }

    public int getTilePoolSize() {
        return tilePoolSize;
    }

    public void setTilePoolSize(int tilePoolSize) {
        this.tilePoolSize = tilePoolSize;
    }

    public int getMongoStore() {
        return mongoStore;
    }

    public void setMongoStore(int mongoStore) {
        this.mongoStore = mongoStore;
    }

    public int getOpenClient() {
        return openClient;
    }

    public void setOpenClient(int openClient) {
        this.openClient = openClient;
    }

}
