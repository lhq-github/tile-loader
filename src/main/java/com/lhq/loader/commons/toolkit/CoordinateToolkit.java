package com.lhq.loader.commons.toolkit;

import com.lhq.loader.bean.LngLat;
import com.lhq.loader.bean.Mercator;
import com.lhq.loader.bean.Tile;

/**
 * （1）天地图：CGCS2000，2000国家大地坐标系；我们其实很多时候直接用WGS84的坐标来代替CGCS2000坐标。因为CGCS2000的定义与WGS84实质一样。采用的参考椭球非常接近。
 * 扁率差异引起椭球面上的纬度和高度变化最大达0.1mm。当前测量精度范围内，可以忽略这点差异。可以说两者相容至cm级水平，但若一点的坐标精度达不到cm水平，则不认为CGCS2000和WGS84的坐标是相容的。
 * （2）百度地图：bd09II坐标。首先了解一下火星坐标，它是在国际标准坐标WGS-84上进行的一次加密，由于国内的电子地图都要至少使用火星坐标进行一次加密，百度直接就任性一些，直接自己又研究了一套加密算法，来了个二次加密，
 * 这就是我们所熟知的百度坐标(BD-09)。
 * （3）高德地图、腾讯地图、谷歌地图(中国部分)：gcj02坐标，也称为火星坐标。火星坐标是国家测绘局为了国家安全在原始坐标的基础上进行偏移得到的坐标，
 * 基本国内的电子地图、导航设备都是采用的这一坐标系或在这一坐标的基础上进行二次加密得到的。
 * 
 * @author 灯火-lhq910523@sina.com
 * @time 2020-09-21 09:36:21
 */
public class CoordinateToolkit {
	
    private CoordinateToolkit() {
    }

    private static final double XPI = Math.PI * 3000.0 / 180.0;
    private static final double A = 6378245.0;
    private static final double EE = 0.00669342162296594323;
    private static final double RADIUS = 20037508.34;
    private static final Double[] MCBAND = { 12890594.86, 8362377.87, 5591021d, 3481989.83, 1678043.12, 0d };
    private static final Double[] LLBAND = { 75d, 60d, 45d, 30d, 15d, 0d };
    private static final Double[][] MC2LL = {
			{ 1.410526172116255e-8, 0.00000898305509648872, -1.9939833816331, 200.9824383106796, -187.2403703815547,
					91.6087516669843, -23.38765649603339, 2.57121317296198, -0.03801003308653, 17337981.2 },
			{ -7.435856389565537e-9, 0.000008983055097726239, -0.78625201886289, 96.32687599759846, -1.85204757529826,
					-59.36935905485877, 47.40033549296737, -16.50741931063887, 2.28786674699375, 10260144.86 },
			{ -3.030883460898826e-8, 0.00000898305509983578, 0.30071316287616, 59.74293618442277, 7.357984074871,
					-25.38371002664745, 13.45380521110908, -3.29883767235584, 0.32710905363475, 6856817.37 },
			{ -1.981981304930552e-8, 0.000008983055099779535, 0.03278182852591, 40.31678527705744, 0.65659298677277,
					-4.44255534477492, 0.85341911805263, 0.12923347998204, -0.04625736007561, 4482777.06 },
			{ 3.09191371068437e-9, 0.000008983055096812155, 0.00006995724062, 23.10934304144901, -0.00023663490511,
					-0.6321817810242, -0.00663494467273, 0.03430082397953, -0.00466043876332, 2555164.4 },
			{ 2.890871144776878e-9, 0.000008983055095805407, -3.068298e-8, 7.47137025468032, -0.00000353937994,
					-0.02145144861037, -0.00001234426596, 0.00010322952773, -0.00000323890364, 826088.5 } };
    private static final Double[][] LL2MC = {
			{ -0.0015702102444, 111320.7020616939, 1704480524535203d, -10338987376042340d, 26112667856603880d,
					-35149669176653700d, 26595700718403920d, -10725012454188240d, 1800819912950474d, 82.5 },
			{ 0.0008277824516172526, 111320.7020463578, 647795574.6671607, -4082003173.641316, 10774905663.51142,
					-15171875531.51559, 12053065338.62167, -5124939663.577472, 913311935.9512032, 67.5 },
			{ 0.00337398766765, 111320.7020202162, 4481351.045890365, -23393751.19931662, 79682215.47186455,
					-115964993.2797253, 97236711.15602145, -43661946.33752821, 8477230.501135234, 52.5 },
			{ 0.00220636496208, 111320.7020209128, 51751.86112841131, 3796837.749470245, 992013.7397791013,
					-1221952.21711287, 1340652.697009075, -620943.6990984312, 144416.9293806241, 37.5 },
			{ -0.0003441963504368392, 111320.7020576856, 278.2353980772752, 2485758.690035394, 6070.750963243378,
					54821.18345352118, 9540.606633304236, -2710.55326746645, 1405.483844121726, 22.5 },
			{ -0.0003218135878613132, 111320.7020701615, 0.00369383431289, 823725.6402795718, 0.46104986909093,
					2351.343141331292, 1.58060784298199, 8.77738589078284, 0.37238884252424, 7.45 } };
	
	
	/**
	 * 百度坐标系  经纬度转墨卡托
	 * @param lngLat
	 * @return
	 */
	public static Mercator bd09_LngLat_To_Mercator(LngLat lngLat) {
		Double[] cE = null;
		lngLat.setLng(getLoop(lngLat.getLng(), -180, 180));
		lngLat.setLat(getRange(lngLat.getLat(), -74, 74));
		for (int i = 0; i < LLBAND.length; i++) {
			if (lngLat.getLat() >= LLBAND[i]) {
				cE = LL2MC[i];
				break;
			}
		}
		if (cE != null) {
			for (int i = LLBAND.length - 1; i >= 0; i--) {
				if (lngLat.getLat() <= -LLBAND[i]) {
					cE = LL2MC[i];
					break;
				}
			}
		}
		Double[] converter = converter(lngLat.getLng(), lngLat.getLat(), cE);
		return new Mercator(converter[0], converter[1]);
	}
	
	
	
	/**
	 * 百度坐标系  墨卡托转经纬度
	 * @param mercator
	 * @return
	 */
	public static LngLat bd09_Mercator_To_LngLat(Mercator mercator) {
		Double[] cF = null;
		mercator.setX(Math.abs(mercator.getX()));
		mercator.setY(Math.abs(mercator.getY()));
		
		for (int cE = 0; cE < MCBAND.length; cE++) {
			if (mercator.getY() >= MCBAND[cE]) {
				cF = MC2LL[cE];
				break;
			}
		}
		Double[] converter = converter(mercator.getX(), mercator.getY(), cF);
		return new LngLat(converter[0], converter[1]);
	}
	
	
	/**
	 * 经纬度转墨卡托(wgs84/gcj02)
	 * @param lngLat
	 * @return
	 */
	public static Mercator lngLat_To_Mercator(LngLat lnglat) {
		double x = lnglat.getLng() * RADIUS / 180;
		double y = Math.log(Math.tan((90 + lnglat.getLat()) * Math.PI / 360)) / (Math.PI / 180);
		y = y * RADIUS / 180;
	    return new Mercator(x, y);
	}
	
	/**
	 * 墨卡托转经纬度(wgs84/gcj02)
	 * @param mercator
	 * @return
	 */
	public static LngLat mercator_To_LngLat(Mercator mercator) {
		double lng = mercator.getX() / RADIUS * 180;
		double lat = mercator.getY() / RADIUS * 180;
		lat = 180 / Math.PI * (2 * Math.atan(Math.exp(lat * Math.PI / 180)) - Math.PI / 2);
		return new LngLat(lng, lat);
	}
	

	/**
	 * 大地坐标系转火星坐标系
	 * @param lngLat
	 * @return
	 */
	public static LngLat wgs84_To_Gcj02(LngLat lngLat) {
		return transform(lngLat);
	}

	/**
	 * 火星坐标系转大地坐标系
	 * @param lngLat
	 * @return
	 */
	public static LngLat gcj02_To_Wgs84(LngLat lngLat) {
		LngLat lngLat2 = transform(lngLat);
		double lng = lngLat.getLng() * 2 - lngLat2.getLng();
		double lat = lngLat.getLat() * 2 - lngLat2.getLat();
		return new LngLat(lng, lat);
	}
	
	/**
	 * 火星坐标系转百度坐标系
	 * @param lngLat
	 * @return
	 */
	public static LngLat gcj02_To_Bd09(LngLat lngLat) {
		double lng = lngLat.getLng();
		double lat = lngLat.getLat();
		double z = Math.sqrt(lng * lng + lat * lat) + 0.00002 * Math.sin(lat * XPI);
		double theta = Math.atan2(lat, lng) + 0.000003 * Math.cos(lng * XPI);
		double tempLng = z * Math.cos(theta) + 0.0065;
		double tempLat = z * Math.sin(theta) + 0.006;
		return new LngLat(tempLng, tempLat);
	}

	/**
	 * 百度坐标系转火星坐标系
	 * @param lngLat
	 * @return
	 */
	public static LngLat bd09_To_Gcj02(LngLat lngLat) {
		double lng = lngLat.getLng() - 0.0065;
		double lat = lngLat.getLat() - 0.006;
		double z = Math.sqrt(lng * lng + lat * lat) - 0.00002 * Math.sin(lat * XPI);
		double theta = Math.atan2(lat, lng) - 0.000003 * Math.cos(lng * XPI);
		double tempLng = z * Math.cos(theta);
		double tempLat = z * Math.sin(theta);
		return new LngLat(tempLng, tempLat);
	}

	/**
	 * 大地坐标系转百度坐标系
	 * @param lngLat
	 * @return
	 */
	public static LngLat wgs84_To_Bd09(LngLat lngLat) {
		lngLat = wgs84_To_Gcj02(lngLat);
		lngLat = gcj02_To_Bd09(lngLat);
		return lngLat;
	}

	/**
	 * 百度坐标系转大地坐标系
	 * @param lngLat
	 * @return
	 */
	public static LngLat bd09_To_Wgs84(LngLat lngLat) {
		lngLat = bd09_To_Gcj02(lngLat);
		lngLat = gcj02_To_Wgs84(lngLat);
		return lngLat;
	}

	/**
	 * 将lnglat(经度纬度)坐标系转换为tile(瓦片)坐标系 -- GCJ02
	 * @param lngLat
	 * @param zoom
	 * @param tile
	 */
	public static void gcj02_LngLat_To_Tile(LngLat lngLat, int zoom, Tile tile) {
		double n = Math.pow(2, zoom);
		double tileX = ((lngLat.getLng() + 180) / 360) * n;
		double tileY = (1 - (Math.log(Math.tan(Math.toRadians(lngLat.getLat())) + (1 / Math.cos(Math.toRadians(lngLat.getLat())))) / Math.PI)) / 2 * n;
		tile.setX((int) tileX);
		tile.setY((int) tileY);
		tile.setZoom(zoom);
	}
	
	/**
	 * 将lnglat(经度纬度)坐标系转换为tile(瓦片)坐标系 -- BD02
	 * @param lngLat
	 * @param zoom
	 * @param tile
	 */
	public static void bd09_LngLat_To_Tile(LngLat lngLat, int zoom, Tile tile) {
		Mercator mercator = CoordinateToolkit.bd09_LngLat_To_Mercator(lngLat);
		tile.setX((int)(mercator.getX() * Math.pow(2, zoom - 18) / 256));
		tile.setY((int)(mercator.getY() * Math.pow(2, zoom - 18) / 256));
		tile.setZoom(zoom);
	}
	
	
	
	
	
	
	private static LngLat transform(LngLat lngLat) {
		if (outOfChina(lngLat)) {
			return lngLat;
		}
		double dLng = transformLng(lngLat.getLng() - 105.0, lngLat.getLat() - 35.0);
		double dLat = transformLat(lngLat.getLng() - 105.0, lngLat.getLat() - 35.0);
        double radLat = lngLat.getLat() / 180.0 * Math.PI;
		double magic = Math.sin(radLat);
        magic = 1 - EE * magic * magic;
		double sqrtMagic = Math.sqrt(magic);
        dLng = (dLng * 180.0) / (A / sqrtMagic * Math.cos(radLat) * Math.PI);
        dLat = (dLat * 180.0) / ((A * (1 - EE)) / (magic * sqrtMagic) * Math.PI);
		double mgLng = lngLat.getLng() + dLng;
		double mgLat = lngLat.getLat() + dLat;
		return new LngLat(mgLng, mgLat);
	}
	
	private static double transformLat(double x, double y) {
		double ret = -100.0 + 2.0 * x + 3.0 * y + 0.2 * y * y + 0.1 * x * y + 0.2 * Math.sqrt(Math.abs(x));
        ret += (20.0 * Math.sin(6.0 * x * Math.PI) + 20.0 * Math.sin(2.0 * x * Math.PI)) * 2.0 / 3.0;
        ret += (20.0 * Math.sin(y * Math.PI) + 40.0 * Math.sin(y / 3.0 * Math.PI)) * 2.0 / 3.0;
        ret += (160.0 * Math.sin(y / 12.0 * Math.PI) + 320 * Math.sin(y * Math.PI / 30.0)) * 2.0 / 3.0;
		return ret;
	}

	private static double transformLng(double x, double y) {
		double ret = 300.0 + x + 2.0 * y + 0.1 * x * x + 0.1 * x * y + 0.1 * Math.sqrt(Math.abs(x));
        ret += (20.0 * Math.sin(6.0 * x * Math.PI) + 20.0 * Math.sin(2.0 * x * Math.PI)) * 2.0 / 3.0;
        ret += (20.0 * Math.sin(x * Math.PI) + 40.0 * Math.sin(x / 3.0 * Math.PI)) * 2.0 / 3.0;
        ret += (150.0 * Math.sin(x / 12.0 * Math.PI) + 300.0 * Math.sin(x / 30.0 * Math.PI)) * 2.0 / 3.0;
		return ret;
	}


	private static boolean outOfChina(LngLat lngLat) {
		if (lngLat.getLng() < 72.004 || lngLat.getLat() > 137.8347)
			return true;
		if (lngLat.getLat() < 0.8293 || lngLat.getLat() > 55.8271)
			return true;
		return false;
	}

	
	private static Double[] converter(Double x, Double y, Double[] cE) {
		Double xTemp = cE[0] + cE[1] * Math.abs(x);
		Double cC = Math.abs(y) / cE[9];
		Double yTemp = cE[2] + cE[3] * cC + cE[4] * cC * cC + cE[5] * cC * cC * cC + cE[6] * cC * cC * cC * cC
				+ cE[7] * cC * cC * cC * cC * cC + cE[8] * cC * cC * cC * cC * cC * cC;
		xTemp *= (x < 0 ? -1 : 1);
		yTemp *= (y < 0 ? -1 : 1);
		return new Double[] {xTemp, yTemp};
	}
	
	private static Double getLoop(Double lng, Integer min, Integer max) {
		while (lng > max) {
			lng -= max - min;
		}
		while (lng < min) {
			lng += max - min;
		}
		return lng;
	}

	private static Double getRange(Double lat, Integer min, Integer max) {
		if (min != null) {
			lat = Math.max(lat, min);
		}
		if (max != null) {
			lat = Math.min(lat, max);
		}
		return lat;
	}
	
}
