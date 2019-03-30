package com.lhq.loader.controller.vo;

import java.io.Serializable;

import com.lhq.loader.bean.LngLat;

/**
 * 下载瓦片的请求参数
 * 
 * @author lhq
 *
 */
public class DownloadParamVO implements Serializable {
    private static final long serialVersionUID = 1L;

    private String id; // 唯一标示，表示哪一次下载计划
	private String type; // 下载类别 amap bmap gmap...
	private String path; // 瓦片保存路径
    private Integer[] zooms;// 下载级别
	private LngLat northwest;// 西北角坐标
	private LngLat southeast;// 东南角坐标

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getPath() {
		return path;
	}

	public void setPath(String path) {
		this.path = path;
	}

	public Integer[] getZooms() {
		return zooms;
	}

	public void setZooms(Integer[] zooms) {
		this.zooms = zooms;
	}

	public LngLat getNorthwest() {
		return northwest;
	}

	public void setNorthwest(LngLat northwest) {
		this.northwest = northwest;
	}

	public LngLat getSoutheast() {
		return southeast;
	}

	public void setSoutheast(LngLat southeast) {
		this.southeast = southeast;
	}

}
