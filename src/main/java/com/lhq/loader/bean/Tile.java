package com.lhq.loader.bean;

import java.io.Serializable;

/**
 * 瓦片坐标信息
 * 
 * @author lhq
 *
 */
public class Tile implements Serializable {
    private static final long serialVersionUID = 1L;

    private int x;
	private int y;
	private int zoom;

	public Tile() {
		super();
	}

	public Tile(int x, int y, int zoom) {
		super();
		this.x = x;
		this.y = y;
		this.zoom = zoom;
	}

	public int getX() {
		return x;
	}

	public void setX(int x) {
		this.x = x;
	}

	public int getY() {
		return y;
	}

	public void setY(int y) {
		this.y = y;
	}

	public int getZoom() {
		return zoom;
	}

	public void setZoom(int zoom) {
		this.zoom = zoom;
	}

}
