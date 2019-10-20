package com.lhq.loader.bean;

import java.io.Serializable;

/**
 * 下载的瓦片文件
 * 
 * @author lhq
 *
 */
public class DownFile implements Serializable {
    private static final long serialVersionUID = 1L;

    private String url; // 瓦片下载地址
    private String fileName;// 瓦片保存路径全程
    private String mapType; // 瓦片类别 amap,bmap,gmap
    private String threadId;// 线程ID

    public DownFile(String url, String fileName, String mapType, String threadId) {
        super();
        this.url = url;
        this.fileName = fileName;
        this.mapType = mapType;
        this.threadId = threadId;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public String getMapType() {
        return mapType;
    }

    public void setMapType(String mapType) {
        this.mapType = mapType;
    }

    public String getThreadId() {
        return threadId;
    }

    public void setThreadId(String threadId) {
        this.threadId = threadId;
    }

}
