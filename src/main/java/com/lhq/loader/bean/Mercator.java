package com.lhq.loader.bean;

import java.io.Serializable;

/**
 * 墨卡托
 * 
 * @author lhq
 *
 */
public class Mercator implements Serializable {
    private static final long serialVersionUID = 1L;
    
    private double x;
	private double y;

	public Mercator() {
		super();
	}

	public Mercator(double x, double y) {
		super();
		this.x = x;
		this.y = y;
	}

	public double getX() {
		return x;
	}

	public void setX(double x) {
		this.x = x;
	}

	public double getY() {
		return y;
	}

	public void setY(double y) {
		this.y = y;
	}

}
