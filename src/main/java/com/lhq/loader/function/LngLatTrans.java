package com.lhq.loader.function;

import com.lhq.loader.bean.LngLat;
import com.lhq.loader.bean.Tile;

/**
 * @author lhq
 *
 */
@FunctionalInterface
public interface LngLatTrans {
    /**
     * 经纬度转瓦片
     * 
     * @param lngLat
     * @param zoom
     * @param tile
     */
    void trans(LngLat lngLat, int zoom, Tile tile);
}
