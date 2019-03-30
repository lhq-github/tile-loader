(function(config) {
	var aa = navigator.userAgent.toLowerCase(),
		ba = window,
		da = document,
		ga = da.documentElement;

	function ha(a) {
		return -1 !== aa.indexOf(a)
	}
	var ma = /([a-z0-9]*\d+[a-z0-9]*)/;

	function na() {
		var a = oa;
		if (!a) return null;
		var a = a.toLowerCase(),
			b = null;
		if (b = a.match(/angle \((.*)\)/)) a = b[1], a = a.replace(/\s*direct3d.*$/, "");
		a = a.replace(/\s*\([^\)]*wddm[^\)]*\)/, "");
		if (0 <= a.indexOf("intel")) {
			b = ["Intel"];
			0 <= a.indexOf("mobile") && b.push("Mobile");
			(0 <= a.indexOf("gma") || 0 <= a.indexOf("graphics media accelerator")) && b.push("GMA");
			if (0 <= a.indexOf("haswell")) b.push("Haswell");
			else if (0 <= a.indexOf("ivy")) b.push("HD 4000");
			else if (0 <= a.indexOf("sandy")) b.push("HD 3000");
			else if (0 <= a.indexOf("ironlake")) b.push("HD");
			else {
				0 <= a.indexOf("hd") && b.push("HD");
				var c = a.match(ma);
				c && b.push(c[1].toUpperCase())
			}
			return b = b.join(" ")
		}
		return 0 <= a.indexOf("nvidia") || 0 <= a.indexOf("quadro") || 0 <= a.indexOf("geforce") || 0 <= a.indexOf("nvs") ? (b = ["nVidia"], 0 <= a.indexOf("geforce") && b.push("geForce"), 0 <= a.indexOf("quadro") && b.push("Quadro"), 0 <= a.indexOf("nvs") && b.push("NVS"), a.match(/\bion\b/) && b.push("ION"), a.match(/gtx\b/) ? b.push("GTX") : a.match(/gts\b/) ? b.push("GTS") : a.match(/gt\b/) ? b.push("GT") : a.match(/gs\b/) ? b.push("GS") : a.match(/ge\b/) ? b.push("GE") : a.match(/fx\b/) && b.push("FX"), (c = a.match(ma)) && b.push(c[1].toUpperCase().replace("GS", "")), 0 <= a.indexOf("titan") ? b.push("TITAN") : 0 <= a.indexOf("ti") && b.push("Ti"), b = b.join(" ")) : 0 <= a.indexOf("amd") || 0 <= a.indexOf("ati") || 0 <= a.indexOf("radeon") || 0 <= a.indexOf("firegl") || 0 <= a.indexOf("firepro") ? (b = ["AMD"], 0 <= a.indexOf("mobil") && b.push("Mobility"), c = a.indexOf("radeon"), 0 <= c && b.push("Radeon"), 0 <= a.indexOf("firepro") ? b.push("FirePro") : 0 <= a.indexOf("firegl") && b.push("FireGL"), 0 <= a.indexOf("hd") && b.push("HD"), 0 <= c && (a = a.substring(c)), (c = a.match(ma)) && b.push(c[1].toUpperCase().replace("HD", "")), b = b.join(" ")) : a.substring(0, 100)
	}
	var qa = "microsoft basic render driver;vmware svga 3d;Intel 965GM;Intel B43;Intel G41;Intel G45;Intel G965;Intel GMA 3600;Intel Mobile 4;Intel Mobile 45;Intel Mobile 965".split(";"),
		ra = "ActiveXObject" in ba,
		sa = "devicePixelRatio" in ba && 1 < ba.devicePixelRatio || ra && "matchMedia" in ba && ba.matchMedia("(min-resolution:144dpi)") && ba.matchMedia("(min-resolution:144dpi)").matches,
		va = ha("windows nt"),
		wa = -1 !== aa.search(/windows nt [1-5]\./),
		ya = -1 !== aa.search(/windows nt 5\.[12]/),
		za = wa && !ya;
	ha("windows nt 10");
	var Aa = ha("windows phone"),
		Ba = ha("macintosh"),
		Ca = ha("Mb2345Browser"),
		Da = ha("ipad;") || ha("ipad "),
		Ea = Da && sa,
		Fa = ha("ipod touch;"),
		Ga = ha("iphone;") || ha("iphone "),
		Ha = Ga || Da || Fa,
		Ia = Ha && -1 !== aa.search(/ os [456]_/);
	Ha && aa.search(/ os [4-8]_/);
	Ha && aa.search(/ os [78]_/);
	Ha && ha("os 8_");
	var Ja = Ha && ha("os 10_"),
		Ma = ha("android"),
		Na = -1 !== aa.search(/android [123]/);
	ha("android 4");
	Ma && -1 === aa.search(/android [1-4]/) || aa.search(/android 4.4/);
	var Oa = Ma ? "android" : Ha ? "ios" : va ? "windows" : Ba ? "mac" : "other",
		Pa = ra && !ba.XMLHttpRequest,
		Qa = ra && !da.querySelector,
		Ra = ra && !da.addEventListener,
		Sa = ra && ha("ie 9"),
		Ta = ra && ha("msie 10"),
		Ua = ra && ha("rv:11"),
		Va = ha("edge"),
		Wa = ha("qtweb"),
		Xa = ha("ucbrowser"),
		Ya = ha("alipay") || Ma && Xa,
		Za = ha("miuibrowser"),
		$a = ha("micromessenger"),
		ab = ha("mqqbrowser"),
		bb = ha("baidubrowser"),
		chrome = (ha("chrome") || ha("crios")) && !$a && !bb && !ab && !Va && !Za,
		cb = chrome && ha("chromium"),
		db = chrome && !cb && 30 < parseInt(aa.split("chrome/")[1]),
		eb = ha("firefox"),
		fb = eb && 27 < parseInt(aa.split("firefox/")[1]),
		gb = (Ba || Ha) && ha("safari") && ha("version/"),
		hb = Ba && gb && 7 < parseInt(aa.split("version/")[1]),
		ib = Ha && ha("aliapp"),
		jb = Ha && (!ab && !Xa && !$a && !chrome && !eb && !gb || ib && !Xa),
		kb = Ma || Ha || Aa || ha("mobile"),
		lb = ba.navigator && ba.navigator.msPointerEnabled && !! ba.navigator.msMaxTouchPoints,
		mb = ba.navigator && ba.navigator.pointerEnabled && !! ba.navigator.maxTouchPoints,
		nb = mb || lb,
		ob = "ontouchstart" in da || nb,
		pb = function() {
			if (!kb) return ba.devicePixelRatio || 1;
			var a = document.getElementsByTagName("meta");
			if (window.parent && window.parent !== window) try {
				if (window.parent.location.origin === window.location.origin) a = window.parent.document.getElementsByTagName("meta");
				else return 1
			} catch (b) {
				return 1
			}
			for (var c = a.length - 1; 0 <= c; c -= 1) if ("viewport" === a[c].name) {
				var c = a[c].content,
					d; - 1 !== c.indexOf("initial-scale") && (d = parseFloat(c.split("initial-scale=")[1]));
				a = -1 !== c.indexOf("minimum-scale") ? parseFloat(c.split("minimum-scale=")[1]) : 0;
				c = -1 !== c.indexOf("maximum-scale") ? parseFloat(c.split("maximum-scale=")[1]) : Infinity;
				if (d) {
					if (c >= a) return d > c ? c : d < a ? a : d
				} else if (c >= a) return 1 <= a ? 1 : Math.min(c, 1);
				console && console.log && console.log("viewport\u53c2\u6570\u4e0d\u5408\u6cd5");
				return null
			}
		}(),
		qb = sa && (!kb || !! pb && 1 <= pb),
		rb = ra && "transition" in ga.style,
		sb = !! da.createElementNS && !! da.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
		tb = da.createElement("canvas"),
		ub = !(!tb || !tb.getContext),
		vb = window.URL || window.webkitURL,
		yb = !ra && !(Xa && Ma) && window.Worker && vb && vb.createObjectURL && window.Blob,
		zb = "",
		oa = "",
		Ab = 0,
		Bb = {
			alpha: !0,
			antialias: !0,
			depth: !0,
			failIfMajorPerformanceCaveat: !0,
			preserveDrawingBuffer: !0,
			stencil: !1
		},
		Cb = function() {
			if (!window.forceWebGL && (!ub || !yb || jb && ib && !Xa)) return !1;
			for (var a = ["webgl", "experimental-webgl", "moz-webgl"], b = null, c = 0; c < a.length; c += 1) {
				try {
					b = tb.getContext(a[c], window.forceWebGL ? {
						alpha: !1,
						antialias: !0,
						depth: !0
					} : Bb)
				} catch (d) {}
				if (b) {
					if (b.drawingBufferWidth !== tb.width || b.drawingBufferHeight !== tb.height) break;
					if (window.forceWebGL) return zb = a[c], Ab = Infinity, !0;
					if (!b.getShaderPrecisionFormat || !b.getParameter || !b.getExtension) break;
					Ab = b.getParameter(b.MAX_RENDERBUFFER_SIZE);
					var e = b.getParameter(b.MAX_VIEWPORT_DIMS);
					if (!e) break;
					Ab = Math.min(Ab, e[0], e[1]);
					gb && "mac" === Oa && (Ab = Math.min(Ab, 4096));
					e = Math.max(screen.width, screen.height);
					qb && (e *= Math.min(2, window.devicePixelRatio || 1));
					if (e > Ab) break;
					if (23 > b.getShaderPrecisionFormat(35632, 36338).precision || 23 > b.getShaderPrecisionFormat(35633, 36338).precision) break;
					oa = b.getExtension("WEBGL_debug_renderer_info") ? b.getParameter(37446) : null;
					if ((b = na()) && -1 !== qa.indexOf(b)) break;
					zb = a[c];
					return !0
				}
			}
			return !1
		}(),
		Db = Cb && (db || fb || hb) && ("mac" === Oa || "windows" === Oa) && !kb,
		Eb = !ub || Wa || Aa || kb && eb || Sa || Ia || Ea || Fa || Na || ha("gt-n710") || za,
		Fb = !Eb && !Db,
		Gb = Db ? "vw" : Eb ? "d" : Fb ? "dv" : "v",
		Hb = ha("webkit"),
		Ib = "WebKitCSSMatrix" in ba && "m11" in new window.WebKitCSSMatrix,
		Jb = "MozPerspective" in ga.style,
		Kb = "OTransition" in ga.style,
		Lb = rb || Ib || Jb || Kb,
		Mb = void 0 !== config[8] ? config[8] : !0,
		Nb = void 0 !== config[9] ? config[9] : !0,
		Ob = void 0 !== config[10] ? config[10] : !0,
		Pb = void 0 !== config[11] ? config[11] : !0,
		Qb = void 0 !== config[12] ? config[12] : null,
		Rb = !sb && kb && ub,
		Sb = !0;
	try {
		if ("undefined" === typeof ba.localStorage) Sb = !1;
		else {
			var Tb = (new Date).getTime() + "";
			ba.localStorage.setItem("_test", Tb);
			ba.localStorage.getItem("_test") !== Tb && (Sb = !1);
			ba.localStorage.removeItem("_test")
		}
	} catch (Ub) {
		Sb = !1
	}
	var Vb = parseInt(aa.split("chrome/")[1]);
	config.l = {
		xca: Da,
		yca: Ga,
		size: Ga ? 100 : Ma ? 200 : 500,
		ky: Ba,
		Oia: va,
		XC: Ha,
		Mla: Ja,
		yj: Ma,
		H9: Na,
		LU: Ya,
		wr: Oa,
		PB: bb,
		Efa: ab,
		dM: gb,
		SZ: $a,
		Lo: ra,
		Dh: Pa,
		cr: Qa,
		Eca: Sa,
		OV: Ta,
		ne: Ra,
		Bca: Ua,
		Xaa: Va,
		Fca: ra && !Ua,
		Rda: Ca,
		Si: Sb,
		ef: Sb && Pb && !kb && chrome,
		Vd: Qb,
		geolocation: kb || ra && !Ra || Va,
		hia: Xa,
		pE: Xa && !chrome,
		chrome: chrome,
		kJ: sa && chrome,
		zJ: eb,
		Z: kb,
		Yda: kb && Hb,
		RW: kb && Ib,
		Xda: kb && ba.opera,
		cd: sa,
		yE: pb,
		ja: qb,
		Me: ob,
		TW: lb,
		FL: mb,
		EX: nb,
		z$: chrome && 57 <= Vb,
		A$: !kb && chrome && 64 <= Vb,
		QZ: Hb,
		Cca: rb,
		RZ: Ib,
		vba: Jb,
		Nea: Kb,
		NB: Lb,
		Ol: sb,
		Ll: ub,
		hr: yb,
		$u: Ob,
		He: Db,
		NZ: zb,
		OZ: Bb,
		eK: oa,
		Pda: Ab,
		dja: !1,
		xU: Mb,
		hx: Mb && !Eb,
		X9: Mb ? Gb : "d",
		MT: Mb ? Cb : !1,
		Uy: Mb && ub,
		bm: Mb && Cb,
		Qla: Mb && (!Eb || Cb),
		en: Nb && !! ba.WebSocket && !bb,
		qma: Rb,
		Qea: ub || Rb ? "c" : "d"
	};
	var Wb = config;
	config = void 0;
	var Xb = {
		overlay: ["style"],
		"AMap.IndoorMap": ["AMap.CustomLayer", "cvector"],
		"AMap.IndoorMap3D": ["Map3D"],
		"AMap.MarkerList": ["AMap.TplUtils"],
		Map3D: ["vectorlayer", "wgl", "AMap.CustomLayer"],
		"AMap.Heatmap": ["AMap.CustomLayer"]
	};
	window.AMap ? (window.AMap.version = "1524740698502", window.AMap.uE = {
		kF: function(a) {
			a(Wb)
		}
	}) : window.AMap = {
		version: "1524740698502",
		uE: {
			kF: function(a) {
				a(Wb)
			}
		}
	};
	Wb.Jh = "1524740698502";
	Wb.Eq = Xb;
	Wb.mD = "raster";
	for (var Yb = document.head || document.getElementsByTagName("head")[0], Zb = ".vml{behavior:url(#default#VML);display:inline-block;position:absolute}.amap-custom{top:0;left:0;position:absolute}.amap-container img{max-width:none!important;max-height:none!important}.amap-container{touch-action:none;position:relative;overflow:hidden;background:#fcf9f2 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0AgMAAAC2uDcZAAAADFBMVEX////////////////1pQ5zAAAABHRSTlMAgP/AWuZC2AAAAVhJREFUeAFiYGAQYGDEQjAB2rcDC4BiGIqiU7abdKlO2QkeIClyPsDHweMKtOPHIJ1Op6/w7Y4fdqfT6VpndzqdrnV2p9PpWmd3Oj3qWndSoKp+2J1Op7vr7E6n07XO7nQ6XevsTqfTtc7udPo4/f787E6n0911dqfT6VpndzqdrnV2p9PpWmd3Ot27Ce8m6HS6u85dR6fTtU7r6HS61mkdnU7XOrvT6XTvJuxOp9PddXan0+laZ3c6na51dDpd67SOTqd7N+HdBJ1Od9e56+h0utZpHZ1O1zq70+l0rbM7nU73bsLudDrdXWd3Ol3rtI5Op2ud1tHpdK3TOjqd7t2EdxN0Ot1dZ3c6na51dqfT6VpndzqdrnV2p9Pp3k3Q6XR3nbuOTqdrndbR6XSt0zo6na51Wken072bsDudTnfX2Z1Op2ud3el0utbZnU7XOq2j0+t0uncTD1gO4zoT5doZAAAAAElFTkSuQmCC);-ms-touch-action:none}.amap-drags,.amap-layers{width:100%;height:100%;position:absolute;overflow:hidden}.amap-layer img{pointer-events:none}.amap-e,.amap-maps{width:100%;height:100%}.amap-maps,.amap-e,.amap-layers,.amap-tile,.amap-tile-container{position:absolute;left:0;top:0;overflow:hidden}.amap-context{position:absolute;left:0;top:0}.amap-overlays,.amap-markers,.amap-marker{position:absolute;left:0;top:0}.amap-layers{z-index:0}.amap-overlays{z-index:110;cursor:default}.amap-markers{z-index:120}.amap-controls{z-index:150}.amap-copyright{position:absolute;display:block!important;left:70px;height:16px;bottom:0;font-size:11px;line-height:16px;font-family:Arial,sans-serif;z-index:160}.amap-logo{position:absolute;bottom:0;left:0;z-index:160;height:17px;line-height:16px;margin:0 1px}.amap-logo img{width:67px!important;height:16px!important;border:0;vertical-align:baseline!important}.amap-icon{position:relative;z-index:1;overflow:hidden}.amap-icon img{position:absolute;z-index:-1}.amap-marker-label{position:absolute;z-index:2;border:1px solid blue;background-color:white;white-space:nowrap;cursor:default;padding:3px;font-size:12px;line-height:14px}.amap-info{position:absolute;left:0;z-index:140;width:320px}.amap-menu{position:absolute;z-index:140;_width:100px}.amap-info-close{position:absolute;right:5px;_right:12px;+right:11px;top:5px;_top:2px;+top:2px;color:#c3c3c3;text-decoration:none;font:bold 16px/14px Tahoma,Verdana,sans-serif;width:14px;height:14px}.amap-info-outer,.amap-menu-outer{box-shadow:0 3px 14px rgba(0,0,100,0.6);background:none repeat scroll 0 0 white;border-radius:2px;padding:1px;text-align:left;border:#c0c0c0 solid 1px}.amap-info-outer:hover,.amap-menu-outer:hover{box-shadow:0 3px 14px rgba(0,0,0,0.75)}.amap-info-content{background:#fff;border:1px solid #ccc;padding:10px 18px 10px 10px;+margin:0 10px;+padding:10px 0;line-height:1.4;overflow:auto}.amap-marker-content{position:relative}.amap-info{_width:320px}.amap-menu{_width:100px}.amap-info-sharp{height:23px;margin:0 auto;overflow:hidden;position:relative;top:-1px;width:30px;background-image:url(../../theme/v1.3/sharp.png);_background-image:url(../../theme/v1.3/sharp.gif)}.amap-menu-outer{margin:0;padding:0;list-style-type:none}ul.amap-menu-outer li{cursor:pointer;height:35px;line-height:35px;word-break:break-all;padding:0 10px;font-size:12px;white-space:nowrap}ul.amap-menu-outer li a{text-decoration:none;font-size:13px;margin:0 5px;color:#000;padding:5px 5px}ul.amap-menu-outer li:hover{background-color:#f3f3ee}.amap-overlay-text-container{display:block;width:auto;word-break:keep-all;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;background:#fff;padding:2px 3px;border:1px solid #ccc;border-radius:3px}.amap-overlay-text-container.amap-overlay-text-empty{display:none}".replace(/url\((['"]?)(?:\.\.\/)+/g, "url($1" + Wb[2].split(",")[0] + "/"), $b = null, ac = 0, bc = Yb.childNodes.length; ac < bc; ac++) if (1 === Yb.childNodes[ac].nodeType) {
		$b = Yb.childNodes[ac];
		break
	}
	if (Zb) if (Yb) {
		var cc = document.createElement("style");
		cc.setAttribute("type", "text/css");
		cc.setAttribute("class", "AMap.style");
		cc.styleSheet ? cc.styleSheet.cssText = Zb : cc.innerHTML = Zb;
		$b ? Yb.insertBefore(cc, $b) : Yb.appendChild(cc)
	} else document.write("<style type='text/css'>" + Zb + "</style>");
	var f = f || {
		Ba: {
			be: 0,
			zp: []
		}
	},
		w = {
			w: {},
			control: {},
			D: {}
		};
	f.dba = function(a) {
		var b = Function;
		return function() {
			return (new b("return " + a))()
		}
	}();
	f.CLASS_NAME = "AMap";
	f.e = f.BuryPoint = {
		OW: {},
		ZK: {},
		options: {},
		qL: {},
		OQ: {},
		PQ: {},
		PR: {},
		QR: {}
	};
	f.e.qg = f.BuryPoint.dic = {
		"AMap.event": {
			c: "ev",
			m: {
				addDomListener: "a",
				addListener: "b",
				addListenerOnce: "c",
				removeListener: "d",
				trigger: "e"
			}
		},
		AMap: {
			c: "aa",
			m: {
				convertFrom: "a"
			}
		},
		"AMap.Map": {
			c: "m",
			o: {
				view: "a",
				layers: "b",
				level: "c",
				center: "d",
				zooms: "e",
				lang: "f",
				cursor: "g",
				crs: "h",
				animateEnable: "i",
				isHotspot: "j",
				defaultLayer: "k",
				rotateEnable: "l",
				resizeEnable: "m",
				dragEnable: "n",
				zoomEnable: "o",
				doubleClickZoom: "p",
				keyboardEnable: "q",
				jogEnable: "r",
				scrollWheel: "s",
				touchZoom: "t",
				mapStyle: "u",
				"features ": "v",
				zoom: "w"
			},
			m: {
				setMapStyle: "a",
				getMapStyle: "b",
				getFeatures: "c",
				setFeatures: "d",
				setLang: "e",
				getLang: "f",
				setCity: "g",
				getCity: "h",
				getAdcode: "i",
				setLimitBounds: "j",
				clearLimitBounds: "k",
				getLimitBounds: "l",
				setZoom: "m",
				getZoom: "n",
				getCenter: "o",
				setCenter: "p",
				setRotation: "q",
				getBounds: "r",
				getStatus: "s",
				setStatus: "t",
				getResolution: "u",
				getScale: "v",
				getDefaultCursor: "w",
				setDefaultCursor: "x",
				zoomIn: "y",
				zoomOut: "z",
				setZoomAndCenter: "0",
				setBounds: "1",
				clearMap: "2",
				destroy: "3",
				addControl: "4",
				removeControl: "5",
				clearControl: "6",
				clearInfoWindow: "7",
				remove: "8",
				add: "9",
				getAllOverlays: "a1",
				getSize: "a2",
				getContainer: "a3",
				panTo: "a4",
				panBy: "a5",
				setFitView: "a6",
				setLayers: "a7",
				getLayers: "a8",
				getDefaultLayer: "a9",
				setDefaultLayer: "a0",
				pixelToLngLat: "b0",
				lnglatToPixel: "b1",
				drawPolyline: "b2",
				drawPolygon: "b3",
				drawCircle: "b4"
			}
		},
		"AMap.View2D": {
			c: "v",
			o: {
				center: "a",
				rotation: "b",
				zoom: "c",
				crs: "d"
			}
		},
		"AMap.Buildings": {
			p: "AMap.Layer",
			c: "b"
		},
		"AMap.CustomLayer": {
			p: "AMap.Layer",
			c: "c",
			o: {
				map: "a",
				zIndex: "b",
				opacity: "c",
				zooms: "d"
			},
			m: {
				setOpacity: "2a",
				getContainer: "2b",
				show: "2c",
				hide: "2d",
				setzIndex: "2e"
			}
		},
		"AMap.ImageLayer": {
			p: "AMap.Layer",
			c: "i",
			o: {
				bounds: "a",
				url: "b",
				map: "c",
				opacity: "d",
				visible: "e",
				zIndex: "f",
				zooms: "g"
			},
			m: {
				getMap: "4a",
				show: "4b",
				getOpacity: "4c",
				setOpacity: "4d",
				getBounds: "4e",
				setBounds: "4f",
				getImageUrl: "4g",
				setImageUrl: "4h",
				hide: "4i",
				setOptions: "4j",
				getOptions: "4k"
			}
		},
		"AMap.Layer": {
			c: "l",
			m: {
				getZooms: "a",
				setOpacity: "b",
				show: "c",
				hide: "d",
				setMap: "e",
				getMap: "f",
				setzIndex: "g"
			}
		},
		"AMap.MassMarks": {
			p: "AMap.Layer",
			c: "ma",
			o: {
				zIndex: "a",
				opacity: "b",
				zooms: "c",
				anchor: "d",
				url: "e",
				size: "f",
				cursor: "g",
				alwaysRender: "h"
			},
			m: {
				setData: "0a",
				getData: "0b",
				getStyle: "0c",
				setStyle: "0d",
				setMap: "0e"
			}
		},
		"AMap.TileLayer": {
			p: "AMap.Layer",
			c: "tl",
			o: {
				map: "a",
				tileSize: "b",
				tileUrl: "c",
				errorUrl: "d",
				getTileUrl: "e",
				zIndex: "f",
				opacity: "g",
				zooms: "h",
				detectRetina: "i"
			},
			m: {
				setTextIndex: "3a",
				getTiles: "3b",
				setTileUrl: "3d",
				getTileUrl: "3e",
				getZooms: "3f",
				stopRefresh: "3g",
				startRefresh: "3h",
				reload: "3i"
			}
		},
		"AMap.TileLayer.Satellite": {
			p: "AMap.TileLayer",
			c: "s",
			o: {
				map: "a",
				zIndex: "b",
				opacity: "c",
				zooms: "d",
				detectRetina: "e"
			}
		},
		"AMap.TileLayer.RoadNet": {
			p: "AMap.TileLayer",
			c: "r",
			o: {
				map: "a",
				zIndex: "b",
				opacity: "c",
				zooms: "d",
				detectRetina: "e"
			}
		},
		"AMap.TileLayer.Traffic": {
			p: "AMap.TileLayer",
			c: "t",
			o: {
				map: "a",
				zIndex: "b",
				opacity: "c",
				zooms: "d",
				detectRetina: "e",
				autoRefresh: "f",
				interval: "g"
			}
		},
		"AMap.LayerGroup": {
			p: "AMap.Overlay",
			c: "LayerGroup",
			o: {}
		},
		"AMap.OverlayGroup": {
			p: "AMap.Overlay",
			c: "OverlayGroup",
			o: {}
		},
		"AMap.Vector": {
			p: "AMap.Overlay",
			c: "v",
			m: {
				show: "4a",
				hide: "4b",
				getVisible: "4c",
				getOptions: "4d",
				setOptions: "4e",
				setDraggable: "4f"
			}
		},
		"AMap.VectorTile": {
			p: "AMap.Layer",
			c: "vt"
		},
		"AMap.CircleMarker": {
			p: "AMap.Circle",
			c: "CircleMarker"
		},
		"AMap.Circle": {
			p: "AMap.Vector",
			c: "ci",
			o: {
				map: "a",
				zIndex: "b",
				center: "c",
				radius: "d",
				strokeColor: "e",
				strokeOpacity: "f",
				strokeWeight: "g",
				fillColor: "h",
				fillOpacity: "i",
				strokeStyle: "j",
				extData: "k",
				strokeDasharray: "l"
			},
			m: {
				setCenter: "8a",
				getCenter: "8b",
				setRadius: "8c",
				getRadius: "8d",
				contains: "8e"
			}
		},
		"AMap.Ellipse": {
			p: "AMap.Vector",
			c: "ei",
			o: {
				map: "a",
				zIndex: "b",
				center: "c",
				radius: "d",
				strokeColor: "e",
				strokeOpacity: "f",
				strokeWeight: "g",
				fillColor: "h",
				fillOpacity: "i",
				strokeStyle: "j",
				extData: "k",
				strokeDasharray: "l"
			},
			m: {
				setCenter: "8a",
				getCenter: "8b",
				setRadius: "8c",
				getRadius: "8d",
				contains: "8e"
			}
		},
		"AMap.Rectangle": {
			p: "AMap.Vector",
			c: "ra",
			o: {
				map: "a",
				zIndex: "b",
				center: "c",
				radius: "d",
				strokeColor: "e",
				strokeOpacity: "f",
				strokeWeight: "g",
				fillColor: "h",
				fillOpacity: "i",
				strokeStyle: "j",
				extData: "k",
				strokeDasharray: "l"
			},
			m: {
				setCenter: "8a",
				getCenter: "8b",
				setRadius: "8c",
				getRadius: "8d",
				contains: "8e"
			}
		},
		"AMap.ContextMenu": {
			p: "AMap.Overlay",
			c: "cm",
			o: {
				position: "a",
				content: "b",
				width: "c"
			},
			m: {
				addItem: "2a",
				removeItem: "2b",
				open: "2c",
				close: "2d"
			}
		},
		"AMap.GroundImage": {
			p: "AMap.ImageLayer",
			c: "g",
			o: {
				map: "a",
				clickable: "b",
				opacity: "c"
			},
			m: {
				setMap: "8a"
			}
		},
		"AMap.Icon": {
			c: "ic",
			o: {
				size: "a",
				imageOffset: "b",
				image: "c",
				imageSize: "c"
			},
			m: {
				setImageSize: "a",
				getImageSize: "b"
			}
		},
		"AMap.ImageMarker": {
			p: "AMap.Overlay",
			c: "im",
			m: {
				setPosition: "3a",
				getBounds: "3b",
				getPosition: "3c",
				hide: "3d",
				show: "3e",
				setCursor: "3f",
				setRotation: "3g",
				setzIndex: "3h"
			}
		},
		"AMap.InfoWindow": {
			p: "AMap.Overlay",
			c: "iw",
			o: {
				isCustom: "a",
				autoMove: "b",
				closeWhenClickMap: "c",
				content: "d",
				size: "e",
				offset: "f",
				position: "g",
				showShadow: "h"
			},
			m: {
				open: "1a",
				close: "1b",
				setContent: "1c",
				getContentU: "1d",
				getContent: "1e",
				setPosition: "1f",
				setOffset: "1g",
				getPosition: "1h",
				setSize: "1i",
				getSize: "1j",
				getIsOpen: "1k"
			}
		},
		"AMap.Marker": {
			p: "AMap.Overlay",
			c: "mk",
			o: {
				map: "a",
				position: "b",
				offset: "c",
				icon: "d",
				content: "e",
				topWhenClick: "f",
				topWhenMouseOver: "g",
				draggable: "h",
				raiseOnDrag: "j",
				cursor: "k",
				visible: "l",
				zIndex: "m",
				angle: "n",
				autoRotation: "o",
				animation: "p",
				shadow: "q",
				title: "r",
				clickable: "s",
				shape: "t",
				extData: "u"
			},
			m: {
				setRaiseOnDrag: "9a",
				setPosition: "9b",
				getPosition: "9c",
				setIcon: "9d",
				getIcon: "9e",
				setContent: "9f",
				getContent: "9g",
				hide: "9h",
				show: "9i",
				setCursor: "9j",
				setRotation: "9k",
				setAngle: "9l",
				getAngle: "9m",
				setOffset: "9n",
				getOffset: "9o",
				setzIndex: "9p",
				setOpacity: "9q",
				setDraggable: "9r",
				getDraggable: "9s",
				moveTo: "9t",
				moveAlong: "9u",
				stopMove: "9v",
				setShadow: "9w",
				getShadow: "9x",
				setClickable: "9y",
				getClickable: "9z",
				setTitle: "90",
				getTitle: "91",
				setLabel: "92",
				getLabel: "93",
				setTop: "94",
				getTop: "95",
				setShape: "96",
				getShape: "97",
				setAnimation: "98",
				getAnimation: "99",
				getMap: "9a1"
			}
		},
		"AMap.MarkerShape": {
			c: "ms",
			o: {
				coords: "a",
				type: "b"
			}
		},
		"AMap.Overlay": {
			c: "o",
			m: {
				show: "a",
				hide: "b",
				setMap: "c",
				getMap: "d",
				setExtData: "e",
				getExtData: "f"
			}
		},
		"AMap.Poly": {
			p: "AMap.Vector",
			c: "ly",
			m: {
				setPath: "5a",
				getPath: "5b"
			}
		},
		"AMap.Polygon": {
			p: "AMap.Poly",
			c: "gn",
			o: {
				map: "a",
				zIndex: "b",
				path: "c",
				strokeColor: "d",
				strokeOpacity: "e",
				strokeWeight: "f",
				fillColor: "g",
				fillOpacity: "h",
				extData: "i",
				strokeStyle: "j",
				strokeDasharray: "k"
			},
			m: {
				getArea: "6a",
				toString: "6b",
				contains: "6c"
			}
		},
		"AMap.Polyline": {
			p: "AMap.Poly",
			c: "le",
			o: {
				map: "a",
				zIndex: "b",
				geodesic: "c",
				isOutline: "d",
				outlineColor: "e",
				path: "f",
				strokeColor: "g",
				strokeOpacity: "h",
				strokeWeight: "i",
				strokeStyle: "j",
				strokeDasharray: "k",
				extData: "l"
			},
			m: {
				getLength: "7a"
			}
		},
		"AMap.Text": {
			p: "AMap.Overlay"
		},
		"AMap.Panorama": {
			c: "aa"
		},
		"AMap.PanoramaMarker": {
			c: "ar"
		},
		"AMap.PanoramaService": {
			c: "ae"
		},
		"AMap.AdvancedInfoWindow": {
			p: "AMap.InfoWindow",
			c: "pa",
			o: {
				autoMove: "a",
				closeWhenClickMap: "b",
				content: "c",
				offset: "d",
				position: "e",
				panel: "f",
				searchRadius: "g",
				placeSearch: "h",
				driving: "i",
				walking: "j",
				transit: "k",
				asOrigin: "l",
				asDestination: "m"
			},
			m: {
				clear: "aa",
				searchPoiByKeyWord: "ab"
			}
		},
		"AMap.AntiCrabFrame": {
			c: "pb",
			m: {
				setMapStyle: "a"
			}
		},
		"AMap.ArrivalRange": {
			c: "pc",
			m: {
				search: "a"
			}
		},
		"AMap.Autocomplete": {
			c: "pd",
			o: {
				type: "a",
				city: "b",
				input: "c"
			},
			m: {
				setType: "a",
				setCity: "b",
				search: "c"
			}
		},
		"AMap.AutoPanby": {
			c: "pe"
		},
		"AMap.CircleEditor": {
			c: "pf",
			m: {
				open: "a",
				close: "b"
			}
		},
		"AMap.EllipseEditor": {
			c: "pfa",
			m: {
				open: "a",
				close: "b"
			}
		},
		"AMap.RectangleEditor": {
			c: "pfb",
			m: {
				open: "a",
				close: "b"
			}
		},
		"AMap.CitySearch": {
			c: "pg",
			m: {
				getLocalCity: "a",
				getCityByIp: "b"
			}
		},
		"AMap.CloudDataLayer": {
			c: "ph",
			o: {
				map: "a",
				query: "b",
				clickable: "c"
			},
			m: {
				reload: "a",
				setMap: "b",
				getMap: "c",
				setOptions: "d",
				wrapUrl: "e"
			}
		},
		"AMap.CloudDataSearch": {
			c: "pi",
			o: {
				keywords: "a",
				filter: "b",
				orderBy: "c",
				pageSize: "d",
				pageIndex: "e"
			},
			m: {
				setOptions: "a",
				clear: "b",
				setPageIndex: "c",
				setPageSize: "d",
				searchNearBy: "e",
				searchById: "f",
				searchByDistrict: "g",
				searchInPolygon: "h"
			}
		},
		"AMap.CloudDataSearchRender": {
			c: "pj"
		},
		"AMap.DistrictSearch": {
			c: "pk",
			o: {
				level: "a",
				extensions: "b",
				subdistrict: "c"
			},
			m: {
				setLevel: "a",
				setExtensions: "b",
				setSubdistrict: "c",
				search: "d"
			}
		},
		"AMap.DragRoute": {
			c: "pl",
			o: {
				polyOptions: "a",
				startMarkerOptions: "b",
				midMarkerOptions: "c",
				endMarkerOptions: "d",
				showTraffic: "e"
			},
			m: {
				setAvoidPolygons: "a",
				clearAvoidPolygons: "b",
				getAvoidPolygons: "c",
				setAvoidRoad: "d",
				clearAvoidRoad: "e",
				getAvoidRoad: "f",
				search: "g",
				setPolicy: "h",
				showRoute: "i",
				close: "j",
				open: "k",
				getWays: "l",
				getRoute: "m",
				destroy: "n",
				getPolyline: "o",
				getStart: "p",
				getEnd: "q",
				getPoint: "r",
				getRoutes: "s"
			}
		},
		"AMap.Driving": {
			c: "pm",
			o: {
				policy: "a",
				extensions: "b",
				map: "c",
				panel: "d",
				hideMarkers: "e"
			},
			m: {
				clear: "a",
				search: "b",
				setAvoidPolygons: "c",
				clearAvoidPolygons: "d",
				getAvoidPolygons: "e",
				setAvoidRoad: "f",
				clearAvoidRoad: "g",
				getAvoidRoad: "h",
				setPolicy: "i",
				setLocation: "j",
				close: "k",
				open: "l"
			}
		},
		"AMap.DrivingRender": {
			c: "pp"
		},
		"AMap.Geocoder": {
			c: "pq",
			o: {
				city: "a",
				radius: "b",
				extensions: "c"
			},
			m: {
				getLocation: "a",
				setCity: "b",
				getAddress: "c"
			}
		},
		"AMap.Geolocation": {
			c: "pr",
			o: {
				enableHighAccuracy: "a",
				timeout: "b",
				maximumAge: "c",
				convert: "d",
				showButton: "e",
				buttonDom: "f",
				buttonPosition: "g",
				buttonOffset: "h",
				showMarker: "i",
				markerOptions: "j",
				showCircle: "k",
				circleOptions: "l",
				panToLocation: "m",
				zoomToAccuracy: "n",
				useNative: "o"
			},
			m: {
				isSupported: "a",
				getCurrentPosition: "b",
				watchPosition: "c",
				clearWatch: "d"
			}
		},
		"AMap.GetLL": {
			c: "ps"
		},
		"AMap.Heatmap": {
			c: "pt",
			o: {
				radius: "a",
				gradient: "b",
				opacity: "c",
				zooms: "d"
			},
			m: {
				setOptions: "a",
				getOptions: "b",
				setDataSet: "c",
				getDataSet: "d",
				addDataPoint: "e",
				setMap: "f",
				hide: "g",
				show: "h",
				getMap: "i",
				setzIndex: "j",
				getzIndex: "k"
			}
		},
		"AMap.HotSpot": {
			c: "pu",
			m: {
				setMap: "a"
			}
		},
		"AMap.LineSearch": {
			c: "pv",
			o: {
				pageIndex: "a",
				pageSize: "b",
				city: "c",
				extensions: "d"
			},
			m: {
				setPageIndex: "a",
				setPageSize: "b",
				setCity: "c",
				searchById: "d",
				search: "e"
			}
		},
		"AMap.MapType": {
			c: "pw",
			m: {
				hide: "a",
				show: "b"
			}
		},
		"AMap.Cluster": {
			c: "px"
		},
		"AMap.MarkerClusterer": {
			c: "py",
			o: {
				gridSize: "a",
				minClusterSize: "b",
				maxZoom: "c",
				averageCenter: "d",
				styles: "e",
				zoomOnClick: "f"
			},
			m: {
				disperse: "a",
				addMarker: "b",
				addMarkers: "c",
				removeMarker: "d",
				removeMarkers: "e",
				clearMarkers: "f",
				getClustersCount: "g",
				getMap: "h",
				setMap: "i",
				getMarkers: "j",
				setMarkers: "k",
				getGridSize: "l",
				setGridSize: "m",
				getMinClusterSize: "n",
				setMinClusterSize: "o",
				getMaxZoom: "p",
				setMaxZoom: "q",
				isAverageCenter: "r",
				setAverageCenter: "s",
				getStyles: "t",
				setStyles: "u"
			}
		},
		"AMap.MouseTool": {
			c: "pz",
			m: {
				marker: "a",
				polyline: "b",
				polygon: "c",
				rectangle: "d",
				circle: "e",
				rule: "f",
				measureArea: "g",
				rectZoomIn: "h",
				rectZoomOut: "i",
				close: "j"
			}
		},
		"AMap.WebGLTool": {
			c: "pz",
			m: {
				parse: "a"
			}
		},
		"AMap.OverView": {
			c: "p0",
			o: {
				tileLayer: "a",
				isOpen: "b",
				visible: "c"
			},
			m: {
				open: "a",
				close: "b",
				getTileLayer: "c",
				setTileLayer: "d",
				show: "e",
				hide: "f"
			}
		},
		"AMap.PlaceSearch": {
			c: "p1",
			o: {
				city: "a",
				type: "b",
				lang: "c",
				pageSize: "d",
				pageIndex: "e",
				extensions: "f",
				map: "g",
				panel: "h"
			},
			m: {
				clear: "a",
				setLang: "b",
				searchInBounds: "c",
				searchNearBy: "d",
				getDetails: "e",
				setType: "f",
				setPageIndex: "g",
				setPageSize: "h",
				setCity: "i",
				close: "j",
				open: "k"
			}
		},
		"AMap.PlaceSearchLayer": {
			c: "p2",
			o: {
				map: "a",
				keywords: "b"
			},
			m: {
				setMap: "a",
				setKeywords: "b"
			}
		},
		"AMap.PlaceSearchRender": {
			c: "p3"
		},
		"AMap.PolyEditor": {
			c: "p4",
			m: {
				open: "a",
				close: "b"
			}
		},
		"AMap.RangingTool": {
			c: "p5",
			o: {
				startMarkerOptions: "a",
				midMarkerOptions: "b",
				endMarkerOptions: "c",
				lineOptions: "d",
				tmpLineOptions: "e",
				startLabelText: "f",
				midLabelText: "g",
				endLabelText: "h",
				startLabelOffset: "i",
				midLabelOffset: "j",
				endLabelOffset: "k"
			},
			m: {
				turnOn: "a",
				turnOff: "b"
			}
		},
		"AMap.RoadInfoSearch": {
			c: "p6",
			o: {
				pageIndex: "a",
				pageSize: "b",
				city: "c"
			},
			m: {
				setPageIndex: "a",
				setPageSize: "b",
				setCity: "c",
				roadInfoSearchByRoadId: "d",
				roadInfoSearchByRoadName: "e",
				crossInfoSearchByCrossId: "f",
				crossInfoSearchByRoadName: "g"
			}
		},
		"AMap.Scale": {
			c: "p7",
			m: {
				show: "a",
				hide: "b"
			}
		},
		"AMap.StationSearch": {
			c: "p8",
			o: {
				pageIndex: "a",
				pageSize: "b",
				city: "c"
			},
			m: {
				setPageIndex: "a",
				setPageSize: "b",
				setCity: "c",
				searchById: "d",
				search: "e"
			}
		},
		"AMap.ControlBar": {},
		"AMap.ToolBar": {
			c: "p9",
			o: {
				offset: "a",
				ruler: "b",
				direction: "c",
				autoPosition: "d",
				locationMarker: "e",
				useNative: "f"
			},
			m: {
				getOffset: "a",
				setOffset: "b",
				hideRuler: "c",
				showRuler: "d",
				hideDirection: "e",
				showDirection: "f",
				hideLocation: "g",
				showLocation: "h",
				hide: "i",
				show: "j",
				doLocation: "k",
				getLocation: "l"
			}
		},
		"AMap.Transfer": {
			c: "1",
			o: {
				city: "a",
				policy: "b",
				nightflag: "c",
				cityd: "d",
				extensions: "e",
				map: "f",
				panel: "g",
				hideMarkers: "h"
			},
			m: {
				clear: "a",
				search: "b",
				leaveAt: "c",
				setPolicy: "d",
				setCity: "e",
				setCityd: "f",
				close: "g",
				open: "h"
			}
		},
		"AMap.TransferRender": {
			c: "2"
		},
		"AMap.UTFGrid": {
			c: "3",
			m: {
				setMap: "a"
			}
		},
		"AMap.Walking": {
			c: "4",
			o: {
				map: "a",
				panel: "b",
				hideMarkers: "c"
			},
			m: {
				clear: "a",
				search: "b",
				close: "c",
				open: "d"
			}
		},
		"AMap.WalkingRender": {
			c: "5"
		},
		"AMap.Weather": {
			c: "6",
			m: {
				getLive: "a",
				getForecast: "b"
			}
		},
		"AMap.IndoorMap": {
			p: "AMap.CustomLayer",
			c: "7",
			o: {
				alwaysShow: "9a"
			},
			m: {
				showIndoorMap: "9a",
				showFloor: "9b",
				showFloorBar: "9c",
				hideFloorBar: "9d",
				hideLabels: "9e",
				showLabels: "9f",
				getSelectedBuildingId: "9g",
				getSelectedBuilding: "9h",
				setSelectedBuildingId: "9i",
				getVisibleBuildingIds: "9j"
			}
		},
		"AMap.Riding": {
			c: "prd",
			o: {
				map: "a",
				panel: "b",
				policy: "c"
			},
			m: {
				clear: "a",
				search: "b",
				close: "c",
				open: "d",
				setPolicy: "e"
			}
		},
		"AMap.RidingRender": {
			c: "prdr"
		},
		"AMap.BezierCurve": {
			p: "AMap.Polyline",
			c: "AMap.BezierCurve",
			o: {
				tolerance: "tolerance",
				interpolateNumLimit: "interpolateNumLimit"
			}
		},
		"AMap.BezierCurveEditor": {
			c: "AMap.BezierCurveEditor",
			o: {
				getMarkerOptions: "getMarkerOptions",
				getCtrlLineOptions: "getCtrlLineOptions"
			}
		},
		"AMap.GeometryUtil": {
			c: "AMap.GeometryUtil"
		},
		"AMap.GeoJSON": {
			c: "AMap.GeoJSON"
		}
	};
	f.e.dca = f.BuryPoint.getMethodName = function(a, b) {
		if (!this.qg[a]) return b;
		var c;
		for (c = this.qg[a].m && this.qg[a].m[b]; !c && this.qg[a].p;) {
			var d = this.qg[a].p;
			c = this.qg[d].m && this.qg[d].m[b];
			a = d
		}
		c || (c = b);
		return c
	};
	f.e.add = f.BuryPoint.add = function(a, b, c) {
		var d;
		if (d = this.qg[a] ? this.qg[a].c : a) {
			if (b) {
				a = this.dca(a, b);
				if (!a) return;
				d += "," + a
			}
			this.OW[d] = 1;
			c && (this.ZK[d] = c)
		}
	};
	f.e.cb = f.BuryPoint.addOptions = function(a, b) {
		var c = "",
			c = this.qg[a] ? this.qg[a].c : a,
			d, e;
		for (e in b) if (b.hasOwnProperty(e)) {
			var g;
			this.qg[a] && this.qg[a].o && (g = this.qg[a].o[e]);
			g || (g = e);
			d = c + "," + g;
			this.options[d] = 1
		}
		"AMap.Map" === a && this.N0(a, b, ["mapStyle", "lang", "renderer", "zoom"])
	};
	f.e.N0 = f.BuryPoint._addOptionsValue = function(a, b, c) {
		for (var d = 0, e, g; d < c.length; d++) e = c[d], b && b[e] && (g = {}, g[e] = b[e], this.B9(a, g))
	};
	f.e.B9 = f.BuryPoint.addOptionsValue = function(a, b) {
		var c = this.qg[a].c,
			d, e;
		for (e in b) b.hasOwnProperty(e) && ((d = this.qg[a].o && this.qg[a].o[e]) || (d = e), d = c + "," + d, this.qL[d] = b[e])
	};
	f.e.send = f.BuryPoint.send = function() {
		var a = [],
			b = [],
			c = [],
			d = [],
			e = f.e,
			g;
		for (g in e.OW) 1 !== e.OQ[g] && a.push(g);
		for (g in e.ZK) 1 !== e.PQ[g] && b.push(g + "=" + e.ZK[g]);
		for (g in e.options) 1 !== e.PR[g] && c.push(g);
		for (g in e.qL) 1 !== e.QR[g] && d.push(g + "=" + e.qL[g]);
		if (0 < a.length || 0 < b.length || 0 < c.length || 0 < d.length) g = ["type=f", "k=" + f.A.key, "u=" + f.A.jo, "m=" + (f.l.Z ? 1 : 0), "pf=" + f.l.wr, "methods=" + a.join("@"), "methodsParams=" + b.join("@"), "options=" + c.join("@"), "optionsValue=" + d.join("@")], new f.Sa.bb(f.A.Qb + "://webapi.amap.com/count?" + g.join("&")), e.clear(a, b, c, d);
		window.setTimeout(e.send, 1E4)
	};
	f.e.clear = f.BuryPoint.clear = function(a, b, c, d) {
		for (var e = 0; e < a.length; e++) this.OQ[a[e]] = 1;
		for (e = 0; e < b.length; e++) this.PQ[b[e].split("=")[0]] = 1;
		for (e = 0; e < c.length; e++) this.PR[c[e]] = 1;
		for (e = 0; e < d.length; e++) this.QR[d[e].split("=")[0]] = 1
	};
	window.setTimeout(f.e.send, 1E4);
	f.ba = function() {};
	f.ba.extend = f.ba.extend = function(a) {
		function b() {}
		function c() {
			var a = this.initialize || this.B;
			a && (a.apply(this, arguments), this.CLASS_NAME && f.e.add(this.CLASS_NAME));
			if (!d && this.ah) {
				a = document.createElement("style");
				a.setAttribute("type", "text/css");
				this.CLASS_NAME && a.setAttribute("class", this.CLASS_NAME);
				this.ah = this.ah.replace(/url\((['"]?)(?:\.\.\/)*/g, "url($1" + f.A.qb + "/");
				a.styleSheet ? a.styleSheet.cssText = this.ah : a.innerHTML = this.ah;
				for (var b = document.head || document.getElementsByTagName("head")[0], c = null, e = 0, g = b.childNodes.length; e < g; e++) if (1 === b.childNodes[e].nodeType) {
					c = b.childNodes[e];
					break
				}
				c ? b.insertBefore(a, c) : b.appendChild(a)
			}
			d = !0
		}
		var d = !1;
		b.prototype = this.prototype;
		var e = new b;
		e.constructor = c;
		c.prototype = e;
		c.prototype.Zk = c.prototype["super"] = function(a) {
			a.callee.oa.apply(this, a)
		};
		for (var g in this) this.hasOwnProperty(g) && "prototype" !== g && (c[g] = this[g]);
		a.WY && (f.extend(c, a.WY), a.WY = null);
		a.ga && (f.extend.apply(null, [e].concat(a.ga)), a.ga = null);
		a.F && e.F && (a.F = f.extend({}, e.F, a.F));
		var h = e.constructor.Sca,
			k = {};
		if (void 0 !== h) for (g in h) h.hasOwnProperty(g) && (k[h[g]] = g);
		for (g in a) if (Object.prototype.hasOwnProperty.call(a, g)) {
			var l = g,
				m = g;
			h && k[g] && (m = k[g]);
			"function" === typeof a[l] && "function" === typeof e[m] && (a[l].oa = e[m])
		}
		f.extend(e, a);
		a.toString && (e.toString = a.toString);
		c.qc = this.prototype;
		return c
	};
	f.ba.ob = f.ba.include = function(a) {
		f.extend(this.prototype, a)
	};
	f.extend = function(a) {
		var b = Array.prototype.slice.call(arguments, 1),
			c, d, e, g;
		d = 0;
		for (e = b.length; d < e; d += 1) for (c in g = b[d] || {}, g) Object.prototype.hasOwnProperty.call(g, c) && (a[c] = g[c]);
		return a
	};
	f.ba.Fk = function(a) {
		for (var b in a) if (a.hasOwnProperty(b)) {
			var c = a[b];
			if ("string" === typeof c) this.prototype[b] && (this.prototype[c] = this.prototype[b]);
			else for (var d = 0, e = c.length; d < e; d++) this.prototype[b] && (this.prototype[c[d]] = this.prototype[b])
		}
	};
	f.ka = {
		g: function(a, b, c, d, e) {
			if (this.Od(a, b, c || this)) return this;
			var g = this.ue = this.ue || {};
			g[a] = g[a] || [];
			e ? g[a].unshift({
				ib: b,
				je: c || this,
				Rj: d
			}) : g[a].push({
				ib: b,
				je: c || this,
				Rj: d
			});
			"complete" === a && this.wa && this.r(a);
			return this
		},
		Od: function(a, b, c) {
			var d = this.ue;
			if (b && c) {
				if (d && a in d && d[a]) for (var e = 0; e < d[a].length; e += 1) if (d[a][e].ib === b && d[a][e].je === c) return !0;
				return !1
			}
			return d && a in d && d[a] && 0 < d[a].length
		},
		I: function(a, b, c) {
			if (!this.Od(a)) return this;
			var d = this.ue;
			if (d && d[a]) for (var e = 0; e < d[a].length; e += 1) if (!(d[a][e].ib !== b && "mv" !== b || c && d[a][e].je !== c)) {
				d[a].splice(e, 1);
				d[a].length || (d[a] = null);
				break
			}
			return this
		},
		oD: function(a, b) {
			if (!this.Od(a)) return this;
			var c = this.ue;
			if (c && c[a]) for (var d = 0; d < c[a].length; d += 1) if (!b || c[a][d].je === b) {
				c[a].splice(d, 1);
				c[a].length || (c[a] = null);
				break
			}
			return this
		},
		r: function(a, b) {
			if (!this.Od(a)) return this;
			var c = {
				type: a
			};
			b || "string" !== typeof b && "number" !== typeof b && "boolean" !== typeof b ? f.a.$C(b) ? c.value = b : c = f.extend(c, b) : c.value = b;
			for (var d = [].concat(this.ue[a]), e = 0; e < d.length; e += 1) d[e].ib && (d[e].ib.call(d[e].je || this, c), d[e] && d[e].Rj && this.ue[a] && this.ue[a].splice(e, 1));
			return this
		},
		Uh: function(a) {
			a ? this.ue && this.ue[a] && (this.ue[a] = null) : this.ue = null;
			return this
		}
	};
	f.ka.on || (f.ka.on = f.ka.g);
	f.ka.off || (f.ka.off = f.ka.I);
	f.ka.emit || (f.ka.emit = f.ka.r);
	f.se = {
		set: function(a, b, c) {
			var d = this.hj;
			if (d && d[a]) {
				var d = d[a],
					e = "set" + this.wV(a);
				d[e] ? (d[e](b, c), c || this.HD(a, b)) : d.set(a, b, c)
			} else(this.Nh = this.Nh || {})[a] = b, c || this.HD(a, b)
		},
		wV: function(a) {
			return a.charAt(0).toUpperCase() + a.substr(1)
		},
		get: function(a, b, c) {
			var d, e = this.hj;
			d = "get" + this.wV(a);
			if (e && e[a]) return c = e[a], c[d] ? c[d](b) : c.get(a, b);
			if (this[d] && !c) return this[d](b);
			if (this.Nh && this.Nh.hasOwnProperty(a)) return this.Nh[a]
		},
		X: function(a, b, c) {
			this.hj || (this.hj = {});
			this.hj[a] !== b && (b.g(a, function(b) {
				this.HD(a, b)
			}, this), this.hj[a] = b, c || this.HD(a))
		},
		he: function(a, b, c) {
			for (var d = 0; d < a.length; d += 1) this.X(a[d], b, !c)
		},
		cj: function(a) {
			this.hj && this.hj[a] && (this.hj[a].I(a, "mv", this), this.hj[a] = void 0)
		},
		vp: function() {
			if (this.hj) for (var a in this.hj) this.hj.hasOwnProperty(a) && this.cj(a)
		},
		HD: function(a, b) {
			if (this[a + "Changed"]) this[a + "Changed"](b);
			else this.PT && this.PT();
			this.r(a, b)
		},
		Sla: function(a, b, c) {
			var d = new(f.ba.extend({
				ga: [f.ka, f.se]
			}));
			d.PT = function() {
				for (var b = !0, e = 0; e < a.length; e += 1) d.get(a[e]) || (b = !1);
				b && (d.vp(), c())
			};
			for (var e = 0; e < a.length; e += 1) d.X(a[e], b)
		},
		zg: function(a, b) {
			var c, d;
			for (c in a) a.hasOwnProperty(c) && (d = a[c], this.set(c, d, b))
		}
	};
	f.A = {
		localStorage: !0,
		MB: 500,
		od: !0,
		qd: {
			dark: "#202020",
			blue_night: "#090d20",
			test: "#033447",
			mapv: "#000001",
			techblue: "#000b11",
			insight: "#19212a",
			"default": "#fcf9f2"
		},
		pma: "dark light blue darkblue fresh grey midblue".split(" "),
		key: "3df2f506e62d385e8e9976c4d7b20673",
		Qb: "http",
		td: [115.423412, 39.442759, 117.514625, 41.060816, 116.405285, 39.904989],
		ud: "http://restapi.amap.com",
//		qb: "http://webapi.amap.com",
//TODO
		qb: offlineMap.baseUrl,
		zD: "http://gaode.com",
		mr: "http://m.amap.com",
		ly: "http://webrd0{1,2,3,4}.is.autonavi.com/appmaptile?lang=[lang]&size=1&scale=1&style=8&x=[x]&y=[y]&z=[z]",
		hD: "http://wprd0{1,2,3,4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x=[x]&y=[y]&z=[z]&scl=1&ltype=3",
		eM: "http://webst0{1,2,3,4}.is.autonavi.com/appmaptile?style=6&x=[x]&y=[y]&z=[z]",
		QD: "http://webst0{1,2,3,4}.is.autonavi.com/appmaptile?x=[x]&y=[y]&z=[z]&lang=zh_cn&size=1&scale=1&style=8",
		RD: "http://wprd0{1,2,3,4}.is.autonavi.com/appmaptile?x=[x]&y=[y]&z=[z]&lang=zh_cn&size=1&scl=1&style=8&ltype=11",
		Zy: "http://wprd0{1,2,3,4}.is.autonavi.com/appmaptile?lang=[lang]&size=1&style=7&x=[x]&y=[y]&z=[z]",
		wE: "http://vector.amap.com",
//		av: "vdata.amap.com",
//TODO
		av: offlineMap.baseUrl,
		lN: "ws"
	};

	function dc(a) {
		f.ba.Eq = a.Eq;
		f.l = a.l;
		f.mD = a.mD;
		f.pfa = a[7];
		a.l = null;
		f.A.qb = a[2].split(",")[0];
		f.A.Jh = a.Jh;
		f.A.iy = a.iy;
		var b = f.A.Qb = f.A.qb.split(":")[0];
//TODO 设置成http协议
		b = f.A.Qb = 'http';
		"https" === b && (f.A.lN = "wss", f.A.ud = f.A.ud.replace("http", "https"), f.A.ly = f.A.ly.replace("http", "https"), f.A.hD = f.A.hD.replace("http", "https"), f.A.eM = f.A.eM.replace("http", "https"), f.A.QD = f.A.QD.replace("http", "https"), f.A.RD = f.A.RD.replace("http", "https"), f.A.Zy = f.A.Zy.replace("http", "https"), f.A.wE = f.A.wE.replace("http", "https"));
		var c = window.location.href;
		0 !== c.indexOf("http") && window.parent && window.parent !== window && (c = window.parent.location.href);
		f.A.tba = c;
		c = encodeURIComponent(c);
		f.A.jo = c;
		f.A.Xg = f.A.qb + "/theme/v1.3/markers/" + (f.l.cd ? "b" : "n");
		var d = document.createElement("style");
		d.type = "text/css";
		
//		f.A.qaa = "url(" + b + "://webapi.amap.com/theme/v1.3/openhand.cur),default";
//TODO
		f.A.qaa = "url(" + offlineMap.baseUrl +"/theme/v1.3/openhand.cur),default";
		
//		var e = ".amap-container{cursor:" + f.A.qaa + ";}.amap-drag{cursor:url(" + b + "://webapi.amap.com/theme/v1.3/closedhand.cur),default;}";
//TODO		
		var e = ".amap-container{cursor:" + f.A.qaa + ";}.amap-drag{cursor:url(" + offlineMap.baseUrl + "/theme/v1.3/closedhand.cur),default;}";
		d.styleSheet ? (b = function() {
			try {
				d.styleSheet.cssText = e
			} catch (a) {}
		}, d.styleSheet.disabled ? setTimeout(b, 10) : b()) : d.appendChild(document.createTextNode(e));
		(document.head || document.getElementsByTagName("head")[0]).appendChild(d);
		f.A.mode = Number(a[3]);
		f.A.td = a[1];
		f.A.key = a[0];
		f.A.lt = a[4];
		f.A.yc = a[5];
		f.A.r9 = a[6]
	}
	window.AMap && window.AMap.uE && window.AMap.uE.kF && window.AMap.uE.kF(dc);
	f.gk = {
		Cq: Math.PI / 180,
		Ffa: 180 / Math.PI,
		oJ: 6378137
	};
	(function() {
		function a(a) {
			return "undefined" === typeof a ? "" : a
		}
		f.Cg = {
			gca: function(b) {
				b.name = a(b.name);
				var c = [b.y, b.x, b.name];
				if (f.l.Z) {
					var d = [f.A.mr + "/callAPP?", "src=jsapi_q"];
					d.push("&ios=" + encodeURIComponent("viewMap?sourceApplication=jsapi_q&dev=0&poiname=" + b.name + "&lat=" + b.y + "&lon=" + b.x));
					d.push("&android=" + encodeURIComponent("androidamap?action=shorturl&q=" + c.join(",") + "&sourceApplication=jsapi_q"));
					d.push("&wp=" + encodeURIComponent("viewMap?sourceApplication=jsapi_q&dev=0&poiname=" + b.name + "&lat=" + b.y + "&lon=" + b.x));
					d.push("&mo=" + encodeURIComponent(f.A.mr + "?q=" + c.join(",") + "&callapp=0&sourceApplication=jsapi_q"));
					return d.join("")
				}
				return f.A.zD + "?q=" + c.join(",") + "&src=jsapi_q"
			},
			mV: function(b) {
				b.name = a(b.name);
				b.address = a(b.address);
				b.x = a(b.x);
				b.y = a(b.y);
				var c = [b.id, b.y, b.x, b.name, b.address];
				if (f.l.Z) {
					var d = [f.A.mr + "/callAPP?", "src=jsapi_p"];
					d.push("&ios=" + encodeURIComponent("multiPointShow?sourceApplication=jsapi_p&dev=0&q=" + [b.y, b.x, b.name, b.address, b.id].join() + "&title=" + b.name));
					d.push("&android=" + encodeURIComponent("androidamap?action=shorturl&p=" + c.join(",") + "&sourceApplication=jsapi_p"));
					d.push("&wp=" + encodeURIComponent("multiPointShow?sourceApplication=jsapi_p&dev=0&q=" + [b.y, b.x, b.name, b.address, b.id].join() + "&title=" + b.name));
					return d.join("")
				}
				return f.A.zD + "?p=" + c.join(",") + "&src=jsapi_p"
			},
			kV: function(b) {
				if (f.l.Z) {
					var c = [f.A.mr + "/callAPP?", "src=jsapi_detail"];
					c.push("&ios=" + encodeURIComponent("viewPOIDetail?sourceApplication=jsapi_detail&poiid=" + b.id));
					b.name = a(b.name);
					b.x = a(b.x);
					b.y = a(b.y);
					c.push("&android=" + encodeURIComponent("androidamap?action=openFeature&featureName=PoiDetail&poiid=" + b.id + "&poiname=" + b.name + "&x=" + b.x + "&y=" + b.y + "&sourceApplication=jsapi_detail"));
					c.push("&wp=" + encodeURIComponent("viewPOIDetail?sourceApplication=jsapi_detail&poiid=" + b.id));
					c.push("&mo=" + encodeURIComponent(f.A.mr + "/detail/index/poiid=" + b.id + "&sourceApplication=jsapi_detail"));
					return c.join("")
				}
				return f.A.zD + "/detail/" + b.id + "?src=jsapi_detail"
			},
			aK: function(b) {
				b.sname = a(b.sname);
				"" === b.sname && (b.sname = "\u8d77\u70b9");
				b.dname = a(b.dname);
				"" === b.dname && (b.dname = "\u7ec8\u70b9");
				b.mcount = a(b.mcount);
				b.my = a(b.my);
				b.mx = a(b.mx);
				b.mname = a(b.mname);
				var c = [b.sy, b.sx, b.sname, b.dy, b.dx, b.dname, b.m, b.t, b.mcount, b.my, b.mx, b.mname];
				if (f.l.Z) {
					var d = [f.A.mr + "/callAPP?", "src=jsapi_r_" + b.t];
					d.push("&ios=" + encodeURIComponent("path?sourceApplication=jsapi_r_" + b.t + "&dev=0&slat=" + b.sy + "&slon=" + b.sx + "&sname=" + b.sname + "&dlat=" + b.dy + "&dlon=" + b.dx + "&dname=" + b.dname + "&m=" + b.m + "&t=" + b.t + "&vian=0&vialons=&vialats=&vianames="));
					var e = b.t;
					0 === b.t ? e = 2 : 2 === b.t && (e = 4);
					d.push("&android=" + encodeURIComponent("androidamap://route?sourceApplication=jsapi_r_" + b.t + "&slat=" + b.sy + "&slon=" + b.sx + "&sname=" + b.sname + "&dlat=" + b.dy + "&dlon=" + b.dx + "&dname=" + b.dname + "&dev=0&" + b.m + "&t=" + e));
					d.push("&wp=" + encodeURIComponent("path?sourceApplication=jsapi_r_" + b.t + "&dev=0&slat=" + b.sy + "&slon=" + b.sx + "&sname=" + b.sname + "&dlat=" + b.dy + "&dlon=" + b.dx + "&dname=" + b.dname + "&m=" + b.m + "&t=" + b.t + "&vian=0&vialons=&vialats=&vianames="));
					d.push("&mo=" + encodeURIComponent(f.A.mr + "/?r=" + c.join(",") + "&callapp=0&sourceApplication=jsapi_r_" + b.t));
					return d.join("")
				}
				return f.A.zD + "?r=" + c.join(",") + "src=jsapi_r_" + b.t
			},
			qp: function(a) {
				f.l.Z ? window.location.href = a : window.open(a)
			}
		}
	})();
	"function" !== typeof Object.keys && (Object.keys = function(a) {
		var b = [],
			c;
		for (c in a) a.hasOwnProperty(c) && b.push(c);
		return b
	});
	f.a = {
		eE: [],
		fb: 268435456,
		Tk: [215440491, 106744817],
		Fx: {
			start: function(a) {
				a.startTime = new Date;
				a.rZ = [];
				var b = (new Date).getTime();
				a.id = requestAnimationFrame(function d() {
					var e = (new Date).getTime();
					a.rZ.push(e - b);
					b = e;
					a.id = requestAnimationFrame(d)
				})
			},
			cancel: function(a) {
				a.id && cancelAnimationFrame(a.id)
			},
			stop: function(a) {
				a.eaa = new Date - a.startTime;
				this.cancel(a);
				a.Fx = Math.round(1E3 / (a.eaa / (a.rZ.length + 1)))
			}
		},
		SJ: function(a) {
			var b = {};
			if (f.a.Kl(a, "object")) for (var c in a) a.hasOwnProperty(c) && (b[a[c]] = c);
			return b
		},
		create: "function" === typeof Object.create ? Object.create : function(a, b) {
			function c() {}
			c.prototype = a;
			var d = new c,
				e;
			for (e in b) b.hasOwnProperty(e) && (d[e] = b[e]);
			return d
		},
		Ab: function(a) {
			if ("object" === typeof a && null !== a) {
				if (a.pr || this.Kl(a, "Float32Array") || this.Kl(a, "Uint16Array")) return a;
				var b = this.isArray(a) ? [] : {},
					c;
				for (c in a) a.hasOwnProperty(c) && (b[c] = f.a.Ab(a[c]));
				return b
			}
			return a
		},
		eW: function(a) {
			return (a | 0) === a
		},
		Wga: "function" === typeof Object.setPrototypeOf ? Object.setPrototypeOf : function(a, b) {
			for (var c in b) a[c] = b[c]
		},
		Ml: function(a) {
			return "function" === typeof a
		},
		bp: function() {},
		keys: function(a) {
			if ("function" === typeof Object.keys) return Object.keys(a);
			var b = [],
				c;
			for (c in a) a.hasOwnProperty(c) && b.push(c);
			return b
		},
		map: function(a, b) {
			var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
				d = [];
			if (a && a.length) f.a.Ib(a, function() {
				for (var e = arguments.length, g = Array(e), h = 0; h < e; h++) g[h] = arguments[h];
				d[g[1]] = b.apply(c || a, g)
			});
			else return a;
			return d
		},
		Ib: function(a, b) {
			var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
			if (a && a.length) for (var d = 0, e = a.length; d < e && !1 !== b.call(c, a[d], d, a); d++);
		},
		find: function(a, b) {
			for (var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null, d = 0, e = a.length; d < e; d++) if ("function" === typeof b) {
				if (b.call(c, a[d], d, a)) return a[d]
			} else if (a[d] === b) return a[d];
			return null
		},
		$C: function(a) {
			return "object" === typeof HTMLElement ? a instanceof HTMLElement : a && "object" === typeof a && 1 === a.nodeType && "string" === typeof a.nodeName
		},
		Ur: function(a, b) {
			var c = "ASDFGHJKLQWERTYUIO!sdfghjkleiu3~yr5-P&mq9`%zCN*b=8@^xpVM",
				d, e;
			"v5" < (b || "v5") ? (d = c.length, e = 512) : (d = 27, c = c.substr(0, 27), e = 333);
			var g, h, k, l, m;
			h = [];
			k = NaN;
			l = 0;
			for (m = a.length; l < m; l++) g = a[l], g = c.indexOf(g), isNaN(k) ? k = g * d : (h.push(k + g - e), k = NaN);
			return h
		},
		Fga: function(a, b) {
			for (var c = 1, c = 512 < b.length ? Math.round(Math.pow(b.length, 0.5)) : b.length, d = Math.ceil(b.length / c), e = 0; e < d; e += 1) {
				var g = c * e,
					h = g + c;
				h > b.length && (h = b.length);
				for (; g < h; g += 1) a(b[g])
			}
		},
		S$: function(a) {
			if (/^rgba\(/.test(a)) return this.Dr(a);
			var b = a = this.dC(a);
			"#" === a[0] && (a = a.substring(1), 3 === a.length && (a = a.replace(/./g, function(a) {
				return a + a
			})), b = this.Vf(8 === a.length ? a : "ff" + a));
			return this.Dr(b)
		},
		dC: function(a) {
			var b = {
				aliceblue: "#f0f8ff",
				antiquewhite: "#faebd7",
				aqua: "#00ffff",
				aquamarine: "#7fffd4",
				azure: "#f0ffff",
				beige: "#f5f5dc",
				bisque: "#ffe4c4",
				black: "#000000",
				blanchedalmond: "#ffebcd",
				blue: "#0000ff",
				blueviolet: "#8a2be2",
				brown: "#a52a2a",
				burlywood: "#deb887",
				cadetblue: "#5f9ea0",
				chartreuse: "#7fff00",
				chocolate: "#d2691e",
				coral: "#ff7f50",
				cornflowerblue: "#6495ed",
				cornsilk: "#fff8dc",
				crimson: "#dc143c",
				cyan: "#00ffff",
				darkblue: "#00008b",
				darkcyan: "#008b8b",
				darkgoldenrod: "#b8860b",
				darkgray: "#a9a9a9",
				darkgreen: "#006400",
				darkkhaki: "#bdb76b",
				darkmagenta: "#8b008b",
				darkolivegreen: "#556b2f",
				darkorange: "#ff8c00",
				darkorchid: "#9932cc",
				darkred: "#8b0000",
				darksalmon: "#e9967a",
				darkseagreen: "#8fbc8f",
				darkslateblue: "#483d8b",
				darkslategray: "#2f4f4f",
				darkturquoise: "#00ced1",
				darkviolet: "#9400d3",
				deeppink: "#ff1493",
				deepskyblue: "#00bfff",
				dimgray: "#696969",
				dodgerblue: "#1e90ff",
				firebrick: "#b22222",
				floralwhite: "#fffaf0",
				forestgreen: "#228b22",
				fuchsia: "#ff00ff",
				gainsboro: "#dcdcdc",
				ghostwhite: "#f8f8ff",
				gold: "#ffd700",
				goldenrod: "#daa520",
				gray: "#808080",
				green: "#008000",
				greenyellow: "#adff2f",
				honeydew: "#f0fff0",
				hotpink: "#ff69b4",
				indianred: "#cd5c5c",
				indigo: "#4b0082",
				ivory: "#fffff0",
				khaki: "#f0e68c",
				lavender: "#e6e6fa",
				lavenderblush: "#fff0f5",
				lawngreen: "#7cfc00",
				lemonchiffon: "#fffacd",
				lightblue: "#add8e6",
				lightcoral: "#f08080",
				lightcyan: "#e0ffff",
				lightgoldenrodyellow: "#fafad2",
				lightgrey: "#d3d3d3",
				lightgreen: "#90ee90",
				lightpink: "#ffb6c1",
				lightsalmon: "#ffa07a",
				lightseagreen: "#20b2aa",
				lightskyblue: "#87cefa",
				lightslategray: "#778899",
				lightsteelblue: "#b0c4de",
				lightyellow: "#ffffe0",
				lime: "#00ff00",
				limegreen: "#32cd32",
				linen: "#faf0e6",
				magenta: "#ff00ff",
				maroon: "#800000",
				mediumaquamarine: "#66cdaa",
				mediumblue: "#0000cd",
				mediumorchid: "#ba55d3",
				mediumpurple: "#9370d8",
				mediumseagreen: "#3cb371",
				mediumslateblue: "#7b68ee",
				mediumspringgreen: "#00fa9a",
				mediumturquoise: "#48d1cc",
				mediumvioletred: "#c71585",
				midnightblue: "#191970",
				mintcream: "#f5fffa",
				mistyrose: "#ffe4e1",
				moccasin: "#ffe4b5",
				navajowhite: "#ffdead",
				navy: "#000080",
				oldlace: "#fdf5e6",
				olive: "#808000",
				olivedrab: "#6b8e23",
				orange: "#ffa500",
				orangered: "#ff4500",
				orchid: "#da70d6",
				palegoldenrod: "#eee8aa",
				palegreen: "#98fb98",
				paleturquoise: "#afeeee",
				palevioletred: "#d87093",
				papayawhip: "#ffefd5",
				peachpuff: "#ffdab9",
				peru: "#cd853f",
				pink: "#ffc0cb",
				plum: "#dda0dd",
				powderblue: "#b0e0e6",
				purple: "#800080",
				rebeccapurple: "#663399",
				red: "#ff0000",
				rosybrown: "#bc8f8f",
				royalblue: "#4169e1",
				saddlebrown: "#8b4513",
				salmon: "#fa8072",
				sandybrown: "#f4a460",
				seagreen: "#2e8b57",
				seashell: "#fff5ee",
				sienna: "#a0522d",
				silver: "#c0c0c0",
				skyblue: "#87ceeb",
				slateblue: "#6a5acd",
				slategray: "#708090",
				snow: "#fffafa",
				springgreen: "#00ff7f",
				steelblue: "#4682b4",
				tan: "#d2b48c",
				teal: "#008080",
				thistle: "#d8bfd8",
				tomato: "#ff6347",
				turquoise: "#40e0d0",
				violet: "#ee82ee",
				wheat: "#f5deb3",
				white: "#ffffff",
				whitesmoke: "#f5f5f5",
				yellow: "#ffff00",
				yellowgreen: "#9acd32"
			};
			return "string" === typeof a ? b[a.toLowerCase()] ? b[a.toLowerCase()] : a : a
		},
		tC: function(a, b, c) {
			var d, e;
			d = Math.floor(c / 2);
			e = c - d;
			d = (1 << d) - 1 << e;
			e = (1 << e) - 1;
			return [c, a & d | b & e, b & d | a & e]
		},
		uC: function(a) {
			return a ? encodeURIComponent(a) : ""
		},
		me: function(a, b, c, d) {
			c = a[b].i[c];
			if ("undefined" === typeof c) return null;
			a = a[b].s;
			if ("number" === typeof c) return a[c];
			for (;
			"undefined" === typeof c[d.toString()] && !(d -= 1, 3 > d););
			d = c[d.toString()];
			return "number" === typeof d ? a[d] : null
		},
		Dr: function(a) {
			a = a.split(",");
			a[0] = parseFloat(a[0].split("rgba(")[1]) / 255;
			a[1] = parseFloat(a[1]) / 255;
			a[2] = parseFloat(a[2]) / 255;
			a[3] = parseFloat(a[3]);
			return a
		},
		uga: function(a) {
			a = a.split(",");
			a[0] = parseFloat(a[0].split("rgb(")[1]) / 255;
			a[1] = parseFloat(a[1]) / 255;
			a[2] = parseFloat(a[2]) / 255;
			return a
		},
		cC: function(a) {
			if (a instanceof Array) return 3 == a.length && a.push(1), a;
			a = this.dC(a);
			if (0 == a.indexOf("#")) {
				if (7 == a.length) return this.Cr(a.substr(1));
				if (9 == a.length) return a = a.substr(1), this.rq(a.substr(6) + a.substr(0, 6))
			} else {
				if (0 == a.indexOf("rgb(")) return this.uga(a);
				if (0 == a.indexOf("rgba(")) return this.Dr(a)
			}
		},
		mY: function(a) {
			return f.a.Vf("ff" + a)
		},
		Vf: function(a) {
			for (var b = [], c = 0, d = a.length; c < d; c += 2) b.push(parseInt(a.substr(c, 2), 16));
			b.push((b.shift() / 255).toFixed(2));
			return "rgba(" + b.join(",") + ")"
		},
		Cr: function(a) {
			return f.a.rq("ff" + a)
		},
		rq: function(a) {
			for (var b = [], c = 0, d = a.length; c < d; c += 2) b.push(parseInt(a.substr(c, 2), 16) / 255);
			b.push(b.shift());
			return b
		},
		Oo: function(a) {
			for (var b in a) if (a.hasOwnProperty(b)) return !1;
			return !0
		},
		zl: function(a, b) {
			0 <= b && a.splice(b, 1);
			return a
		},
		Dt: function(a, b) {
			var c = f.a.indexOf(a, b);
			return f.a.zl(a, c)
		},
		filter: function(a, b) {
			var c = [];
			f.a.Ib(a, function(a, e) {
				b(a, e) && c.push(a)
			});
			return c
		},
		indexOf: function(a, b) {
			if (!a || !a.length) return -1;
			if (a.indexOf) return a.indexOf(b);
			for (var c = 0; c < a.length; c += 1) if (a[c] === b) return c;
			return -1
		},
		bind: function() {
			var a = !1;
			Function.prototype.bind && (a = !0);
			return function(b, c) {
				var d = 2 < arguments.length ? Array.prototype.slice.call(arguments, 2) : null;
				return a ? d ? (d.unshift(c), b.bind.apply(b, d)) : b.bind(c) : function() {
					return b.apply(c, d || arguments)
				}
			}
		}(),
		Bb: function(a, b) {
			b = b || {};
			a.F = f.extend({}, a.F, b);
			return a.F
		},
		DU: function() {
			return !1
		},
		join: function(a, b) {
			if (a.join) return a.join(b);
			var c = [],
				d;
			for (d in a) a.hasOwnProperty(d) && c.push(d + "=" + (a[d] || ""));
			return c.join(b)
		},
		$U: function(a, b) {
			return (a || "") + Math.round(Math.random() * Math.pow(10, b || 6))
		},
		Lb: function() {
			var a = 0;
			return function(b) {
				b._amap_id || (a += 1, b._amap_id = a);
				return b._amap_id
			}
		}(),
		aba: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
		Jj: Date.now ?
		function() {
			return Date.now()
		} : function() {
			return (new Date).getTime()
		},
		Xla: function(a, b, c, d) {
			var e;
			if (d) {
				var g = 0,
					h, k = this.Jj;
				e = function() {
					h = k();
					if (h - g < b) return !1;
					g = h;
					a.apply(c, arguments)
				}
			} else {
				var l, m, n;
				n = function() {
					l = !1;
					m && (e.apply(c, m), m = !1)
				};
				e = function() {
					l ? m = arguments : (l = !0, a.apply(c, arguments), setTimeout(n, b))
				}
			}
			return e
		},
		Pc: function(a, b) {
			return Number(Number(a).toFixed(b || 0))
		},
		isArray: function(a) {
			return Array.isArray ? Array.isArray(a) : "[object Array]" === Object.prototype.toString.call(a)
		},
		Kl: function(a, b) {
			return Object.prototype.toString.call(a).split(" ")[1].slice(0, -1).toLowerCase() === b.toLowerCase()
		},
		ga: function(a, b) {
			return -1 !== this.indexOf(a, b)
		},
		$Y: function(a) {
			var b = 0;
			if (0 === a.length) return b;
			for (var c, d = 0, e = a.length; d < e; d += 1) c = a.charCodeAt(d), b = (b << 5) - b + c, b &= b;
			return b
		},
		Pka: function(a, b) {
			b = b ? Math.ceil(parseInt(b.substr(6)) / 24) : 1;
			for (var c = "", d = 0, e = a.length; d < e; d++) c += String.fromCharCode((a.charCodeAt(d) - 256 - b + 65535) % 65535);
			return c
		},
		taa: function(a, b) {
			var c = (a + "").slice(-2),
				d = (b + "").slice(-2);
			a = a.slice(0, -2);
			b = b.slice(0, -2);
			var e = parseInt((d + c).slice(1)),
				d = parseInt("1" + d) / 3E3;
			a -= parseInt("1" + c) / 3E3 * (Math.ceil(e / 250) % 2 ? 1 : -1);
			b -= d * (1 < e / 500 ? 1 : -1);
			return new f.V(parseFloat(a).toFixed(5), parseFloat(b).toFixed(5))
		},
		ZW: function(a) {
			return "undefined" !== typeof JSON && JSON.stringify ? f.a.$Y(JSON.stringify(a)) : null
		},
		yna: function(a, b) {
			if (b || !a.hasOwnProperty("_amap_hash")) {
				var c = f.a.ZW(a);
				c && (a._amap_hash = c)
			}
			return a._amap_hash
		},
		iepngFix: function(a) {
			function b() {
				for (var a; c.length;) a = c.shift(), window.DD_belatedPNG.fixPng(a);
				d.CK = !0
			}
			this.DX || (this.DX = [], this.CK = !1);
			var c = this.DX,
				d = this;
			if ("img" === a.tagName.toLowerCase()) c.push(a);
			else {
				a = a.getElementsByTagName("*");
				for (var e = 0; e < a.length; e += 1) c.push(a[e])
			}
			window.DD_belatedPNG && this.CK ? setTimeout(function() {
				b()
			}, 100) : this.CK || f.gb.load("AMap.FixPng", b)
		},
		za: function(a) {
			if (f.a.isArray(a)) if (f.a.isArray(a[0])) for (var b = 0; b < a.length; b += 1) a[b] = f.a.za(a[b]);
			else if (b = typeof a[0], "string" === b || "number" === b) return new f.V(a[0], a[1]);
			return a
		},
		mn: function(a) {
			return f.a.isArray(a) ? new f.Uc(a[0], a[1]) : a
		}
	};
	(function() {
		function a(a) {
			window.clearTimeout(a)
		}
		function b(a) {
			var b, c, d = ["webkit", "moz", "o", "ms"];
			for (b = 0; b < d.length && !c; b += 1) c = window[d[b] + a];
			return c
		}
		function c(a) {
			var b = +new Date,
				c = Math.max(0, (f.l.yj ? 50 : 20) - (b - d));
			d = b + c;
			return window.setTimeout(a, c)
		}
		var d = 0,
			e = window.requestAnimationFrame || b("RequestAnimationFrame") || c,
			g = window.cancelAnimationFrame || b("CancelAnimationFrame") || b("CancelRequestAnimationFrame") || a;
		f.a.nc = function(a, b, c, d) {
			a = f.a.bind(a, b);
			if (c) a();
			else return e.call(window, a, d)
		};
		f.a.Sg = function(a) {
			a && g.call(window, a)
		}
	})();
	f.a.Ly = window.requestIdleCallback ? window.requestIdleCallback.bind(window) : function(a) {
		var b = Date.now();
		return setTimeout(function() {
			a({
				didTimeout: !1,
				timeRemaining: function() {
					return Math.max(0, 70 - (Date.now() - b))
				}
			})
		}, (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}).timeout || 0)
	};
	f.a.EI = window.cancelIdleCallback ? window.cancelIdleCallback.bind(window) : function(a) {
		clearTimeout(a)
	};
	(function(a) {
		var b = 1,
			c = {};
		a.a.Tga = function(a, b) {
			if (c[a]) {
				var g = c[a];
				g.Sy = 1;
				g.result = b;
				if (g.Ck) {
					for (var h = g.Ck, k = 0, l = h.length; k < l; k++) h[k].call(null, b);
					g.Ck = null
				}
			}
		};
		a.a.H$ = function(a) {
			c[a] = null
		};
		a.a.Gia = function(a, b) {
			if (c[a]) {
				var g = c[a];
				0 < g.Sy ? b(null, g.result) : (g.Ck || (g.Ck = []), g.Ck.push(b))
			} else b(null, a)
		};
		a.a.UJ = function(d, e) {
			var g = navigator.geolocation;
			if (!a.l.XC || "https:" === document.location.protocol) return d(null, g);
			var h;
			e && e.Hia && (h = "f" + b++, c[h] = {
				Sy: 0
			});
			var k = null,
				l = !1;
			e && e.timeout && (k = setTimeout(function() {
				k = void 0;
				d({
					code: 3,
					info: "TIME_OUT",
					message: "Get geolocation time out."
				});
				l = !0
			}, e.timeout));
			g.getCurrentPosition(function() {
				l || (clearTimeout(k), k = void 0, d(null, g))
			}, function(b) {
				l || (clearTimeout(k), k = void 0, 2 === b.code && 0 < b.message.indexOf("permission") ? a.gb.load("AMap.GeoRemoteLoc", function() {
					d(null, a.p_, h)
				}) : d(null, g))
			}, {
				timeout: 1E3
			});
			return h
		}
	})(f);
	(function(a) {
		var b = a.ba.extend({
			ga: [a.ka],
			B: function() {}
		});
		a.Gn = new b
	})(f);
	(function(a) {
		var b = a.ba.extend({
			ga: [a.ka],
			B: function() {
				this.n4()
			},
			n4: function() {
				a.Gn && a.Gn.g("vecTileParsed.buildings", this.S3, this)
			},
			dW: function(a) {
				return a.map.sQ
			},
			bV: function(a) {
				return this.dW(a) ? a.map.wG : null
			},
			Qga: function(a, b) {
				if (b) {
					var e = b.map;
					e && (e.wG ? e.wG.toString() : "") !== (a ? a.toString() : "") && (e.wG = a || [], e.set("display", 0))
				}
			},
			DY: function(a, b) {
				if (b) {
					var e = b.map;
					e && e.sQ !== a && (e.sQ = a, e.set("display", 0))
				}
			},
			Hja: function() {},
			nQ: function(a, b) {
				if (a) for (var e = 0, g = a.length; e < g; e++) a[e] && 0 > b.indexOf(a[e]) && b.push(a[e])
			},
			GU: function(b) {
				if (!b) return null;
				b = b.map.Ya;
				for (var d = 0, e = b.length; d < e; d++) if (a.w.ik && b[d] instanceof a.w.ik && b[d].ta && b[d].ta.length && (-1 !== b[d].ta.indexOf("building") || -1 !== b[d].ta.indexOf("poilabel"))) return b[d];
				return null
			},
			yba: function(a) {
				if (a = this.GU(a)) {
					if (a = a.ia.get("tiles", null, !0)) a = a[0];
					else return null;
					if (!a || !a.length) return null;
					for (var b = [], e = 0, g = a.length; e < g; e++) {
						var h = a[e];
						h.wf && h.wf.xe && this.nQ(h.wf.xe, b)
					}
					return b
				}
			},
			S3: function(a) {
				if (a.Mr && a.Mr.wf) {
					var b = a.Mr.wf.xe;
					if (b) {
						var e = [];
						this.nQ(b, e);
						this.r("vecTileParsed.builds.found", {
							KT: e,
							Mr: a.Mr
						})
					}
				}
			}
		});
		a.hh = new b
	})(f);
	(function(a) {
		function b() {
			return {
				checkup: function() {
					var a = Array.prototype.slice.call(arguments, 0);
					a.pop()(null, a)
				}
			}
		}
		function c(a) {
			return {
				injectCode: function(b, c) {
					var d = null,
						e = null;
					try {
						d = (new Function("self", b))(a)
					} catch (g) {
						console.error("error", e), e = g.toString()
					}
					c(e, d)
				}
			}
		}
		function d(a) {
			function b(c, d) {
				function e(a, b, c) {
					a = {
						Su: Date.now(),
						Hu: h,
						error: a,
						result: b,
						qr: !1,
						Sm: !1
					};
					if (c) for (var g in c) c.hasOwnProperty(g) && (a[g] = c[g]);
					d(a)
				}
				var g = c.nK,
					h = c.Hu,
					l = c.OI,
					m = c.ix,
					n = c.O9 || [],
					p = a._wkHandlers[g];
				p ? p[l] ? m ? p[l].apply(p, n.concat(e)) : e(null, p[l].apply(p, n)) : e("Unknown cmd: " + l) : e("Can not find handler for: " + g)
			}
			var c = [],
				d = null,
				e = null;
			for (d in this._wkHandlers) - 1 !== d.indexOf("_def_") && (e = this._wkHandlers.lma = d);
			"function" === typeof this._wkHandlers[e].B && this._wkHandlers[e].B.call(this._wkHandlers[e]);
			a.$w = function(a) {
				c.push.apply(c, a)
			};
			a.addEventListener("message", function(d) {
				function e(b) {
					if (t) {
						t.push(b);
						var d = !! b.qr;
						d || n++;
						b = n >= h || b.Sm;
						if (d || b) {
							d = 1 < t.length ? {
								qga: t
							} : t[0];
							d.Su = Date.now();
							d.mna = p;
							if (c.length) {
								try {
									a.postMessage(d, c)
								} catch (g) {
									a.postMessage(d), console.error(g)
								}
								c.length = 0
							} else a.postMessage(d);
							t.length = 0;
							b && (e = t = null)
						}
					} else console.error("Seemed callback already sent!!", b, b.result.xc)
				}
				var g = d.data;
				d = g.oga || [g];
				for (var h = d.length, n = 0, p = Date.now() - g.Su, t = [], g = 0; g < h; g++) b(d[g], e)
			}, !1)
		}
		function e(d, h) {
			this.F = a.extend({
				batchSend: !0,
				lazy: !1,
				libPolyfills: null
			}, h);
			this.jt = [];
			this.Lv = this.F.clientId || "w" + g++;
			this.F.onReady && this.lL(this.F.onReady);
			this.gA = this.f3();
			if ("function" === typeof d) {
				var m = {};
				m[this.gA] = d;
				d = m
			}
			d[e.dK] = c;
			d[this.BP()] = b;
			this.uA = d;
			this.Bw(null);
			this.F.lazy || this.gx();
			a.MC || !1 === this.F.hostWorker || (a.MC = this)
		}
		var g = 1,
			h = 1;
		a.extend(e, {
			dK: "_g_",
			dha: function(a) {
				if (!a.I0) {
					var b = [];
					a.addEventListener("message", function(a) {
						a = a.data;
						a = a.qga || [a];
						for (var c = 0, d = a.length; c < d; c++) {
							var e = a[c],
								g;
							a: {
								g = e.Hu;
								for (var h = !e.Sm, k = 0, v = b.length; k < v; k++) {
									var x = b[k];
									if (g === x.Hu) {
										h || b.splice(k, 1);
										g = x;
										break a
									}
								}
								g = void 0
							}
							g ? g.ix.call(null, e.error, e.result, !0) : console.warn("Receive worker msg: ", e)
						}
					}, !1);
					a.w0 = b;
					a.I0 = !0
				}
			}
		});
		a.extend(e.prototype, {
			f3: function() {
				return "_def_" + this.Lv
			},
			BP: function() {
				return "_cln_" + this.Lv
			},
			X7: function() {
				var a = Array.prototype.slice.call(arguments, 0);
				this.fS = a;
				if (this.et) {
					for (var b = 0, c = this.et.length; b < c; b++) this.et[b].apply(null, a);
					this.et.length = 0
				}
			},
			$w: function(a) {
				this.P7 && this.jt.push.apply(this.jt, a)
			},
			lL: function(a) {
				this.fS ? a.apply(null, this.fS) : (this.et || (this.et = []), this.et.push(a))
			},
			gx: function(b) {
				var c = this;
				if (!c.HO) {
					c.HO = !0;
					var d = function(d, e) {
							d && a.l.hr && console.warn(d);
							c.X7.call(c, d, e);
							b && b(d, e)
						};
					a.l.hr ? this.O7(function(a, b) {
						b ? this.t4(b, function(a, c) {
							a ? d(a) : (this.Bw(c), this.fI = c, this.jt.length = 0, this.HA = null, d(null, {
								Y9: b,
								Pia: c
							}))
						}) : d("Worker start failed!")
					}) : d("Worker not supported!")
				}
			},
			Mj: function(b, c) {
				var d = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : a.a.bp,
					g = this;
				b = b || g.gA;
				var h = {};
				g.oO(b, c, h);
				g.Bw(null, h);
				g.lL(function(a) {
					a ? d(a) : g.fI ? (a = g.IP(c, g.kG(g.Lv, b), !0), g.fI.sendMessage(e.dK + ":injectCode", a, function(a, b) {
						a || g.Bw(g.fI, h);
						d(a, b)
					})) : d("Worker msger missing!!")
				})
			},
			kG: function(a, b) {
				if (!a || !b) throw Error("clientId or ns missing!!");
				return a + "_" + b
			},
			x3: function(a, b, c) {
				function d() {
					var b = Array.prototype.slice.call(arguments, 0);
					c.sendMessage.apply(c, [a].concat(b))
				}
				var e = this;
				if (!c) return function() {
					e.HO || "untilCall" === e.F.lazy && e.gx();
					b.apply(this.HA, arguments)
				};
				d._proxy2Worker = !0;
				return d
			},
			y1: function(a) {
				var b = {},
					c;
				for (c in a) a.hasOwnProperty(c) && this.oO(c, a[c], b);
				return b
			},
			oO: function(a, b, c) {
				b = b.call(null, !1);
				for (var d in b) b.hasOwnProperty(d) && (c[a + ":" + d] = b[d], a === this.gA && (c[d] = b[d]))
			},
			Bw: function(a, b) {
				b || (this.HA || (this.HA = this.y1(this.uA)), b = this.HA);
				for (var c in b) if (b.hasOwnProperty(c)) {
					var d = b[c];
					"function" === typeof d && (this[c] = this.x3(c, d, a))
				}
				this.P7 = !! a
			},
			IP: function(a, b) {
				var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : !1,
					d = a.toString(),
					e, d = d.replace(/^function([^\(]*)\(/, function() {
						e = "_prep_h" + h++;
						return "function " + e + "("
					});
				return e ? "\n\t\t\t\t" + d + "\n\t\t\t\tif (self._wkHandlers['" + b + "'] && " + !c + ") {\n\t\t\t\t\tthrow new Error('" + b + " already exists!')\n\t\t\t\t} else {\n\t\t\t\t\tif (" + c + " && self._wkHandlers['" + b + "']) {\n\t\t\t\t\t\tvar handlerFunObj = " + e + ".call(null, self) || {}\n\n\t\t\t\t\t\tif (typeof Object.assign === 'function') {\n\t\t\t\t\t\t\tObject.assign(self._wkHandlers['" + b + "'], handlerFunObj)\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tfor (var key in handlerFunObj) {\n\t\t\t\t\t\t\t\tif (handlerFunObj.hasOwnProperty(key)) {\n\t\t\t\t\t\t\t\t\tself._wkHandlers['" + b + "'][key] = handlerFunObj[key]\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t} else {\n\t\t\t\t\t\tself._wkHandlers['" + b + "'] = " + e + ".call(null, self) || {}\t\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t" + e + " = null;\n\t\t\t" : (console.error("No function match!!"), !1)
			},
			O7: function(a) {
				var b = this.Lv,
					c = [],
					d;
				for (d in this.uA) if (this.uA.hasOwnProperty(d)) {
					var g = this.IP(this.uA[d], this.kG(b, d));
					g && c.push(g)
				}
				b = this.F.libPolyfills || [];
				d = 0;
				for (g = b.length; d < g; d++) b[d] = "(" + b[d].toString() + ")(self);";
				var h = b.join(";\n") + ";\n" + c.join(";\n"),
					c = this.F.hostWorker,
					r = this;
				c && c !== r ? c.lL(function(b, c) {
					b ? a.call(r, b) : c.Pia.sendMessage(e.dK + ":injectCode", h, function(b) {
						b ? a.call(r, b) : a.call(r, null, c.Y9)
					})
				}) : a.call(r, null, r.W8(h))
			},
			W8: function(a) {
				var b = {
					type: "text/javascript; charset=utf-8"
				};
				a = ["self._wkHandlers={};", a, "(" + d.toString() + ")(self)"].join("");
				var c;
				try {
					var e = window.URL || window.webkitURL,
						g = e.createObjectURL(new Blob([a], b));
					c = new Worker(g);
					setTimeout(function() {
						e.revokeObjectURL(g);
						g = null
					}, 3E3)
				} catch (h) {
					console.error(h);
					return
				}
				return c
			},
			m2: function(b) {
				var c = 1,
					d = b.w0,
					e = this,
					g = !! e.F.batchSend;
				return function(h) {
					var r = Array.prototype.slice.call(arguments, 1),
						s = "function" === typeof r[r.length - 1] ? r.pop() : null,
						u = e.Lv,
						v = h.split(":"),
						x = e.gA;
					1 < v.length && (h = v[1], x = v[0]);
					r = {
						Su: a.a.Jj(),
						nK: e.kG(u, x),
						ix: !! s,
						Hu: u + "_" + c++,
						OI: h,
						O9: r
					};
					s && d.push({
						OI: r.OI,
						nK: r.nK,
						Su: r.Su,
						Hu: r.Hu,
						ix: s
					});
					g ? e.a1(b, r) : e.ct(b, r)
				}
			},
			ct: function(a, b) {
				if (this.jt.length) {
					try {
						a.postMessage(b, this.jt)
					} catch (c) {
						a.postMessage(b), console.error(c)
					}
					this.jt.length = 0
				} else a.postMessage(b)
			},
			a1: function(b, c) {
				b.cH || (b.cH = []);
				b.cH.push(c);
				if (!b.aS) {
					var d = this;
					b.aS = setTimeout(function() {
						b.aS = null;
						var c = b.cH;
						c.length && (d.ct(b, 1 === c.length ? c[0] : {
							Su: a.a.Jj(),
							oga: c
						}), c.length = 0)
					}, 0)
				}
			},
			P8: function(a) {
				var b = this;
				a.addEventListener("error", function(a) {
					console.error(a);
					b.Bw(null)
				}, !1);
				e.dha(a)
			},
			t4: function(a, b) {
				var c = this;
				c.P8(a);
				var d = this.m2(a);
				if (e.V1) b.call(c, null, {
					sendMessage: d
				});
				else {
					e.V1 = !0;
					var g = [c.BP() + ":checkup", Math.random().toFixed(5) + "", Math.round(1E3 * Math.random()), !1, function(a, e) {
						var h = !0;
						if (a || !e || e.length !== g.length - 2) h = !1;
						else for (var k = 0, v = e.length; k < v; k++) if (e[k] !== g[k + 1]) {
							h = !1;
							break
						}
						h ? b.call(c, null, {
							sendMessage: d
						}) : (console.error(a), b.call(c, "Self checkup failed!!"))
					}];
					d.apply(c, g)
				}
			}
		});
		a.ts = e
	})(f);
	(function() {
		if (!f.Zd) {
			f.Zd = {
				te: {},
				Xx: {}
			};
			var a = f.Zd,
				b = f.Zd.te,
				c = f.a,
				d = f.A;
			b.start = function(b) {
				a.Xx[b.id] = {
					K: b.K,
					time: {
						VV: c.Jj()
					},
					n$: function() {
						return c.Jj() - this.time.VV
					}
				}
			};
			b.end = function(b) {
				var d = a.Xx[b.id],
					e = d.time,
					d = c.bind(d.n$, d),
					l = b.index,
					m = b.key;
				"function" !== typeof b.yc && (b.yc = function() {});
				if (void 0 === e[m]) void 0 === l ? e[m] = d() : (e[m] = [], e[m][l] = d());
				else if (void 0 !== l && void 0 === e[m][l]) e[m][l] = d();
				else return b.yc(Error("Duplicate Invoke"));
				b.yc(null)
			};
			b.push = function(b) {
				var c = a.Xx[b.id].time,
					d = b.key,
					e = b.Dn;
				"function" !== typeof b.yc && (b.yc = function() {});
				if (void 0 === c[d]) c[d] = e;
				else return b.yc(Error("Duplicate Invoke"));
				b.yc(null)
			};
			b.send = function(b) {
				var c = d.Qb + "://webapi.amap.com/count?",
					k = f.extend(e({
						K: a.Xx[b.id].K
					}), b.params || {}),
					l = f.a;
				b.params && b.params.rs && !b.params.type && (b = a.Xx[b.id].time, delete b.VV, k = f.extend(k, b));
				b = [];
				for (var m in k) l.isArray(k[m]) ? b.push([m, k[m].join("-")].join("=")) : b.push([m, k[m]].join("="));
				b.push("jl=" + (d.iy ? 1 : 0));
				if (l.Kl(window.performance, "performance") && l.Kl(window.performance.getEntriesByType, "function")) {
					var n = 0,
						p = ["webapi.amap.com", "100.69.169.127", "localhost"],
						q = ["/maps", "/css"];
					l.Ib(window.performance.getEntriesByType("resource"), function(a) {
						var b = void 0,
							c = void 0;
						a.name.match(/:\/\/([^:?#/]+)/) && (b = RegExp.$1);
						a.name.match(/[^\/](\/[^/?#:]+)/) && (c = RegExp.$1);
						b && c && l.ga(p, b) && l.ga(q, c) && (n += parseInt(a.responseEnd - a.startTime))
					});
					0 !== n && b.push("sd=" + n)
				}
				new f.Sa.bb(c + b.join("&"))
			};
			var e = function(a) {
					var b = f.l;
					a = f.j.TU(a.K);
					return {
						type: "q",
						resolution: a.width + "*" + a.height,
						k: d.key,
						u: d.jo,
						iw: b.He ? 1 : 0,
						cw: b.MT ? 1 : 0,
						gc: b.eK,
						m: b.Z ? 1 : 0,
						cv: b.hx ? 1 : 0,
						pf: b.wr,
						dpr: window.devicePixelRatio,
						screenwidth: screen.width,
						scale: b.yE || 0,
						detect: b.ja ? 1 : 0,
						v: d.lt
					}
				}
		}
	})();
	(function() {
		if (f.l.hr && !f.HE) {
			var a = f.a.SJ({
				keys: "keys",
				A: "Conf",
				extend: "extend",
				l: "Browser",
				Ur: "uncodeCoords"
			});
			f.HE = function() {
				var b = new f.ts(function() {
					return {
						B: function() {
							this.yf = {};
							this.zf = [];
							this.Am = {}
						},
						Ri: function(a, b) {
							this.zda(a, b)
						},
						zda: function(a, b) {
							function e(e, g) {
								var l = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : !1;
								if (q.yf[h.jp] || q.j4(h)) {
									var m = e.split("|");
									m[0] = g + m[0];
									var n = m,
										p = "";
									m[m.length - 1] && (p = m[m.length - 1], n = m.splice(0, m.length - 1));
									q.sr(q.extend({}, a, {
										rE: n,
										lc: k,
										Pj: l,
										ZV: !0
									}), b);
									return p
								}
							}
							var g = this,
								h = new XMLHttpRequest;
							a.Id.Nc ? this.Nc = a.Id.Nc : a.Id.Nc = this.Nc;
							var k = a.lc,
								l = a.tg,
								m = a.Bd,
								n = a.url;
							if (this.bo() && (this.Mz(), l)) {
								this.lk(m, b);
								return
							}
							var p = 0,
								q = this;
							h.pn = "";
							h.jp = [(new Date).getTime(), l ? 1 : 0].join("-");
							l ? this.zf.push(h) : this.yf[h.jp] = 1;
							h.onreadystatechange = function() {
								if (4 === h.readyState && 0 === h.status) h.Kp || (h.Kp = !0, g.lk(m, b), h.onreadystatechange = null, l ? g.Fw(h) : delete g.yf[h.jp]);
								else if (!h.Kp) {
									if (g.bo() && (g.Mz(), l)) return;
									if (3 === h.readyState) {
										var k = h.responseText.substring(p);
										h.pn = e(k, h.pn);
										p = h.responseText.length
									} else 4 === h.readyState && (k = h.responseText.substring(p), a.ai && (k += "|"), e(k, h.pn, !0), h.pn = "", l ? g.Fw(h) : delete g.yf[h.jp])
								}
							};
							h.onerror = function() {};
							this.lK || (this.lK = 1);
							h.open("GET", n, !0);
							h.send()
						},
						mu: function(a) {
							function b(d, p, r) {
								var s = [r, d, p].join("/");
								18 < k && !n && (s += "/" + k);
								if ((d = e.filter(function(a) {
									return a.key === s
								})[0]) && "loaded" !== d.status && -1 !== m.indexOf(t)) if ("limg" === t) p = h[1], d.Rd = p, "string" === typeof p.b && (p.b = x.Ov(p.b)), r = "", (r = "object" === typeof p.u ? p.u.url : p.u) && (p.u = {
									url: r,
									Cn: "limg-" + d.key + "-" + g
								});
								else {
									p = {
										li: d.ma,
										$k: s,
										Ca: h,
										dd: t,
										sI: a.uq,
										zK: "building" === t,
										Wg: "poilabel" === t || "roadlabel" === t || "building" === t && q
									};
									if ("poilabel" === t || "roadlabel" === t) p.Rd = d.Rd;
									t === m[m.length - 1] && (d.status = "loaded");
									l.push(p)
								}
							}
							var e = a.Bd,
								g = a.IK,
								h = a.tx,
								k = a.lc,
								l = a.Rc,
								m = a.ta,
								n = a.He,
								p = a.gK,
								q = a.od,
								r = h[0].split("-"),
								s = parseInt(r[1]),
								u = parseInt(r[2]),
								v = parseInt(r[0]),
								x = this,
								t = r[3],
								r = Math.pow(2, v);
							10 > v && (s <= p && b(s + r, u, v), s >= r - p && b(s - r, u, v));
							b(s, u, v)
						},
						Fw: function(a) {
							for (var b = this.zf.length - 1; 0 <= b; b--) this.zf[b] === a && this.zf.splice(b, 1)
						},
						j4: function(a) {
							for (var b = 0, e = this.zf.length; b < e; b++) if (this.zf[b] === a) return !0;
							return !1
						},
						bo: function() {
							return this.keys(this.yf).length ? !0 : !1
						},
						Mz: function() {
							for (var a = this.zf.length - 1; 0 <= a; a--) {
								var b = this.zf[a];
								b.Kp || b.abort()
							}
							this.zf.splice(0, this.zf.length)
						},
						lk: function(a, b) {
							b(null, {
								Bd: a,
								jW: !0,
								disabled: this.disabled
							}, {
								Sm: !0
							})
						}
					}
				}, {
					batchSend: !1
				});
				b.Mj(null, new Function("\n     return {\n      " + a.keys + ": " + f.a.keys.toString() + ",\n      " + a.Conf + ": " + JSON.stringify(f.A) + ",\n      " + a.extend + ": " + f.extend.toString() + ",\n      " + a.Browser + ": " + JSON.stringify(f.l) + ",\n      " + a.uncodeCoords + ": " + f.a.Ur.toString() + "\n     }"));
				return b
			}
		}
	})();
	f.j = {
		get: function(a) {
			return "string" === typeof a ? document.getElementById(a) : a
		},
		Hx: function(a) {
			if (!a) return [0, 0];
			var b = a.clientWidth,
				c = a.clientHeight;
			b && c || !a.childNodes[0] || (b = b || a.childNodes[0].clientWidth, c = c || a.childNodes[0].clientHeight);
			window.opera && (b = Math.max(b, a.childNodes[0].scrollWidth), c = Math.max(c, a.childNodes[0].scrollHeight));
			return [b, c]
		},
		cma: function(a, b) {
			var c = document.head || document.getElementsByTagName("head")[0];
			if (c) {
				var d = document.createElement("link");
				d.setAttribute("rel", "stylesheet");
				d.setAttribute("type", "text/css");
				d.setAttribute("href", a);
				b ? c.appendChild(d) : c.insertBefore(d, c.firstChild)
			} else document.write("<link rel='stylesheet' href='" + a + "'/>")
		},
		me: function(a, b) {
			var c = a.style[b];
			!c && a.currentStyle && (c = a.currentStyle[b]);
			c && "auto" !== c || !document.defaultView || (c = (c = document.defaultView.getComputedStyle(a, null)) ? c[b] : null);
			c && "auto" !== c || "height" !== b || (c = a.clientHeight + "px");
			c && "auto" !== c || "width" !== b || (c = a.clientWidth + "px");
			return "auto" === c ? null : c
		},
		KC: function(a) {
			if (a) return new f.Uc(a.clientWidth || document.body.clientWidth, a.clientHeight || (f.l.Lo ? "CSS1Compat" === document.compatMode ? document.documentElement.clientHeight : document.body.clientHeight : document.body.clientHeight), !0)
		},
		TU: function(a) {
			return new f.Uc(a.clientWidth, a.clientHeight)
		},
		cK: function(a) {
			var b = 0,
				c = 0,
				d = a,
				e = document.body,
				g = document.documentElement,
				h, k = f.l.cr;
			do {
				b += d.offsetTop || 0;
				c += d.offsetLeft || 0;
				b += parseInt(f.j.me(d, "borderTopWidth"), 10) || 0;
				c += parseInt(f.j.me(d, "borderLeftWidth"), 10) || 0;
				h = f.j.me(d, "position");
				if (d.offsetParent === e && "absolute" === h) break;
				if ("fixed" === h) {
					b += e.scrollTop || g.scrollTop || 0;
					c += e.scrollLeft || g.scrollLeft || 0;
					break
				}
				d = d.offsetParent
			} while (d);
			d = a;
			do {
				if (d === e) break;
				b -= d.scrollTop || 0;
				c -= d.scrollLeft || 0;
				f.j.Iaa() || !f.l.QZ && !k || (c += d.scrollWidth - d.clientWidth, k && "hidden" !== f.j.me(d, "overflow-y") && "hidden" !== f.j.me(d, "overflow") && (c += 17));
				d = d.parentNode
			} while (d);
			return new f.G(c, b)
		},
		Iaa: function() {
			f.j.D2 || (f.j.D2 = !0, f.j.C2 = "ltr" === f.j.me(document.body, "direction"));
			return f.j.C2
		},
		create: function(a, b, c) {
			a = document.createElement(a);
			c && (a.className = c);
			b && b.appendChild(a);
			return a
		},
		nU: function() {
			document.selection && document.selection.empty && document.selection.empty();
			this.X6 || (this.X6 = document.onselectstart, document.onselectstart = f.a.DU)
		},
		wU: function() {},
		Iha: function(a, b, c) {
			c ? this.Ga(a, b) : this.Ma(a, b)
		},
		El: function(a, b) {
			if (a && b) return 0 < a.className.length && RegExp("(^|\\s)" + b + "(\\s|$)").test(a.className)
		},
		Ga: function(a, b) {
			a && b && !f.j.El(a, b) && (a.className += (a.className ? " " : "") + b)
		},
		Iga: function(a, b) {
			a && (a.className = b || "")
		},
		Ma: function(a, b) {
			function c(a, c) {
				return c === b ? "" : a
			}
			a && b && (a.className = a.className.replace(/(\S+)\s*/g, c).replace(/(^\s+|\s+$)/, ""))
		},
		gV: function(a, b) {
			return 1 === b ? "" : "opacity" in a.style ? "opacity:" + b : 8 <= document.documentMode ? "-ms-filter:'progid:DXImageTransform.Microsoft.Alpha(opacity=" + Math.ceil(100 * b) + ")'" : "filter:alpha(opacity=" + Math.ceil(100 * b) + ")"
		},
		un: function(a, b) {
			if (a.style) if ("opacity" in a.style) a.style.opacity = b;
			else if ("filter" in a.style) {
				var c = Math.round(100 * b);
				a.style.filter = "";
				100 !== c && (a.style.filter = " progid:DXImageTransform.Microsoft.Alpha(opacity=" + c + ")")
			}
		},
		AM: function(a) {
			for (var b = document.documentElement.style, c = 0; c < a.length; c += 1) if (a[c] in b) return a[c];
			return !1
		},
		uV: function(a) {
			var b = f.l.RZ;
			return "translate" + (b ? "3d" : "") + "(" + a.x + "px," + a.y + "px" + ((b ? ",0" : "") + ")")
		},
		zla: function(a, b) {
			return f.j.uV(b.add(b.Sc(-1 * a))) + (" scale(" + a + ") ")
		},
		una: function(a, b, c) {
			a.mh = b;
			!c && f.l.NB ? (b = f.j.uV(b), c = a.style[f.j.rf].split("rotate"), 1 < c.length ? (c[0] = b, a.style[f.j.rf] = c.join("rotate")) : a.style[f.j.rf] = b, f.l.RW && (a.style.WebkitBackfaceVisibility = "hidden")) : (a.style.left = b.x + "px", a.style.top = b.y + "px")
		},
		Nd: function(a) {
			a.mh || (a.mh = a.style.left ? new f.G(parseInt(a.style.left), parseInt(a.style.top)) : new f.G(0, 0));
			return a.mh
		},
		sna: function(a, b) {
			a = a instanceof Array ? a : [a];
			for (var c = 0; c < a.length; c += 1) a[c].style.cssText = b
		},
		AY: function(a, b) {
			";" !== b[b.length - 1] && (b += ";");
			return b.toLowerCase() !== a.style.cssText.replace(/ /g, "").toLowerCase() ? (a.style.cssText = b, !0) : !1
		},
		Ha: function(a, b) {
			a = a instanceof Array ? a : [a];
			for (var c = 0; c < a.length; c += 1) for (var d in b) b.hasOwnProperty(d) && (a[c].style[d] = b[d]);
			return this
		},
		Gy: function(a) {
			for (; a.childNodes.length;) a.removeChild(a.childNodes[0])
		},
		remove: function(a) {
			a && a.parentNode && a.parentNode.removeChild(a)
		},
		rotate: function(a, b, c) {
			var d = f.j.rf;
			c = c || {
				x: a.clientWidth / 2,
				y: a.clientHeight / 2
			};
			d ? (a.style[d] = "" + (" rotate(" + b + "deg)"), a.style[f.j.rp[d] + "-origin"] = c.x + "px " + c.y + "px") : (d = Math.cos(b * Math.PI / 180), b = Math.sin(b * Math.PI / 180), a.style.filter = "progid:DXImageTransform.Microsoft.Matrix()", 0 < a.filters.length && (a = a.filters.item(0), a.Dx = -c.x * d + c.y * b + c.x, a.Dy = -c.x * b - c.y * d + c.y, a.M11 = a.M22 = d, a.M12 = -(a.M21 = b)))
		},
		rV: function(a, b, c) {
			var d = f.j.rf;
			c = c || {
				x: a.clientWidth / 2,
				y: a.clientHeight / 2
			};
			return d ? f.j.rp[d] + ":" + ("" + (" rotate(" + b + "deg)")) + ";" + (f.j.rp[d] + "-origin:" + c.x + "px " + c.y + "px") : ""
		},
		am: function(a, b, c) {
			a.width = b;
			a.height = c
		},
		getElementsByClassName: function(a, b, c) {
			b = b || "*";
			c = c || document;
			if (c.getElementsByClassName) return c.getElementsByClassName(a);
			b = c.getElementsByTagName(b);
			a = RegExp("(^|\\s)" + a + "(\\s|$)");
			c = [];
			for (var d = 0, e; d < b.length; d++) e = b[d], a.test(e.className) && c.push(e);
			return c
		},
		fillText: function(a, b) {
			if (a) return void 0 !== a.textContent ? a.textContent = b : void 0 !== a.innerText ? a.innerText = b : a.innerHTML = b, a
		}
	};
	(function() {
		var a = f.j.AM(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]),
			b;
		f.extend(f.j, {
			nU: function() {
				f.C.g(window, "selectstart", f.C.preventDefault);
				if (a) {
					var c = document.documentElement.style;
					"none" !== c[a] && (b = c[a], c[a] = "none")
				}
			},
			wU: function() {
				f.C.I(window, "selectstart", f.C.preventDefault);
				a && "none" !== b && (document.documentElement.style[a] = b, b = "none")
			},
			Aaa: function() {
				f.C.g(window, "dragstart", f.C.preventDefault)
			},
			cba: function() {
				f.C.I(window, "dragstart", f.C.preventDefault)
			}
		})
	})();
	f.j.rf = f.j.AM(["WebkitTransform", "OTransform", "MozTransform", "msTransform", "transform"]);
	f.j.rp = {
		transform: "transform",
		WebkitTransform: "-webkit-transform",
		OTransform: "-o-transform",
		MozTransform: "-moz-transform",
		msTransform: "-ms-transform"
	};
	f.j.Hz = f.j.AM(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]);
	f.j.sja = "webkitTransition" === f.j.Hz || "OTransition" === f.j.Hz ? f.j.Hz + "End" : "transitionend";
	f.C = {
		g: function(a, b, c, d) {
			function e(b) {
				b = b || window.event;
				b.target = b.target || b.srcElement;
				return c.call(d || a, b, k)
			}
			var g = f.a.Lb(a) + "_" + f.a.Lb(c) + "_" + f.a.Lb(d || a),
				h = b + g;
			if (a[h]) return this;
			var k = b;
			f.l.zJ && "mousewheel" === b && (b = "DOMMouseScroll");
			if (f.l.Lo && ("mouseover" === b || "mouseout" === b)) {
				var l = e;
				b = "mouseover" === b ? "mouseenter" : "mouseleave";
				e = function(a) {
					l(a)
				}
			}
			if (f.l.EX && 0 === b.indexOf("touch")) return a[h] = e, this.x9(a, b, e, g);
			f.l.Me && "dblclick" === b && this.v9 && this.v9(a, e, g);
			"addEventListener" in a ? a.addEventListener(b, e, !1) : "attachEvent" in a ? a.attachEvent("on" + b, e) : a["on" + b] = e;
			a[h] = e;
			return this
		},
		Rj: function(a, b, c, d) {
			var e = this;
			this.g(a, b, function h(k) {
				e.I(a, b, h, d);
				return c.call(d || a, k || window.event, b)
			}, d)
		},
		I: function(a, b, c, d) {
			c = f.a.Lb(a) + "_" + f.a.Lb(c) + "_" + f.a.Lb(d || a);
			d = b + c;
			var e = a[d];
			f.l.zJ && "mousewheel" === b && (b = "DOMMouseScroll");
			!f.l.Lo || "mouseover" !== b && "mouseout" !== b || (b = "mouseover" === b ? "mouseenter" : "mouseleave");
			f.l.EX && -1 < b.indexOf("touch") ? this.Rfa(a, b, c) : f.l.Me && "dblclick" === b && this.Nfa ? this.Nfa(a, c) : "removeEventListener" in a ? a.removeEventListener(b, e, !1) : "detachEvent" in a && -1 === b.indexOf("touch") ? e && a.detachEvent("on" + b, e) : a["on" + b] = null;
			a[d] = null;
			return this
		},
		wna: function(a, b) {
			var c = document.createEvent("MouseEvents");
			c.initMouseEvent(a, !0, !0, window, 1, b.screenX, b.screenY, b.clientX, b.clientY, !1, !1, !1, !1, 0, null);
			b.target.dispatchEvent(c)
		},
		stopPropagation: function(a) {
			a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0;
			return this
		},
		pha: function(a) {
			var b = f.C.stopPropagation;
			f.l.Me && (f.C.g(a, "touchstart", b, this), f.C.g(a, "touchmove", b, this), f.C.g(a, "touchend", b, this));
			f.l.Z || (f.C.g(a, "mousedown", b, this), f.C.g(a, "mouseup", b, this), f.C.g(a, "mousemove", b, this));
			f.l.FL && (f.C.g(a, "pointerdown", b, this), f.C.g(a, "pointerup", b, this), f.C.g(a, "pointermove", b, this));
			f.l.TW && (f.C.g(a, "MSPointerDown", b, this), f.C.g(a, "MSPointerUp", b, this), f.C.g(a, "MSPointerMove", b, this))
		},
		preventDefault: function(a) {
			a.preventDefault ? a.preventDefault() : a.returnValue = !1;
			return this
		},
		stop: function(a) {
			return f.C.preventDefault(a).stopPropagation(a)
		},
		Hga: function(a) {
			return a && a.getBoundingClientRect ? (a.fF = a.getBoundingClientRect(), a.$N = [a.clientLeft, a.clientTop], !0) : !1
		},
		kia: function(a) {
			a.fF && (a.fF = null, a.$N = null)
		},
		gba: function(a, b) {
			var c = b.fF || b.getBoundingClientRect(),
				d = b.$N || [b.clientLeft, b.clientTop];
			return new f.G(a.clientX - c.left - d[0], a.clientY - c.top - d[1])
		},
		Gj: function(a, b) {
			if (b && b.getBoundingClientRect) return this.gba(a, b);
			var c = document.body,
				d = document.documentElement,
				c = new f.G(f.l.Me ? a.pageX : a.clientX + (c.scrollLeft || d.scrollLeft), f.l.Me ? a.pageY : a.clientY + (c.scrollTop || d.scrollTop));
			return b ? c.Va(f.j.cK(b)) : c
		},
		hW: function(a) {
			return 1 === a.which || 0 === a.button || 1 === a.button
		}
	};
	f.extend(f.C, {
		bH: [],
		SQ: !1,
		x9: function(a, b, c, d) {
			switch (b) {
			case "touchstart":
				return this.A9(a, b, c, d);
			case "touchend":
				return this.y9(a, b, c, d);
			case "touchmove":
				return this.z9(a, b, c, d)
			}
		},
		Cl: function(a) {
			if (f.l.FL) return a;
			switch (a) {
			case "pointerdown":
				return "MSPointerDown";
			case "pointerup":
				return "MSPointerUp";
			case "pointercancel":
				return "MSPointerCancel";
			case "pointermove":
				return "MSPointerMove"
			}
		},
		A9: function(a, b, c, d) {
			function e(a) {
				for (var b = !1, d = 0; d < g.length; d += 1) if (g[d].pointerId === a.pointerId) {
					b = !0;
					break
				}
				b || g.push(a);
				a.touches = g.slice();
				a.changedTouches = [a];
				c(a)
			}
			var g = this.bH;
			a["_amap_touchstart" + d] = e;
			a.addEventListener(this.Cl("pointerdown"), e, !1);
			this.SQ || (a = function(a) {
				for (var b = 0; b < g.length; b += 1) if (g[b].pointerId === a.pointerId) {
					g.splice(b, 1);
					break
				}
			}, document.documentElement.addEventListener(this.Cl("pointerup"), a, !1), document.documentElement.addEventListener(this.Cl("pointercancel"), a, !1), this.SQ = !0);
			return this
		},
		z9: function(a, b, c, d) {
			function e(a) {
				if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE || 0 !== a.buttons) {
					for (var b = 0; b < g.length; b += 1) if (g[b].pointerId === a.pointerId) {
						g[b] = a;
						break
					}
					a.touches = g.slice();
					a.changedTouches = [a];
					c(a)
				}
			}
			var g = this.bH;
			a["_amap_touchmove" + d] = e;
			a.addEventListener(this.Cl("pointermove"), e, !1);
			return this
		},
		y9: function(a, b, c, d) {
			function e(a) {
				for (var b = 0; b < g.length; b += 1) if (g[b].pointerId === a.pointerId) {
					g.splice(b, 1);
					break
				}
				a.touches = g.slice();
				a.changedTouches = [a];
				c(a)
			}
			var g = this.bH;
			a["_amap_touchend" + d] = e;
			a.addEventListener(this.Cl("pointerup"), e, !1);
			a.addEventListener(this.Cl("pointercancel"), e, !1);
			return this
		},
		Rfa: function(a, b, c) {
			c = a["_amap_" + b + c];
			switch (b) {
			case "touchstart":
				a.removeEventListener(this.Cl("pointerdown"), c, !1);
				break;
			case "touchmove":
				a.removeEventListener(this.Cl("pointermove"), c, !1);
				break;
			case "touchend":
				a.removeEventListener(this.Cl("pointerup"), c, !1), a.removeEventListener(this.Cl("pointercancel"), c, !1)
			}
			return this
		}
	});
	(function() {
		function a(a) {
			var b = a.target || a.srcElement;
			b.iO && g(b.iO);
			b.iO = e(function() {
				var c = b.km;
				if (c && c.jm) for (var d = 0; d < c.jm.length; d += 1) c.jm[d].call(c, a)
			})
		}
		function b() {
			var b = this.contentDocument.defaultView;
			b.km = this.G0;
			b.addEventListener("resize", a);
			a.call(b, {
				target: b
			})
		}
		var c = document.attachEvent,
			d = navigator.userAgent.match(/(Trident|Edge)/),
			e = f.a.nc,
			g = f.a.Sg;
		f.extend(f.C, {
			D9: function(e, g) {
				if (!e.jm) if (e.jm = [], c) e.km = e, e.attachEvent("onresize", a);
				else {
					"static" === window.getComputedStyle(e).position && (e.style.position = "relative");
					var l = e.km = document.createElement("object");
					l.setAttribute("style", "display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;");
					l.G0 = e;
					l.onload = b;
					l.type = "text/html";
					d && e.appendChild(l);
					l.data = "about:blank";
					d || e.appendChild(l)
				}
				e.jm.push(g)
			},
			Vma: function(b, d) {
				b.jm.splice(b.jm.indexOf(d), 1);
				b.jm.length || (c ? b.detachEvent("onresize", a) : (b.km.contentDocument.defaultView.removeEventListener("resize", a), b.km = !b.removeChild(b.km)))
			},
			I$: function(a) {
				a.jm = null;
				if (a.km) {
					var b = a.km;
					b.parentNode === a && b.parentNode.removeChild(b);
					a.km = null
				}
			}
		})
	})();
	f.gb = {
		Zda: f.A.qb + "/maps",
		Eq: f.ba.Eq,
		SK: 0,
		uu: [],
		Aq: {},
		$f: function(a, b) {
			function c() {
				d += 1;
				d === e.length && b && b()
			}
			a.length || b();
			for (var d = 0, e = [], g = 0; g < a.length; g += 1) {
				var h = this.Eq[a[g]];
				if (h) for (var k = 0; k < h.length; k += 1) e.push(h[k]);
				e.push(a[g])
			}
			for (g = 0; g < e.length; g += 1) this.xJ(e[g], c)
		},
		ay: function(a) {
			for (var b = 0; b < a.length; b += 1) if (1 !== this.ux(a[b]).status) return !1;
			return !0
		},
		xJ: function(a, b) {
			var c = this.ux(a);
			if (1 === c.status) b && b();
			else {
				b && c.tt.push(b);
				try {
					if (f.l.Si && window.localStorage) {
						var d = window.localStorage["_AMap_" + a];
						d && (d = JSON.parse(d), d.version === f.A.Jh ? (window._jsload_(a, d.script, !0), d.css && window._cssload_(a, d.css, !0)) : window.localStorage.removeItem("_AMap_" + a))
					}
				} catch (e) {}
				if (0 === c.status) {
					this.Bfa(a);
					var g = this;
					g.SK || (g.SK = 1, window.setTimeout(function() {
						g.SK = 0;
						var a = g.Zda + "/modules?v=" + f.A.lt + "&key=" + f.A.key + "&m=" + g.uu.join(",") + "&vrs=" + f.A.Jh;
//TODO 指定本地的插件地址						
						a = offlineMap.baseUrl + 'js/plugins.js';
						
						f.gb.Mp(g.uu.join(","));
						g.uu = [];
						c.WD = g.Dda(a)
					}, 1));
					c.status = -1
				}
			}
		},
		Mp: function(a) {
			a = f.A.ud + "/v3/log/init?" + ["s=rsv3&product=JsModule&key=" + f.A.key, "m=" + a].join("&");
			new f.Sa.bb(a, {
				callback: "callback"
			})
		},
		load: function(a, b) {
			var c = this.Eq[a];
			if (c) {
				for (var d = [], e = 0; e < c.length; e += 1) d.push(c[e]);
				d.push(a);
				for (var g = 0, c = function() {
						g += 1;
						g === d.length && b && b()
					}, e = 0; e < d.length; e += 1) this.xJ(d[e], c)
			} else this.xJ(a, b)
		},
		Bfa: function(a) {
			for (var b = 0; b < this.uu.length; b += 1) if (this.uu[b] === a) return;
			this.uu.push(a)
		},
		Xk: function(a, b) {
			var c = this.ux(a);
			try {
				eval(b)
			} catch (d) {
				return
			}
			c.status = 1;
			for (var e = 0, g = c.tt.length; e < g; e += 1) c.tt[e]();
			c.tt = []
		},
		yka: function(a, b) {
			var c = this;
			c.timeout = setTimeout(function() {
				1 !== c.Aq[a].status ? (c.remove(a), c.load(a, b)) : clearTimeout(c.timeout)
			}, 5E3)
		},
		ux: function(a) {
			this.Aq[a] || (this.Aq[a] = {}, this.Aq[a].status = 0, this.Aq[a].tt = []);
			return this.Aq[a]
		},
		remove: function(a) {
			this.Aq[a] = null
		},
		Dda: function(a) {
			f.A.mode && (a += "&mode=" + f.A.mode);
			var b = document.createElement("script");
			b.charset = "utf-8";
			a && 0 === a.indexOf(f.A.qb) && (b.crossOrigin = "Anonymous");
			b.src = a;
			document.body.appendChild(b);
			return b
		}
	};
	window._jsload_ = function(a, b, c) {
		var d = f.gb.ux(a);
		d.WD && 0 <= f.a.indexOf(document.body.childNodes, d.WD) && document.body.removeChild(d.WD);
		d.WD = null;
		try {
			if (!c && window.localStorage && b && "" !== b && f.l.Si) {
				var e = window.localStorage["_AMap_" + a],
					e = e || "{}",
					e = JSON.parse(e);
				e.version !== f.A.Jh || e.script ? window.localStorage.setItem("_AMap_" + a, JSON.stringify({
					version: f.A.Jh,
					script: b
				})) : window.localStorage.setItem("_AMap_" + a, JSON.stringify({
					version: f.A.Jh,
					script: b,
					css: e.css
				}))
			}
		} catch (g) {}
		f.gb.Xk(a, b)
	};
	window._cssload_ = function(a, b, c) {
		try {
			!c && window.localStorage && b && "" !== b && f.l.Si && window.localStorage.setItem("_AMap_" + a, JSON.stringify({
				css: b,
				version: f.A.Jh
			}))
		} catch (d) {}
		var e = document.createElement("style");
		e.type = "text/css"; - 1 === f.A.qb.indexOf("webapi.amap.com") && (b = b.replace(/webapi.amap.com/gi, f.A.qb.split("://")[1]));
		"https" === f.A.Qb && (b = b.replace(/http:/gi, "https:"));
		e.styleSheet ? (a = function() {
			try {
				e.styleSheet.cssText = b
			} catch (a) {}
		}, e.styleSheet.disabled ? setTimeout(a, 10) : a()) : e.appendChild(document.createTextNode(b));
		a = document.head || document.getElementsByTagName("head")[0];
		2 > a.childNodes.length ? a.appendChild(e) : a.insertBefore(e, a.childNodes[1])
	};
	(function(a) {
		var b = f.l;
		if (!f.indexedDB && b.ef) {
			var c = a.indexedDB || a.webkitIndexedDB || a.msIndexedDB || a.mozIndexedDB,
				d = a.IDBKeyRange || a.Wna || a.kma || a.jma;
			if (c) {
				var e = f.a,
					g = null;
				a = "amap-jsapi" + (a.fja ? "-debug" : "");
				var h = f.extend({}, f.ka),
					k;
				try {
					k = c.open(a), k.onsuccess = function() {
						g = this.result;
						h.r("dbReady", {
							status: "success"
						})
					}, k.onerror = function() {
						h.r("dbReady", {
							status: "error"
						})
					}, k.onblocked = function() {
						h.r("dbReady", {
							status: "blocked"
						})
					}, k.onupgradeneeded = function(a) {
						a.currentTarget.result.createObjectStore("tile", {
							keyPath: "tileKey"
						})
					}
				} catch (l) {
					b.ef = !1
				} finally {
					if (!b.ef) return
				}
				var b = function(a) {
						return function() {
							try {
								return a.apply(this, arguments)
							} catch (b) {
								var c = arguments[arguments.length - 1];
								"function" === typeof c && setTimeout(function() {
									c({
										code: 4
									})
								}, 1)
							}
						}
					},
					m = b(function(a, b) {
						return null === g ? (setTimeout(function() {
							b && b({
								code: 3
							})
						}, 1), null) : g.transaction("tile", a).objectStore("tile")
					}),
					n = function(a, b) {
						for (var c = -1, d = 0, e = b.length; d < e; d++) if (b[d] > a) {
							c = d;
							break
						}
						return c
					};
				f.indexedDB = {
					Ww: b(function(a, b) {
						g ? "function" === typeof a && a() : h.g("dbReady", function(c) {
							"success" === c.status ? "function" === typeof a && a() : "function" === typeof b && b({
								code: 3,
								status: status
							})
						})
					}),
					count: b(function(a) {
						var b = this,
							c = arguments;
						this.Ww(function() {
							b.Mp.apply(b, c)
						}, a)
					}),
					Mp: b(function(a) {
						var b = m("readonly", a).count();
						b.onsuccess = function() {
							a(null, b.result)
						};
						b.onerror = function() {
							a({
								code: 7
							})
						}
					}),
					get: b(function(a, b) {
						var c = this,
							d = arguments;
						this.Ww(function() {
							c.W2.apply(c, d)
						}, b)
					}),
					W2: b(function(a, b) {
						var c = m("readonly", b);
						if (e.isArray(a)) {
							var g = [],
								h = a.slice(0);
							a.sort();
							c.openCursor(d.bound(a[0], a[a.length - 1])).onsuccess = function(c) {
								if (c = c.target.result) {
									var d = e.indexOf(h, c.value.tileKey); - 1 !== d && (g[d] = c.value);
									c["continue"](a[n(c.value.tileKey, a)])
								} else b && b(null, g.filter(function(a) {
									return void 0 !== a
								}))
							}
						} else c = c.get(a), c.onsuccess = function(a) {
							b && b(null, a.target.result)
						}, c.onerror = function() {
							b && b({
								code: 1
							})
						}
					}),
					add: b(function(a, b) {
						var c = this,
							d = arguments;
						this.Ww(function() {
							c.K0.apply(c, d)
						}, b)
					}),
					K0: b(function(a, b) {
						e.isArray(a) || (a = [a]);
						for (var c = a.length, d = 0, g = c; d < g; d++) {
							var h = m("readwrite", b).add(a[d]);
							h.onsuccess = function() {
								0 === --c && b(null)
							};
							h.onerror = function(a) {
								-1 === a.target.error.message.indexOf("Key already exists") ? (b({
									code: 5
								}), c = 0) : 0 === --c && b(null)
							}
						}
					}),
					remove: b(function(a, b) {
						var c = this,
							d = arguments;
						this.Ww(function() {
							c.e8.apply(c, d)
						}, b)
					}),
					e8: b(function(a, b) {
						var c = m("readwrite", b);
						e.isArray(a) || (a = [a]);
						a = a.sort();
						c.openCursor(d.bound(a[0], a[a.length - 1])).onsuccess = function(c) {
							if (c = c.target.result) {
								if (e.ga(c.value.tileKey, a)) c["delete"]();
								c["continue"](a[n(c.value.tileKey, a)])
							} else b && b(null)
						}
					}),
					clear: b(function(a) {
						var b = this,
							c = arguments;
						this.Ww(function() {
							b.Vz.apply(b, c)
						}, a)
					}),
					Vz: b(function(a) {
						var b = m("readwrite", a).clear();
						b.onsuccess = function() {
							a && a(null)
						};
						b.onerror = function() {
							a && a({
								code: 2
							})
						}
					})
				}
			} else b.ef = !1
		}
	})(window);
	(function() {
		function a(a) {
			u.data.keys = u.data.keys.filter(function(b) {
				return !q.ga(a, b)
			}).concat(a)
		}
		function b(a) {
			return [f.A.Jh, a.$k.replace(/\//g, ","), a.He ? "w" : "v", s(a.ja, a.od), l(a.url)].join("|")
		}
		function c() {
			u.data.keys.length >= u.RE && d()
		}
		function d() {
			var a = u.data.keys.length,
				b = Math.floor(a / 2);
			a > u.RE && (b = Math.floor(a - u.RE / 2));
			a = u.data.keys.slice(0, b);
			u.data.keys = u.data.keys.slice(b + 1);
			r.remove(a, function(a) {
				a && 3 === a.code && (p.ef = !1)
			})
		}
		function e() {
			var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : q.bp;
			h();
			x.setItem(u.key, u.data, !0);
			p.ef && r && r.clear(function(b) {
				b && 3 === b.code ? p.ef = !1 : a()
			})
		}
		function g() {
			h();
			var a = x.getItem(u.key, !0);
			a && (a.vE === u.data.vE && a.sT === u.data.sT ? u.data = a : e())
		}
		function h() {
			u.data = {
				vE: p.Vd,
				sT: f.A.Jh,
				keys: [],
				ye: {},
				Ji: {}
			};
			u.yn = {}
		}
		function k(a) {
			a && (u.data.vE = a, p.Vd = a)
		}
		function l(a) {
			var b = "limg";
			/flds=([^&]+)/.test(a) && (b = RegExp.$1);
			return b
		}
		function m(a) {
			if ("object" === typeof a && null !== a) {
				var b = [];
				if (q.isArray(a)) if (Object.keys(a).length == a.length) b = a.map(function(a) {
					return m(a)
				});
				else {
					b.push("__arrayObject");
					var c = {},
						d;
					for (d in a)(0 > parseInt(d) || isNaN(parseInt(d))) && a.hasOwnProperty(d) && (c[d] = m(a[d]));
					b.push(c);
					b.push(a.map(function(a) {
						return m(a)
					}))
				} else if (q.Kl(a, "Float32Array")) b.push("__Float32Array"), b.push(Array.prototype.slice.call(a));
				else if (q.Kl(a, "Uint16Array")) b.push("__Uint16Array"), b.push(Array.prototype.slice.call(a));
				else for (d in b = {}, a) a.hasOwnProperty(d) && (b[d] = m(a[d]));
				return b
			}
			return a
		}
		function n(a) {
			if ("object" === typeof a && null !== a) {
				var b = {};
				if (q.isArray(a)) if ("__Float32Array" === a[0]) b = new Float32Array(a[1]);
				else if ("__Uint16Array" === a[0]) b = new Uint16Array(a[1]);
				else if ("__arrayObject" === a[0]) {
					b = n(a[2]);
					a = a[1];
					for (var c in a) a.hasOwnProperty(c) && (b[c] = a[c])
				} else b = a.map(function(a) {
					return n(a)
				});
				else for (c in a) a.hasOwnProperty(c) && (b[c] = n(a[c]));
				return b
			}
			return a
		}
		var p = f.l,
			q = f.a;
		if (!f.im && (f.l.Uy || f.l.bm) && (p.ef || p.Si)) {
			var r = f.indexedDB,
				s = function(a, b) {
					return [a ? 1 : 0, p.Z ? 1 : 0, b ? 1 : 0].join()
				},
				u = {
					RE: 1E3,
					key: "_AMap_data.tileKeys"
				},
				v = [],
				x = {
					getItem: function(a, b) {
						var c = localStorage.getItem(a);
						if (c && b) {
							var d;
							try {
								d = JSON.parse(c)
							} catch (e) {
								d = null
							}
							c = d
						}
						return c
					},
					setItem: function(a, b, c) {
						var d = b;
						c && (d = JSON.stringify(b), 1.5 < d.length / 1024 / 1024 && Object.keys(b.Ji).length && (b.Ji = {}, d = JSON.stringify(b)));
						try {
							localStorage.setItem(a, d)
						} catch (g) {
							e()
						}
					}
				};
			f.im = {
				get: function(c, d) {
					function g(a) {
						var b = {
							pK: x,
							Wda: F,
							ye: u.data.ye
						};
						/\|limg/.test(H[0]) ? b.rda = h(a) : b.Rc = k(a);
						d && d(null, b)
					}
					function h(a) {
						var b = [];
						a.forEach(function(a) {
							a.data.forEach(function(a) {
								b.push(a)
							})
						});
						return b
					}
					function k(a) {
						var b = [];
						l(c.url).split(",").forEach(function(c) {
							a.forEach(function(a) {
								if (a = a.data[c]) {
									var d = a.li;
									a.li = new f.hk(d.z, d.x, d.y);
									a.li.S = d.S;
									for (var e in a.Ca) a.Ca.hasOwnProperty(e) && delete a.Ca[e].Ep;
									b.push(a)
								}
							})
						});
						return b
					}
					var s = c.Eha,
						x = [],
						H = [],
						F = [],
						B = [];
					if ("FS" !== c.type && !u.data.keys.length) return d({
						code: 1
					});
					s.forEach(function(a) {
						var d = b({
							$k: a.key,
							url: c.url,
							He: c.He,
							ja: c.w.ja,
							od: c.od
						});
						"FS" !== c.type || p.ef ? "FS" !== c.type || /\|w\|/.test(d) ? q.ga(u.data.keys, d) ? (x.push(a), H.push(d)) : F.push(a) : (v.push(d), u.data.Ji[d] ? (x.push(a), H.push(d), B.push({
							data: n(u.data.Ji[d]),
							tileKey: d
						})) : q.ga(u.data.keys, d) ? (x.push(a), H.push(d)) : F.push(a)) : /\|w\|/.test(d) ? F.push(a) : (v.push(d), u.data.Ji[d] ? (x.push(a), H.push(d), B.push({
							data: n(u.data.Ji[d]),
							tileKey: d
						})) : F.push(a))
					});
					if (H.length) {
						if (!p.ef) return g(B);
						var D = H.slice(0);
						if (B.length) {
							if (B.length === D.length) return g(B);
							B.forEach(function(a) {
								a = q.indexOf(D, a.tileKey);
								D.splice(a, 1)
							})
						}
						var E = setTimeout(function() {
							E = null;
							d && d({
								code: 1
							})
						}, c.timeout || 1500);
						r.get(D, function(b, h) {
							if (null !== E) if (clearTimeout(E), E = null, b) 3 === b.code ? p.ef = !1 : e(), d && d({
								code: 1
							});
							else {
								"FS" === c.type && h.length && h.forEach(function(a) {
									/\|w\|/.test(a.tileKey) || (u.data.Ji[a.tileKey] = m(a.data))
								});
								if (B.length) {
									var k = [];
									h = h.concat(B);
									h.forEach(function(a) {
										var b = q.indexOf(v, a.tileKey);
										k[b] = a
									});
									h = k = k.filter(function(a) {
										return void 0 !== a
									})
								}
								h.length === H.length ? (g(h), a(H)) : (e(), d && d({
									code: 1
								}))
							}
						})
					} else d && d({
						code: 1
					})
				},
				Bn: function(a) {
					a.Bd.forEach(function(c) {
						c = b({
							$k: c.key,
							url: a.url,
							He: a.He,
							ja: a.w.ja,
							od: a.od
						});
						u.yn[c] && delete u.yn[c]
					})
				},
				set: function(a, c) {
					a.Vd && a.Vd !== u.data.vE && (k(a.Vd), e(), c && c({
						code: 2
					}));
					a.Rd ? a.data.forEach(function(c) {
						var d = b({
							$k: c[0].split("-").slice(0, 3).join("/"),
							url: a.url,
							He: a.He,
							ja: a.w.ja,
							od: a.od
						});
						if (p.ef || q.ga(v, d)) {
							var e = u.yn[d] || [];
							e.push(q.Ab(c));
							u.yn[d] = e
						}
					}) : a.Rc.forEach(function(c) {
						var d = b({
							$k: c.$k,
							url: a.url,
							He: a.He,
							ja: a.w.ja,
							od: a.od
						});
						if (p.ef || q.ga(v, d)) {
							var e = u.yn[d] || {};
							e[c.dd] = q.Ab(c);
							u.yn[d] = e
						}
					});
					u.data.ye = {
						"x-vd-v": a["x-vd-v"],
						tv: a.tv,
						bgc: a.bgc
					}
				},
				flush: function() {
					var a = !0;
					return function() {
						var b = this;
						if (a) {
							if (Object.keys(u.data.Ji).length) for (var c in u.data.Ji) u.data.Ji.hasOwnProperty(c) && !q.ga(v, c) && delete u.data.Ji[c];
							p.ef ? r.count(function(a, c) {
								a || (c !== u.data.keys.length ? e(function() {
									b.lA()
								}) : b.lA(!0))
							}) : b.lA(!0);
							a = !1
						} else b.lA()
					}
				}(),
				lA: function() {
					var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : !1,
						b = {},
						d = [],
						g = Object.keys(u.yn),
						h = [];
					g.length ? (g.forEach(function(a) {
						var c = u.yn[a];
						a.split("|").pop().split(",").every(function(a) {
							return "limg" === a ? c && 3 === c.length : c && void 0 !== c[a]
						}) ? (q.ga(u.data.keys, a) || (h.push(a), d.push({
							tileKey: a,
							data: c
						})), q.ga(v, a) && void 0 === u.data.Ji[a] && (u.data.Ji[a] = m(c))) : b[a] = c
					}), d.length && (p.ef ? r.add(d, function(a) {
						a ? 3 !== a.code ? e() : p.ef = !1 : (u.data.keys = u.data.keys.concat(h), x.setItem(u.key, u.data, !0), c())
					}) : x.setItem(u.key, u.data, !0)), u.yn = b) : (a && x.setItem(u.key, u.data, !0), c())
				}
			};
			g()
		}
	})();
	f.V = f.ba.extend({
		B: function(a, b, c) {
			var d = parseFloat(b),
				e = parseFloat(a);
			if (isNaN(a) || isNaN(b)) throw "Invalid Object: LngLat(" + e + ", " + d + ")";
			!0 !== c && (d = Math.max(Math.min(d, 90), -90), e = (e + 180) % 360 + (-180 > e || 180 === e ? 180 : -180));
			this.P = d;
			this.O = e
		},
		PJ: function() {
			return f.a.Pc(this.O, 6)
		},
		MJ: function() {
			return f.a.Pc(this.P, 6)
		},
		add: function(a, b) {
			return new f.V(this.O + a.O, this.P + a.P, b)
		},
		Va: function(a, b) {
			return new f.V(this.O - a.O, this.P - a.P, b)
		},
		vc: function(a, b) {
			return new f.V(this.O / a, this.P / a, b)
		},
		Sc: function(a, b) {
			return new f.V(this.O * a, this.P * a, b)
		},
		Md: function(a) {
			return f.nv.distance(this, a)
		},
		offset: function(a, b) {
			if (isNaN(a) || isNaN(b)) return !1;
			var c = 2 * Math.asin(Math.sin(Math.round(a) / 12756274) / Math.cos(this.P * Math.PI / 180)),
				c = this.O + 180 * c / Math.PI,
				d = 2 * Math.asin(Math.round(b) / 12756274);
			return new f.V(c, this.P + 180 * d / Math.PI)
		},
		rb: function(a) {
			a = f.a.za(a);
			return a instanceof f.V ? 1E-9 >= Math.max(Math.abs(this.P - a.P), Math.abs(this.O - a.O)) : !1
		},
		toString: function() {
			return f.a.Pc(this.O, 6) + "," + f.a.Pc(this.P, 6)
		},
		Zj: function() {
			return [this.O, this.P]
		},
		Ab: function() {
			var a = this.controlPoints,
				b = new f.V(this.O, this.P);
			a && (b.controlPoints = [].concat(a));
			return b
		}
	});
	f.V.Vba = function(a, b, c) {
		c = c + 1 || Math.round(Math.abs(a.O - b.O));
		if (!c || 0.001 > Math.abs(a.O - b.O)) return [];
		var d = [],
			e = f.gk.Cq,
			g = f.gk.Ffa,
			h = Math.asin,
			k = Math.sqrt,
			l = Math.sin,
			m = Math.pow,
			n = Math.cos,
			p = Math.atan2,
			q = a.P * e;
		a = a.O * e;
		var r = b.P * e;
		b = b.O * e;
		for (var h = 2 * h(k(m(l((q - r) / 2), 2) + n(q) * n(r) * m(l((a - b) / 2), 2))), s, u, v, x, e = 1; e < c; e += 1) s = 1 / c * e, u = l((1 - s) * h) / l(h), v = l(s * h) / l(h), s = u * n(q) * n(a) + v * n(r) * n(b), x = u * n(q) * l(a) + v * n(r) * l(b), u = u * l(q) + v * l(r), u = p(u, k(m(s, 2) + m(x, 2))), s = p(x, s), d.push(new f.V(s * g, u * g));
		return d
	};
	f.V.Fk({
		PJ: "getLng",
		MJ: "getLat",
		add: "add",
		Va: "subtract",
		vc: "divideBy",
		Sc: "multiplyBy",
		Md: "distance",
		offset: "offset",
		rb: "equals",
		toString: "toString"
	});
	f.Wd = f.ba.extend({
		B: function() {
			var a = null,
				b = null;
			if (2 === arguments.length) a = f.a.za(arguments[0]), b = f.a.za(arguments[1]);
			else if (4 === arguments.length) a = new f.V(arguments[0], arguments[1]), b = new f.V(arguments[2], arguments[3]);
			else throw "Invalid Object: Bounds(" + arguments.join(",") + ")";
			this.Rb = a;
			this.Kb = b
		},
		Mx: function() {
			return this.Rb
		},
		Kx: function() {
			return this.Kb
		},
		Hj: function() {
			return new f.V(this.Rb.O, this.Kb.P, !0)
		},
		Ho: function() {
			return new f.V(this.Kb.O, this.Rb.P, !0)
		},
		contains: function(a) {
			var b = this.Rb,
				c = this.Kb,
				d;
			a instanceof f.Wd ? (d = a.Rb, a = a.Kb) : d = a = f.a.za(a);
			var e = d.O,
				g = b.O,
				h = a.O,
				k = c.O;
			g > k && (k += 360, 0 > e && (e += 360), 0 > h && (h += 360));
			return d.P >= b.P && a.P <= c.P && e >= g && h <= k
		},
		mf: function(a) {
			var b = this.Rb,
				c = this.Kb,
				d = a.Rb;
			a = a.Kb;
			var e = a.O >= b.O && d.O <= c.O;
			return a.P >= b.P && d.P <= c.P && e
		},
		Zh: function() {
			return new f.V(this.Rb.O > this.Kb.O ? (this.Rb.O + this.Kb.O + 360) / 2 % 360 : (this.Rb.O + this.Kb.O) / 2, (this.Rb.P + this.Kb.P) / 2)
		},
		extend: function(a) {
			this.Rb.O = Math.min(this.Rb.O, a.O);
			this.Rb.P = Math.min(this.Rb.P, a.P);
			this.Kb.O = Math.max(this.Kb.O, a.O);
			this.Kb.P = Math.max(this.Kb.P, a.P);
			return this
		},
		jia: function(a) {
			return this.extend(a.Rb).extend(a.Kb)
		},
		toString: function() {
			return this.Rb.toString() + ";" + this.Kb.toString()
		},
		Ab: function() {
			return new f.Wd(this.Rb.Ab(), this.Kb.Ab())
		},
		rb: function(a) {
			return a instanceof f.Wd ? this.Rb.rb(a.Rb) && this.Kb.rb(a.Kb) : !1
		},
		Bh: function() {
			return Math.abs(this.Kb.O - this.Rb.O)
		},
		zh: function() {
			return Math.abs(this.Rb.P - this.Kb.P)
		}
	});
	f.Wd.Fk({
		Mx: "getSouthWest",
		Kx: "getNorthEast",
		Hj: "getNorthWest",
		Ho: "getSouthEast",
		contains: "contains",
		mf: "intersects",
		Zh: "getCenter"
	});
	f.G = f.ba.extend({
		B: function(a, b, c) {
			if (isNaN(a) || isNaN(b)) throw "Invalid Object: Pixel(" + a + ", " + b + ")";
			this.x = c ? Math.round(a) : Number(a);
			this.y = c ? Math.round(b) : Number(b)
		},
		Ae: function() {
			return this.x
		},
		Hd: function() {
			return this.y
		},
		add: function(a, b) {
			return new f.G(this.x + a.x, this.y + a.y, b)
		},
		Va: function(a, b) {
			return new f.G(this.x - a.x, this.y - a.y, b)
		},
		vc: function(a, b) {
			return new f.G(this.x / a, this.y / a, b)
		},
		Sc: function(a, b) {
			return new f.G(this.x * a, this.y * a, b)
		},
		Md: function(a) {
			var b = a.x - this.x;
			a = a.y - this.y;
			return Math.sqrt(b * b + a * a)
		},
		floor: function() {
			return new f.G(Math.floor(this.x), Math.floor(this.y))
		},
		round: function() {
			return new f.G(this.x, this.y, !0)
		},
		rb: function(a) {
			return a instanceof f.G && this.x === a.x && this.y === a.y
		},
		Ab: function(a) {
			return new f.G(this.x, this.y, a)
		},
		toString: function() {
			return this.x + "," + this.y
		},
		Zj: function() {
			return [this.x, this.y]
		},
		length: function() {
			return Math.sqrt(this.x * this.x + this.y * this.y)
		},
		direction: function() {
			var a = this.x,
				b = this.y;
			if (0 === a && 0 === b) return null;
			if (0 === a) return 0 < b ? Math.PI / 2 : -Math.PI / 2;
			var c = 180 * Math.atan(b / a) / Math.PI;
			return 0 > a && 0 < b ? c + 180 : 0 > a && 0 > b ? c + 180 : 0 < a && 0 > b ? c + 360 : c
		},
		zq: function(a) {
			var b = this.length(),
				c = a.length();
			return b && c ? 180 * Math.acos((this.x * a.x + this.y * a.y) / c / b) / Math.PI : null
		},
		toFixed: function(a) {
			this.x = f.a.Pc(this.x, a);
			this.y = f.a.Pc(this.y, a);
			return this
		}
	});
	f.G.Fk({
		Ae: "getX",
		Hd: "getY",
		add: "add",
		Va: "subtract",
		vc: "divideBy",
		Sc: "multiplyBy",
		Md: "distance",
		rb: "equals",
		toString: "toString"
	});
	f.Uc = f.ba.extend({
		B: function(a, b, c) {
			if (isNaN(a) || isNaN(b)) throw "Invalid Object: Size(" + a + ", " + b + ")";
			this.width = c ? Math.round(a) : Number(a);
			this.height = c ? Math.round(b) : Number(b)
		},
		Bh: function() {
			return this.width
		},
		zh: function() {
			return this.height
		},
		Tu: function() {
			return new f.G(this.Bh(), this.zh())
		},
		contains: function(a) {
			return Math.abs(a.x) <= Math.abs(this.width) && Math.abs(a.y) <= Math.abs(this.height)
		},
		rb: function(a) {
			return a instanceof f.Uc && this.width === a.width && this.height === a.height
		},
		toString: function() {
			return this.Bh() + "," + this.zh()
		}
	});
	f.Uc.Fk({
		Bh: "getWidth",
		zh: "getHeight",
		toString: "toString"
	});
	f.pN = f.ba.extend({
		B: function(a) {
			this.path = a;
			if (a[0] instanceof f.G) {
				this.path = [];
				for (var b = 0; b < a.length; b += 1) this.path.push([a[b].x, a[b].y])
			} else if (a[0] instanceof f.V) for (this.path = [], b = 0; b < a.length; b += 1) this.path.push([a[b].O, a[b].P]);
			this.bounds = this.td = a
		},
		contains: function(a, b) {
			a instanceof f.G ? a = [a.x, a.y] : a instanceof f.V && (a = [a.O, a.P]);
			return f.Mc.md(a, this.path, b)
		},
		toBounds: function() {
			for (var a = new f.Wd(180, 90, -180, -90), b = this.td.length - 1; 0 <= b; b -= 1) a.extend(this.td[b]);
			return a
		}
	});
	f.Qe = f.ba.extend({
		B: function() {
			if (2 === arguments.length) this.Nb = arguments[0], this.nd = arguments[1];
			else if (1 === arguments.length && arguments[0] instanceof Array || 4 === arguments.length) {
				var a = arguments[0] instanceof Array ? arguments[0] : arguments;
				this.Nb = new f.G(a[0], a[1]);
				this.nd = new f.G(a[2], a[3])
			} else throw "Invalid Object: PixelBounds(" + arguments.join(",") + ")";
		},
		Zh: function(a) {
			return new f.G((this.Nb.x + this.nd.x) / 2, (this.Nb.y + this.nd.y) / 2, a)
		},
		contains: function(a) {
			var b;
			a instanceof f.Qe ? (b = a.Nb, a = a.nd) : b = a;
			return b.x > this.Nb.x && a.x < this.nd.x && b.y > this.Nb.y && a.y < this.nd.y
		},
		Bh: function() {
			return this.nd.x - this.Nb.x
		},
		zh: function() {
			return this.nd.y - this.Nb.y
		},
		mf: function(a, b) {
			b || 0 === b || (b = 20);
			var c = this.Nb,
				d = this.nd,
				e = a.Nb,
				g = a.nd,
				h = g.y >= c.y - b && e.y <= d.y + b;
			return g.x >= c.x - b && e.x <= d.x + b && h
		},
		toString: function() {
			return this.Nb + ";" + this.nd
		},
		Ab: function() {
			return new f.Qe(this.Nb.Ab(), this.nd.Ab())
		}
	});
	f.H = {};
	f.H.vI = function(a) {
		for (var b = [Infinity, Infinity, -Infinity, -Infinity], c = 0, d = a.length; c < d; c += 1) f.H.wC(b, a[c]);
		return b
	};
	f.H.BT = function(a, b, c) {
		var d = Math.min.apply(null, a);
		a = Math.max.apply(null, a);
		var e = Math.min.apply(null, b);
		b = Math.max.apply(null, b);
		return f.H.jaa(d, a, e, b, c)
	};
	f.H.buffer = function(a, b) {
		a[0] -= b;
		a[1] -= b;
		a[2] += b;
		a[3] += b
	};
	f.H.Ab = function(a) {
		return a.slice()
	};
	f.H.md = function(a, b) {
		return a[0] <= b[0] && b[0] <= a[2] && a[1] <= b[1] && b[1] <= a[3]
	};
	f.H.aU = function(a, b) {
		return a[0] <= b[0] && b[2] <= a[2] && a[1] <= b[1] && b[3] <= a[3]
	};
	f.H.Jka = function() {
		return [Infinity, Infinity, -Infinity, -Infinity]
	};
	f.H.jaa = function(a, b, c, d, e) {
		return "undefined" !== typeof e ? (e[0] = a, e[2] = b, e[1] = c, e[3] = d, e) : [a, c, b, d]
	};
	f.H.empty = function(a) {
		a[0] = a[1] = Infinity;
		a[2] = a[3] = -Infinity;
		return a
	};
	f.H.rb = function(a, b) {
		return a[0] === b[0] && a[2] === b[2] && a[1] === b[1] && a[3] === b[3]
	};
	f.H.extend = function(a, b) {
		b[0] < a[0] && (a[0] = b[0]);
		b[2] > a[2] && (a[2] = b[2]);
		b[1] < a[1] && (a[1] = b[1]);
		b[3] > a[3] && (a[3] = b[3])
	};
	f.H.wC = function(a, b) {
		b[0] < a[0] && (a[0] = b[0]);
		b[0] > a[2] && (a[2] = b[0]);
		b[1] < a[1] && (a[1] = b[1]);
		b[1] > a[3] && (a[3] = b[1])
	};
	f.H.fla = function(a) {
		return [a[0], a[1]]
	};
	f.H.gla = function(a) {
		return [a[2], a[1]]
	};
	f.H.Zh = function(a) {
		return [(a[0] + a[2]) / 2, (a[1] + a[3]) / 2]
	};
	f.H.ola = function(a, b, c, d, e) {
		var g = b * d[0] / 2;
		d = b * d[1] / 2;
		b = Math.cos(c);
		c = Math.sin(c);
		g = [-g, -g, g, g];
		d = [-d, d, -d, d];
		var h, k, l;
		for (h = 0; 4 > h; h += 1) k = g[h], l = d[h], g[h] = a[0] + k * b - l * c, d[h] = a[1] + k * c + l * b;
		return f.H.BT(g, d, e)
	};
	f.H.zh = function(a) {
		return a[3] - a[1]
	};
	f.H.Ala = function(a) {
		return [a[2] - a[0], a[3] - a[1]]
	};
	f.H.Ela = function(a) {
		return [a[0], a[3]]
	};
	f.H.Fla = function(a) {
		return [a[2], a[3]]
	};
	f.H.Bh = function(a) {
		return a[2] - a[0]
	};
	f.H.mf = function(a, b) {
		return a[0] <= b[2] && a[2] >= b[0] && a[1] <= b[3] && a[3] >= b[1]
	};
	f.H.Oo = function(a) {
		return a[2] < a[0] || a[3] < a[1]
	};
	f.H.normalize = function(a, b) {
		return [(b[0] - a[0]) / (a[2] - a[0]), (b[1] - a[1]) / (a[3] - a[1])]
	};
	f.H.ona = function(a, b) {
		var c = (a[2] - a[0]) / 2 * (b - 1),
			d = (a[3] - a[1]) / 2 * (b - 1);
		a[0] -= c;
		a[2] += c;
		a[1] -= d;
		a[3] += d
	};
	f.H.touches = function(a, b) {
		return f.H.mf(a, b) && (a[0] === b[2] || a[2] === b[0] || a[1] === b[3] || a[3] === b[1])
	};
	f.H.transform = function(a, b, c) {
		a = [a[0], a[1], a[0], a[3], a[2], a[1], a[2], a[3]];
		b(a, a, 2);
		return f.H.BT([a[0], a[2], a[4], a[6]], [a[1], a[3], a[5], a[7]], c)
	};
	f.Wd.ob({
		B: function() {
			var a = f.Wd.prototype.B;
			return function() {
				a.apply(this, arguments);
				this.southwest = this.Rb;
				this.northeast = this.Kb
			}
		}(),
		extend: function() {
			var a = f.Wd.prototype.extend;
			return function() {
				a.apply(this, arguments);
				this.Rb.lng = this.Rb.O;
				this.Rb.lat = this.Rb.P;
				this.Kb.lng = this.Kb.O;
				this.Kb.lat = this.Kb.P;
				return this
			}
		}()
	});
	f.V.ob({
		B: function() {
			var a = f.V.prototype.B;
			return function() {
				a.apply(this, arguments);
				this.lng = parseFloat(this.O.toFixed(6));
				this.lat = parseFloat(this.P.toFixed(6))
			}
		}()
	});
	f.Iz = f.ba.extend({
		B: function(a, b, c, d) {
			this.kO = a;
			this.xO = b;
			this.JO = c;
			this.bP = d
		},
		transform: function(a, b) {
			return this.US(a.Ab(), b)
		},
		US: function(a, b) {
			b = b || 1;
			a.x = b * (this.kO * a.x + this.xO);
			a.y = b * (this.JO * a.y + this.bP);
			return a
		},
		lia: function(a, b) {
			b = b || 1;
			return new f.G((a.x / b - this.xO) / this.kO, (a.y / b - this.bP) / this.JO)
		}
	});
	f.hm = f.ba.extend({
		B: function(a) {
			this.QE = a.MAX_LATITUDE || 85.0511287798;
			a.project && a.unproject && (this.Xb = a.project, this.Ag = a.unproject)
		}
	});
	f.hm.KN = {
		Xb: function(a) {
			return new f.G(a.O, a.P)
		},
		Ag: function(a, b) {
			return new f.V(a.x, a.y, b)
		}
	};
	f.hm.b0 = new f.hm({
		MAX_LATITUDE: 85.0511287798,
		project: function(a) {
			var b = Math.PI / 180,
				c = this.QE,
				c = Math.max(Math.min(c, a.P), -c);
			a = a.O * b;
			b = Math.log(Math.tan(Math.PI / 4 + c * b / 2));
			return new f.G(a, b, !1)
		},
		unproject: function(a, b) {
			var c = 180 / Math.PI;
			return new f.V(a.x * c, (2 * Math.atan(Math.exp(a.y)) - Math.PI / 2) * c, b)
		}
	});
	f.hm.LN = {
		QE: 85.0840591556,
		WE: 6356752.3142,
		VE: 6378137,
		Xb: function(a) {
			var b = Math.PI / 180,
				c = this.QE,
				d = Math.max(Math.min(c, a.P), -c),
				e = this.VE,
				c = this.WE;
			a = a.O * b * e;
			b *= d;
			e = c / e;
			e = Math.sqrt(1 - e * e);
			d = e * Math.sin(b);
			d = Math.pow((1 - d) / (1 + d), 0.5 * e);
			b = Math.tan(0.5 * (0.5 * Math.PI - b)) / d;
			b = -c * Math.log(b);
			return new f.G(a, b)
		},
		Ag: function(a, b) {
			for (var c = 180 / Math.PI, d = this.VE, e = this.WE, g = a.x * c / d, d = e / d, d = Math.sqrt(1 - d * d), e = Math.exp(-a.y / e), h = Math.PI / 2 - 2 * Math.atan(e), k = 15, l = 0.1; 1E-7 < Math.abs(l) && (k -= 1, 0 < k);) l = d * Math.sin(h), l = Math.PI / 2 - 2 * Math.atan(e * Math.pow((1 - l) / (1 + l), 0.5 * d)) - h, h += l;
			return new f.V(g, h * c, b)
		}
	};
	f.Bg = {};
	f.Bg.qz = {
		hy: function(a, b) {
			var c = this.bf.Xb(a),
				d = this.scale(b);
			return this.$y.US(c, d)
		},
		Ay: function(a, b, c) {
			b = this.scale(b);
			a = this.$y.lia(a, b);
			return this.bf.Ag(a, c)
		},
		Xb: function(a) {
			return this.bf.Xb(a)
		},
		scale: function(a) {
			return 256 << a
		},
		ZJ: function(a) {
			return 12756274 * Math.PI / (256 * Math.pow(2, a))
		}
	};
	f.Bg.JE = f.extend({}, f.Bg.qz, {
		code: "EPSG:3857",
		bf: f.hm.b0,
		$y: new f.Iz(0.5 / Math.PI, 0.5, -0.5 / Math.PI, 0.5),
		Xb: function(a) {
			return this.bf.Xb(a).Sc(6378137)
		}
	});
	f.Bg.vN = f.extend({}, f.Bg.qz, {
		code: "EPSG:3395",
		bf: f.hm.LN,
		$y: function() {
			var a = f.hm.LN;
			return new f.Iz(0.5 / (Math.PI * a.VE), 0.5, -0.5 / (Math.PI * a.WE), 0.5)
		}()
	});
	f.Bg.wN = f.extend({}, f.Bg.qz, {
		code: "EPSG:4326",
		bf: f.hm.KN,
		$y: new f.Iz(1 / 360, 0.5, -1 / 360, 0.25)
	});
	f.Bg.qja = f.extend({}, f.Bg.qz, {
		bf: f.hm.KN,
		$y: new f.Iz(1, 0, 1, 0)
	});
	f.gD = {
		Xb: function(a, b) {
			a = f.a.za(a);
			return this.Lm.hy(a, b || this.get("zoom"))
		},
		Ag: function(a, b, c) {
			return this.Lm.Ay(a, b || this.get("zoom"), c)
		},
		$la: function(a, b) {
			return this.Xb(a, b)
		},
		dla: function(a, b) {
			return this.Ag(a, b)
		},
		so: function(a, b, c) {
			var d = this.get("size").Tu().vc(2);
			if (a.rb(d) && !c) return this.get("center");
			a = this.jf(a, b, c);
			return this.de(a)
		},
		Vo: function(a, b) {
			var c = 0;
			b && (c = "string" === typeof b ? Math.round(parseFloat(b) / 0.14929107086948487) : b);
			var d = this.Jb(a);
			return this.Je(d, null, c)
		},
		cU: function(a) {
			return this.de(a.vc(this.get("resolution", 20)))
		},
		Jb: function(a) {
			a = f.a.za(a);
			return this.Xb(a, 20)
		},
		de: function(a) {
			return a ? this.Ag(a, 20) : a
		},
		NK: function(a) {
			a = f.a.za(a);
			return this.Xb(a, 20).Va(f.a.Wc)
		},
		wba: function(a) {
			return this.Ag(a.add(f.a.Wc), 20)
		},
		ela: function(a) {
			return this.Je(a.add(f.a.Wc))
		},
		xda: function(a, b, c) {
			a = f.a.za(a);
			return this.Jb(a).Sc(c || this.get("resolution", 20))
		},
		jla: function(a) {
			return a ? this.Xb(this.get("center"), a) : this.get("centerPixel")
		},
		Aja: function(a) {
			return (new f.G(a.x + 2.0037508342789244E7, 2.0037508342789244E7 - a.y)).vc(0.14929107086948487)
		},
		mX: function(a) {
			return new f.G(0.14929107086948487 * a.x - 2.0037508342789244E7, 2.0037508342789244E7 - 0.14929107086948487 * a.y)
		},
		zja: function(a) {
			return this.cU(new f.G(a.x + 2.0037508342789244E7, 2.0037508342789244E7 - a.y), 20)
		},
		ama: function(a) {
			a = this.xda(f.a.za(a), 20);
			return new f.G(a.x - 2.0037508342789244E7, 2.0037508342789244E7 - a.y)
		}
	};
	w.eF = f.ba.extend({
		ga: [f.ka, f.se],
		F: {
			center: new f.V(116.397128, 39.916527),
			zoom: 13,
			rotation: 0,
			crs: "EPSG3857"
		},
		B: function(a) {
			this.CLASS_NAME = "AMap.View2D";
			f.e.cb("AMap.View2D", a);
			a = a || {};
			a.center && (a.center = f.a.za(a.center));
			this.F = a
		}
	});
	w.Pb = f.ba.extend({
		ga: [f.ka, f.se, f.gD],
		F: {
			features: "all",
			showLabel: !0,
			dragEnable: !0,
			showIndoorMap: f.l.Z ? !1 : !0,
			lang: "zh_cn",
			keyboardEnable: !0,
			doubleClickZoom: !0,
			gridMapForeign: !1,
			scrollWheel: !0,
			zoomEnable: !0,
			jogEnable: !0,
			continuousZoomEnable: !0,
			resizeEnable: !1,
			animateEnable: !0,
			rotateEnable: !1,
			labelzIndex: 99,
			showFog: !0,
			touchZoom: !0,
			zooms: [3, f.l.Z ? f.l.cd ? 19 : 20 : 18],
			defaultCursor: "",
			limitBounds: null,
			logoUrl: f.A.qb + "/theme/v1.3/autonavi.png",
			logoUrlRetina: f.A.qb + "/theme/v1.3/mapinfo_05.png",
			copyright: "\x3c!--v1.4.6--\x3e &copy " + (new Date).getFullYear() + " AutoNavi ",
			isHotspot: !f.l.Z,
			baseRender: f.l.X9,
			overlayRender: f.l.Qea,
			mapStyle: "normal",
			showBuildingBlock: f.l.He,
			crs: "EPSG3857",
			rotation: 0,
			pitch: 0,
			yaw: 0,
			scale: 1,
			center: new f.V(116.397128, 39.916527),
			zoom: 13,
			detectRetina: !0,
			pitchEnable: !1,
			buildingAnimation: !f.l.Z,
			maxPitch: 83,
			turboMode: !0,
			preloadMode: !0,
			workerMode: !0
		},
		poiOnAMAP: function(a) {
			f.e.add(this.CLASS_NAME, "poiOnAMAP");
			var b = {},
				c = f.a.za(a.location);
			b.id = a.id;
			c && (b.y = c.P, b.x = c.O);
			b.name = a.name;
			b.address = a.address;
			f.Cg.qp(f.Cg.mV(b))
		},
		detailOnAMAP: function(a) {
			f.e.add(this.CLASS_NAME, "detailOnAMAP");
			var b = {},
				c = f.a.za(a.location);
			b.id = a.id;
			c && (b.y = c.P, b.x = c.O);
			b.name = a.name;
			f.Cg.qp(f.Cg.kV(b))
		},
		setLabelzIndex: function(a) {
			return this.set("labelzIndex", a)
		},
		getLabelzIndex: function() {
			return this.get("labelzIndex", null, !0)
		},
		setMapStyle: function(a) {
			f.e.add(this.CLASS_NAME, "setMapStyle", a); - 1 === a.indexOf("amap://styles/") ? (this.set("styleUrl", "", !0), this.set("mapStyle", a)) : this.set("styleUrl", a);
			this.TK()
		},
		getMapStyle: function() {
			f.e.add(this.CLASS_NAME, "getMapStyle");
			return this.get("styleUrl") || this.get("mapStyle", null, !0)
		},
		getFeatures: function() {
			f.e.add(this.CLASS_NAME, "getFeatures");
			return this.get("features", null, !0)
		},
		setFeatures: function(a) {
			f.e.add(this.CLASS_NAME, "setFeatures");
			this.set("features", a)
		},
		setLang: function(a) {
			f.e.add(this.CLASS_NAME, "setLang", a);
			"en" !== a && "zh_cn" !== a && "zh_en" !== a || a === this.getLang() || (this.set("lang", a), this.Gl && this.Gl.kY(this))
		},
		getLang: function() {
			f.e.add(this.CLASS_NAME, "getLang");
			return this.get("lang", null, !0)
		},
		setCity: function(a, b) {
			f.e.add(this.CLASS_NAME, "setCity");
			var c = this;
			(new f.Sa.bb(f.A.ud + "/v3/config/district?subdistrict=0&extensions=all&key=" + f.A.key + "&s=rsv3&output=json&keywords=" + a, {
				callback: "callback"
			})).g("complete", function(d) {
				var e = d.districts;
				if (e && e.length) {
					d = e[0];
					/[^\w]+/.test(a) && (e = f.a.find(e, function(b) {
						return b.name === a
					})) && e !== d && (d = e);
					try {
						var g = d.center.split(","),
							h;
						switch (d.level) {
						case "city":
							h = 10;
							break;
						case "province":
							h = 7;
							break;
						case "district":
							h = 12;
							break;
						case "country":
							h = 4;
							break;
						default:
							h = 12
						} - 1 !== d.name.indexOf("\u5e02") && (h = 10);
						c.setZoomAndCenter(h, new f.V(g[0], g[1]), !0);
						b && b.call(c, g, h)
					} catch (k) {}
				}
			}, this)
		},
		getScreenShot: function(a, b) {
			return this.map && f.l.Ll ? this.map.sV(a, b) : ""
		},
		getCity: function(a, b) {
			f.e.add(this.CLASS_NAME, "getCity");
			var c = f.A.ud + "/v3/geocode/regeo?&extensions=&&key=" + f.A.key + "&s=rsv3&output=json&location=" + (b || this.get("center", null, !0));
			(new f.Sa.bb(c, {
				callback: "callback",
				rt: !0,
				dd: "REGEO"
			})).g("complete", function(b) {
				b = b.regeocode.addressComponent;
				a({
					province: b.province,
					city: b.city instanceof Array ? "" : b.city,
					citycode: b.citycode instanceof Array ? "" : b.citycode,
					district: b.district instanceof Array ? "" : b.district
				})
			}, this)
		},
		B: function(a, b) {
			this.id = f.a.Lb(this);
			this.CLASS_NAME = "AMap.Map";
			f.e.cb("AMap.Map", b);
			b = b || {};
			b.mapStyle && -1 !== b.mapStyle.indexOf("amap://styles/") && (b.styleUrl = b.mapStyle, delete b.mapStyle);
			b.bgColor && f.extend(f.A.qd, b.bgColor);
			b.maxPitch && (b.maxPitch = Math.min(this.F.maxPitch, Math.max(b.maxPitch, 0)));
			b.pitch && (b.pitch = Math.min(b.maxPitch || this.F.maxPitch, Math.max(b.pitch, 0)));
			f.A.YB = b.buildingColor || null;
			b.mobile && (f.l.Z = !0);
			b.noPoi && (f.A.hea = !0);
			b.editEnable && (b.nolimg = 1, b.showIndoorMap = !1);
			"3D" === b.viewMode && f.l.bm && void 0 === b.showBuildingBlock && !0 === b.showBuildingBlock;
			this.en = b.disableSocket ? !1 : f.l.en;
			b.server && (f.A.ud = b.server);
			b.vdataUrl && (f.A.av = b.vdataUrl);
			if ("string" === typeof a) {
				if (a = this.K = document.getElementById(a), !a) return
			} else "DIV" === a.tagName && (this.K = a);
			this.K.qF && this.K.qF.destroy();
			f.Zd.te.start({
				id: this.id,
				K: this.K
			});
			this.K.qF = this;
			var c = this.F.zooms[1],
				d = this.F.zooms[0];
			b.zooms ? (b.zooms[0] = Math.max(d, b.zooms[0]), !0 === b.expandZoomRange && (c = f.l.Z ? f.l.cd ? 19 : 20 : 20), b.zooms[1] = Math.min(c, b.zooms[1])) : b.zooms = [d, c];
			b.forceZooms && (b.zooms = b.forceZooms);
			b = this.r$(b);
			c = this.getSize();
			b.center && (b.center = f.a.za(b.center));
			this.Lm = this.kaa(b.crs || this.F.crs, b.center || this.F.center);
			this.R9(c, b);
			d = b.lang;
			"en" !== d && "zh_cn" !== d && "zh_en" !== d && (b.lang = "zh_cn");
			f.l.ne && (b.rotateEnable = !1);
			f.l.hr ? !1 !== b.workerMode && (w.Pb.Mp ? (b.workerMode = !1, w.Pb.Mp++) : w.Pb.Mp = 1) : (b.workerMode = !1, b.preloadMode = !1);
			f.a.Bb(this, b);
			this.zg(this.F);
			"rotateEnable" in b || "3D" !== b.viewMode || !f.l.bm || this.set("rotateEnable", !0);
			"pitchEnable" in b || "3D" !== b.viewMode || !f.l.bm || this.set("pitchEnable", !0);
			b.forceVector && (f.l.He ? this.set("baseRender", "vw") : this.set("baseRender", "v"));
			b.disableVector && this.set("baseRender", "d");
			"dom" === b.renderer && (this.set("baseRender", "d"), this.set("overlayRender", "d"));
			b.baseRender && this.set("baseRender", b.baseRender);
			c = Math.max(c.width, c.height);
			f.l.ja && (c *= Math.min(2, window.devicePixelRatio || 1));
			"vw" === this.get("baseRender") && c > f.l.Pda && this.set("baseRender", "dv");
			c = this.get("zoom", null, !0);
			d = this.get("zooms");
			c > d[1] ? c = d[1] : c < d[0] && (c = d[0]);
			this.set("zoom", c);
			this.F.zoom = c;
			this.laa(this.F);
			this.HI();
			var e = this;
			this.zg({
				overlays: [],
				infos: {},
				controls: {}
			});
			var g = [];
			b.gridMapForeign && g.push("gridmap");
			b.forceVector && (g.push("vectorlayer"), g.push("overlay"));
			"3D" === b.viewMode && f.l.bm && g.push("Map3D");
			b.editEnable && (g.push("edit"), g.push("labelDir"));
			f.l.Ll && (g.push("AMap.IndoorMap"), -1 !== g.indexOf("Map3D") && g.push("AMap.IndoorMap3D"));
			this.ja = f.l.ja && this.get("detectRetina");
			this.IZ(b);
			this.Fda(function() {
				f.gb.$f(g, function() {
					if (!e.get("destroy")) {
						var b = new f.Pb(a, e);
						b.he("zoom center centerCoords rotation yaw pitch resolution".split(" "), e.view, !0);
						b.g("complete", function() {
							this.r("complete")
						}, e, !0);
						b.Lm = e.Lm;
						e.he(["zoomSlow", "panTo", "targetLevel", "render"], b);
						b.he(["size", "bounds"], e);
						e.loaded = !0;
						e.r("coreMapCreated");
						f.l.Ll && e.t9();
						"3D" === e.getViewMode_() && (e.AmbientLight = new f.Hn.FE([1, 1, 1], 0.4), e.DirectionLight = new f.Hn.IE([0, -5, 10], [1, 1, 1], 0.7))
					}
				})
			})
		},
		Fda: function(a) {
			function b() {
				var a = AMap.anole,
					b = {},
					c = [],
					d = 0,
					e = void 0;
				if (a) {
					for (var a = a.replace(/\?/g, ":").replace(/\//g, "&"), e = a.split(""), g = 0, q = e.length; g < q; g++) void 0 === b[e[g]] && (b[e[g]] = d++, c.push(e[g]));
					c.reverse();
					a = a.replace(/./g, function(a) {
						return c[b[a]]
					});
					f.Nc = eval(a);
					delete AMap.anole
				}
			}
			if (f.Nc) a();
			else {
				var c = !0;
				try {
					var d = JSON.parse(localStorage.getItem("_AMap_anole"));
					d && d.version === f.l.Vd && d.script ? eval(d.script) : c = !1
				} catch (e) {
					c = !1
				}
				if (c) b(), a();
				else {
					var g = document.createElement("script");
					g.Lka = "anonymous";
					g.id = "amap_anole_js";
					g.src = f.A.Qb + "://vdata.amap.com/style?v=" + f.A.lt + "&key=" + f.A.key + "&mapstyle=normal";
//TODO	指定本地的css文件地址
					g.src = offlineMap.baseUrl + 'style/normalStyle.css';
					c = document;
					(c.head || c.getElementsByTagName("head")[0] || c.body).appendChild(g);
					g.onload = function() {
						if (!f.Nc) {
							if (f.l.Si) {
								var c = {
									version: f.l.Vd,
									script: "AMap['anole']=" + JSON.stringify(AMap.anole)
								};
								localStorage.setItem("_AMap_anole", JSON.stringify(c))
							}
							b()
						}
						a();
						g.parentNode.removeChild(g)
					}
				}
			}
		},
		getViewMode_: function() {
			return this.view.type
		},
		Aba: function(a, b, c) {
			var d = new f.V(a[4], a[5]);
			if ((a = new f.Wd(a[0], a[1], a[2], a[3])) && b && d) {
				for (var e = c[1]; e > c[0]; e -= 1) {
					var g = this.Xb(a.Rb, e),
						h = this.Xb(a.Kb, e);
					if (Math.abs(h.x - g.x) < b.width && Math.abs(g.y - h.y) < b.height) break
				}
				return [d, Math.min(e + 1, c[1])]
			}
			return null
		},
		R9: function(a, b) {
			if (!(b && b.center && b.zoom)) {
				var c = this.Aba(f.A.td, a, b.zooms);
				b.center = b.center || c && c[0];
				"number" !== typeof b.zoom && (b.zoom = c && c[1])
			}
		},
		kaa: function(a, b) {
			if (b instanceof f.V) {
				if ("string" === typeof a) {
					switch (a) {
					case "EPSG3395":
						return f.Bg.vN;
					case "EPSG4326":
						return f.Bg.wN
					}
					return f.Bg.JE
				}
				if (a.pointToLngLat && a.lngLatToPoint) return {
					Ay: a.pointToLngLat,
					hy: a.lngLatToPoint,
					ZJ: a.getResolution
				};
				throw "illegal projection";
			}
			var c = this.get("zoom", null, !0);
			return {
				ZJ: function(a) {
					return Math.pow(2, c - a)
				},
				hy: function() {},
				Ay: function() {}
			}
		},
		bha: function(a, b) {
			var c = ["pitch", "rotation", "zoom", "center"],
				d = {},
				e = !1,
				g;
			for (g in a) if (a.hasOwnProperty(g) && -1 !== f.a.indexOf(c, g)) {
				var h = this.get(g);
				void 0 === h || h === a[g] || h.rb && h.rb(a[g]) || (d[g] = this.get(g), e = !0)
			}
			e && (this.Jz = new f.pi(d, a, null, 0), this.Jz.transition = function(a, c, e) {
				e /= b || 300;
				if (1 <= e) return c;
				var g = {},
					h;
				for (h in d) d.hasOwnProperty(h) && (g[h] = "center" === h ? a[h].add(c[h].Va(a[h]).Sc(e)) : a[h] + (c[h] - a[h]) * e);
				return g
			}, this.Jz.kn = function(b) {
				b === a && (this.Jz.stop(), this.Tc = null);
				for (var c in b) b.hasOwnProperty(c) && ("center" === c ? this.setCenter(b[c], !0) : this.set(c, b[c]))
			}, this.Jz.Xk(this))
		},
		laa: function(a) {
			"3D" === this.get("viewMode") && f.l.bm ? (this.set("baseRender", "vw"), this.view = new f.q0(this, a)) : this.view = new f.eF(this, a);
			this.QV()
		},
		QV: function() {
			this.Wg = "d" < this.get("baseRender") || "3D" === this.view.type
		},
		featuresChanged: function() {
			this.HI()
		},
		TK: function() {
			this.HI();
			this.oM()
		},
		oM: function() {
			if (this.Kk) {
				var a = !0,
					b = this.getMapStyle();
				if (!1 === this.get("showIndoorMap") || "normal" !== b && "amap://styles/normal" !== b) a = !1;
				var b = this.getLayers(),
					c;
				for (c in b) b.hasOwnProperty(c) && "AMap.IndoorMap" === b[c].CLASS_NAME && b[c] !== this.Kk && (a = !1);
				this.Kk.getMap() !== this && this.Kk.setMap(this);
				this.Kk.set("visible", a)
			}
		},
		HI: function() {
			this.IZ();
			if (this.view && "3D" !== this.view.type) {
				var a = this.get("baseRender");
				if (a && !("dv" < a)) {
					var b = this.get("features", null, !0),
						c = this.getMapStyle(),
						d = this.get("editEnable");
					b && c && (f.l.hx && (d || "all" !== b || "normal" !== c && "amap://styles/normal" !== c) ? (this.set("baseRender", "v"), this.tL = a) : this.tL && (this.set("baseRender", this.tL), this.tL = null));
					this.QV()
				}
			}
		},
		t9: function() {
			var a = this;
			!a.Kk && a.K && (a.indoorMap = a.Kk = new AMap.IndoorMap({
				innerLayer: !0
			}), a.oM(), f.a.nc(function() {
				a.r("indoor_create", {
					target: a
				});
				a.set("display")
			}))
		},
		layersChanged: function() {
			var a = this.getLayers();
			this.nD = !1;
			for (var b = 0; b < a.length; b += 1) a[b].getMap() !== this && a[b].setMap(this), a[b].nD && (this.nD = !0);
			this.oM()
		},
		getMapNumber: function() {
			if (this.map) return this.map.Fy()
		},
		getAdcode: function() {
			f.e.add(this.CLASS_NAME, "getAdcode");
			return f.A.r9
		},
		IZ: function() {
			function a() {
				var a = !1;
				f.a.Ib(b.F.layers, function(b) {
					if (!b.pQ && b.constructor === w.w.Wa) return a = !0, !1
				}, b);
				if (f.a.ga(["d", "dv"], b.get("baseRender")) || !f.a.ga(["normal", "amap://styles/normal"], b.get("mapStyle")) || "3D" === b.get("viewMode") && 0 < b.get("pitch") || "all" !== b.get("features") || b.get("editEnable") || !b.get("turboMode")) a = !1;
				return a
			}
			if (!this.NX) {
				var b = this,
					c = a(),
					d = this.get("rasterLayer");
				if (d && !c) this.Tj(d), this.set("rasterLayer", void 0);
				else if (!d && c && this.get("layers")) {
					d = new w.w.Wa({
						map: this,
						gi: !0,
						zIndex: 0
					});
					if (this.F.layers) {
						var e = null;
						f.a.Ib(this.F.layers, function(a) {
							a instanceof w.w.Wa && !a.pQ && (null === e || a.get("zIndex") > e.get("zIndex")) && (e = a)
						});
						e && d.he(["zIndex", "opacity", "zooms", "visible"], e)
					}
					this.set("rasterLayer", d, !0)
				}
			}
		},
		r$: function(a) {
			a || (a = {});
			if (a.hasOwnProperty("defaultLayer")) {
				a.layers = [a.defaultLayer];
				var b = a.defaultLayer;
				b.kI = !0;
				this.set("defaultLayer", b, !0)
			}
			a.layers && 0 !== a.layers.length || (b = new w.w.Wa, a.layers = [b], b.kI = !0, this.set("defaultLayer", b, !0));
			if (b = a.view) b.F.rotation && (a.rotation = b.F.rotation), b.F.center && (a.center = b.F.center), b.F.zoom && (a.zoom = Math.max(a.zooms[0], Math.min(a.zooms[1], b.F.zoom))), b.F.crs && (a.crs = b.F.crs);
			a.level && !a.zoom && (a.zoom = a.level);
			return a
		},
		setLimitBounds: function(a) {
			f.e.add(this.CLASS_NAME, "setLimitBounds");
			a instanceof f.Wd || (a = null);
			this.set("limitBounds", a)
		},
		clearLimitBounds: function() {
			f.e.add(this.CLASS_NAME, "clearLimitBounds");
			this.set("limitBounds", null)
		},
		getLimitBounds: function() {
			f.e.add(this.CLASS_NAME, "getLimitBounds");
			return this.get("limitBounds", null, !0)
		},
		JB: function(a) {
			var b = this.get("layers");
			0 <= f.a.indexOf(b, a) || (b.push(a), this.set("layers", b))
		},
		Zw: function(a) {
			var b = this.get("overlays");
			0 <= f.a.indexOf(b, a) || (a instanceof w.D.cl ? (this.get("overlays").push(a), this.iC instanceof w.D.cl && this.iC.close(), this.iC = a, this.set("contextmenu", a, !0)) : (a instanceof w.D.fe && (this.Il instanceof w.D.fe && this.zu(this.Il), this.Il = a), this.get("overlays").push(a)), this.r("overlays"))
		},
		Tj: function(a) {
			var b = this.get("layers");
			a = f.a.indexOf(b, a); - 1 !== a && this.set("layers", f.a.zl(b, a))
		},
		zu: function(a) {
			var b = this.get("overlays");
			this.set("overlays", f.a.zl(b, f.a.indexOf(b, a)))
		},
		setZoom: function(a, b) {
			f.e.add(this.CLASS_NAME, "setZoom");
			a = this.Ex(a);
			var c = this.get("zooms");
			a > c[1] && (a = c[1]);
			a < c[0] && (a = c[0]);
			this.get("zoomEnable") && (b || !this.loaded ? (this.set("zoom", a), this.r("zoomstart"), this.r("zoomchange"), this.r("zoomend")) : this.set("zoomSlow", a))
		},
		getZoom: function() {
			f.e.add(this.CLASS_NAME, "getZoom");
			return this.Ex(this.get("targetLevel") || this.get("zoom", null, !0))
		},
		getCenter: function() {
			f.e.add(this.CLASS_NAME, "getCenter");
			return this.get("center", null, !0)
		},
		setCenter: function(a, b) {
			f.e.add(this.CLASS_NAME, "setCenter");
			a = f.a.za(a);
			b || !this.loaded ? (this.r("movestart"), this.set("center", a), this.r("mapmove"), this.map ? this.map.r("moveend") : this.r("moveend")) : this.panTo(a)
		},
		getCoordsBound: function() {
			return this.view.Hk()
		},
		getCoordsBoundByZoom: function(a) {
			return this.view.xba(a)
		},
		setRotation: function() {
			var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
			f.e.add(this.CLASS_NAME, "setRotation");
			!f.l.ne && this.get("rotateEnable") && this.set("rotation", a)
		},
		getRotation: function() {
			f.e.add(this.CLASS_NAME, "getRotation");
			return this.get("rotateEnable") && this.get("rotation") || 0
		},
		setPitch: function(a) {
			a = Math.min(this.get("maxPitch"), Math.max(a, 0));
			f.e.add(this.CLASS_NAME, "setRotation");
			!f.l.ne && this.get("pitchEnable") && this.set("pitch", a)
		},
		getPitch: function() {
			f.e.add(this.CLASS_NAME, "getRotation");
			return this.get("pitchEnable") && this.get("pitch") || 0
		},
		getBounds: function(a) {
			f.e.add(this.CLASS_NAME, "getBounds");
			var b = this.view.Qc();
			return a && b.toBounds ? b.toBounds() : b
		},
		getStatus: function() {
			f.e.add(this.CLASS_NAME, "getStatus");
			for (var a = "isHotspot dragEnable zoomEnable keyboardEnable jogEnable doubleClickZoom scrollWheel resizeEnable touchZoom rotateEnable animateEnable".split(" "), b = {}, c = 0; c < a.length; c += 1) b[a[c]] = this.get(a[c], null, !0);
			return b
		},
		setStatus: function(a) {
			f.e.add(this.CLASS_NAME, "setStatus");
			for (var b in a) a.hasOwnProperty(b) && -1 !== "isHotspot,dragEnable,keyboardEnable,doubleClickZoom,scrollWheel,zoomEnable,jogEnable,continuousZoomEnable,resizeEnable,animateEnable,rotateEnable,touchZoom".indexOf(b) && this.set(b, a[b])
		},
		getResolution: function(a, b) {
			f.e.add(this.CLASS_NAME, "getResolution");
			var c = (a = f.a.za(a)) ? a.P : this.get("center", null, !0).P;
			return this.get("resolution", b) * Math.cos(c * Math.PI / 180)
		},
		getScale: function(a) {
			f.e.add(this.CLASS_NAME, "getScale");
			return this.getResolution() * (a || 96) / 0.0254
		},
		getDefaultCursor: function() {
			f.e.add(this.CLASS_NAME, "getDefaultCursor");
			return this.get("defaultCursor", null, !0) || "url(" + f.A.qb + "/theme/v1.3/openhand.cur),default"
		},
		setDefaultCursor: function(a) {
			f.e.add(this.CLASS_NAME, "setDefaultCursor");
			return this.set("defaultCursor", a, !0)
		},
		zoomIn: function(a) {
			f.e.add(this.CLASS_NAME, "zoomIn");
			this.setZoom(this.getZoom() + 1, a)
		},
		zoomOut: function(a) {
			f.e.add(this.CLASS_NAME, "zoomOut");
			this.setZoom(this.getZoom() - 1, a)
		},
		Ex: function(a) {
			return this.view && "3D" === this.view.type ? f.a.Pc(a, 4) : Math.round(a)
		},
		setZoomAndCenter: function(a, b, c) {
			f.e.add(this.CLASS_NAME, "setZoomAndCenter");
			b = f.a.za(b);
			a = this.Ex(a);
			var d = this.get("zooms");
			a > d[1] && (a = d[1]);
			a < d[0] && (a = d[0]);
			this.loaded ? this.set("zoomAndCenter", [a, b, c]) : (this.setZoom(a, !0), this.setCenter(b, !0))
		},
		clearMap: function() {
			f.e.add(this.CLASS_NAME, "clearMap");
			for (var a = this.get("overlays"), b = 0; b < a.length; b += 1) a[b].set("map", null, !0);
			this.set("overlays", []);
			if (this.map && this.map.Ya) for (var a = this.map.Ya, c = a.length, b = 0; b < c; b += 1) a[b].ia instanceof w.w.KE && a[b].ia.setMap(null)
		},
		destroy: function() {
			f.e.add(this.CLASS_NAME, "destroy");
			this.Kk && (this.Kk.setMap(), this.indoorMap = this.Kk = null);
			this.set("overlays", []);
			this.set("layers", []);
			var a = this.get("controls");
			a.remove = [];
			for (var b in a.Bc) a.Bc.hasOwnProperty(b) && a.remove.push(a.Bc[b]);
			a.Bc = [];
			a.add = [];
			this.set("controls", a);
			this.set("destroy", !0);
			this.wa = !1;
			this.vp();
			this.K = null;
			w.Pb.Mp--
		},
		addControl: function(a) {
			f.e.add(this.CLASS_NAME, "addControl");
			var b = f.a.Lb(a),
				c = this.get("controls") || {};
			c.Bc = c.Bc || {};
			c.Bc[b] || (c.Bc[b] = a);
			c.add = c.add || [];
			c.add.push(a);
			this.set("controls", c)
		},
		removeControl: function(a) {
			f.e.add(this.CLASS_NAME, "removeControl");
			var b = f.a.Lb(a),
				c = this.get("controls") || {};
			c.Bc = c.Bc || {};
			c.Bc[b] && delete c.Bc[b];
			c.remove = c.remove || [];
			c.remove.push(a);
			this.set("controls", c)
		},
		clearControl: function() {
			f.e.add(this.CLASS_NAME, "clearControl");
			var a = this.get("controls") || {};
			a.remove = a.remove || [];
			a.Bc = a.Bc || {};
			for (var b in a.Bc) a.Bc.hasOwnProperty(b) && (a.remove.push(a.Bc[b]), delete a.Bc[b]);
			this.set("controls", a)
		},
		plugin: function(a, b) {
			"string" === typeof a && (a = [a]);
			f.gb.$f(a, b);
			return this
		},
		clearInfoWindow: function() {
			f.e.add(this.CLASS_NAME, "clearInfoWindow");
			var a = this.get("overlays");
			a && 0 !== a.length && this.Il && this.Il.close()
		},
		remove: function(a) {
			f.e.add(this.CLASS_NAME, "remove");
			a instanceof Array || (a = [a]);
			for (var b = 0; b < a.length; b += 1) {
				var c = a[b];
				c.getMap && c.getMap() === this && (c.close ? c.close() : c.setMap && c.setMap(null))
			}
		},
		add: function(a) {
			f.e.add(this.CLASS_NAME, "add");
			a instanceof Array || (a = [a]);
			for (var b = 0; b < a.length; b += 1) {
				var c = a[b];
				c.getMap && c.getMap() !== this && !c.open && c.setMap && c.setMap(this)
			}
		},
		getAllOverlays: function(a, b) {
			f.e.add(this.CLASS_NAME, "getAllOverlays");
			var c = this.get("overlays");
			if (a) {
				for (var d = "amap." + a.toLowerCase(), e = [], g = 0; g < c.length; g += 1) d !== c[g].CLASS_NAME.toLowerCase() || !b && (c[g].la || c[g].isOfficial) || e.push(c[g]);
				return e
			}
			if (!b) {
				e = [];
				for (g = 0; g < c.length; g += 1) c[g].la || c[g].isOfficial || e.push(c[g]);
				c = e
			}
			d = this.get("layers");
			e = [];
			if (d) for (var g = 0, h = d.length; g < h; g += 1) d[g] instanceof w.w.KE && e.push(d[g]);
			return c.concat(e)
		},
		triggerResize: function() {
			this.map && this.map.BH()
		},
		refreshSize: function() {
			this.Yz = this.Dba()
		},
		Dba: function() {
			return f.j.TU(this.K)
		},
		getSize: function() {
			f.e.add(this.CLASS_NAME, "getSize");
			(!this.Yz || 10 > this.Yz.width * this.Yz.height) && this.refreshSize();
			return this.Yz
		},
		getContainer: function() {
			f.e.add(this.CLASS_NAME, "getContainer");
			return this.K
		},
		panTo: function(a) {
			f.e.add(this.CLASS_NAME, "panTo");
			a = f.a.za(a);
			this.loaded ? this.set("panTo", a) : this.setCenter(a)
		},
		panBy: function(a, b, c) {
			f.e.add(this.CLASS_NAME, "panBy");
			var d = this.get("rotation") * Math.PI / 180,
				e = a * Math.cos(d) + Math.sin(d) * b;
			a = -Math.sin(d) * a + Math.cos(d) * b;
			b = this.loaded && this.map && this.map.Tc ? this.map.Tc.eZ : this.get("centerCoords");
			d = Math.pow(2, 20 - this.getZoom());
			e = b.add(new f.G(-e * d, -a * d));
			e = this.de(e);
			!this.loaded || c ? this.setCenter(e, c) : this.set("panTo", e)
		},
		setFitView: function(a, b, c, d) {
			f.e.add(this.CLASS_NAME, "setFitView");
			var e = this.get("size"),
				g = e.height;
			if (!e.width || !g) return !0;
			if (a = this.hV(a)) {
				if (c = this.CC(a, 0, new f.G(40, 40), c, d)) b = b || !this.getBounds().contains(a.Zh()) || f.l.Z && 1 < Math.abs(c[0] + this.get("zoom", null, !0)), this.setZoomAndCenter(c[0], c[1], b);
				return a
			}
		},
		hV: function(a) {
			if (a) if (a instanceof w.D.Hg) a = [a];
			else {
				if (!(a instanceof
				Array)) return null
			} else a = this.getAllOverlays();
			if (a) {
				for (var b, c = 0; c < a.length; c += 1) {
					var d = a[c];
					!d.get("visible") || d instanceof w.D.fe || d instanceof w.D.cl || (d = d.getBounds()) && (b = b ? d.jia(b) : d)
				}
				return b
			}
		},
		setBounds: function(a, b, c, d, e, g) {
			f.e.add(this.CLASS_NAME, "setBounds");
			if (!this.getBounds()) return a;
			c = this.CC(a, b, c, e, g);
			d = d || !this.getBounds().contains(a.Zh()) || f.l.Z && 1 < Math.abs(c[0] + b - this.get("zoom", null, !0));
			this.setZoomAndCenter(c[0], c[1], d);
			return a
		},
		YU: function(a, b, c, d, e) {
			a = this.hV(a);
			return this.CC(a, b, c, d, e)
		},
		CC: function(a, b, c, d, e) {
			b = b ? Number(b) : 0;
			var g = this.iX || this.get("zooms")[1];
			e = this.getSize().Tu();
			var h = 0,
				k = 0;
			if (d) {
				var k = d[0],
					l = d[1],
					h = d[2];
				d = d[3];
				e.x -= h + d;
				e.y -= k + l;
				h = (h - d) / 2;
				k = (k - l) / 2
			}
			d = this.get("zooms");
			for (c && (e = e.Va(c)); g > d[0] && !(c = this.Xb(a.Rb, g), l = this.Xb(a.Kb, g), a.Rb.O > a.Kb.O && (l.x += this.Xb(new f.V(180, 0), g).x), Math.abs(l.x - c.x) < e.x && Math.abs(c.y - l.y) < e.y); g -= 1);
			e = f.l.Z ? 17 : 18;
			b = Math.min(d[1], e, Math.max(d[0], g + b));
			a = this.Ag(this.Xb(a.Zh(), b).Va(new f.G(h, k)), b);
			return [b, a]
		},
		setLayers: function(a) {
			f.e.add(this.CLASS_NAME, "setLayers");
			for (var b = 0; b < a.length; b += 1) a[b].set("map", this, !0);
			this.set("layers", a)
		},
		getLayers: function() {
			f.e.add(this.CLASS_NAME, "getLayers");
			return this.get("layers", null, !0)
		},
		getDefaultLayer: function() {
			f.e.add(this.CLASS_NAME, "getDefaultLayer");
			return this.get("defaultLayer", null, !0)
		},
		setDefaultLayer: function(a) {
			f.e.add(this.CLASS_NAME, "setDefaultLayer");
			a.kI = !0;
			var b = this.get("defaultLayer"),
				c = this.get("layers");
			if (b) {
				if (a === b) return;
				b.kI = !1;
				c = f.a.zl(c, f.a.indexOf(c, b))
			}
			this.set("defaultLayer", a, !0);
			c.push(a);
			this.setLayers(c)
		},
		pixelToLngLat: function(a, b) {
			f.e.add(this.CLASS_NAME, "pixelToLngLat");
			return this.Ag(a, b)
		},
		lnglatToPixel: function(a, b) {
			f.e.add(this.CLASS_NAME, "lnglatToPixel");
			return this.Xb(a, b)
		},
		drawPolyline: function(a) {
			f.e.add(this.CLASS_NAME, "drawPolyline");
			this.set("draw", "polyline");
			this.set("drawStyle", a || {
				strokeColor: "#006600",
				Ua: 0.9
			})
		},
		drawPolygon: function(a) {
			f.e.add(this.CLASS_NAME, "drawPolygon");
			this.set("draw", "polygon");
			this.set("drawStyle", a || {
				strokeColor: "#006600",
				Ua: 0.9,
				fillColor: "#FFAA00",
				vd: 0.9
			})
		},
		drawCircle: function(a) {
			f.e.add(this.CLASS_NAME, "drawCircle");
			this.set("draw", "circle");
			this.set("drawStyle", a || {
				strokeColor: "#006600",
				Ua: 0.9,
				fillColor: "#006600",
				vd: 0.9
			})
		},
		JC: function() {
			return this.view.JC()
		},
		endDraw: function() {
			this.set("draw", null)
		},
		isGoogleTileVisible: function() {
			return this.map && this.map.AG()
		},
		Je: function(a, b, c) {
			return this.view.Je(a, b, c)
		},
		jf: function(a, b, c) {
			return this.view.jf(a, b, c)
		},
		getObject3DByContainerPos: function(a, b, c) {
			if ("2D" === this.view.type || !this.map || !this.map.T) return null;
			this.view.jf(a);
			var d = this.view.VU(a),
				e = this.map.T.NL,
				g = this.view.yd,
				h = this.get("zoom", null, !0),
				h = Math.pow(2, 20 - h);
			b = b || this.getLayers();
			for (var k = [], l = 0; l < b.length; l += 1) {
				var m = b[l];
				m instanceof w.w.Mn && (m = m.Zl(e, d, g, h, a)) && k.push(m)
			}
			return c ? k : k.length ? (k.sort(function(a, b) {
				return a.Fd - b.Fd
			}), {
				index: k[0].index,
				point: k[0].zy,
				distance: k[0].Fd,
				object: k[0].object
			}) : null
		}
	});
	w.Pb.Fk({
		NK: "lngLatToGeodeticCoord",
		wba: "geodeticCoordToLngLat",
		CC: "getFitZoomAndCenterByBounds",
		YU: "getFitZoomAndCenterByOverlays",
		Vo: "lnglatTocontainer",
		lnglatTocontainer: "lngLatToContainer",
		so: "containTolnglat",
		containTolnglat: "containerToLngLat",
		Jb: "lngLatToP20",
		de: "p20ToLngLat",
		Je: "p20ToContainer",
		jf: "containerToP20",
		Xb: "project",
		Ag: "unproject"
	});
	w.Pb.ob({
		isHotspotChanged: function() {
			if ("undefined" !== typeof this.Px && (this.L$(), this.get("isHotspot"))) {
				var a = this.get("layers", null, !0);
				a && a.length && !this.Px && this.nD && this.Iea()
			}
		},
		Iea: function() {
			if (this.Gl) this.MV();
			else {
				var a = this;
				this.plugin("AMap.HotSpot", function() {
					if (!a.Px) {
						if (!a.Gl) {
							var b = new f.Fg;
							new w.D.fe;
							a.Gl = b
						}
						a.MV()
					}
				})
			}
		},
		L$: function() {
			this.Gl && this.wca()
		},
		fX: function(a) {
			a.type = "hotspotover";
			a.isIndoorPOI = !1;
			this.r("hotspotover", a)
		},
		dX: function(a) {
			a.type = "hotspotclick";
			a.isIndoorPOI = !1;
			this.r("hotspotclick", a)
		},
		eX: function(a) {
			a.type = "hotspotout";
			a.isIndoorPOI = !1;
			this.r("hotspotout", a)
		},
		MV: function() {
			var a = this.Gl;
			this.Gl.setMap(this);
			a.g("mouseover", this.fX, this);
			a.g("click", this.dX, this);
			a.g("mouseout", this.eX, this)
		},
		wca: function() {
			var a = this.Gl;
			a.I("mouseover", this.fX, this);
			a.I("click", this.dX, this);
			a.I("mouseout", this.eX, this);
			this.Gl.setMap(null);
			this.Gl = null
		}
	});
	w.event = {
		U: function(a, b, c, d) {
			f.e.add("AMap.event", "addDomListener");
			f.C.g(a, b, c, d);
			return new f.sz(0, a, b, c, d)
		},
		u9: function() {},
		addListener: function(a, b, c, d) {
			f.e.add("AMap.event", "addListener");
			f.a.Ml(a.addListener) ? a.addListener(b, c, d) : (a.Od || (a.Od = f.ka.Od), f.ka.g.call(a, b, c, d));
			return new f.sz(1, a, b, c, d)
		},
		Yw: function(a, b, c, d) {
			f.e.add("AMap.event", "addListenerOnce");
			f.a.Ml(a.Yw) ? a.Yw(b, c, d) : (a.Od || (a.Od = f.ka.Od), f.ka.g.call(a, b, c, d, !0));
			return new f.sz(1, a, b, c, d)
		},
		bC: function(a) {
			f.a.Ml(a.bC) ? a.bC() : f.ka.Uh.call(a)
		},
		xq: function(a, b) {
			f.a.Ml(a.xq) ? a.xq(b) : f.ka.Uh.call(a, b)
		},
		removeListener: function(a) {
			f.e.add("AMap.event", "removeListener");
			a instanceof f.sz && (f.a.Ml(a.Eh.removeListener) ? a.Eh.removeListener(a) : 0 === a.type ? f.C.I(a.Eh, a.uJ, a.kK, a.je) : 1 === a.type && (a.Eh.Od || (a.Eh.Od = f.ka.Od), f.ka.I.call(a.Eh, a.uJ, a.kK, a.je)))
		},
		N: function(a, b) {
			f.e.add("AMap.event", "trigger");
			var c = Array.prototype.slice.call(arguments, 1);
			f.a.Ml(a.N) ? a.N.apply(a, c) : (a.Od || (a.Od = f.ka.Od), f.ka.r.apply(a, c))
		}
	};
	f.sz = f.ba.extend({
		B: function(a, b, c, d, e) {
			this.type = a;
			this.Eh = b;
			this.uJ = c;
			this.kK = d;
			this.je = e
		}
	});
	var ec = {
		U: "addDomListener",
		u9: "addDomListenerOnce",
		addListener: "addListener",
		Yw: "addListenerOnce",
		bC: "clearInstanceListeners",
		xq: "clearListeners",
		removeListener: "removeListener",
		N: "trigger"
	},
		rc;
	for (rc in ec) ec.hasOwnProperty(rc) && (w.event[ec[rc]] = w.event[rc]);
	f.event = w.event;
	f.event.U(window, "beforeunload", f.e.send);
	w.w.oc = f.ba.extend({
		ga: [f.ka, f.se],
		B: function(a) {
			this.CLASS_NAME = this.CLASS_NAME || "AMap.Layer";
			f.a.Bb(this, a);
			this.F.map && (a = this.F.map, delete this.F.map, this.F.map = a);
			this.zg(this.F)
		},
		getContainer: function() {
			if (this.w && this.w.Q) return this.w.Q.$h()
		},
		getZooms: function() {
			f.e.add(this.CLASS_NAME, "getZooms");
			return this.get("zooms", null, !0)
		},
		setOpacity: function(a) {
			f.e.add(this.CLASS_NAME, "setOpacity");
			a !== this.get("opacity", null, !0) && this.set("opacity", a)
		},
		getOpacity: function() {
			return this.get("opacity", null, !0)
		},
		show: function() {
			f.e.add(this.CLASS_NAME, "show");
			this.set("visible", !0);
			this.ap && this.w.h.layersChanged()
		},
		hide: function() {
			f.e.add(this.CLASS_NAME, "hide");
			this.set("visible", !1);
			this.ap && this.w.h.layersChanged()
		},
		setMap: function(a) {
			f.e.add(this.CLASS_NAME, "setMap");
			var b = this.get("map");
			a ? (b && a !== b && b.Tj(this), this.set("map", a)) : b && (b.Tj(this), this.set("map", null, !0), this.Fi = !1, this.bg && this.bg())
		},
		getMap: function() {
			f.e.add(this.CLASS_NAME, "getMap");
			return this.get("map", null, !0)
		},
		mapChanged: function() {
			var a = this.get("map");
			a && a.JB(this)
		},
		setzIndex: function(a) {
			f.e.add(this.CLASS_NAME, "setzIndex");
			this.set("zIndex", a)
		},
		getzIndex: function() {
			return this.get("zIndex", null, !0)
		}
	});
	w.w.Wa = w.w.oc.extend({
		F: {
			tileSize: 256,
			visible: !0,
			opacity: 1,
			zIndex: 0,
			noLimg: 1,
			zooms: [3, 20],
			getTileUrl: f.l.Z ? f.A.Zy : f.A.ly,
			errorUrl: f.a.aba,
			detectRetina: !0,
			className: "amap-layer",
			mapNumber: "",
			cacheSize: f.l.size
		},
		B: function(a) {
			f.e.cb("AMap.TileLayer", a);
			(a = a || {}) && a.tileUrl && (a.getTileUrl = a.tileUrl);
			(new Date).getTime();
			this.x$(a);
			var b = a.zooms;
			b && b[1] >= this.Ui[0] ? (b[0] < this.Ui[0] && (b[0] = this.Ui[0]), b[1] > this.Ui[1] && (b[1] = this.Ui[1])) : a.zooms = [this.Ui[0], this.Ui[1]];
			this.CLASS_NAME = this.CLASS_NAME || "AMap.TileLayer";
			arguments.callee.oa.call(this, a);
			a.gi && (this.gi = !0);
			this.pQ = !this.gr()
		},
		setTextIndex: function(a) {
			f.e.add(this.CLASS_NAME, "setTextIndex");
			this.set("textIndex", a)
		},
		gr: function() {
			if (this.get("createTile")) return !1;
			var a = this.get("getTileUrl");
			return a && a !== f.A.ly && a !== f.A.Zy ? !1 : !0
		},
		QT: function() {
			if (!this.gr()) return !1;
			var a = this.get("map");
			return a && a.Wg && "zh_cn" === a.get("lang") && !this.noVector ? !0 : !1
		},
		nV: function(a) {
			var b = f.A.hD;
			f.l.ja && this.get("detectRetina") && (b = f.A.hD.replace("scl=1", "scl=2"));
			a && (b = b.replace("ltype=3", "ltype=11"));
			return b
		},
		og: function(a) {
			var b = this.QT(),
				c = this.get("map");
			this.gr() && this.set("mapNumber", "GS(2018)1709");
			if (this.gi) return new f.w.Wa(this, a, this.Ls(this.nV(!0)), this.F.maxDataZoom, !0);
			if (b) if (this.ap = !0, f.w.ik) {
				if ("dv" === c.get("baseRender") && !this.get("watermark")) {
					var b = c.get("showBuildingBlock"),
						d = new f.w.Wa(this, a, this.Ls(this.nV(!b)), void 0, !0);
					b && (d.Zi = new f.w.Vc(new w.w.Wa({
						zooms: [16, 20],
						innerLayer: "true"
					}), a, ["building"]), d.Zi.type = "\u697c\u5757\u56fe\u5c42", d.Zi.he(["visible", "opacity", "zIndex"], d, !0), d.Zi.fx(c.get("mapStyle") || "normal"));
					d.type = "\u6805\u683c\u5e95\u56fe";
					return d
				}
				if ("v" <= c.get("baseRender") || this.get("watermark")) return "3D" == a.J.view.type ? (c = new f.w.Vc(this, a, ["region", "road"]), c.type = "\u77e2\u91cf\u5e95\u56fe", c.Zi = new f.w.Vc(new w.w.Wa({
					zooms: [17, 20],
					zIndex: 50,
					innerLayer: "true"
				}), a, ["building"]), c.Zi.Ce = 17, c.Zi.type = "\u697c\u5757\u56fe\u5c42", c.Zi.Wt = 1, c.Zi.he(["visible", "opacity"], c, !0)) : (c = new f.w.Vc(this, a, ["region", "building", "road"]), c.type = "\u77e2\u91cf\u5e95\u56fe"), c
			} else return ["vectorlayer", "overlay"];
			else return this.ap = !1, new f.w.Wa(this, a, null, this.F.maxDataZoom)
		},
		getTileUrlChanged: function() {
			var a = this.get("getTileUrl");
			if (a === f.A.ly || a === f.A.Zy || a === f.A.QD) this.nD = !0;
			"string" === typeof a && (a = this.Ls(a));
			this.set("tileFun", a)
		},
		x$: function(a) {
			this.Ui || (this.Ui = [this.F.zooms[0], this.F.zooms[1]]);
			var b;
			a.hasOwnProperty("detectRetina") && !1 === a.detectRetina && (b = !0);
			f.l.Z && f.l.ja && this.F.detectRetina && !b && (this.Ui[1] -= 1)
		},
		getTiles: function() {
			f.e.add(this.CLASS_NAME, "getTiles");
			var a = this.get("tiles", null, !0);
			if (a && a.length) a = a[0];
			else return [];
			for (var b = [], c, d = 0; d < a.length; d += 1) a[d].key && (c = a[d].key.split("/"), b.push("" + c[1] + "," + c[2]));
			return b
		},
		reload: function() {
			f.e.add(this.CLASS_NAME, "reload");
			this.set("reload", 1)
		},
		hp: function() {
			var a = this.get("map", null, !0);
			this.setMap(null);
			this.Fi = !1;
			this.setMap(a)
		},
		setTileUrl: function(a) {
			f.e.add(this.CLASS_NAME, "setTileUrl");
			this.QT() ? (this.set("getTileUrl", a), this.hp()) : this.set("getTileUrl", a)
		},
		Ls: function(a) {
			var b = this,
				c, d, e;
			return function(g, h, k) {
				g = (g + Math.pow(2, k)) % Math.pow(2, k);
				if ("number" !== typeof(g + h + k)) return null;
				var l = b.get("map"),
					m = "zh_cn";
				l && (m = l.get("lang") || "zh_cn");
				k = a.replace("[x]", g).replace("[y]", h).replace("[z]", k).replace("[lang]", m);
				if (!c) {
					if (d = a.match(/\{.*\}/)) e = d.toString().replace("{", "").replace("}", ""), e = e.split(",");
					c = !0
				}
				e && e.length && (k = k.replace(d, e[Math.abs(g + h) % e.length]));
				return k
			}
		},
		getTileUrl: function(a, b, c) {
			f.e.add(this.CLASS_NAME, "getTileUrl");
			return this.get("tileFun", null, !0)(a, b, c)
		},
		getZooms: function() {
			f.e.add(this.CLASS_NAME, "getZooms");
			return this.get("zooms", null, !0)
		}
	});
	w.w.Wa.SN = w.w.Wa.extend({
		F: {
			getTileUrl: f.A.eM,
			zooms: [3, 20],
			zIndex: 2,
			maxDataZoom: 18,
			detectRetina: !1,
			mapNumber: "GS(2018)984",
			className: "amap-layer amap-satellite",
			cacheSize: f.l.size
		},
		B: function(a) {
			this.CLASS_NAME = "AMap.TileLayer.Satellite";
			this.Ui = [3, 20];
			arguments.callee.oa.apply(this, arguments);
			f.e.cb(this.CLASS_NAME, a)
		}
	});
	w.w.Wa.QN = w.w.Wa.extend({
		F: {
			getTileUrl: f.A.QD,
			zooms: [3, 20],
			zIndex: 3,
			type: "overlayer",
			maxDataZoom: 18,
			className: "amap-layer amap-roadnet",
			cacheSize: f.l.size
		},
		B: function(a) {
			this.CLASS_NAME = "AMap.TileLayer.RoadNet";
			this.Ui = [3, 20];
			arguments.callee.oa.apply(this, arguments);
			f.e.cb(this.CLASS_NAME, a)
		},
		og: function(a) {
			if (this.get("map").Wg) {
				this.ap = !0;
				var b = f.A.RD;
				f.l.ja && this.get("detectRetina") && (b = f.A.RD.replace("scl=1", "scl=2"));
				a = new f.w.Wa(this, a, this.Ls(b), this.F.maxDataZoom)
			} else this.ap = !1, a = new f.w.Wa(this, a);
			return a
		}
	});
	w.w.Wa.WN = w.w.Wa.extend({
		F: {
			getTileUrl: function(a, b, c) {
				return f.A.Qb + "://tm.amap.com/trafficengine/mapabc/traffictile?v=1.0&t=1&zoom=" + (17 - c) + "&x=" + a + "&y=" + b
			},
			zooms: [6, 20],
			zIndex: 4,
			type: "overlayer",
			autoRefresh: !1,
			interval: 180,
			maxDataZoom: 17,
			alwaysRender: !f.l.kJ,
			className: "amap-layer amap-traffic",
			cacheSize: f.l.size
		},
		B: function(a) {
			this.CLASS_NAME = "AMap.TileLayer.Traffic";
			this.Ui = [6, 20];
			arguments.callee.oa.apply(this, arguments);
			this.startRefresh();
			f.e.cb(this.CLASS_NAME, a)
		},
		stopRefresh: function() {
			f.e.add(this.CLASS_NAME, "stopRefresh");
			this.ID && (clearInterval(this.ID), this.ID = null)
		},
		startRefresh: function() {
			f.e.add(this.CLASS_NAME, "startRefresh");
			if (this.get("autoRefresh") && !this.ID) {
				var a = this;
				this.ID = setInterval(function() {
					a.reload();
					a.r("refresh")
				}, Math.max(1E3 * (this.get("interval") || 180), 1E4))
			}
		},
		reload: function() {
			f.e.add(this.CLASS_NAME, "reload");
			f.a.nc(function() {
				this.set("reload")
			}, this)
		},
		bg: function() {
			this.stopRefresh();
			this.get("map") && this.get("map").I("zoomstart", this.reload, this)
		},
		og: function(a) {
			var b = this.get("map"),
				b = a.J;
			b.g("zoomstart", this.reload, this);
			return "d" !== b.get("baseRender") ? f.w.qs ? a = new f.w.qs(this, a) : ["vt"] : a = new f.w.Wa(this, a, null, this.F.maxDataZoom)
		}
	});
	w.w.Wa.tz = w.w.Wa.extend({
		F: {
			zooms: [3, 20],
			zIndex: 12,
			detectRetina: !1,
			className: "amap-layer amap-flexible",
			cacheSize: f.l.size
		},
		B: function(a) {
			this.CLASS_NAME = this.CLASS_NAME || "AMap.TileLayer.Flexible";
			this.cda = !0;
			arguments.callee.oa.call(this, a)
		},
		setCreateTile: function(a) {
			"function" === typeof a && a !== this.get("createTile") && this.set("createTile", a)
		},
		getCreateTile: function() {
			return this.get("createTile", null, !0)
		}
	});
	w.w.Wa.r0 = w.w.Wa.tz.extend({
		F: {
			zooms: [3, 20],
			zIndex: 12,
			tileSize: 512,
			detectRetina: !1,
			className: "amap-layer amap-wms",
			cacheSize: f.l.size,
			url: "",
			params: ""
		},
		B: function(a) {
			this.CLASS_NAME = "AMap.TileLayer.WMS";
			arguments.callee.oa.call(this, a);
			this.Wr();
			var b = this,
				c = this.get("tileSize");
			this.set("createTile", function(a, e, g, h, k) {
				var l = Math.pow(2, 20 - g) * c;
				g = new f.G(l * a, l * (e + 1));
				a = new f.G(l * (a + 1), l * e);
				e = f.gD.mX(g);
				a = f.gD.mX(a);
				var m = document.createElement("img");
				"3D" === b.Bp && (m.crossOrigin = "anonymous");
				m.src = this.url + "&BBOX=" + e + "," + a;
				f.C.g(m, "load", function() {
					h(m)
				});
				f.C.g(m, "error", function() {
					k(m)
				})
			})
		},
		Wr: function() {
			var a = this.get("url", null, !0),
				b = this.get("params", null, !0),
				c = this.get("tileSize");
			b.WIDTH = c;
			b.HEIGHT = c;
			b.CRS = b.CRS || "EPSG:3857";
			b.REQUEST = "GetMap";
			b.SERVICE = "WMS";
			b.FORMAT = b.FORMAT || "image/png";
			b.TRANSPARENT = void 0 === b.TRANSPARENT ? "true" : b.TRANSPARENT;
			delete b.BBOX;
			this.url = a + "?" + f.a.join(b, "&");
			this.reload()
		},
		setUrl: function(a) {
			this.set("url", a, !0);
			this.Wr()
		},
		getUrl: function() {
			return this.get("url", null, !0)
		},
		setParams: function(a) {
			f.extend(this.get("params", null, !0), a || {});
			this.Wr()
		},
		getParams: function() {
			return this.get("params", null, !0)
		}
	});
	w.w.Wa.s0 = w.w.Wa.tz.extend({
		F: {
			zooms: [3, 20],
			tileSize: 256,
			zIndex: 12,
			detectRetina: !1,
			className: "amap-layer amap-wmts",
			cacheSize: f.l.size
		},
		B: function(a) {
			this.CLASS_NAME = "AMap.TileLayer.WMTS";
			arguments.callee.oa.call(this, a);
			this.Wr();
			var b = this;
			this.get("tileSize");
			this.set("createTile", function(a, d, e, g, h) {
				var k = document.createElement("img");
				"3D" === b.Bp && (k.crossOrigin = "anonymous");
				k.src = this.url + "&TileMatrix=" + e + "&TileRow=" + d + "&TileCol=" + a;
				f.C.g(k, "load", function() {
					g(k)
				});
				f.C.g(k, "error", function() {
					h(k)
				})
			})
		},
		Wr: function() {
			var a = this.get("url", null, !0),
				b = this.get("params", null, !0);
			this.get("tileSize");
			b.TileMatrixSet = b.TileMatrixSet || "EPSG:3857";
			b.Request = "GetTile";
			b.Service = "WMTS";
			b.Format = b.Format || "image/png";
			this.url = a + "?" + f.a.join(b, "&");
			this.reload()
		},
		setUrl: function(a) {
			this.set("url", a, !0);
			this.Wr()
		},
		getUrl: function() {
			return this.get("url", null, !0)
		},
		setParams: function(a) {
			f.extend(this.get("params", null, !0), a || {});
			this.Wr()
		},
		getParams: function() {
			return this.get("params", null, !0)
		}
	});
	w.w.Wa.pv = w.w.Wa.tz.extend({
		F: {
			detectRetina: !0,
			zooms: [10, 18],
			zIndex: 2
		},
		B: function(a) {
			arguments.callee.oa.apply(this, arguments);
			var b = this;
			this.set("createTile", function(a, d, e, g, h) {
				function k(a, c, d) {
					var e = "zh_cn";
					b && b.get && l && (e = l.get("lang") || "zh_cn");
					return f.A.Qb + "://grid.amap.com/grid/" + d + "/" + a + "/" + c + "?src=jsapi&key=" + f.A.key + "&lang=" + e + "&dpiType=" + (f.l.cd ? "wprd" : "webrd")
				}
				var l = b.h || b.get("map");
				l.Rn || (l.Rn = new f.Pb.pv(l.map));
				if (l.Rn.Wy(a, d, e)) h();
				else {
					var m = document.createElement("img");
					"3D" === b.Bp && (m.crossOrigin = "anonymous");
					m.src = k(a, d, e);
					f.C.g(m, "load", function() {
						g(m)
					});
					f.C.g(m, "error", function() {
						h(m)
					})
				}
			})
		}
	});
	w.w.Gc = w.w.oc.extend({
		F: {
			visible: !0,
			zooms: [3, 25],
			type: "overlay",
			zIndex: 5,
			alwaysRender: !0
		},
		B: function(a) {
			arguments.callee.oa.apply(this, arguments)
		},
		og: function(a) {
			return new f.w.Gc(this, a)
		}
	});
	w.w.c_ = w.w.oc.extend({
		F: {
			zooms: [15, 20],
			zIndex: 8,
			visible: !0
		},
		B: function(a) {
			a = a || {};
			a.zooms && (a.zooms[0] = Math.max(15, a.zooms[0]));
			arguments.callee.oa.apply(this, arguments);
			this.CLASS_NAME = "AMap.Buildings"
		},
		gr: function() {
			return !1
		},
		og: function(a) {
			if (f.l.hx) return a = new f.w.n0(this, a, ["building"]), a.Wt = this.get("heightFactor") || 1, a
		}
	});
	w.w.GE = w.w.oc.extend({
		F: {
			visible: !0,
			zooms: [3, f.l.Z ? 20 : 18],
			opacity: 1,
			type: "overlay",
			zIndex: 6
		},
		B: function(a) {
			arguments.callee.oa.apply(this, arguments)
		},
		og: function(a) {
			return f.w.rv ? new f.w.rv(this, a) : ["imagelayer"]
		},
		getMap: function() {
			f.e.add(this.CLASS_NAME, "getMap");
			return this.Nh.map
		},
		show: function() {
			f.e.add(this.CLASS_NAME, "show");
			this.set("visible", !0);
			this.r("options")
		},
		getOpacity: function() {
			f.e.add(this.CLASS_NAME, "getOpacity");
			return this.get("opacity", null, !0)
		},
		setOpacity: function(a) {
			f.e.add(this.CLASS_NAME, "setOpacity");
			this.set("opacity", a)
		},
		getBounds: function() {
			f.e.add(this.CLASS_NAME, "getBounds");
			return this.get("bounds", null, !0).Ab()
		},
		setBounds: function(a) {
			f.e.add(this.CLASS_NAME, "setBounds");
			this.r("bounds", a);
			this.setOptions({
				bounds: a
			})
		},
		hide: function() {
			f.e.add(this.CLASS_NAME, "hide");
			this.set("visible", !1);
			this.r("options")
		},
		setOptions: function(a) {
			f.e.add(this.CLASS_NAME ? this.CLASS_NAME : "AMap.ImageLayer", "setOptions");
			this.zg(a);
			this.r("options")
		},
		getOptions: function() {
			f.e.add(this.CLASS_NAME, "getOptions");
			var a = {},
				b;
			for (b in this.F) this.F.hasOwnProperty(b) && (a[b] = this.get(b));
			return a
		},
		getElement: function() {
			return this.w.Q ? this.w.Q.Hb : this.w.$l ? this.w.$l.Hb : null
		}
	});
	w.w.rv = w.w.GE.extend({
		B: function(a) {
			a && a.url && (a.__source__ = a.url);
			arguments.callee.oa.apply(this, arguments);
			this.CLASS_NAME = "AMap.ImageLayer"
		},
		getImageUrl: function() {
			f.e.add(this.CLASS_NAME, "getImageUrl");
			return this.get("__source__")
		},
		setImageUrl: function(a) {
			f.e.add(this.CLASS_NAME, "setImageUrl");
			return this.set("__source__", a)
		}
	});
	w.w.p0 = w.w.GE.extend({
		B: function(a) {
			a && a.url && (a.__source__ = a.url);
			arguments.callee.oa.apply(this, arguments);
			this.CLASS_NAME = "AMap.VideoLayer"
		},
		getVideoUrl: function() {
			f.e.add(this.CLASS_NAME, "getVideoUrl");
			return this.get("__source__")
		},
		setVideoUrl: function(a) {
			f.e.add(this.CLASS_NAME, "setVideoUrl");
			return this.set("__source__", a)
		}
	});
	w.w.d_ = w.w.GE.extend({
		B: function(a) {
			a && a.canvas && (a.__source__ = a.canvas);
			arguments.callee.oa.apply(this, arguments);
			this.CLASS_NAME = "AMap.CanvasLayer"
		},
		getCanvas: function() {
			f.e.add(this.CLASS_NAME, "getCanvas");
			return this.get("__source__")
		},
		setCanvas: function(a) {
			f.e.add(this.CLASS_NAME, "setCanvas");
			return this.set("__source__", a)
		},
		reFresh: function() {
			this.w && (this.w.Vy = !0, this.w.set("display"))
		}
	});
	w.w.H_ = w.w.oc.extend({
		F: {
			visible: !0,
			zooms: [3, f.l.Z ? 20 : 18],
			type: "overlay",
			zIndex: 5,
			cursor: "pointer",
			alwaysRender: !0,
			stable: !0,
			bubble: !0,
			className: "amap-mass"
		},
		B: function(a, b) {
			this.CLASS_NAME = "AMap.MassMarks";
			f.e.cb(this.CLASS_NAME, b);
			f.l.Ll && (this.Fh = !0, b.size && (b.size = f.a.mn(b.size)), this.setData(a), f.a.Bb(this, b), b.style ? (this.zg(this.F, !0), this.setStyle(b.style)) : this.setStyle(this.F))
		},
		clear: function() {
			this.set("dataSources", "")
		},
		getStyle: function() {
			f.e.add(this.CLASS_NAME, "getStyle");
			return this.Yj
		},
		setStyle: function(a) {
			f.e.add(this.CLASS_NAME, "setStyle");
			if (a instanceof Array) {
				for (var b = 0; b < a.length; b += 1) a[b].rotation_ = Math.PI * (a[b].rotation || 0) / 180, a[b].size = f.a.mn(a[b].size), a.Fe = Math.max(a.Fe || 0, a[b].size.width + a[b].anchor.x), a.af = Math.max(a.Fe || 0, a[b].size.height + a[b].anchor.y);
				this.Yj = a
			} else a.size && (a.size = f.a.mn(a.size)), a.rotation_ = Math.PI * (a.rotation || 0) / 180, this.zg(a, !0), this.Yj = {
				anchor: this.get("anchor"),
				url: this.get("url"),
				size: this.get("size"),
				rotation_: this.get("rotation_")
			}, this.Yj.Fe = this.Yj.size.width + this.Yj.anchor.x, this.Yj.af = this.Yj.size.height + this.Yj.anchor.y;
			this.r("style")
		},
		setData: function(a) {
			f.e.add(this.CLASS_NAME, "setData");
			this.set("dataSources", a)
		},
		getData: function() {
			f.e.add(this.CLASS_NAME, "getData");
			return this.get("datas") || this.get("dataSources")
		},
		setMap: function(a) {
			f.e.add(this.CLASS_NAME, "setMap");
			f.l.Ll && (a ? (this.get("map") && this.get("map").Tj(this), this.set("map", a)) : this.get("map") && (this.get("map").Tj(this), this.set("map", null, !0), this.Fi = !1, this.bg && this.bg()))
		},
		og: function(a) {
			return f.gb.ay(["cvector"]) ? (a = new f.w.Gc(this, a), this.X("datas", a), a) : ["cvector"]
		}
	});
	w.w.KE = w.w.rv.extend({
		B: function(a, b, c) {
			f.e.cb("AMap.GroundImage", c);
			c = c || {};
			this.Gf = !0;
			var d = parseFloat(c.opacity);
			isNaN(d) && (d = 1);
			arguments.callee.oa.call(this, {
				url: a,
				bounds: b,
				clickable: c.clickable,
				opacity: d,
				map: c.map,
				zooms: c.zooms || [3, 20]
			});
			this.CLASS_NAME = "AMap.GroundImage"
		},
		xea: function(a) {
			this.get("bounds").contains(a.lnglat) && (a.target = this, this.r("click", a))
		},
		yea: function(a) {
			this.get("bounds").contains(a.lnglat) && (a.target = this, this.r("dblclick", a))
		},
		setMap: function(a) {
			f.e.add(this.CLASS_NAME, "setMap");
			a ? (this.get("map") && (this.get("map").Tj(this), this.XT && w.event.removeListener(this.XT), this.jU && w.event.removeListener(this.jU)), this.set("map", a)) : this.get("map") && (this.get("map").Tj(this), this.Nh.map = null)
		},
		mapChanged: function() {
			this.get("map") && (this.get("map").JB(this), this.get("clickable") && (this.XT = w.event.addListener(this.get("map"), "click", this.xea, this), this.jU = w.event.addListener(this.get("map"), "dblclick", this.yea, this)))
		}
	});
	w.D.Hg = f.ba.extend({
		ga: [f.ka, f.se,
		{
			za: f.a.za
		}],
		F: {
			extData: {},
			bubble: !1,
			clickable: !0,
			draggable: !1
		},
		B: function() {
			this.CA = f.a.Lb(this)
		},
		sla: function() {
			return this.CA
		},
		zka: function() {
			this.get("map", null, !0) && this.setMap(this.get("map"))
		},
		mapChanged: function() {
			this.get("map", null, !0) && this.get("map", null, !0).Zw(this)
		},
		BJ: function(a) {
			var b = 0;
			a && (b = "string" === typeof a ? Math.round(parseFloat(a) / 0.14929107086948487) : a);
			return b
		},
		setHeight: function(a) {
			this.height = a = a || 0;
			a = this.BJ(a);
			this.set("altitude", a)
		},
		getHeight: function() {
			return this.height
		},
		show: function() {
			f.e.add(this.CLASS_NAME, "show");
			this.set("visible", !0)
		},
		hide: function() {
			f.e.add(this.CLASS_NAME, "hide");
			this.set("visible", !1)
		},
		setMap: function(a) {
			f.e.add(this.CLASS_NAME, "setMap");
			a !== this.get("map", null, !0) && (a ? (this.get("map", null, !0) && this.get("map", null, !0).zu(this), this.set("map", a)) : this.get("map", null, !0) && (this.get("map", null, !0).zu(this), this.set("map", null, !0)))
		},
		getMap: function() {
			f.e.add(this.CLASS_NAME, "getMap");
			return this.get("map", null, !0)
		},
		setExtData: function(a) {
			f.e.add(this.CLASS_NAME, "setExtData");
			this.set("extData", a)
		},
		getExtData: function() {
			f.e.add(this.CLASS_NAME, "getExtData");
			return this.get("extData", null, !0)
		}
	});
	w.D.Gc = w.D.Hg.extend({
		B: function(a) {
			w.D.Gc.qc.B.apply(this, arguments)
		},
		show: function() {
			this.set("visible", !0);
			this.r("show", {
				type: "show",
				target: this
			})
		},
		hide: function() {
			this.set("visible", !1);
			this.r("hide", {
				type: "hide",
				target: this
			})
		},
		getVisible: function() {
			return this.get("visible", null, !0)
		},
		getOptions: function() {
			var a = {},
				b = "map zIndex strokeColor strokeOpacity strokeWeight strokeStyle strokeDasharray extData bubble clickable".split(" "),
				c = "isOutline outlineColor geodesic path lineJoin lineCap borderWeight showDir".split(" "),
				d = ["fillColor", "fillOpacity", "path", "lineJoin"],
				e = ["center", "radius"],
				g = ["bounds"],
				h = [];
			this instanceof w.D.Fb && (h = b.concat(c));
			this instanceof w.D.bc && (h = b.concat(d));
			this instanceof w.D.Pf && (h = b.concat(e).concat(d));
			this instanceof w.D.Fp && (h = b.concat(e).concat(d));
			this instanceof w.D.Jp && (h = b.concat(d).concat(g));
			for (b = 0; b < h.length; b += 1) a[h[b]] = this.get(h[b], null, !0);
			return a
		},
		setOptions: function(a) {
			a.hasOwnProperty("path") && (a.path && a.path.length || (a.path = []), a.path = this.za(a.path));
			a.center && (a.center = this.za(a.center));
			var b;
			a.hasOwnProperty("map") && (b = a.map, delete a.map);
			this.zg(a);
			void 0 !== b && (this.setMap(b), a.map = b);
			this.r("options");
			this.r("change", {
				type: "change",
				target: this
			})
		},
		setzIndex: function(a) {
			f.e.add(this.CLASS_NAME, "setzIndex");
			this.set("zIndex", a)
		},
		getzIndex: function() {
			f.e.add(this.CLASS_NAME, "getzIndex");
			return this.get("zIndex", null, !0)
		},
		setDraggable: function(a) {
			this.set("draggable", a)
		}
	});
	w.D.Fz = w.D.Gc.extend({
		F: {
			visible: !0,
			zIndex: 10,
			strokeColor: "#006600",
			strokeOpacity: 0.9,
			strokeWeight: 3,
			strokeStyle: "solid",
			strokeDasharray: [10, 5],
			lineJoin: "miter",
			path: []
		},
		B: function(a) {
			w.D.Fz.qc.B.apply(this, arguments)
		},
		setPath: function(a, b) {
			f.e.add(this.CLASS_NAME, "setPath");
			a && a.length || (a = []);
			a = this.za(a);
			this.set("path", a);
			this.r("change", {
				type: "change",
				target: this
			});
			b || this.r("setPath")
		},
		getPath: function() {
			f.e.add(this.CLASS_NAME, "getPath");
			return this.get("path", null, !0)
		},
		Qc: function() {
			var a = this.get("path");
			if (!a || !a.length) return null;
			a[0] instanceof f.V && (a = [a]);
			for (var b = new f.Wd(180, 90, -180, -90), c = 0; c < a.length; c += 1) for (var d = a[c], e = d.length - 1; 0 <= e; e -= 1) b.extend(d[e]);
			return b
		}
	});
	w.D.Fz.Fk({
		Qc: "getBounds"
	});
	w.D.Gg = f.ba.extend({
		ga: [f.ka, f.se],
		F: {
			size: new f.Uc(36, 36),
			imageOffset: new f.G(0, 0),
			image: f.A.qb + "/theme/v1.3/markers/0.png",
			imageSize: null
		},
		B: function(a) {
			this.CLASS_NAME = "AMap.Icon";
			f.e.cb(this.CLASS_NAME, a);
			a = a || {};
			a.size && (a.size = f.a.mn(a.size));
			a.imageSize && (a.imageSize = f.a.mn(a.imageSize));
			f.a.Bb(this, a);
			this.zg(this.F)
		},
		setImageSize: function(a) {
			f.e.add(this.CLASS_NAME, "setImageSize");
			a = f.a.mn(a);
			this.set("imageSize", a)
		},
		getImageSize: function() {
			f.e.add(this.CLASS_NAME, "getImageSize");
			return this.get("imageSize", null, !0)
		}
	});
	w.D.G_ = f.ba.extend({
		ga: [f.ka, f.se],
		F: {
			coords: [],
			type: ""
		},
		B: function(a) {
			this.CLASS_NAME = "AMap.MarkerShape";
			f.e.cb(this.CLASS_NAME, a);
			f.a.Bb(this, a);
			this.zg(this.F)
		}
	});
	w.D.ab = w.D.Hg.extend({
		F: {
			cursor: "pointer",
			visible: !0,
			zIndex: 100,
			angle: 0,
			textAlign: "left",
			verticalAlign: "top",
			autoRotation: !1,
			opacity: 1,
			offset: new f.G(-9, -31),
			size: new f.G(19, 33),
			raiseOnDrag: !1,
			topWhenClick: !1,
			topWhenMouseOver: !1,
			animation: "AMAP_ANIMATION_NONE"
		},
		B: function(a) {
			this.CLASS_NAME = "AMap.Marker";
			f.e.cb(this.CLASS_NAME, a);
			a = a || {};
			this.Gf = !0;
			this.a5 = f.a.Lb(this);
			a.position && (a.position = this.za(a.position));
			a.height && this.setHeight(a.height);
			f.a.Bb(this, a);
			f.l.ne && (this.F.angle = 0);
			this.zg(this.F, !0);
			this.mapChanged()
		},
		getId: function() {
			return this.a5
		},
		setRaiseOnDrag: function(a) {
			f.e.add(this.CLASS_NAME, "setRaiseOnDrag");
			this.set("raiseOnDrag", a)
		},
		setPosition: function(a, b) {
			f.e.add(this.CLASS_NAME, "setPosition");
			a = this.za(a);
			void 0 !== b && this.setHeight(b);
			this.set("position", a)
		},
		getBounds: function() {
			var a = this.getPosition().Ab();
			return new f.Wd(a, a.Ab())
		},
		mapChanged: function() {
			this.cj("zoom");
			var a = this.get("map", null, !0);
			a && (this.get("position", null, !0) || this.set("position", a.get("center")), a.Zw(this), this.X("zoom", a))
		},
		getZooms: function() {
			return this.get("zooms", null, !0)
		},
		zoomChanged: function() {
			var a = this.get("zooms", null, !0);
			if (a) {
				var b = this.get("zoom");
				b < a[0] || b > a[1] ? this.set("outOfZooms", !0) : this.set("outOfZooms", !1);
				this.D && this.D.Pea()
			}
		},
		getPosition: function() {
			f.e.add(this.CLASS_NAME, "getPosition");
			return this.get("position", null, !0)
		},
		setIcon: function(a) {
			f.e.add(this.CLASS_NAME, "setIcon");
			this.set("icon", a)
		},
		getIcon: function() {
			f.e.add(this.CLASS_NAME, "getIcon");
			return this.get("icon", null, !0)
		},
		setContent: function(a) {
			f.e.add(this.CLASS_NAME, "setContent");
			this.set("content", a)
		},
		getContent: function() {
			f.e.add(this.CLASS_NAME, "getContent");
			return this.get("content", null, !0)
		},
		getContentDom: function() {
			return this.get("contentDom", null, !0)
		},
		hide: function() {
			f.e.add(this.CLASS_NAME, "hide");
			this.set("visible", !1)
		},
		show: function() {
			f.e.add(this.CLASS_NAME, "show");
			this.set("visible", !0)
		},
		setCursor: function(a) {
			f.e.add(this.CLASS_NAME, "setCursor");
			this.set("cursor", a)
		},
		setRotation: function(a) {
			f.e.add(this.CLASS_NAME, "setRotation");
			f.l.ne || this.set("angle", a)
		},
		setAngle: function(a) {
			f.e.add(this.CLASS_NAME, "setAngle");
			f.l.ne || "number" !== typeof a || this.set("angle", a)
		},
		getAngle: function() {
			f.e.add(this.CLASS_NAME, "getAngle");
			return this.get("angle", null, !0)
		},
		setOffset: function(a) {
			f.e.add(this.CLASS_NAME, "setOffset");
			this.set("offset", a)
		},
		getOffset: function() {
			f.e.add(this.CLASS_NAME, "getOffset");
			return this.get("offset", null, !0)
		},
		setTextAlign: function(a) {
			f.e.add(this.CLASS_NAME, "setTextAlign");
			this.set("textAlign", a)
		},
		getTextAlign: function() {
			f.e.add(this.CLASS_NAME, "getTextAlign");
			return this.get("textAlign", null, !0)
		},
		setVerticalAlign: function(a) {
			f.e.add(this.CLASS_NAME, "setVerticalAlign");
			this.set("verticalAlign", a)
		},
		getVerticalAlign: function() {
			f.e.add(this.CLASS_NAME, "getVerticalAlign");
			return this.get("verticalAlign", null, !0)
		},
		setzIndex: function(a) {
			f.e.add(this.CLASS_NAME, "setzIndex");
			this.set("zIndex", a)
		},
		getzIndex: function() {
			f.e.add(this.CLASS_NAME, "getzIndex");
			return this.get("zIndex", null, !0)
		},
		setOpacity: function(a) {
			f.e.add(this.CLASS_NAME, "setOpacity");
			this.set("opacity", a)
		},
		setDraggable: function(a) {
			f.e.add(this.CLASS_NAME, "setDraggable");
			this.set("draggable", a)
		},
		getDraggable: function() {
			f.e.add(this.CLASS_NAME, "getDraggable");
			return this.get("draggable", null, !0)
		},
		moveTo: function(a, b, c) {
			f.e.add(this.CLASS_NAME, "moveTo");
			a = this.za(a);
			this.set("move", {
				nf: a,
				speed: b,
				ib: c
			})
		},
		moveAlong: function(a, b, c, d) {
			f.e.add(this.CLASS_NAME, "moveAlong");
			this.set("move", {
				nf: a,
				speed: b,
				ib: c,
				B$: d
			})
		},
		stopMove: function() {
			f.e.add(this.CLASS_NAME, "stopMove");
			this.set("move", !1)
		},
		pauseMove: function() {
			f.e.add(this.CLASS_NAME, "pauseMove");
			var a = this.get("move");
			if (!a) return !1;
			a.action = "pause";
			this.set("move", a);
			return !0
		},
		resumeMove: function() {
			f.e.add(this.CLASS_NAME, "resumeMove");
			var a = this.get("move");
			if (!a) return !1;
			a.action = "resume";
			this.set("move", a);
			return !0
		},
		setShadow: function(a) {
			f.e.add(this.CLASS_NAME, "setShadow");
			this.set("shadow", a)
		},
		getShadow: function() {
			f.e.add(this.CLASS_NAME, "getShadow");
			return this.get("shadow", null, !0)
		},
		setClickable: function(a) {
			f.e.add(this.CLASS_NAME, "setClickable");
			a !== this.getClickable() && this.set("clickable", a)
		},
		getClickable: function() {
			f.e.add(this.CLASS_NAME, "getClickable");
			return this.get("clickable", null, !0)
		},
		setTitle: function(a, b) {
			f.e.add(this.CLASS_NAME, "setTitle");
			"string" === typeof a && this.set("title", a, b)
		},
		getTitle: function() {
			f.e.add(this.CLASS_NAME, "getTitle");
			return this.get("title", null, !0)
		},
		setLabel: function(a) {
			f.e.add(this.CLASS_NAME, "setLabel");
			a && !f.a.Oo(a) && (a = f.extend({}, this.get("label"), a));
			this.set("label", a)
		},
		getLabel: function() {
			f.e.add(this.CLASS_NAME, "getLabel");
			return this.get("label", null, !0)
		},
		setTop: function(a, b) {
			f.e.add(this.CLASS_NAME, "setTop");
			this.set("isTop", a, b)
		},
		getTop: function() {
			f.e.add(this.CLASS_NAME, "getTop");
			return this.get("isTop", null, !0)
		},
		setShape: function(a, b) {
			f.e.add(this.CLASS_NAME, "setShape");
			this.set("shape", a, b)
		},
		getShape: function() {
			f.e.add(this.CLASS_NAME, "getShape");
			return this.get("shape", null, !0)
		},
		setAnimation: function(a, b) {
			f.e.add(this.CLASS_NAME, "setAnimation");
			this.set("animation", a, b)
		},
		getAnimation: function() {
			f.e.add(this.CLASS_NAME, "getAnimation");
			return this.get("animation", null, !0)
		},
		getMap: function() {
			f.e.add(this.CLASS_NAME, "getMap");
			return this.get("map", null, !0)
		},
		markOnAMAP: function(a) {
			f.e.add(this.CLASS_NAME, "markOnAMAP");
			a = a || {};
			var b = {};
			b.name = a.name || this.get("name", null, !0) || "";
			a = this.za(a.position) || this.get("position", null, !0);
			b.y = a.P;
			b.x = a.O;
			f.Cg.qp(f.Cg.gca(b))
		}
	});
	f.pw = {
		PX: 12,
		Jja: function() {},
		$R: function() {
			if (f.Xa && f.Xa.length) {
				var a = f.pw.qJ(JSON.stringify({
					mks: f.Xa,
					from: f.A.tba,
					key: f.A.key
				}));
				new f.Sa.XMLHttpRequest(f.A.qb + "/count", {
					$$: "data=" + a,
					dd: "POST"
				});
				f.Xa = []
			}
		},
		qJ: function(a) {
			for (var b = "", c = 0, d = a.length; c < d; c++) b += String.fromCharCode((a.charCodeAt(c) + 256) % 65535);
			return b
		},
		Bj: function(a) {
			for (var b = "", c = 0, d = a.length; c < d; c++) b += String.fromCharCode((a.charCodeAt(c) - 256 + 65535) % 65535);
			return b
		}
	};
	if (f.l.hx && !f.l.Z && (new Date).getHours() === f.pw.PX) {
		var sc = setInterval(function() {
			(new Date).getHours() !== f.pw.PX ? clearInterval(sc) : f.pw.$R()
		}, 6E3);
		f.event.U(window, "beforeunload", f.pw.$R)
	};
	w.D.cl = w.D.Hg.extend({
		F: {
			visible: !1,
			items: []
		},
		B: function(a) {
			this.CLASS_NAME = "AMap.ContextMenu";
			f.e.cb(this.CLASS_NAME, a);
			this.Gf = !0;
			f.a.Bb(this, a);
			this.F.items = [];
			this.zg(this.F)
		},
		addItem: function(a, b, c) {
			f.e.add(this.CLASS_NAME, "addItem");
			this.get("items").push({
				zZ: a,
				ib: b,
				xD: c
			});
			this.r("items")
		},
		removeItem: function(a, b) {
			f.e.add(this.CLASS_NAME, "removeItem");
			var c = this.get("items"),
				d, e;
			for (e = 0; e < c.length; e += 1) if (d = c[e], d.zZ === a && d.ib === b) {
				c.splice(e, 1);
				break
			}
			this.r("items")
		},
		open: function(a, b) {
			f.e.add(this.CLASS_NAME, "open");
			b = f.a.za(b);
			this.set("position", b);
			this.map ? this.map && this.map !== a && (this.map.zu(this), this.map = a, this.setMap(a)) : (this.map = a, this.setMap(a));
			this.r("open", {
				type: "open",
				target: this
			})
		},
		close: function() {
			f.e.add(this.CLASS_NAME, "close");
			this.setMap(null);
			this.map && (this.map = this.map.iC = null, this.r("close", {
				type: "close",
				target: this
			}))
		}
	});
	w.D.fe = w.D.Hg.extend({
		F: {
			visible: !0,
			offset: new f.G(0, 0),
			showShadow: !1,
			closeWhenClickMap: !1,
			retainWhenClose: !0,
			autoMove: !0,
			altitude: 0
		},
		B: function(a) {
			this.CLASS_NAME = "AMap.InfoWindow";
			f.e.cb(this.CLASS_NAME, a);
			a = a || {};
			this.Gf = !0;
			a && a.size && (a.size = f.a.mn(a.size));
			f.a.Bb(this, a);
			this.zg(this.F);
			a.position && this.set("position", f.a.za(a.position), !0);
			a.height && this.set("altitude", this.BJ(a.height), !0)
		},
		open: function(a, b, c) {
			f.e.add(this.CLASS_NAME, "open");
			b = f.a.za(b);
			if (a && !this.iE && (b = b || this.get("position", null, !0))) {
				this.r("change", {
					type: "change",
					target: this
				});
				c = this.BJ(c) || this.get("altitude");
				var d = this.get("map", null, !0);
				d && d === a ? (this.set("altitude", c, !0), this.set("position", b)) : (this.map = a, a.Il && a.Il.close(), this.set("position", b, !0), this.set("altitude", c, !0), this.setMap(a));
				this.r("open", {
					type: "open",
					target: this
				})
			}
		},
		close: function() {
			this.D && this.D.map && (f.e.add(this.CLASS_NAME, "close"), this.setMap(null), this.map = null, this.r("change", {
				type: "change",
				target: this
			}))
		},
		setContent: function(a) {
			f.e.add(this.CLASS_NAME, "setContent");
			this.set("content", a);
			this.r("change", {
				type: "change",
				target: this
			})
		},
		getContentU: function() {
			f.e.add(this.CLASS_NAME, "getContentU");
			return this.get("content", null, !0)
		},
		getContentDom: function() {
			return this.get("contentDom", null, !0)
		},
		getContent: function() {
			f.e.add(this.CLASS_NAME, "getContent");
			return this.get("content", null, !0)
		},
		setPosition: function(a) {
			f.e.add(this.CLASS_NAME, "setPosition");
			a = f.a.za(a);
			this.set("position", a);
			this.r("change", {
				type: "change",
				target: this
			})
		},
		setOffset: function(a) {
			f.e.add(this.CLASS_NAME, "setOffset");
			this.set("offset", a);
			this.r("change", {
				type: "change",
				target: this
			})
		},
		getPosition: function() {
			f.e.add(this.CLASS_NAME, "getPosition");
			return this.get("position", null, !0)
		},
		setSize: function(a) {
			f.e.add(this.CLASS_NAME, "setSize");
			a = f.a.mn(a);
			this.set("size", a);
			this.r("change", {
				type: "change",
				target: this
			})
		},
		getSize: function(a) {
			f.e.add(this.CLASS_NAME, "getSize");
			var b = this.get("size", null, !0);
			if (b) return b;
			if (this.D && !a) return new f.Uc(this.D.Tg.offsetWidth, this.D.Tg.offsetHeight)
		},
		getIsOpen: function() {
			f.e.add(this.CLASS_NAME, "getIsOpen");
			return !!this.get("map")
		}
	});
	w.D.Fb = w.D.Fz.extend({
		F: {
			isOutline: !1,
			outlineColor: "#000000",
			geodesic: !1,
			borderWeight: 1
		},
		B: function(a) {
			w.D.Fb.qc.B.apply(this, arguments);
			this.CLASS_NAME = "AMap.Polyline";
			f.e.cb(this.CLASS_NAME, a);
			this.Gf = !0;
			a = a || {};
			a.zIndex = "number" === typeof a.zIndex ? a.zIndex : 50;
			a.path && (a.path = this.za(a.path));
			f.a.Bb(this, a);
			this.setOptions(this.F)
		},
		getLength: function() {
			f.e.add(this.CLASS_NAME, "getLength");
			for (var a = this.get("path"), b = 0, c = 0; c < a.length - 1; c += 1) b += a[c].Md(a[c + 1]);
			return parseFloat(b.toFixed(2))
		}
	});
	(function(a) {
		function b(a, b, c, d) {
			if (1 <= a) return d;
			var e = 1 - a;
			return e * e * b + 2 * e * a * c + a * a * d
		}
		function c(a, b, c, d, e) {
			if (1 <= a) return e;
			var g = 3 * (c[0] - b[0]),
				h = 3 * (d[0] - c[0]) - g,
				s = 3 * (c[1] - b[1]);
			c = 3 * (d[1] - c[1]) - s;
			return [(e[0] - b[0] - g - h) * Math.pow(a, 3) + h * Math.pow(a, 2) + g * a + b[0], (e[1] - b[1] - s - c) * Math.pow(a, 3) + c * Math.pow(a, 2) + s * a + b[1]]
		}
		function d(a, c, d, e) {
			return [b(a, c[0], d[0], e[0]), b(a, c[1], d[1], e[1])]
		}
		function e(b, c) {
			c = a.a.za(c);
			return b.hy(c, 20).Zj()
		}
		function g(b, c) {
			a.a.isArray(c) && (c = new a.G(c[0], c[1]));
			return b.Ay(c, 20)
		}
		function h(b, g, h, n, p, q) {
			var r = null;
			if (b && h && h.length) {
				b = [b];
				b.push.apply(b, h);
				b.push(g);
				h = 0;
				for (r = b.length; h < r; h++) b[h] = e(n, b[h]);
				h = a.extend({
					tolerance: 4,
					interpolateNumLimit: [3, 300]
				}, q);
				q = h.tolerance;
				h = h.interpolateNumLimit;
				q = Math.max(2, q);
				for (var s = r = 0, u = 0, v = b.length; u < v - 1; u++) var x = b[u],
					t = b[u + 1],
					r = r + Math.abs(t[0] - x[0]),
					s = s + Math.abs(t[1] - x[1]);
				a: {
					p = Math.min(h[1], Math.max(h[0], Math.round(Math.max(r, s) / p / q)));
					q = null;
					switch (b.length) {
					case 3:
						q = d;
						break;
					case 4:
						q = c;
						break;
					default:
						r = null;
						break a
					}
					h = [];
					r = [0].concat(b);
					for (s = 1; s < p - 2; s++) r[0] = s / p, h.push(q.apply(null, r));
					h.push(b[b.length - 1]);
					r = h
				}
			}
			return r || [e(n, g)]
		}
		a.rN = {
			Rma: d,
			Mka: c,
			cV: function(a, b, c, d) {
				var e, g, r = [];
				e = 0;
				for (g = a.length; e < g; e += 1) r.push.apply(r, h(a[e - 1], a[e], a[e].controlPoints, b, c, d));
				return r
			},
			Xba: function(a, b, c, d) {
				a = this.cV(a, b, c, d);
				c = [];
				d = 0;
				for (var e = a.length; d < e; d++) c.push(g(b, a[d]));
				return c
			}
		}
	})(f);
	w.D.iv = w.D.Fb.extend({
		F: {
			tolerance: 4,
			interpolateNumLimit: [3, 300]
		},
		B: function(a) {
			w.D.iv.qc.B.apply(this, arguments);
			this.CLASS_NAME = "AMap.BezierCurve";
			f.e.cb(this.CLASS_NAME, a)
		},
		getLength: function() {
			f.e.add(this.CLASS_NAME, "getLength");
			this.get("map");
			var a = this.getInterpolateLngLats();
			return f.nv.distanceOfLine(a)
		},
		getInterpolateLngLats: function() {
			var a = this.get("map");
			return f.rN.Xba(this.get("path"), a && a.Lm || f.Bg.JE, Math.pow(2, 2), this.F)
		},
		getSerializedPath: function() {
			f.e.add(this.CLASS_NAME, "getSerializedPath");
			for (var a = this.get("path", null, !0), b = [], c = 0, d = a.length; c < d; c++) {
				var e = a[c];
				if (e instanceof f.V) {
					var g = [];
					if (e.controlPoints) for (var h = 0, k = e.controlPoints.length; h < k; h++) g.push(e.controlPoints[h].PJ()), g.push(e.controlPoints[h].MJ());
					g.push(e.PJ());
					g.push(e.MJ());
					b.push(g)
				} else b.push(e)
			}
			return b
		},
		za: function(a) {
			var b = typeof a[0];
			if (f.a.isArray(a) && "object" === b) {
				for (b = 0; b < a.length; b += 1) a[b] = this.s7(a[b]);
				return a
			}
			return [this.zma(a)]
		},
		s7: function(a) {
			var b;
			if (a instanceof f.V) b = a;
			else {
				b = typeof a[0];
				var c, d, e = [];
				if ("string" === b || "number" === b) {
					d = a.length;
					if (d % 2) throw Error("LngLat number should be even, now it's " + d);
					b = new f.V(a[d - 2], a[d - 1]);
					c = 0;
					for (d -= 2; c < d; c += 2) e.push(new f.V(a[c], a[c + 1]))
				} else if (f.a.isArray(a[0])) for (d = a.length, b = new f.V(a[d - 1][0], a[d - 1][1]), c = 0, d -= 1; c < d; c++) e.push(new f.V(a[c][0], a[c][1]));
				else throw Error("AMap.LngLat expected, now it's " + a);
				b && e.length && (b.controlPoints = f.a.za(e))
			}
			if (b.controlPoints && 2 < b.controlPoints.length) throw Error("Control Points Number should be 1 or 2 !");
			return b
		}
	});
	w.D.bc = w.D.Fz.extend({
		B: function(a) {
			w.D.bc.qc.B.apply(this, arguments);
			this.CLASS_NAME = "AMap.Polygon";
			f.e.cb(this.CLASS_NAME, a);
			this.Gf = !0;
			a = a || {};
			a.zIndex = "number" === typeof a.zIndex ? a.zIndex : 10;
			a.path && (a.path = this.za(a.path));
			f.a.Bb(this, f.extend({
				fillColor: "#FFAA00",
				fillOpacity: 0.9
			}, a));
			this.setOptions(this.F)
		},
		XJ: function(a) {
			var b = 6378137 * Math.PI / 180,
				c = 0,
				d = a.length;
			if (3 > d) return 0;
			for (var e = 0; e < d - 1; e += 1) var g = a[e],
				h = a[e + 1],
				k = g.O * b * Math.cos(g.P * Math.PI / 180),
				g = g.P * b,
				l = h.O * b * Math.cos(h.P * Math.PI / 180),
				c = c + (k * h.P * b - l * g);
			e = a[e];
			a = a[0];
			d = e.O * b * Math.cos(e.P * Math.PI / 180);
			e = e.P * b;
			h = a.O * b * Math.cos(a.P * Math.PI / 180);
			c += d * a.P * b - h * e;
			return 0.5 * Math.abs(c)
		},
		getArea: function() {
			f.e.add(this.CLASS_NAME, "getArea");
			var a = this.get("path", null, !0),
				b;
			if (!a.length || a[0] instanceof f.V) b = this.XJ(a);
			else {
				b = this.XJ(a[0]);
				for (var c = 1; c < a.length; c += 1) b -= this.XJ(a[c])
			}
			return Number(b.toFixed(2))
		},
		toString: function() {
			f.e.add(this.CLASS_NAME, "toString");
			return this.get("path").join(";")
		},
		contains: function(a) {
			f.e.add(this.CLASS_NAME, "contains");
			a = f.a.za(a);
			var b = this.get("path");
			b.length && b[0] instanceof f.V && (b = [b]);
			a = [a.O, a.P];
			for (var c, d = 0, e = b.length; d < e && (c = this.q$(b[d]), f.Mc.No(c) || c.reverse(), c = f.Mc.md(a, c, 0 === d ? !0 : !1), 0 < d && (c = !c), c); d += 1);
			return c
		},
		q$: function(a) {
			for (var b = [], c = 0; c < a.length; c += 1) b.push([a[c].O, a[c].P]);
			return b
		}
	});
	w.D.Pf = w.D.Gc.extend({
		F: {
			visible: !0,
			zIndex: 10,
			strokeColor: "#006600",
			strokeOpacity: 0.9,
			strokeWeight: 3,
			strokeStyle: "solid",
			strokeDasharray: [10, 5],
			radius: 1E3,
			fillColor: "#006600",
			fillOpacity: 0.9,
			unit: "miter"
		},
		B: function(a) {
			w.D.Pf.qc.B.apply(this, arguments);
			this.CLASS_NAME = this.CLASS_NAME || "AMap.Circle";
			f.e.cb(this.CLASS_NAME, a);
			a = a || {};
			a.center && (a.center = f.a.za(a.center));
			a.zIndex = "number" === typeof a.zIndex ? a.zIndex : 10;
			f.a.Kl(a.radius, "string") && (a.radius = parseFloat(a.radius), isNaN(a.radius) && delete a.radius);
			f.a.Bb(this, a);
			this.Gf = this.F.center ? !0 : !1;
			this.setOptions(this.F)
		},
		setCenter: function(a, b) {
			f.e.add(this.CLASS_NAME, "setCenter");
			(a = f.a.za(a)) && a instanceof f.V && (this.set("center", a), this.r("change", {
				type: "change",
				target: this
			}), this.Gf || (this.Gf = !0, this.get("map") && this.get("map").r("overlays")), b || this.r("setCenter"))
		},
		getCenter: function() {
			f.e.add(this.CLASS_NAME, "getCenter");
			return this.get("center", null, !0)
		},
		setRadius: function(a, b) {
			f.e.add(this.CLASS_NAME, "setRadius");
			this.set("radius", a);
			this.r("change", {
				type: "change",
				target: this
			});
			b || this.r("setRadius")
		},
		getRadius: function() {
			f.e.add(this.CLASS_NAME, "getRadius");
			return this.get("radius", null, !0)
		},
		getBounds: function() {
			var a = this.get("center"),
				b = this.get("radius");
			if (!a) return null;
			var c = a.offset(-b, -b),
				a = a.offset(b, b);
			return new f.Wd(c, a)
		},
		contains: function(a) {
			f.e.add(this.CLASS_NAME, "contains");
			return this.get("center").Md(a) <= this.get("radius") ? !0 : !1
		}
	});
	w.D.tN = w.D.Pf.extend({
		B: function(a) {
			a = a || {};
			a.unit = "px";
			void 0 === a.radius ? a.radius = 20 : f.a.Kl(a.radius, "string") && (a.radius = parseFloat(a.radius), isNaN(a.radius) && (a.radius = 20));
			this.CLASS_NAME = "AMap.CircleMarker";
			w.D.tN.qc.B.apply(this, arguments)
		},
		getBounds: function() {
			var a = this.getCenter();
			return new f.Wd(a, a.Ab())
		},
		contains: function(a) {
			f.e.add(this.CLASS_NAME, "contains");
			var b = this.getMap();
			if (!b) return !1;
			var c = this.get("center");
			return c.Md(a) <= this.get("radius") * b.getResolution(c) ? !0 : !1
		}
	});
	var tc = f.ba.extend({
		B: function(a) {
			var b = Array(3),
				c;
			c = a instanceof Array ? a : a instanceof f.fj || a instanceof f.Ea ? a.elements : arguments;
			b[0] = c[0] || 0;
			b[1] = c[1] || 0;
			b[2] = c[2] || 0;
			this.elements = b
		},
		length: function() {
			return Math.sqrt(this.AW())
		},
		AW: function() {
			var a = this.elements;
			return a[0] * a[0] + a[1] * a[1] + a[2] * a[2]
		},
		normalize: function() {
			var a = this.elements,
				b = a[0],
				c = a[1],
				d = a[2],
				e = Math.sqrt(b * b + c * c + d * d);
			if (e) {
				if (1 === e) return this
			} else return a[0] = 0, a[1] = 0, a[2] = 0, this;
			e = 1 / e;
			a[0] = b * e;
			a[1] = c * e;
			a[2] = d * e;
			return this
		},
		Ab: function() {
			return new f.Ea(this)
		},
		copy: function(a) {
			var b = this.elements;
			a = a.elements;
			b[0] = a[0];
			b[1] = a[1];
			b[2] = a[2];
			return this
		},
		set: function(a, b, c) {
			var d = this.elements;
			d[0] = a;
			d[1] = b;
			d[2] = c
		},
		rb: function(a) {
			var b = this.elements;
			a = a.elements;
			return b[0] === a[0] && b[1] === a[1] && b[2] === a[2]
		},
		nr: function(a) {
			var b = this.elements;
			b[0] *= a;
			b[1] *= a;
			b[2] *= a;
			return this
		},
		add: function(a) {
			var b = this.elements;
			a = a.elements;
			b[0] += a[0];
			b[1] += a[1];
			b[2] += a[2];
			return this
		},
		F9: function(a, b) {
			var c = a.elements,
				d = b.elements,
				e = this.elements;
			e[0] = c[0] + d[0];
			e[1] = c[1] + d[1];
			e[2] = c[2] + d[2];
			return this
		},
		sub: function(a) {
			a = a.elements;
			var b = this.elements;
			b[0] -= a[0];
			b[1] -= a[1];
			b[2] -= a[2];
			return this
		},
		Mu: function(a, b) {
			var c = a.elements,
				d = b.elements,
				e = this.elements;
			e[0] = c[0] - d[0];
			e[1] = c[1] - d[1];
			e[2] = c[2] - d[2];
			return this
		},
		UI: function(a) {
			a = a.elements;
			var b = this.elements;
			b[0] = b[1] * a[2] - b[2] * a[1];
			b[1] = b[2] * a[0] - b[0] * a[2];
			b[2] = b[0] * a[1] - b[1] * a[0];
			return this
		},
		zt: function(a, b) {
			var c = a.elements,
				d = b.elements,
				e = this.elements;
			e[0] = c[1] * d[2] - c[2] * d[1];
			e[1] = c[2] * d[0] - c[0] * d[2];
			e[2] = c[0] * d[1] - c[1] * d[0];
			return this
		},
		Cj: function(a) {
			a = a.elements;
			var b = this.elements;
			return b[0] * a[0] + b[1] * a[1] + b[2] * a[2]
		},
		Md: function(a) {
			return Math.sqrt(this.pU(a))
		},
		pU: function(a) {
			var b = a.elements,
				c = this.elements;
			a = c[0] - b[0];
			var d = c[1] - b[1],
				b = c[2] - b[2];
			return a * a + d * d + b * b
		},
		Ve: function(a) {
			var b = this.elements[0],
				c = this.elements[1],
				d = this.elements[2];
			a = a.elements;
			var e = 1 / (a[3] * b + a[7] * c + a[11] * d + a[15]);
			this.elements[0] = (a[0] * b + a[4] * c + a[8] * d + a[12]) * e;
			this.elements[1] = (a[1] * b + a[5] * c + a[9] * d + a[13]) * e;
			this.elements[2] = (a[2] * b + a[6] * c + a[10] * d + a[14]) * e;
			return this
		}
	});
	f.Ea = tc;
	f.Ea.Fk({
		Cj: "dot",
		Ab: "clone",
		add: "add",
		sub: "sub",
		F9: "addVectors",
		Mu: "subVectors",
		zt: "crossVectors",
		normalize: "normalize",
		length: "length"
	});
	var uc = f.ba.extend({
		B: function(a) {
			var b = Array(4),
				c;
			c = a instanceof Array ? a : arguments;
			b[0] = c[0];
			b[1] = c[1];
			b[2] = c[2];
			b[3] = c[3] || 1;
			this.elements = b
		},
		copy: function(a) {
			var b = this.elements;
			a = a.elements;
			b[0] = a[0];
			b[1] = a[1];
			b[2] = a[2];
			b[3] = void 0 !== a[3] ? a[3] : 1;
			return this
		},
		multiply: function(a) {
			var b = this.elements;
			b[0] *= a;
			b[1] *= a;
			b[2] *= a;
			b[3] *= a
		},
		Ve: function(a) {
			var b = this.elements[0],
				c = this.elements[1],
				d = this.elements[2],
				e = this.elements[3];
			a = a.elements;
			this.elements[0] = a[0] * b + a[4] * c + a[8] * d + a[12] * e;
			this.elements[1] = a[1] * b + a[5] * c + a[9] * d + a[13] * e;
			this.elements[2] = a[2] * b + a[6] * c + a[10] * d + a[14] * e;
			this.elements[3] = a[3] * b + a[7] * c + a[11] * d + a[15] * e;
			return this
		}
	});
	f.fj = uc;

	function vc(a, b) {
		this.ku = void 0 !== a ? a : new f.Ea(1, 0, 0);
		this.px = void 0 !== b ? b : 0
	}
	f.ms = vc;
	vc.prototype = {
		set: function(a, b) {
			this.ku.copy(a);
			this.px = b;
			return this
		},
		normalize: function() {
			var a = 1 / this.ku.length();
			this.ku.nr(a);
			this.px *= a;
			return this
		},
		pC: function(a) {
			return this.ku.Cj(a) + this.px
		}
	};

	function wc(a, b, c, d, e) {
		a.ku.set(b, c, d);
		a.px = e;
		return a
	};

	function xc(a, b, c, d, e, g) {
		this.xy = [void 0 !== a ? a : new f.ms, void 0 !== b ? b : new f.ms, void 0 !== c ? c : new f.ms, void 0 !== d ? d : new f.ms, void 0 !== e ? e : new f.ms, void 0 !== g ? g : new f.ms]
	}
	f.zN = xc;
	xc.prototype = {
		set: function(a, b, c, d, e, g) {
			var h = this.xy;
			h[0].copy(a);
			h[1].copy(b);
			h[2].copy(c);
			h[3].copy(d);
			h[4].copy(e);
			h[5].copy(g);
			return this
		},
		Ab: function() {
			return (new f.zN).copy(this)
		},
		copy: function(a) {
			for (var b = this.xy, c = 0; 6 > c; c++) b[c].copy(a.xy[c]);
			return this
		},
		WC: function() {
			var a = new f.Ea,
				b = new f.Ea,
				c = a.elements,
				d = b.elements;
			return function(e) {
				var g = this.xy,
					h = e.max.elements;
				e = e.min.elements;
				for (var k = 0; 6 > k; k++) {
					var l = g[k],
						m = l.ku.elements;
					c[0] = 0 < m[0] ? e[0] : h[0];
					d[0] = 0 < m[0] ? h[0] : e[0];
					c[1] = 0 < m[1] ? e[1] : h[1];
					d[1] = 0 < m[1] ? h[1] : e[1];
					c[2] = 0 < m[2] ? e[2] : h[2];
					d[2] = 0 < m[2] ? h[2] : e[2];
					m = l.pC(a);
					l = l.pC(b);
					if (0 > m && 0 > l) return !1
				}
				return !0
			}
		}()
	};
	(function(a) {
		function b(a) {
			this.elements = a || [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
		}
		a.J_ = function(a) {
			this.elements = [a.elements[0], a.elements[1], a.elements[2], a.elements[4], a.elements[5], a.elements[6], a.elements[8], a.elements[9], a.elements[10]]
		};
		b.prototype.iM = function() {
			var a = this.elements;
			a[0] = 1;
			a[4] = 0;
			a[8] = 0;
			a[12] = 0;
			a[1] = 0;
			a[5] = 1;
			a[9] = 0;
			a[13] = 0;
			a[2] = 0;
			a[6] = 0;
			a[10] = 1;
			a[14] = 0;
			a[3] = 0;
			a[7] = 0;
			a[11] = 0;
			a[15] = 1
		};
		b.prototype.set = function(a) {
			var b, e;
			b = a.elements;
			e = this.elements;
			if (b !== e) {
				for (a = 0; 16 > a; ++a) e[a] = b[a];
				return this
			}
		};
		b.prototype.toFixed = function(b) {
			for (var d = this.elements, e = 0; 16 > e; ++e) d[e] = a.a.Pc(d[e], b);
			return this
		};
		b.prototype.concat = function(a) {
			var b, e, g, h, k, l, m;
			e = b = this.elements;
			g = a.elements;
			if (b === g) for (g = Array(16), a = 0; 16 > a; ++a) g[a] = b[a];
			for (a = 0; 4 > a; a++) h = e[a], k = e[a + 4], l = e[a + 8], m = e[a + 12], b[a] = h * g[0] + k * g[1] + l * g[2] + m * g[3], b[a + 4] = h * g[4] + k * g[5] + l * g[6] + m * g[7], b[a + 8] = h * g[8] + k * g[9] + l * g[10] + m * g[11], b[a + 12] = h * g[12] + k * g[13] + l * g[14] + m * g[15];
			return this
		};
		b.prototype.multiply = b.prototype.concat;
		b.prototype.If = function(b) {
			var d = this.elements;
			b = b.elements;
			var e = new a.fj,
				g = e.elements;
			g[0] = b[0] * d[0] + b[1] * d[4] + b[2] * d[8] + b[3] * d[12];
			g[1] = b[0] * d[1] + b[1] * d[5] + b[2] * d[9] + b[3] * d[13];
			g[2] = b[0] * d[2] + b[1] * d[6] + b[2] * d[10] + b[3] * d[14];
			g[3] = b[0] * d[3] + b[1] * d[7] + b[2] * d[11] + b[3] * d[15];
			return e
		};
		b.prototype.Lha = function() {
			var a, b;
			a = this.elements;
			b = a[1];
			a[1] = a[4];
			a[4] = b;
			b = a[2];
			a[2] = a[8];
			a[8] = b;
			b = a[3];
			a[3] = a[12];
			a[12] = b;
			b = a[6];
			a[6] = a[9];
			a[9] = b;
			b = a[7];
			a[7] = a[13];
			a[13] = b;
			b = a[11];
			a[11] = a[14];
			a[14] = b;
			return this
		};
		b.prototype.Rga = function(a) {
			var b, e, g;
			b = a.elements;
			a = this.elements;
			e = Array(16);
			e[0] = b[5] * b[10] * b[15] - b[5] * b[11] * b[14] - b[9] * b[6] * b[15] + b[9] * b[7] * b[14] + b[13] * b[6] * b[11] - b[13] * b[7] * b[10];
			e[4] = -b[4] * b[10] * b[15] + b[4] * b[11] * b[14] + b[8] * b[6] * b[15] - b[8] * b[7] * b[14] - b[12] * b[6] * b[11] + b[12] * b[7] * b[10];
			e[8] = b[4] * b[9] * b[15] - b[4] * b[11] * b[13] - b[8] * b[5] * b[15] + b[8] * b[7] * b[13] + b[12] * b[5] * b[11] - b[12] * b[7] * b[9];
			e[12] = -b[4] * b[9] * b[14] + b[4] * b[10] * b[13] + b[8] * b[5] * b[14] - b[8] * b[6] * b[13] - b[12] * b[5] * b[10] + b[12] * b[6] * b[9];
			e[1] = -b[1] * b[10] * b[15] + b[1] * b[11] * b[14] + b[9] * b[2] * b[15] - b[9] * b[3] * b[14] - b[13] * b[2] * b[11] + b[13] * b[3] * b[10];
			e[5] = b[0] * b[10] * b[15] - b[0] * b[11] * b[14] - b[8] * b[2] * b[15] + b[8] * b[3] * b[14] + b[12] * b[2] * b[11] - b[12] * b[3] * b[10];
			e[9] = -b[0] * b[9] * b[15] + b[0] * b[11] * b[13] + b[8] * b[1] * b[15] - b[8] * b[3] * b[13] - b[12] * b[1] * b[11] + b[12] * b[3] * b[9];
			e[13] = b[0] * b[9] * b[14] - b[0] * b[10] * b[13] - b[8] * b[1] * b[14] + b[8] * b[2] * b[13] + b[12] * b[1] * b[10] - b[12] * b[2] * b[9];
			e[2] = b[1] * b[6] * b[15] - b[1] * b[7] * b[14] - b[5] * b[2] * b[15] + b[5] * b[3] * b[14] + b[13] * b[2] * b[7] - b[13] * b[3] * b[6];
			e[6] = -b[0] * b[6] * b[15] + b[0] * b[7] * b[14] + b[4] * b[2] * b[15] - b[4] * b[3] * b[14] - b[12] * b[2] * b[7] + b[12] * b[3] * b[6];
			e[10] = b[0] * b[5] * b[15] - b[0] * b[7] * b[13] - b[4] * b[1] * b[15] + b[4] * b[3] * b[13] + b[12] * b[1] * b[7] - b[12] * b[3] * b[5];
			e[14] = -b[0] * b[5] * b[14] + b[0] * b[6] * b[13] + b[4] * b[1] * b[14] - b[4] * b[2] * b[13] - b[12] * b[1] * b[6] + b[12] * b[2] * b[5];
			e[3] = -b[1] * b[6] * b[11] + b[1] * b[7] * b[10] + b[5] * b[2] * b[11] - b[5] * b[3] * b[10] - b[9] * b[2] * b[7] + b[9] * b[3] * b[6];
			e[7] = b[0] * b[6] * b[11] - b[0] * b[7] * b[10] - b[4] * b[2] * b[11] + b[4] * b[3] * b[10] + b[8] * b[2] * b[7] - b[8] * b[3] * b[6];
			e[11] = -b[0] * b[5] * b[11] + b[0] * b[7] * b[9] + b[4] * b[1] * b[11] - b[4] * b[3] * b[9] - b[8] * b[1] * b[7] + b[8] * b[3] * b[5];
			e[15] = b[0] * b[5] * b[10] - b[0] * b[6] * b[9] - b[4] * b[1] * b[10] + b[4] * b[2] * b[9] + b[8] * b[1] * b[6] - b[8] * b[2] * b[5];
			g = b[0] * e[0] + b[1] * e[4] + b[2] * e[8] + b[3] * e[12];
			if (0 === g) return this;
			g = 1 / g;
			for (b = 0; 16 > b; b++) a[b] = e[b] * g;
			return this
		};
		b.prototype.Nj = function() {
			return (new b).Rga(this)
		};
		b.prototype.FY = function(a, b, e, g, h) {
			var k, l, m, n;
			if (a === b || e === g || 1 === h) throw "null frustum";
			l = 1 / (b - a);
			m = 1 / (g - e);
			n = 1 / (1 - h);
			k = this.elements;
			k[0] = 2 * l;
			k[1] = 0;
			k[2] = 0;
			k[3] = 0;
			k[4] = 0;
			k[5] = 2 * m;
			k[6] = 0;
			k[7] = 0;
			k[8] = 0;
			k[9] = 0;
			k[10] = -2 * n;
			k[11] = 0;
			k[12] = -(b + a) * l;
			k[13] = -(g + e) * m;
			k[14] = -(1 + h) * n;
			k[15] = 1;
			return this
		};
		b.prototype.Pga = function(a, b, e, g, h, k) {
			var l, m, n, p;
			if (a === b || g === e || h === k) throw "null frustum";
			if (0 >= h) throw "near <= 0";
			if (0 >= k) throw "far <= 0";
			m = 1 / (b - a);
			n = 1 / (g - e);
			p = 1 / (k - h);
			l = this.elements;
			l[0] = 2 * h * m;
			l[1] = 0;
			l[2] = 0;
			l[3] = 0;
			l[4] = 0;
			l[5] = 2 * h * n;
			l[6] = 0;
			l[7] = 0;
			l[8] = (b + a) * m;
			l[9] = (g + e) * n;
			l[10] = -(k + h) * p;
			l[11] = -1;
			l[12] = 0;
			l[13] = 0;
			l[14] = -2 * h * k * p;
			l[15] = 0;
			return this
		};
		b.prototype.KU = function(a, d, e, g, h, k) {
			return this.concat((new b).Pga(a, d, e, g, h, k))
		};
		b.prototype.Vga = function(a, b, e, g) {
			var h, k;
			if (e === g || 0 === b) throw "null frustum";
			if (0 >= e) throw "near <= 0";
			if (0 >= g) throw "far <= 0";
			a /= 2;
			k = Math.sin(a);
			if (0 === k) throw "null frustum";
			h = 1 / (g - e);
			k = Math.cos(a) / k;
			a = this.elements;
			a[0] = k / b;
			a[1] = 0;
			a[2] = 0;
			a[3] = 0;
			a[4] = 0;
			a[5] = k;
			a[6] = 0;
			a[7] = 0;
			a[8] = 0;
			a[9] = 0;
			a[10] = -(g + e) * h;
			a[11] = -1;
			a[12] = 0;
			a[13] = 0;
			a[14] = -2 * e * g * h;
			a[15] = 0
		};
		b.prototype.Ir = function(a, b, e) {
			var g = this.elements;
			g[0] = a;
			g[4] = 0;
			g[8] = 0;
			g[12] = 0;
			g[1] = 0;
			g[5] = b;
			g[9] = 0;
			g[13] = 0;
			g[2] = 0;
			g[6] = 0;
			g[10] = e;
			g[14] = 0;
			g[3] = 0;
			g[7] = 0;
			g[11] = 0;
			g[15] = 1;
			return this
		};
		b.prototype.scale = function(a, b, e) {
			var g = this.elements;
			g[0] *= a;
			g[4] *= b;
			g[8] *= e;
			g[1] *= a;
			g[5] *= b;
			g[9] *= e;
			g[2] *= a;
			g[6] *= b;
			g[10] *= e;
			g[3] *= a;
			g[7] *= b;
			g[11] *= e;
			return this
		};
		b.prototype.IY = function(a, b, e) {
			var g = this.elements;
			g[12] = a;
			g[13] = b;
			g[14] = e;
			return this
		};
		b.prototype.translate = function(a, b, e) {
			var g = this.elements;
			g[12] += g[0] * a + g[4] * b + g[8] * e;
			g[13] += g[1] * a + g[5] * b + g[9] * e;
			g[14] += g[2] * a + g[6] * b + g[10] * e;
			g[15] += g[3] * a + g[7] * b + g[11] * e;
			return this
		};
		b.prototype.Ju = function(a, b, e, g) {
			var h, k, l, m, n, p, q, r;
			a = Math.PI * a / 180;
			h = this.elements;
			k = Math.sin(a);
			a = Math.cos(a);
			0 !== b && 0 === e && 0 === g ? (0 > b && (k = -k), h[0] = 1, h[4] = 0, h[8] = 0, h[12] = 0, h[1] = 0, h[5] = a, h[9] = -k, h[13] = 0, h[2] = 0, h[6] = k, h[10] = a, h[14] = 0, h[3] = 0, h[7] = 0, h[11] = 0) : 0 === b && 0 !== e && 0 === g ? (0 > e && (k = -k), h[0] = a, h[4] = 0, h[8] = k, h[12] = 0, h[1] = 0, h[5] = 1, h[9] = 0, h[13] = 0, h[2] = -k, h[6] = 0, h[10] = a, h[14] = 0, h[3] = 0, h[7] = 0, h[11] = 0) : 0 === b && 0 === e && 0 !== g ? (0 > g && (k = -k), h[0] = a, h[4] = -k, h[8] = 0, h[12] = 0, h[1] = k, h[5] = a, h[9] = 0, h[13] = 0, h[2] = 0, h[6] = 0, h[10] = 1, h[14] = 0, h[3] = 0, h[7] = 0, h[11] = 0) : (l = Math.sqrt(b * b + e * e + g * g), 1 !== l && (l = 1 / l, b *= l, e *= l, g *= l), l = 1 - a, m = b * e, n = e * g, p = g * b, q = b * k, r = e * k, k *= g, h[0] = b * b * l + a, h[1] = m * l + k, h[2] = p * l - r, h[3] = 0, h[4] = m * l - k, h[5] = e * e * l + a, h[6] = n * l + q, h[7] = 0, h[8] = p * l + r, h[9] = n * l - q, h[10] = g * g * l + a, h[11] = 0, h[12] = 0, h[13] = 0, h[14] = 0);
			h[15] = 1;
			return this
		};
		b.prototype.rotate = function(a, d, e, g) {
			return this.concat((new b).Ju(a, d, e, g))
		};
		b.prototype.aM = function(a) {
			return this.rotate(a, 1, 0, 0)
		};
		b.prototype.bM = function(a) {
			return this.rotate(a, 0, 1, 0)
		};
		b.prototype.cM = function(a) {
			return this.rotate(a, 0, 0, 1)
		};
		a.ge = b
	})(f);
	w.D.Fp = w.D.bc.extend({
		F: {
			visible: !0,
			zIndex: 10,
			strokeColor: "#006600",
			strokeOpacity: 0.9,
			strokeWeight: 3,
			strokeStyle: "solid",
			strokeDasharray: [10, 5],
			radius: [1E3, 1E3],
			fillColor: "#006600",
			fillOpacity: 0.9
		},
		B: function() {
			var a = this,
				b = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
				b = f.extend(this.F, b),
				c = this.lo(b);
			b.path = c;
			w.D.Fp.qc.B.call(this, b);
			this.set("path", c);
			this.get("center") && this.get("map") || (this.Gf = !1);
			this.CLASS_NAME = "AMap.Ellipse";
			f.e.cb(this.CLASS_NAME, b);
			this.on("movepoly", function(b) {
				var c = a.get("map");
				b = c.de(c.Jb(a.get("center")).add(b.tu));
				"3D" === c.view.type && a.set("deltaPos", [0, 0]);
				a.set("center", b)
			})
		},
		lo: function() {
			var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
				b = [],
				c = a.center || this.get("center"),
				d = a.map || this.get("map");
			if (c && d) for (var c = f.a.za(c), e = a.radius || this.get("radius"), g = d.Jb(c), a = g.x, g = g.y, h = f.a.map(e, function(a) {
				return a / (d.view.getResolution(20) * Math.cos(c.P * Math.PI / 180))
			}), e = h[0], h = h[1], k = f.l.Z, l = (k ? 4 : 1) * Math.PI / 180, m = 0, k = k ? 89 : 359; m <= k; m++) {
				var n = m * l,
					n = {
						x: a + e * Math.cos(n),
						y: g + h * Math.sin(n)
					};
				b.push(d.de(n))
			}
			return b
		},
		mapChanged: function() {
			f.a.Ml(w.D.Fp.qc.mapChanged) && w.D.Fp.qc.mapChanged.apply(this);
			this.setPath(this.lo());
			!this.Gf && this.get("map") && (this.Gf = !0, this.get("map").r("overlays"))
		},
		setCenter: function(a, b) {
			f.e.add(this.CLASS_NAME, "setCenter");
			(a = f.a.za(a)) && a instanceof f.V && (this.set("center", a), this.set("path", this.lo()), this.r("change", {
				type: "change",
				target: this
			}), this.Gf || (this.Gf = !0, this.get("map") && this.get("map").r("overlays")), b || this.r("setCenter"))
		},
		setRadius: function(a) {
			var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : !1;
			f.e.add(this.CLASS_NAME, "setRadius");
			a && 2 === a.length && (this.set("radius", a), this.set("path", this.lo()), b || (this.r("change", {
				type: "change",
				target: this
			}), this.r("setPath")))
		},
		setOptions: function(a) {
			w.D.Fp.qc.setOptions.call(this, a);
			a.radius && this.setRadius(a.radius, !0);
			a.center && this.setCenter(a.center, !0)
		},
		getRadius: function() {
			f.e.add(this.CLASS_NAME, "getRadius");
			return this.get("radius", null, !0)
		},
		getCenter: function() {
			f.e.add(this.CLASS_NAME, "getCenter");
			return this.get("center", null, !0)
		}
	});
	w.D.Jp = w.D.bc.extend({
		F: {
			visible: !0,
			zIndex: 10,
			strokeColor: "#006600",
			strokeOpacity: 0.9,
			strokeWeight: 3,
			strokeStyle: "solid",
			strokeDasharray: [10, 5],
			fillColor: "#006600",
			fillOpacity: 0.9
		},
		B: function() {
			var a = this,
				b = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
				b = f.extend(this.F, b),
				c = this.lo(b);
			b.path = c;
			w.D.Jp.qc.B.call(this, b);
			this.setPath(c);
			this.F.bounds && this.get("map") || (this.Gf = !1);
			this.CLASS_NAME = "AMap.Rectangle";
			f.e.cb(this.CLASS_NAME, b);
			this.on("movepoly", function(b) {
				var c = a.get("map"),
					g = a.get("bounds"),
					h = c.de(c.Jb(g.Rb).add(b.tu));
				b = c.de(c.Jb(g.Kb).add(b.tu));
				"3D" === c.view.type && a.set("deltaPos", [0, 0]);
				a.set("bounds", new f.Wd(h, b))
			})
		},
		lo: function() {
			var a = [],
				b = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).bounds || this.get("bounds");
			if (b) {
				var c = b.getSouthWest(),
					b = b.getNorthEast();
				f.a.Ib([new f.V(c.O, c.P), new f.V(b.O, c.P), new f.V(b.O, b.P), new f.V(c.O, b.P)], function(b) {
					return a.push(b)
				})
			}
			return a
		},
		mapChanged: function() {
			f.a.Ml(w.D.Jp.qc.mapChanged) && w.D.Jp.qc.mapChanged.apply(this);
			this.setPath(this.lo());
			!this.Gf && this.get("map") && (this.Gf = !0, this.get("map").r("overlays"))
		},
		setOptions: function(a) {
			w.D.Jp.qc.setOptions.call(this, a);
			a.bounds && this.setBounds(a.bounds, !0)
		},
		setBounds: function(a) {
			var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : !1;
			f.e.add(this.CLASS_NAME, "setBounds");
			a && a instanceof f.Wd && (this.set("bounds", a), this.set("path", this.lo()), this.Gf || (this.Gf = !0, this.get("map") && this.get("map").r("overlays")), b || (this.r("change", {
				type: "change",
				target: this
			}), this.r("setBounds")))
		},
		getBounds: function() {
			f.e.add(this.CLASS_NAME, "getCenter");
			return this.get("bounds", null, !0)
		}
	});
	w.D.VN = w.D.ab.extend({
		F: {
			text: "",
			textAlign: "center",
			verticalAlign: "middle",
			offset: new f.G(0, 0)
		},
		B: function(a) {
			w.D.VN.qc.B.apply(this, arguments);
			this.CLASS_NAME = "AMap.Text";
			f.e.cb(this.CLASS_NAME, a);
			this.m4();
			this.setText(this.get("text"));
			this.setStyle(this.get("style"))
		},
		m4: function() {
			if (!this.Uw) {
				var a = document.createElement("div");
				a.className = "amap-overlay-text-container";
				this.Uw = a
			}
		},
		getText: function() {
			f.e.add(this.CLASS_NAME, "getText");
			return this.get("text", null, !0)
		},
		setText: function(a) {
			f.e.add(this.CLASS_NAME, "setText");
			a || 0 === a || (a = "");
			f.j.Iha(this.Uw, "amap-overlay-text-empty", !a);
			f.e.add(this.CLASS_NAME, "setText");
			this.set("text", a);
			this.Uw.innerHTML = a;
			this.QX()
		},
		setStyle: function(a) {
			f.e.add(this.CLASS_NAME, "setStyle");
			f.extend(this.Uw.style, a);
			this.QX()
		},
		QX: function() {
			this.setContent(this.Uw);
			this.setShadow(this.getShadow())
		}
	});
	f.CN = {
		find: function(a) {
			return f.a.find(this.us || [], a)
		},
		BC: function() {
			return this.us || []
		},
		Bc: function(a) {
			return null !== this.find(a)
		},
		add: function(a) {
			var b = this,
				c = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : f.a.bp,
				d = this.us || (this.us = []);
			f.a.isArray(a) ? f.a.Ib(a, function(a) {
				b.add(a, c)
			}) : null === this.find(a) && (d.push(a), c(a));
			return this
		},
		remove: function(a) {
			var b = this,
				c = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : f.a.bp,
				d = this.us;
			if (d) if (f.a.isArray(a)) f.a.Ib(a, function(a) {
				b.remove(a, c)
			});
			else {
				var e = f.a.indexOf(d, a); - 1 !== e && (c(d[e]), d.splice(e, 1))
			}
			return this
		},
		clear: function() {
			this.Ib(0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : f.a.bp);
			this.us = [];
			return this
		},
		Ib: function() {
			var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : f.a.bp,
				b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
			f.a.Ib(this.us || [], function() {
				for (var c = arguments.length, d = Array(c), e = 0; e < c; e++) d[e] = arguments[e];
				c = d[0];
				f.a.Ml(c.Ib) ? c.Ib(a, b) : a.apply(b || c, d)
			});
			return this
		},
		bn: function(a) {
			for (var b = arguments.length, c = Array(1 < b ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
			this.Ib(function(b) {
				b && f.a.Ml(b[a]) && b[a].apply(b, c)
			});
			return this
		},
		g: function(a) {
			var b = arguments;
			this.Ib(function(a) {
				a.on.apply(a, b)
			});
			return this
		},
		I: function(a) {
			var b = arguments;
			this.Ib(function(a) {
				a.off.apply(a, b)
			});
			return this
		},
		addListener: function() {
			this.g.apply(this, arguments)
		},
		Yw: function(a) {
			var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : f.a.bp,
				c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
			this.Ib(function(d) {
				d.on.call(d, event, function() {
					b();
					d.off(a)
				}, c)
			})
		},
		removeListener: function(a) {
			this.I(a.uJ, a.kK, a.je)
		},
		N: function(a, b) {
			this.Ib(function(c) {
				c.emit(a, b)
			})
		}
	};
	w.D.el = w.D.Hg.extend({
		ga: [f.CN],
		B: function() {
			var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
			w.D.el.qc.B.apply(this);
			this.CLASS_NAME = "AMap.OverlayGroup";
			this.map = null;
			this.add(a)
		},
		dc: function(a) {
			this.bn("setMap", a);
			this.set("map", a);
			this.map = a;
			return this
		},
		mapChanged: function() {},
		Zw: function(a) {
			var b = this;
			this.add(a, function(a) {
				b.map && a.setMap(b.map)
			});
			return this
		},
		zu: function(a) {
			var b = this;
			this.remove(a, function(a) {
				a.getMap() === b.map && a.setMap(null)
			});
			return this
		},
		zc: function() {
			var a = this;
			this.clear(function(b) {
				b.getMap() === a.map && b.setMap(null)
			});
			return this
		},
		Xt: function() {
			this.bn("hide");
			return this
		},
		show: function() {
			this.bn("show");
			return this
		},
		Bb: function() {
			this.bn("setOptions", 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {});
			return this
		}
	});
	w.D.el.Fk({
		find: "getOverlay",
		BC: "getOverlays",
		Zw: ["addOverlay", "addOverlays"],
		Bc: "hasOverlay",
		zu: ["removeOverlay", "removeOverlays"],
		zc: "clearOverlays",
		Ib: "eachOverlay",
		dc: "setMap",
		Bb: "setOptions",
		show: "show",
		Xt: "hide",
		g: "on",
		I: "off"
	});
	(function(a, b) {
		function c(a, b) {
			if (!a.length) return !1;
			for (var c = 0, d = a.length; c < d; c++) {
				var e = a[c];
				if (!("*" === b || e && e.geometry && e.geometry.type === b) || e && e.properties && !e.properties._isAmap) return !1
			}
			return !0
		}
		function d(a) {
			for (var b = [], c = 0, d = a.length; c < d; c++) b.push(a[c].geometry.coordinates);
			return b
		}
		function e(a) {
			if (!a) return [];
			a = b.a.za(a);
			for (var c = [], d = 0, e = a.length; d < e; d++) c[d] = a[d].Zj();
			return c
		}
		a.D.AN = a.D.el.extend({
			B: function(c) {
				a.D.AN.qc.B.call(this, []);
				this.CLASS_NAME = "AMap.GeoJSON";
				b.e.cb(this.CLASS_NAME, c);
				this.F = b.extend({
					getMarker: function(b, c) {
						return new a.D.ab({
							position: c
						})
					},
					getPolyline: function(b, c) {
						return new a.D.Fb({
							path: c
						})
					},
					getPolygon: function(b, c) {
						return new a.D.bc({
							path: c
						})
					},
					coordsToLatLng: function(a) {
						return a
					}
				}, c);
				if (!this.F.coordsToLatLngs) {
					var d = this.F.coordsToLatLng;
					this.F.coordsToLatLngs = function(a) {
						for (var b = [], c = 0, e = a.length; c < e; c++) b.push(d.call(null, a[c]));
						return b
					}
				}
				this.importData(this.F.geoJSON)
			},
			importData: function(a) {
				if (a && (a = this.h4(a), a.length)) {
					this.Zw(a);
					var b = this.F.map;
					if (b) for (var c = 0, d = a.length; c < d; c++) a[c].setMap(b)
				}
			},
			toGeoJSON: function() {
				for (var a = this.BC(), b = [], c = 0, d = a.length; c < d; c++) b[c] = a[c].toGeoJSON();
				return b
			},
			h4: function(a) {
				if (a) {
					b.a.isArray(a) || (a = [a]);
					for (var c = [], d = 0, e = a.length; d < e; d++) {
						var m = this.i4(a[d]);
						m && c.push(m)
					}
					return c
				}
			},
			EO: function(a) {
				var b = "Feature" === a.type ? a.geometry : a,
					b = this.F.coordsToLatLng(b ? b.coordinates : null),
					b = this.F.getMarker(a, b);
				this.fo(a, b);
				return b
			},
			B1: function(c) {
				for (var d = "Feature" === c.type ? c.geometry : c, d = d ? d.coordinates : null, e = [], l = 0, m = d.length; l < m; l++) e.push(this.EO(b.extend({}, c, {
					type: "Feature",
					properties: {
						_isAmap: !0,
						_pointIndex: l,
						_parentProperities: c.properties
					},
					geometry: {
						type: "Point",
						coordinates: d[l]
					}
				})));
				d = new a.D.el(e);
				this.fo(c, d);
				return d
			},
			DO: function(a) {
				var b = "Feature" === a.type ? a.geometry : a,
					b = this.F.coordsToLatLngs(b ? b.coordinates : null),
					b = this.F.getPolyline(a, b);
				this.fo(a, b);
				return b
			},
			A1: function(c) {
				for (var d = "Feature" === c.type ? c.geometry : c, d = d ? d.coordinates : null, e = [], l = 0, m = d.length; l < m; l++) e.push(this.DO(b.extend({}, c, {
					type: "Feature",
					properties: {
						_isAmap: !0,
						_lineStringIndex: l,
						_parentProperities: c.properties
					},
					geometry: {
						type: "LineString",
						coordinates: d[l]
					}
				})));
				d = new a.D.el(e);
				this.fo(c, d);
				return d
			},
			FO: function(a) {
				for (var b = "Feature" === a.type ? a.geometry : a, b = b ? b.coordinates : null, c = [], d = 0, e = b.length; d < e; d++) c.push(this.F.coordsToLatLngs(b[d]));
				b = this.F.getPolygon(a, c);
				this.fo(a, b);
				return b
			},
			C1: function(c) {
				for (var d = "Feature" === c.type ? c.geometry : c, d = d ? d.coordinates : null, e = [], l = 0, m = d.length; l < m; l++) e.push(this.FO(b.extend({}, c, {
					type: "Feature",
					properties: {
						_isAmap: !0,
						_polygonIndex: l,
						_parentProperities: c.properties
					},
					geometry: {
						type: "Polygon",
						coordinates: d[l]
					}
				})));
				d = new a.D.el(e);
				this.fo(c, d);
				return d
			},
			u1: function(c) {
				for (var d = ("Feature" === c.type ? c.geometry : c).geometries, e = [], l = 0, m = d.length; l < m; l++) e.push(this.uG(b.extend({}, c, {
					type: "Feature",
					properties: {
						_isAmap: !0,
						_geometryIndex: l,
						_parentProperities: c.properties
					},
					geometry: d[l]
				})));
				d = new a.D.el(e);
				this.fo(c, d);
				return d
			},
			i4: function(b) {
				if (b) switch (b.type) {
				case "Feature":
					return this.uG(b);
				case "FeatureCollection":
					for (var c = b.features, d = [], e = 0, m = c.length; e < m; e++) {
						var n = this.uG(c[e]);
						n && d.push(n)
					}
					c = new a.D.el(d);
					this.fo(b, c);
					return c;
				default:
					throw Error("Invalid GeoJSON object." + b.type);
				}
			},
			fo: function(a, c) {
				c && a.properties && c.setExtData && c.setExtData(b.extend({}, c.getExtData() || {}, {
					_geoJsonProperties: a.properties
				}))
			},
			uG: function(a) {
				var b = "Feature" === a.type ? a.geometry : a;
				if (!(b && b.coordinates || b)) return null;
				switch (b.type) {
				case "Point":
					return this.EO(a);
				case "MultiPoint":
					return this.B1(a);
				case "LineString":
					return this.DO(a);
				case "MultiLineString":
					return this.A1(a);
				case "Polygon":
					return this.FO(a);
				case "MultiPolygon":
					return this.C1(a);
				case "GeometryCollection":
					return this.u1(a);
				default:
					throw Error("Invalid GeoJSON geometry." + b.type);
				}
			}
		});
		a.D.el.ob({
			toGeoJSON: function(a) {
				a = a || this.BC();
				for (var b = [], e = 0, l = a.length; e < l; e++) a[e].toGeoJSON && (b[e] = a[e].toGeoJSON());
				a = this.getExtData() || {};
				if (c(b, "Point")) b = {
					type: "Feature",
					properties: a._geoJsonProperties || {},
					geometry: {
						type: "MultiPoint",
						coordinates: d(b)
					}
				};
				else if (c(b, "LineString")) b = {
					type: "Feature",
					properties: a._geoJsonProperties || {},
					geometry: {
						type: "MultiLineString",
						coordinates: d(b)
					}
				};
				else if (c(b, "Polygon")) b = {
					type: "Feature",
					properties: a._geoJsonProperties || {},
					geometry: {
						type: "MultiPolygon",
						coordinates: d(b)
					}
				};
				else if (c(b, "*")) {
					a = a._geoJsonProperties || {};
					for (var e = [], l = 0, m = b.length; l < m; l++) e.push(b[l].geometry);
					b = {
						type: "Feature",
						properties: a,
						geometry: {
							type: "GeometryCollection",
							geometries: e
						}
					}
				} else b = {
					type: "FeatureCollection",
					properties: a._geoJsonProperties || {},
					features: b
				};
				return b
			}
		});
		a.D.ab.ob({
			toGeoJSON: function() {
				return {
					type: "Feature",
					properties: (this.getExtData() || {})._geoJsonProperties || {},
					geometry: {
						type: "Point",
						coordinates: this.getPosition().Zj()
					}
				}
			}
		});
		a.D.Fb.ob({
			toGeoJSON: function() {
				return {
					type: "Feature",
					properties: (this.getExtData() || {})._geoJsonProperties || {},
					geometry: {
						type: "LineString",
						coordinates: e(this.getPath())
					}
				}
			}
		});
		a.D.bc.ob({
			toGeoJSON: function() {
				var a = (this.getExtData() || {})._geoJsonProperties || {},
					c;
				if (c = this.getPath()) {
					c = b.a.za(c);
					b.a.isArray(c[0]) || (c = [c]);
					for (var d = [], l = 0, m = c.length; l < m; l++) d[l] = e(c[l]);
					c = d
				} else c = [];
				return {
					type: "Feature",
					properties: a,
					geometry: {
						type: "Polygon",
						coordinates: c
					}
				}
			}
		})
	})(w, f);
	w.w.PE = w.w.oc.extend({
		ga: [f.CN],
		B: function(a) {
			w.w.PE.qc.B.call(this, 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {});
			this.CLASS_NAME = "AMap.LayerGroup";
			this.map = null;
			this.add(a)
		},
		dc: function(a) {
			this.bn("setMap", a);
			this.set("map", a);
			this.map = a;
			return this
		},
		mapChanged: function() {},
		JB: function(a) {
			var b = this;
			this.add(a, function(a) {
				b.map && a.setMap(b.map)
			});
			return this
		},
		Tj: function(a) {
			var b = this;
			this.remove(a, function(a) {
				a.getMap() === b.map && a.setMap(null)
			});
			return this
		},
		G$: function() {
			var a = this;
			this.clear(function(b) {
				b.getMap() === a.map && b.setMap(null)
			});
			return this
		},
		Xt: function() {
			this.bn("hide");
			return this
		},
		show: function() {
			this.bn("show");
			return this
		},
		reload: function() {
			this.bn("reload");
			return this
		},
		Bb: function() {
			var a = this,
				b = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
				c = f.a.keys(b);
			f.a.Ib(c, function(c) {
				a.bn("set", c, b[c])
			});
			return this
		}
	});
	w.w.PE.Fk({
		find: "getLayer",
		BC: "getLayers",
		JB: ["addLayer", "addLayers"],
		Bc: "hasLayer",
		Tj: ["removeLayer", "removeLayers"],
		G$: "clearLayers",
		Ib: "eachLayer",
		dc: "setMap",
		Bb: "setOptions",
		show: "show",
		Xt: "hide",
		reload: "reload",
		g: "on",
		I: "off"
	});
	f.O_ = w.Pb.extend({
		B: function(a, b) {
			b && (b.center = b.position, b.zoom = 11);
			arguments.callee.oa.apply(this, arguments);
			window.console && window.console.log && window.console.log("\u9ad8\u5fb7\u5730\u56feJSAPI\u8857\u666f\u5df2\u4e0b\u7ebf\uff0c\u611f\u8c22\u60a8\u7684\u652f\u6301\u3002")
		}
	});
	f.P_ = w.D.ab.extend({
		B: function(a) {
			arguments.callee.oa.apply(this, arguments)
		}
	});
	f.Mc = {
		yo: function(a, b) {
			for (var c = Infinity, d = 0, e = 1, g = b.length; e < g; d = e, e += 1) c = Math.min(c, f.Mc.kha(a, [b[d], b[e]]));
			return Math.sqrt(c)
		},
		kha: function(a, b) {
			return this.jha(a, this.YT(a, b))
		},
		jha: function(a, b) {
			var c = a[0] - b[0],
				d = a[1] - b[1];
			return c * c + d * d
		},
		Nma: function(a, b, c, d) {
			d = d || 1E-6;
			if (c[0] === b[0]) {
				var e = Math.min(b[1], c[1]);
				b = Math.max(b[1], c[1]);
				return Math.abs(a[0] - c[0]) < d && a[1] >= e && a[1] <= b
			}
			var e = Math.min(b[0], c[0]),
				g = Math.max(b[0], c[0]);
			return Math.abs((c[1] - b[1]) / (c[0] - b[0]) * (a[0] - b[0]) + b[1] - a[1]) < d && a[0] >= e && a[0] <= g
		},
		YT: function(a, b) {
			var c = a[0],
				d = a[1],
				e = b[0],
				g = b[1],
				h = e[0],
				e = e[1],
				k = g[0],
				g = g[1],
				l = k - h,
				m = g - e,
				c = 0 === l && 0 === m ? 0 : (l * (c - h) + m * (d - e)) / (l * l + m * m || 0);
			0 >= c || (1 <= c ? (h = k, e = g) : (h += c * l, e += c * m));
			return [h, e]
		},
		No: function(a) {
			for (var b = a.length, c = 0, d = a[b - 1], e = d[0], d = d[1], g, h, k = 0; k < b; k += 1) h = a[k], g = h[0], h = h[1], c += (g - e) * (h + d), e = g, d = h;
			return 0 < c
		},
		md: function(a, b, c) {
			var d = a[0];
			a = a[1];
			var e = !1,
				g, h, k, l, m = b.length,
				n = 0;
			for (l = m - 1; n < m; l = n, n += 1) {
				var p = !1;
				g = b[n][0];
				h = b[n][1];
				k = b[l][0];
				l = b[l][1];
				if (g === d && h === a || k === d && l === a) return c ? !0 : !1;
				if (h < a === l >= a) {
					g = (k - g) * (a - h) / (l - h) + g;
					if (d === g) return c ? !0 : !1;
					p = d < g
				}
				p && (e = !e)
			}
			return e
		},
		FX: function(a, b) {
			function c(a, b, c, d) {
				var e = [a[0] - b[0], a[1] - b[1]],
					g = [c[0] - d[0], c[1] - d[1]];
				a = a[0] * b[1] - a[1] * b[0];
				c = c[0] * d[1] - c[1] * d[0];
				d = 1 / (e[0] * g[1] - e[1] * g[0]);
				return [(a * g[0] - c * e[0]) * d, (a * g[1] - c * e[1]) * d]
			}
			function d(a, b, c) {
				return (c[0] - b[0]) * (a[1] - b[1]) > (c[1] - b[1]) * (a[0] - b[0])
			}
			var e, g, h, k, l = a;
			e = b[b.length - 2];
			for (var m = 0, n = b.length - 1; m < n; m++) {
				g = b[m];
				var p = l,
					l = [];
				h = p[p.length - 1];
				for (var q = 0, r = p.length; q < r; q++) k = p[q], d(k, e, g) ? (d(h, e, g) || l.push(c(e, g, h, k)), l.push(k)) : d(h, e, g) && l.push(c(e, g, h, k)), h = k;
				e = g
			}
			if (3 > l.length) return [];
			l.push(l[0]);
			return l
		}
	};
	(function(a) {
		function b(b, c) {
			var d;
			a: {
				switch (b) {
				case "EPSG3395":
					d = a.Bg.vN;
					break a;
				case "EPSG4326":
					d = a.Bg.wN;
					break a
				}
				d = a.Bg.JE
			}
			return {
				project: function(b) {
					a.a.isArray(b) && (b = new a.V(b[0], b[1]));
					return d.hy(b, c).Zj()
				},
				unproject: function(b) {
					a.a.isArray(b) && (b = new a.G(b[0], b[1]));
					return d.Ay(b, c).Zj()
				},
				normalizePoint: function(b) {
					return a.a.za(b)
				},
				distance: function(b, c) {
					a.e.add(this.CLASS_NAME, "distance");
					c = this.normalizePoint(c);
					if (a.a.isArray(c)) return this.distanceToLine(b, c);
					b = this.normalizePoint(b);
					var d = a.gk.Cq,
						e = Math.cos,
						g = b.P * d,
						h = c.P * d,
						k = 2 * a.gk.oJ,
						d = c.O * d - b.O * d,
						e = (1 - e(h - g) + (1 - e(d)) * e(g) * e(h)) / 2;
					return k * Math.asin(Math.sqrt(e))
				},
				ringArea: function(b) {
					a.e.add(this.CLASS_NAME, "ringArea");
					b = this.normalizeLine(b);
					var c = a.gk.oJ * a.gk.Cq,
						d = 0,
						e = b.length;
					if (3 > e) return 0;
					for (var g = 0; g < e - 1; g += 1) var h = b[g],
						k = b[g + 1],
						u = h.O * c * Math.cos(h.P * a.gk.Cq),
						h = h.P * c,
						v = k.O * c * Math.cos(k.P * a.gk.Cq),
						d = d + (u * k.P * c - v * h);
					g = b[g];
					b = b[0];
					e = g.O * c * Math.cos(g.P * a.gk.Cq);
					g = g.P * c;
					k = b.O * c * Math.cos(b.P * a.gk.Cq);
					d += e * b.P * c - k * g;
					return 0.5 * Math.abs(d)
				},
				sphericalCalotteArea: function(b) {
					a.e.add(this.CLASS_NAME, "sphericalCalotteArea");
					var c = a.gk.oJ;
					b = c - c * Math.cos(b / c);
					return 2 * Math.PI * c * b
				}
			}
		}
		function c() {
			return {
				normalizePoint: function(a) {
					return a && a.x && a.y ? [a.x, a.y] : a
				},
				distance: function(a, b) {
					var c = a[0] - b[0],
						d = a[1] - b[1];
					return Math.sqrt(c * c + d * d)
				},
				project: function(a) {
					return a
				},
				unproject: function(a) {
					return a
				},
				ringArea: function(a) {
					for (var b = [0, 0], c = [0, 0], d = 0, e = a[0], n = a.length, p = 2; p < n; p++) {
						var q = a[p - 1],
							r = a[p];
						b[0] = e[0] - r[0];
						b[1] = e[1] - r[1];
						c[0] = e[0] - q[0];
						c[1] = e[1] - q[1];
						d += b[0] * c[1] - b[1] * c[0]
					}
					return d / 2
				}
			}
		}
		function d(a) {
			for (var b = 0, c = a.length, d = 0; d < c - 1; d++) var e = a[d],
				n = a[d + 1],
				b = b + (n[0] - e[0]) * (n[1] + e[1]);
			if (a[c - 1][0] !== a[0][0] || a[c - 1][1] !== a[0][1]) e = a[c - 1], n = a[0], b += (n[0] - e[0]) * (n[1] + e[1]);
			return 0 >= b
		}
		function e(b) {
			this.CLASS_NAME = "AMap.GeometryUtil";
			this.Cb = a.extend({
				onSegmentTolerance: 5,
				crs: "EPSG3857",
				maxZoom: 20
			}, b);
			this.setCrs(this.Cb.crs)
		}
		a.extend(e.prototype, {
			clone: function(b) {
				return new e(a.extend({}, this.Cb, b))
			},
			isPoint: function(b) {
				return b && (b instanceof a.V || a.a.isArray(b) && !isNaN(b[0]))
			},
			normalizePoint: function(a) {
				return a
			},
			normalizeLine: function(a) {
				for (var b = [], c = 0, d = a.length; c < d; c++) b.push(this.normalizePoint(a[c]));
				return b
			},
			normalizeMultiLines: function(b) {
				a.a.isArray(b) && this.isPoint(b[0]) && (b = [b]);
				for (var c = [], d = 0, e = b.length; d < e; d++) c.push(this.normalizeLine(b[d]));
				return c
			},
			setCrs: function(d) {
				a.extend(this, d && d.project && d.unproject ? d : "plane" === d ? c() : b(d, this.Cb.maxZoom))
			},
			distance: function() {
				throw Error("distance Not implemented!");
			},
			Us: function(a, b) {
				a = this.normalizeLine(a);
				this.isPoint(a[0]) || (a = a[0]);
				for (var c = [], d = 0, e = a.length; d < e; d++) c.push(this.project(a[d]));
				!0 === b ? c = this.makesureClockwise(c) : !1 === b && (c = this.makesureClockwise(c), c.reverse());
				return c
			},
			S7: function(a) {
				for (var b = [], c = 0, d = a.length; c < d; c++) b.push(this.unproject(a[c]));
				return b
			},
			closestOnSegment: function(b, c, d) {
				a.e.add(this.CLASS_NAME, "closestOnSegment");
				b = a.Mc.YT(this.project(b), this.Us([c, d]));
				return this.unproject(b)
			},
			closestOnLine: function(a, b) {
				b = this.normalizeLine(b);
				for (var c = Infinity, d, e = 0, n = b.length; e < n - 1; e++) {
					var p = this.closestOnSegment(a, b[e], b[e + 1]),
						q = this.distance(a, p);
					q < c && (c = q, d = p)
				}
				return d
			},
			distanceToSegment: function(a, b, c) {
				return this.distanceToLine(a, [b, c])
			},
			distanceToLine: function(a, b) {
				b = this.normalizeLine(b);
				this.isPoint(b[0]) || (b = b[0]);
				for (var c = Infinity, d = 0, e = b.length; d < e - 1; d++) var n = this.closestOnSegment(a, b[d], b[d + 1]),
					c = Math.min(c, this.distance(a, n));
				return c
			},
			isPointOnSegment: function(b, c, d, e) {
				a.e.add(this.CLASS_NAME, "isPointOnSegment");
				if (!e && 0 !== e || 0 > e) e = this.Cb.onSegmentTolerance;
				return this.distanceToSegment(b, c, d) <= e
			},
			isPointOnLine: function(a, b, c) {
				b = this.normalizeLine(b);
				for (var d = 0, e = b.length; d < e - 1; d++) if (this.isPointOnSegment(a, b[d], b[d + 1], c)) return !0;
				return !1
			},
			isPointOnRing: function(a, b, c) {
				b = this.normalizeLine(b);
				for (var d = 0, e = b.length; d < e; d++) if (this.isPointOnSegment(a, b[d], b[d === e - 1 ? 0 : d + 1], c)) return !0;
				return !1
			},
			isPointOnPolygon: function(a, b, c) {
				b = this.normalizeMultiLines(b);
				for (var d = 0, e = b.length; d < e; d++) if (this.isPointOnRing(a, b[d], c)) return !0;
				return !1
			},
			makesureClockwise: function(a) {
				d(a) || (a = [].concat(a), a.reverse());
				return a
			},
			makesureAntiClockwise: function(a) {
				d(a) && (a = [].concat(a), a.reverse());
				return a
			},
			isPointInRing: function(b, c) {
				a.e.add(this.CLASS_NAME, "isPointInRing");
				c = this.normalizeLine(c);
				var d = this.Us(c, !0);
				return a.Mc.md(this.project(b), d, !1)
			},
			isRingInRing: function(a, b) {
				for (var c = 0, d = a.length; c < d; c++) if (!this.isPointInRing(a[c], b)) return !1;
				return !0
			},
			isPointInPolygon: function(a, b) {
				b = this.normalizeMultiLines(b);
				for (var c, d = 0, e = b.length; d < e && (c = this.isPointInRing(a, b[d]), 0 < d && (c = !c), c); d += 1);
				return c
			},
			doesSegmentsIntersect: function(b, c, d, e) {
				a.e.add(this.CLASS_NAME, "doesSegmentsIntersect");
				var m = this.Us([b, c, d, e]);
				b = m[0];
				c = m[1];
				d = m[2];
				e = m[3];
				var m = !1,
					n = (e[0] - d[0]) * (b[1] - d[1]) - (e[1] - d[1]) * (b[0] - d[0]),
					p = (c[0] - b[0]) * (b[1] - d[1]) - (c[1] - b[1]) * (b[0] - d[0]);
				b = (e[1] - d[1]) * (c[0] - b[0]) - (e[0] - d[0]) * (c[1] - b[1]);
				0 !== b && (c = n / b, p /= b, 0 <= c && 1 >= c && 0 <= p && 1 >= p && (m = !0));
				return m
			},
			doesSegmentLineIntersect: function(a, b, c) {
				c = this.normalizeLine(c);
				for (var d = 0, e = c.length; d < e - 1; d++) if (this.doesSegmentsIntersect(a, b, c[d], c[d + 1])) return !0;
				return !1
			},
			doesSegmentRingIntersect: function(a, b, c) {
				c = this.normalizeLine(c);
				for (var d = 0, e = c.length; d < e; d++) if (this.doesSegmentsIntersect(a, b, c[d], c[d === e - 1 ? 0 : d + 1])) return !0;
				return !1
			},
			doesSegmentPolygonIntersect: function(a, b, c) {
				c = this.normalizeMultiLines(c);
				for (var d = 0, e = c.length; d < e; d++) if (this.doesSegmentRingIntersect(a, b, c[d])) return !0;
				return !1
			},
			doesLineLineIntersect: function(a, b) {
				a = this.normalizeLine(a);
				for (var c = 0, d = a.length; c < d - 1; c++) if (this.doesSegmentLineIntersect(a[c], a[c + 1], b)) return !0;
				return !1
			},
			doesLineRingIntersect: function(a, b) {
				a = this.normalizeLine(a);
				for (var c = 0, d = a.length; c < d - 1; c++) if (this.doesSegmentRingIntersect(a[c], a[c + 1], b)) return !0;
				return !1
			},
			doesRingRingIntersect: function(a, b) {
				a = this.normalizeLine(a);
				for (var c = 0, d = a.length; c < d; c++) if (this.doesSegmentRingIntersect(a[c], a[c === d - 1 ? 0 : c + 1], b)) return !0;
				return !1
			},
			Z1: function(a, b) {
				function c() {
					var a = [e[0] - n[0], e[1] - n[1]],
						b = [p[0] - q[0], p[1] - q[1]],
						d = e[0] * n[1] - e[1] * n[0],
						g = p[0] * q[1] - p[1] * q[0],
						h = 1 / (a[0] * b[1] - a[1] * b[0]);
					return [(d * b[0] - g * a[0]) * h, (d * b[1] - g * a[1]) * h]
				}
				function d(a) {
					return (n[0] - e[0]) * (a[1] - e[1]) > (n[1] - e[1]) * (a[0] - e[0])
				}
				a = this.makesureAntiClockwise(a);
				b = this.makesureClockwise(b);
				var e, n, p, q, r = a;
				e = b[b.length - 1];
				for (var s = 0, u = b.length; s < u; s++) {
					n = b[s];
					var v = r,
						r = [];
					p = v[v.length - 1];
					for (var x = 0, t = v.length; x < t; x++) q = v[x], d(q) ? (d(p) || r.push(c()), r.push(q)) : d(p) && r.push(c()), p = q;
					e = n
				}
				return r
			},
			ringRingClip: function(b, c) {
				a.e.add(this.CLASS_NAME, "ringRingClip");
				b = this.Us(b);
				c = this.Us(c);
				var d = this.Z1(b, c);
				return this.S7(d)
			},
			ringArea: function() {
				throw Error("distance Not implemented!");
			},
			distanceOfLine: function(a) {
				a = this.normalizeLine(a);
				for (var b = 0, c = 0, d = a.length; c < d - 1; c++) b += this.distance(a[c], a[c + 1]);
				return b
			},
			isClockwise: function(a) {
				a = this.Us(a);
				return d(a)
			}
		});
		a.nv = new e;
		a.Ez = new e;
		a.Ez.setCrs("plane")
	})(f);
	(function(a) {
		function b(a, b, c, d, e) {
			for (var g, h = 0, k = b, l = c - d; k < c; k += d) h += (a[l] - a[k]) * (a[k + 1] + a[l + 1]), l = k;
			if (e === 0 < h) for (e = b; e < c; e += d) g = r(e, a[e], a[e + 1], g);
			else for (e = c - d; e >= b; e -= d) g = r(e, a[e], a[e + 1], g);
			g && m(g, g.next) && (s(g), g = g.next);
			return g
		}
		function c(a, b) {
			if (!a) return a;
			b || (b = a);
			var c = a,
				d;
			do
			if (d = !1, c.XY || !m(c, c.next) && 0 !== l(c.va, c, c.next)) c = c.next;
			else {
				s(c);
				c = b = c.va;
				if (c === c.next) break;
				d = !0
			}
			while (d || c !== b);
			return b
		}
		function d(a, b, e, g, r, u, N) {
			if (a) {
				if (!N && u) {
					var I = a,
						C = I;
					do null === C.z && (C.z = h(C.x, C.y, g, r, u)), C.Yl = C.va, C = C.Ti = C.next;
					while (C !== I);
					C.Yl.Ti = null;
					C.Yl = null;
					var I = C,
						H, F, B, D, E, G, K = 1;
					do {
						C = I;
						B = I = null;
						for (D = 0; C;) {
							D++;
							F = C;
							for (H = E = 0; H < K && (E++, F = F.Ti, F); H++);
							for (G = K; 0 < E || 0 < G && F;) 0 !== E && (0 === G || !F || C.z <= F.z) ? (H = C, C = C.Ti, E--) : (H = F, F = F.Ti, G--), B ? B.Ti = H : I = H, H.Yl = B, B = H;
							C = F
						}
						B.Ti = null;
						K *= 2
					} while (1 < D)
				}
				for (I = a; a.va !== a.next;) {
					C = a.va;
					F = a.next;
					if (u) a: if (B = a.va, D = a.next, 0 <= l(B, a, D)) B = !1;
					else {
						E = h(B.x < a.x ? B.x < D.x ? B.x : D.x : a.x < D.x ? a.x : D.x, B.y < a.y ? B.y < D.y ? B.y : D.y : a.y < D.y ? a.y : D.y, g, r, u);
						K = h(B.x > a.x ? B.x > D.x ? B.x : D.x : a.x > D.x ? a.x : D.x, B.y > a.y ? B.y > D.y ? B.y : D.y : a.y > D.y ? a.y : D.y, g, r, u);
						for (H = a.Ti; H && H.z <= K;) {
							if (H !== a.va && H !== a.next && k(B.x, B.y, a.x, a.y, D.x, D.y, H.x, H.y) && 0 <= l(H.va, H, H.next)) {
								B = !1;
								break a
							}
							H = H.Ti
						}
						for (H = a.Yl; H && H.z >= E;) {
							if (H !== a.va && H !== a.next && k(B.x, B.y, a.x, a.y, D.x, D.y, H.x, H.y) && 0 <= l(H.va, H, H.next)) {
								B = !1;
								break a
							}
							H = H.Yl
						}
						B = !0
					} else a: if (B = a.va, D = a.next, 0 <= l(B, a, D)) B = !1;
					else {
						for (E = a.next.next; E !== a.va;) {
							if (k(B.x, B.y, a.x, a.y, D.x, D.y, E.x, E.y) && 0 <= l(E.va, E, E.next)) {
								B = !1;
								break a
							}
							E = E.next
						}
						B = !0
					}
					if (B) b.push(C.Pd / e), b.push(a.Pd / e), b.push(F.Pd / e), s(a), I = a = F.next;
					else if (a = F, a === I) {
						if (N) if (1 === N) {
							N = b;
							I = e;
							C = a;
							do F = C.va, B = C.next.next, !m(F, B) && n(F, C, C.next, B) && p(F, B) && p(B, F) && (N.push(F.Pd / I), N.push(C.Pd / I), N.push(B.Pd / I), s(C), s(C.next), C = a = B), C = C.next;
							while (C !== a);
							a = C;
							d(a, b, e, g, r, u, 2)
						} else {
							if (2 === N) a: {
								N = a;
								do {
									for (I = N.next.next; I !== N.va;) {
										if (C = N.Pd !== I.Pd) if (C = void 0, C = N.next.Pd !== I.Pd) if (C = void 0, C = N.va.Pd !== I.Pd) {
											C = C = void 0;
											b: {
												C = N;
												do {
													if (C.Pd !== N.Pd && C.next.Pd !== N.Pd && C.Pd !== I.Pd && C.next.Pd !== I.Pd && n(C, C.next, N, I)) {
														C = !0;
														break b
													}
													C = C.next
												} while (C !== N);
												C = !1
											}
											if (C = !C) if (C = void 0, C = p(N, I)) if (C = void 0, C = p(I, N)) {
												C = N;
												F = !1;
												B = (N.x + I.x) / 2;
												D = (N.y + I.y) / 2;
												do C.y > D !== C.next.y > D && C.next.y !== C.y && B < (C.next.x - C.x) * (D - C.y) / (C.next.y - C.y) + C.x && (F = !F), C = C.next;
												while (C !== N);
												C = F
											}
										}
										if (C) {
											a = q(N, I);
											N = c(N, N.next);
											a = c(a, a.next);
											d(N, b, e, g, r, u);
											d(a, b, e, g, r, u);
											break a
										}
										I = I.next
									}
									N = N.next
								} while (N !== a)
							}
						} else d(c(a), b, e, g, r, u, 1);
						break
					}
				}
			}
		}
		function e(a, b) {
			return a.x - b.x
		}
		function g(a, b) {
			var c = b,
				d = a.x,
				e = a.y,
				g = -Infinity,
				h;
			do {
				if (e <= c.y && e >= c.next.y && c.next.y !== c.y) {
					var l = c.x + (e - c.y) * (c.next.x - c.x) / (c.next.y - c.y);
					if (l <= d && l > g) {
						g = l;
						if (l === d) {
							if (e === c.y) return c;
							if (e === c.next.y) return c.next
						}
						h = c.x < c.next.x ? c : c.next
					}
				}
				c = c.next
			} while (c !== b);
			if (!h) return null;
			if (d === g) return h.va;
			for (var l = h, m = h.x, n = h.y, q = Infinity, r, c = h.next; c !== l;) d >= c.x && c.x >= m && d !== c.x && k(e < n ? d : g, e, m, n, e < n ? g : d, e, c.x, c.y) && (r = Math.abs(e - c.y) / (d - c.x), (r < q || r === q && c.x > h.x) && p(c, a) && (h = c, q = r)), c = c.next;
			return h
		}
		function h(a, b, c, d, e) {
			a = 32767 * (a - c) * e;
			b = 32767 * (b - d) * e;
			a = (a | a << 8) & 16711935;
			a = (a | a << 4) & 252645135;
			a = (a | a << 2) & 858993459;
			b = (b | b << 8) & 16711935;
			b = (b | b << 4) & 252645135;
			b = (b | b << 2) & 858993459;
			return (a | a << 1) & 1431655765 | ((b | b << 1) & 1431655765) << 1
		}
		function k(a, b, c, d, e, g, h, k) {
			return 0 <= (e - h) * (b - k) - (a - h) * (g - k) && 0 <= (a - h) * (d - k) - (c - h) * (b - k) && 0 <= (c - h) * (g - k) - (e - h) * (d - k)
		}
		function l(a, b, c) {
			return (b.y - a.y) * (c.x - b.x) - (b.x - a.x) * (c.y - b.y)
		}
		function m(a, b) {
			return a.x === b.x && a.y === b.y
		}
		function n(a, b, c, d) {
			return m(a, b) && m(c, d) || m(a, d) && m(c, b) ? !0 : 0 < l(a, b, c) !== 0 < l(a, b, d) && 0 < l(c, d, a) !== 0 < l(c, d, b)
		}
		function p(a, b) {
			return 0 > l(a.va, a, a.next) ? 0 <= l(a, b, a.next) && 0 <= l(a, a.va, b) : 0 > l(a, b, a.va) || 0 > l(a, a.next, b)
		}
		function q(a, b) {
			var c = new u(a.Pd, a.x, a.y),
				d = new u(b.Pd, b.x, b.y),
				e = a.next,
				g = b.va;
			a.next = b;
			b.va = a;
			c.next = e;
			e.va = c;
			d.next = c;
			c.va = d;
			g.next = d;
			d.va = g;
			return d
		}
		function r(a, b, c, d) {
			a = new u(a, b, c);
			d ? (a.next = d.next, a.va = d, d.next.va = a, d.next = a) : (a.va = a, a.next = a);
			return a
		}
		function s(a) {
			a.next.va = a.va;
			a.va.next = a.next;
			a.Yl && (a.Yl.Ti = a.Ti);
			a.Ti && (a.Ti.Yl = a.Yl)
		}
		function u(a, b, c) {
			this.Pd = a;
			this.x = b;
			this.y = c;
			this.Ti = this.Yl = this.z = this.next = this.va = null;
			this.XY = !1
		}
		a.j_ = {
			LM: function(a, h, k) {
				k = k || 2;
				var l = h && h.length,
					m = l ? h[0] * k : a.length,
					n = b(a, 0, m, k, !0),
					p = [];
				if (!n) return p;
				var r, s, u, F;
				if (l) {
					var B = k,
						l = [],
						D, E, G;
					F = 0;
					for (D = h.length; F < D; F++) {
						E = h[F] * B;
						G = F < D - 1 ? h[F + 1] * B : a.length;
						E = b(a, E, G, B, !1);
						E === E.next && (E.XY = !0);
						var K = G = E;
						do G.x < K.x && (K = G), G = G.next;
						while (G !== E);
						l.push(K)
					}
					l.sort(e);
					for (F = 0; F < l.length; F++) {
						h = l[F];
						B = n;
						if (B = g(h, B)) h = q(B, h), c(h, h.next);
						n = c(n, n.next)
					}
				}
				if (a.length > 80 * k) {
					r = u = a[0];
					s = l = a[1];
					for (B = k; B < m; B += k) F = a[B], h = a[B + 1], F < r && (r = F), h < s && (s = h), F > u && (u = F), h > l && (l = h);
					u = Math.max(u - r, l - s);
					u = 0 !== u ? 1 / u : 0
				}
				d(n, p, k, r, s, u);
				return p
			}
		}
	})(f);
	(function(a) {
		function b(a) {
			var b = a.length;
			2 < b && a[b - 1][0] == a[0][0] && a[b - 1][1] == a[0][1] && a.pop()
		}
		function c(a, b) {
			for (var c = 0; c < b.length; c++) a.push(b[c][0]), a.push(b[c][1])
		}
		a.os = {
			Cf: function(a) {
				for (var b = a.length, c = 0, h = b - 1, k = 0; k < b; h = k++) c += a[h][0] * a[k][1] - a[k][0] * a[h][1];
				return 0.5 * c
			},
			Yca: function(b) {
				return 0 > a.os.Cf(b)
			},
			normalize: function(b) {
				var c;
				if (b) {
					c = [];
					for (var g = 0, h = b.length; g < h; g += 1) c[g] = b[g] instanceof Array ? this.normalize(b[g]) : b[g] instanceof a.V ? [b[g].O, b[g].P] : b[g] instanceof a.G ? [b[g].x, b[g].y] : b[g]
				}
				return c
			},
			tp: function(d, e) {
				e = e || [];
				var g = [],
					h = [];
				b(d);
				c(g, d);
				var k = d.length;
				e.forEach(b);
				for (var l = 0; l < e.length; l++) h.push(k), k += e[l].length, c(g, e[l]);
				return a.j_.LM(g, h)
			}
		}
	})(f);
	var yc = {
		v: "1.4.5",
		Pixel: f.G,
		LngLat: f.V,
		Size: f.Uc,
		Bounds: f.Wd,
		PixelBounds: f.Qe,
		event: w.event,
		Panorama: f.O_,
		PanoramaMarker: f.P_,
		Map: w.Pb,
		View2D: w.eF,
		GroundImage: w.w.KE,
		Marker: w.D.ab,
		ImageMarker: w.D.jja,
		Text: w.D.VN,
		Icon: w.D.Gg,
		MarkerShape: w.D.G_,
		Polyline: w.D.Fb,
		BezierCurve: w.D.iv,
		Polygon: w.D.bc,
		Circle: w.D.Pf,
		CircleMarker: w.D.tN,
		Ellipse: w.D.Fp,
		Rectangle: w.D.Jp,
		ContextMenu: w.D.cl,
		InfoWindow: w.D.fe,
		Buildings: w.w.c_,
		TileLayer: w.w.Wa,
		ImageLayer: w.w.rv,
		CanvasLayer: w.w.d_,
		VideoLayer: w.w.p0,
		VectorLayer: w.w.Gc,
		MassMarks: w.w.H_,
		LayerGroup: w.w.PE,
		OverlayGroup: w.D.el,
		GeoJSON: w.D.AN,
		CANVAS: "canvas",
		DOM: "dom",
		GeometryUtil: f.nv,
		PlaneGeometryUtil: f.Ez
	};
	yc.GeometryUtil.triangulateShape = function(a, b) {
		a = f.os.normalize(a);
		b = f.os.normalize(b);
		return f.os.tp(a, b)
	};
	yc.plugin = yc.service = w.Pb.prototype.plugin;
	yc.TileLayer.Satellite = w.w.Wa.SN;
	yc.TileLayer.RoadNet = w.w.Wa.QN;
	yc.TileLayer.google = w.w.Wa.pv;
	yc.TileLayer.Flexible = w.w.Wa.tz;
	yc.TileLayer.WMS = w.w.Wa.r0;
	yc.TileLayer.WMTS = w.w.Wa.s0;
	yc.TileLayer.Traffic = w.w.Wa.WN;
	yc.Panorama.Events = w.event;
	yc.TileLayer.PanoramaLayer = w.w.Wa.lja;
	yc.UA = {
		ie: f.l.Lo,
		ielt9: f.l.ne,
		ielt11: f.l.Fca,
		mobile: f.l.Z,
		android: f.l.yj,
		ios: f.l.XC
	};
	yc.Browser = {
		ua: navigator.userAgent,
		mobile: f.l.Z,
		plat: f.l.wr,
		mac: f.l.ky,
		windows: f.l.Oia,
		ios: f.l.XC,
		iPad: f.l.xca,
		iPhone: f.l.yca,
		android: f.l.yj,
		android23: f.l.H9,
		chrome: f.l.chrome,
		firefox: f.l.zJ,
		safari: f.l.dM,
		wechat: f.l.SZ,
		uc: f.l.hia,
		qq: f.l.Efa,
		ie: f.l.Lo,
		ie6: f.l.Dh,
		ie7: f.l.cr,
		ie8: f.l.ne && !f.l.cr && !f.l.Dh,
		ie9: f.l.Eca,
		ie10: f.l.OV,
		ie11: f.l.Bca,
		edge: f.l.Xaa,
		ielt9: f.l.ne,
		baidu: f.l.PB,
		isLocalStorage: f.l.Si,
		isGeolocation: !! navigator.geolocation,
		mobileWebkit: f.l.Yda,
		mobileWebkit3d: f.l.RW,
		mobileOpera: !! f.l.Xda,
		retina: f.l.cd,
		touch: !! f.l.Me,
		msPointer: !! f.l.TW,
		pointer: !! f.l.FL,
		webkit: f.l.QZ,
		ie3d: f.l.Cca,
		webkit3d: f.l.RZ,
		gecko3d: f.l.vba,
		opera3d: f.l.Nea,
		any3d: f.l.NB,
		isCanvas: f.l.Ll,
		isSvg: f.l.Ol,
		isVML: f.l.Lo,
		isWorker: !! window.Worker,
		isWebsocket: !! window.WebSocket,
		isWebGL: function() {
			for (var a = document.createElement("canvas"), b = ["webgl", "experimental-webgl", "moz-webgl"], c = null, d = 0; d < b.length; d += 1) {
				try {
					c = a.getContext(b[d])
				} catch (e) {}
				if (c) if (c.drawingBufferWidth !== a.width || c.drawingBufferHeight !== a.height) break;
				else return !0
			}
			return !1
		}
	};
	yc.Util = {
		colorNameToHex: f.a.dC,
		rgbHex2Rgba: f.a.mY,
		argbHex2Rgba: f.a.Vf,
		isEmpty: f.a.Oo,
		deleteItemFromArray: f.a.Dt,
		deleteItemFromArrayByIndex: f.a.zl,
		indexOf: f.a.indexOf,
		format: f.a.Pc,
		isArray: f.a.isArray,
		isDOM: f.a.$C,
		includes: f.a.ga,
		requestIdleCallback: f.a.Ly,
		cancelIdleCallback: f.a.EI,
		requestAnimFrame: f.a.nc,
		cancelAnimFrame: f.a.Sg,
		color2RgbaArray: f.a.cC
	};
	yc.DomUtil = {
		getViewport: f.j.KC,
		getViewportOffset: f.j.cK,
		create: f.j.create,
		setClass: f.j.Iga,
		hasClass: f.j.El,
		addClass: f.j.Ga,
		removeClass: f.j.Ma,
		setOpacity: f.j.un,
		rotate: f.j.rotate,
		setCss: f.j.Ha,
		empty: f.j.Gy,
		remove: f.j.remove,
		TRANSFORM: f.j.rf,
		TRANSITION: f.j.Hz
	};
	var zc = f.A;
	yc.User = {
		key: zc.key
	};
	window.AMap = yc;
	window.AMap.BuryPoint = f.BuryPoint;
	window.AMap.Class = f.ba;
	if (!zc.iy && "undefined" !== typeof arguments && arguments.callee) try {
		if (f.l.Si && window.localStorage) {
			var Ac = window.localStorage["_AMap_" + f.mD];
			Ac && JSON.parse(Ac).version === zc.Jh || window.localStorage.setItem("_AMap_" + f.mD, JSON.stringify({
				version: zc.Jh,
				script: "(" + arguments.callee + ")(config)"
			}));
//TODO 关闭cookie查询
			
			//var Bc = new Image;
			//Bc.src = zc.qb + "/maps/cookie?key=amap_ver&value=" + zc.Jh;
			//document.head.appendChild(Bc);
			//Bc.onload = Bc.onerror = Bc.onabort = function() {
			//	document.head.removeChild(Bc)
			//}
		}
	} catch (Cc) {};
	window.AMap.convertFrom = function(a, b, c) {
		f.e.add("AMap", "convertFrom", b);
		var d = f.A.ud + "/v3/assistant/coordinate/convert";
		a = f.a.za(a);
		var e = [];
		if (a instanceof Array) {
			for (var g = 0, h = a.length; g < h; g += 1) e.push(a[g] + "");
			e = e.join(";")
		} else e = a + "";
		b = ["key=" + f.A.key, "s=rsv3", "locations=" + e, "coordsys=" + (b || "gps")];
		d += 0 < b.length ? "?" + b.join("&") : "";
		d = new f.Sa.bb(d, {
			callback: "callback"
		});
		d.g("complete", function(a) {
			if ("1" === a.status) {
				a = a.locations.split(";");
				for (var b = 0; b < a.length; b += 1) {
					var d = a[b].split(",");
					a[b] = new AMap.LngLat(d[0], d[1])
				}
				c && "function" === typeof c && c("complete", {
					info: "ok",
					locations: a
				})
			} else c && "function" === typeof c && c("error", a.info)
		}, this);
		d.g("error", function(a) {
			c && "function" === typeof c && c("error", a.info)
		}, this)
	};
	f.Sa = f.Sa || {};
	f.Sa.YE = f.ba.extend({
		ga: [f.ka],
		B: function(a, b) {
			this.F = {
				callback: "cbk",
				type: "json",
				charset: "utf-8"
			};
			b = b || {};
			f.a.Bb(this, b);
			this.url = a;
			this.send(a, b.dd, b.$$)
		},
		send: function(a) {
			var b = f.j.create("script");
			b.type = "text/javascript";
			b.charset = this.F.charset;
			var c = this;
			f.l.ne ? b.onreadystatechange = function() {
				"loaded" !== this.readyState && "complete" !== this.readyState || c.r("complete")
			} : (b.onload = function() {
				c.r("complete")
			}, b.onerror = function() {
				c.r("error", {
					status: 0,
					info: "service error",
					url: a
				})
			});
			b.src = a;
			document.getElementsByTagName("head")[0].appendChild(b)
		}
	});
	f.Sa.bb = f.Sa.YE.extend({
		s$: function() {
			if (f.a.yY) return f.a.eE.push(this), !0
		},
		rga: function() {
			this.r("error", {
				info: "TIME_OUT_A"
			})
		},
		send: function(a, b, c, d) {
			function e() {
				window[g] = null;
				try {
					window[g] = null
				} catch (a) {}
				h.onerror = null;
				h.parentNode && h.parentNode.removeChild(h)
			}
			if (!this.F.rt || !this.s$()) {
				a = encodeURI(a);
				var g = this.F.fun;
				if (!g || window[g]) g = f.a.$U("jsonp_", 6) + "_";
				var h = document.createElement("script");
				h.type = "text/javascript";
				h.charset = "utf-8";
				h.async = !0;
				var k = this;
				f.l.ne || (h.onerror = function() {
					e();
					k.r("error", {
						info: "REQUEST_FAILED",
						url: a
					})
				});
				window[g] = function(a) {
					e();
					if (k.F.callbackFunction) k.F.callbackFunction.call(k.F.context, a);
					else if (3E4 === a.errcode && a.data) f.a.yY = !0, f.gb.load("AMap.AntiCrabFrame", function() {
						f.a.rt || (f.a.rt = new f.ZZ);
						f.a.eE.push(k);
						f.a.rt.open(k.F.dd, a.data.host, k.AL || "", k.url)
					});
					else {
						if (a instanceof Array || "string" === typeof a) a = {
							data: a
						};
						a.cla = g;
						k.r("complete", a)
					}
				};
				b = "?"; - 1 !== a.indexOf("?") && (b = "&");
				b = a + b + this.F.callback + "=" + g;
				if (-1 !== a.indexOf(f.A.ud + "/v") || -1 !== a.indexOf("yuntuapi.amap.com/datasearch") || -1 !== a.indexOf("webapi.amap.com/")) b = b + "&platform=JS&logversion=2.0" + ("&appname=" + f.A.jo), b += "&csid=" + this.xia(), b += "&sdkversion=" + f.A.lt;
				if (c = this.F.uC) {
					var l = [],
						m;
					for (m in c) c.hasOwnProperty(m) && (l.push(m + "=" + c[m]), b += "&" + m + "=" + encodeURIComponent(c[m]));
					k.AL = l.join("&")
				}
				h.src = d ? b + "&rereq=true" : b;
				f.Sa.bb.hP || (f.Sa.bb.hP = document.getElementsByTagName("head")[0]);
				f.Sa.bb.hP.appendChild(h)
			}
		},
		xia: function() {
			var a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
			return function(b, c) {
				var d = [],
					e;
				c = c || a.length;
				if (b) for (e = 0; e < b; e++) d[e] = a[0 | Math.random() * c];
				else {
					var g;
					d[8] = d[13] = d[18] = d[23] = "-";
					d[14] = "4";
					for (e = 0; 36 > e; e++) d[e] || (g = 0 | 16 * Math.random(), d[e] = a[19 === e ? g & 3 | 8 : g])
				}
				return d.join("")
			}
		}()
	});
	window.AMap.Http = {};
	window.AMap.Http.JSONP = f.Sa.bb;
	f.Sa.XMLHttpRequest = f.Sa.YE.extend({
		send: function(a, b, c) {
			var d = this.Tia = new XMLHttpRequest,
				e = this;
			d.onreadystatechange = function() {
				4 === d.readyState && 200 === d.status ? e.r("complete", {
					url: a,
					data: d.responseText
				}) : 404 === d.status && (d.abort(), e.r("error", {
					url: a,
					data: "404"
				}))
			};
			d.open(b || "GET", a);
			"POST" === b && d.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			d.send(c || void 0)
		},
		abort: function() {
			this.Tia.abort()
		}
	});
	f.pi = f.ba.extend({
		B: function(a, b, c, d) {
			this.start = a;
			this.end = b;
			this.transition = c;
			this.precision = d || 0;
			this.Fr = !1;
			return this
		},
		Xk: function(a) {
			var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : !1;
			this.Sf = +new Date;
			this.frames = 0;
			this.je = a;
			this.startTime = +new Date;
			this.Fr = !0;
			this.qT = f.a.nc(this.update, this, b)
		},
		update: function() {
			this.qT = f.a.nc(this.update, this, !1);
			this.frames += 1;
			var a = +new Date,
				b = a - this.startTime,
				b = this.transition ? this.transition(this.start, this.end, b, this.frames, a - this.Sf) : null;
			"number" === typeof b && Math.abs(b - this.end) < this.precision && (this.stop(), b = this.end);
			this.Sf = a;
			this.kn.call(this.je || this, b)
		},
		stop: function(a) {
			f.a.Sg(this.qT);
			a && this.update();
			this.Fr = !1
		}
	});
	f.pi.Easing = {
		Linear: {
			None: function(a) {
				return a
			}
		},
		Bounce: {
			In: function(a) {
				return 1 - (a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375 : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375)
			},
			Out: function(a) {
				return f.pi.Easing.Bounce.In(1 - a)
			}
		},
		Cubic: {
			In: function(a) {
				return 1 - a * a * a
			},
			Out: function(a) {
				a = 1 - a;
				return 1 - a * a * a
			}
		}
	};
	f.Pb = f.ba.extend({
		ga: [f.ka, f.se, f.gD],
		B: function(a, b) {
			this.J = b;
			this.Lm = b.Lm;
			this.Xj = "";
			this.Ng = this.hg = this.Bi = !1;
			this.Hs = {};
			this.K = a;
			this.P4();
			this.Pca();
			this.X("zooms", b, !0);
			this.X("size", b, !0);
			this.X("limitBounds", b);
			this.X("view", b);
			this.X("nolimg", b, !0);
			this.X("mapNumber", b, !0);
			this.X("lang", b, !0);
			this.X("features", b, !0);
			this.X("styleID", b, !0);
			this.X("forceBig", b, !0);
			this.X("mode", b, !0);
			this.X("showBuildingBlock", b, !0);
			this.X("mapStyle", b);
			var c = this.get("mapStyle");
			this.qd = f.A.qd[c] || f.A.qd["default"];
			this.FB = "#a3ccff";
			this.Mw = b.get("skyColor") || "#cce0ff";
			this.X("editEnable", b);
			this.cc && this.X("style", b, !0);
			this.X("styleUrl", b);
			this.X("hightlight", b, !0);
			this.X("labelzIndex", b, !0);
			f.l.Uy && (this.Ic = new f.w.Lh(new w.w.Wa({
				zIndex: b.get("labelzIndex"),
				visible: !1
			}), this), this.Ic.type = "\u77e2\u91cf\u6807\u6ce8", b.labelsLayer = this.Ic.ia, this.Ic.ia.g("complete", this.um, this, !0), this.Ic.ia.g("renderComplete", this.um, this), this.Ic.jw = this.Ic.ai = !0);
			this.X("isHotspot", b, !0);
			this.X("layers", b);
			this.X("overlays", b);
			this.X("infos", b, !0);
			this.X("contextmenus", b, !0);
			this.X("controls", b);
			this.X("bounds", b);
			this.X("draw", b);
			this.he("zoomAndCenter destroy defaultCursor jogEnable animateEnable baseRender overlayRender gridMapForeign".split(" "), b);
			this.he("rotateEnable pitchEnable dragEnable keyboardEnable doubleClickZoom scrollWheel zoomEnable touchZoom".split(" "), b, !0);
			this.get("jogEnable") ? this.er = !0 : this.er = !1;
			this.l4();
			this.r4();
			this.jQ && this.jQ();
			this.X("resizeEnable", b);
			this.J.map = this;
			c = this.get("size");
			c = c.width * c.height / 65536;
			f.l.cd && 3 < c && (this.xT = !0);
			this.iY()
		},
		editEnableChanged: function() {
			location.hostname.match(/.amap.com/) && (this.cc = this.get("editEnable"))
		},
		labelzIndexChanged: function() {
			this.Ic && this.Ic.set("zIndex", this.get("labelzIndex"))
		},
		styleChanged: function() {
			this.Qj = !0
		},
		mapStyleChanged: function() {
			if (this.J.Wg) {
				this.Xj && (this.set("style", ""), this.lC = this.Xj = "");
				var a = this.get("mapStyle");
				this.Qj = !0;
				this.qd = f.A.qd[a] || f.A.qd["default"];
				this.Fy()
			}
		},
		styleUrlChanged: function() {
			if (this.J.Wg) {
				var a = this.get("styleUrl") || "";
				if (a !== this.Xj) {
					var b = -1 !== a.indexOf("?isPublic=true"),
						a = a.substr(0, 46),
						c = a.split("amap://styles/")[1];
					"normal" === c ? (this.Xj = "", this.set("nolimg", !1), this.set("style", ""), this.lC = "") : (this.kz = !0, this.set("nolimg", !0), b = new f.Sa.bb(32 > c.length ? f.A.Qb + "://webapi.amap.com/style?name=" + c + "&key=" + f.A.key : f.A.Qb + "://webapi.amap.com/v4/map/styles?styleid=" + c + "&s=rsv3&key=" + f.A.key + (b ? "&ispublic=1" : ""), {
						callback: "callback"
					}), b.g("complete", function(a) {
//TODO	自定义样式代码处						
//						console.log(a.data.content)
						a.data && a.data.content ? this.set("style", JSON.parse(a.data.content)) : this.set("style", "");
						this.kz = !1
					}, this), b.g("error", function() {
						this.kz = !1
					}, this), this.Xj = a, this.Fy())
				}
			}
		},
		zY: function(a) {
			this.K.style.background = a
		},
		resizeEnableChanged: function() {},
		u$: function() {
			var a = this.get("limitBounds"),
				b = this.get("bounds");
			b.Rb.O > b.Kb.O && (b.Kb.O += 360);
			if (!a.contains(b)) {
				var c = this.get("center").Ab();
				a.Bh() < b.Bh() ? c.O = a.Zh().O : (a.Rb.O > b.Rb.O && (c.O += a.Rb.O - b.Rb.O), a.Kb.O < b.Kb.O && (c.O += a.Kb.O - b.Kb.O));
				a.zh() < b.zh() ? c.P = a.Zh().P : (a.Rb.P > b.Rb.P && (c.P += a.Rb.P - b.Rb.P), a.Kb.P < b.Kb.P && (c.P += a.Kb.P - b.Kb.P));
				return c
			}
		},
		BH: function() {
			var a = this.qM;
			this.J.refreshSize();
			var b = this.get("size");
			b && a && !b.rb(a) && (this.qM = b, this.Jr = !0, this.set("display"), this.jY(b), this.get("resizeEnable") && this.ha("resize", {
				nea: a,
				YW: b
			}))
		},
		WR: function() {
			var a = this;
			a.BH();
			a.wH = setTimeout(function() {
				a.WR()
			}, 200)
		},
		T1: function() {
			this.wH && (clearTimeout(this.wH), this.wH = null)
		},
		P4: function() {
			this.qM = this.J.getSize();
			if (f.l.ne || f.l.SZ && f.l.XC || f.l.Rda) this.WR();
			else {
				var a = this;
				f.C.D9(this.K, function(b) {
					a.BH(b)
				})
			}
		},
		Pca: function() {
			var a = this.K;
			f.j.Ga(a, "amap-container");
			var b = {};
			b.Kc = f.j.create("div", a, "amap-maps");
			this.lj = f.j.create("div", a);
			this.lj.style.display = "none";
			b.no = f.j.create("div", b.Kc, "amap-drags");
			b.w = f.j.create("div", b.no, "amap-layers");
			b.D = f.j.create("div", b.no, "amap-overlays");
			b.controls = f.j.create("div", a, "amap-controls");
			b.jy = f.j.create("a", a, "amap-logo");
			var c = window.location.host; - 1 === c.indexOf("amap.com") && -1 === c.indexOf("gaode.com") && (b.jy.href = f.l.Z ? "http://m.amap.com" : "http://gaode.com", b.jy.target = "_blank");
			f.j.create("img", b.jy).src = f.l.cd ? this.J.F.logoUrlRetina : this.J.F.logoUrl;
			b.zj = f.j.create("div", a, "amap-copyright");
			b.zj.style.display = "none";
			350 < f.j.KC(this.K).width && (b.zj.innerHTML = this.J.F.copyright, b.zj.IW = f.j.create("span", b.zj, "amap-mcode"), this.Fy());
			this.Oa = b
		},
		Fy: function() {
			var a = this.get("layers");
			if (a) {
				for (var b = -1, c = "", d = 0; d < a.length; d += 1) {
					var e = a[d].get("mapNumber"),
						g = a[d].getzIndex();
					e && g > b && a[d].get("visible") && (c = e, b = g)
				}
				this.set("mapNumber", c);
				a = this.J.getMapStyle();
				"GS(2018)1709" === c && a && "normal" !== a && "amap://styles/normal" !== a && (c = "", this.Oa.zj.style.visibility = "hidden", this.Oa.jy.style.display = "none");
				c && this.Oa.zj.IW && (this.Oa.zj.IW.innerHTML = "- " + c + "\u53f7", this.Oa.zj.style.visibility = "visible", this.Oa.jy.style.display = "block");
				return c
			}
		},
		uP: function() {
			var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : !1;
			f.l.Si && f.im && (a ? f.im.flush() : (this.HU && clearTimeout(this.HU), this.HU = setTimeout(function() {
				f.a.Ly(function() {
					f.im.flush()
				})
			}, 1E3)))
		},
		um: function() {
			function a() {
				e.J.set("rasterLayer", void 0);
				e.J.gi = e.J.NX = !0;
				e.Mt.RC = !1;
				f.a.Ly(function() {
					e.J && e.J.Tj(g)
				})
			}
			function b() {
				for (var a = e.get("layers"), b = e.get("zoom"), c = 0; c < a.length; c += 1) {
					var d = a[c].get("zooms");
					if (!(a[c].gi || !d || b > d[1] || b < d[0] || !a[c].get("visible") || a[c].w && a[c].w.ta && 0 === a[c].w.ta.length || a[c].w && a[c].w.eL || a[c].w && a[c].w.wa)) return !1
				}
				return e.Ic && e.Ic.get("visible") && 0 < e.Ic.ta.length && !e.Ic.wa && !e.Ic.TA ? !1 : !0
			}
			function c() {
				var a = {
					id: e.J.id
				};
				f.Zd.te.end(f.extend(a, {
					key: "rds"
				}));
				f.Zd.te.send(f.extend(a, {
					params: {
						rs: e.get("baseRender"),
						viewmode: e.J.getViewMode_(),
						fd: 0 === e.fD ? 1 : 0,
						raster: e.J.gi ? 1 : 0
					}
				}));
				e.J && e.J.Kk && e.J.Kk.ZA();
				e.J.HX = 1;
				e.uP(!0);
				e.set("display");
				e.gy = !0
			}
			function d() {
				f.Zd.te.end({
					id: e.J.id,
					key: "rd"
				});
				f.a.nc(function() {
					this.r("complete")
				}, e);
				e.J.wa = !0;
				e.set("display")
			}
			if (!this.YI) if (this.gy) 1 === this.Op && 13 === this.get("zoom") && (f.a.Fx.stop(this.mA), f.Zd.te.send({
				id: this.J.id,
				params: {
					fps: this.mA.Fx,
					type: "fps",
					rs: this.get("baseRender")
				}
			}), this.Op = 2), this.uP();
			else {
				var e = this,
					g = this.J.get("rasterLayer"),
					h = b();
				g ? (g.w && g.w.wa && (this.J.wa || d()), h && (this.J.wa || d(), a(), c())) : h && (this.J.wa || d(), c(), this.J.NX = !0)
			}
		},
		layersChanged: function() {
			this.Ya = this.Ya || [];
			for (var a = this.get("layers"), b = this.Ya.length - 1; 0 <= b; b -= 1) this.Ya[b] === this.ad || this.Ya[b] === this.gp || this.Ya[b].jw || this.Ya[b].ia.jw || -1 !== f.a.indexOf(a, this.Ya[b].ia) || (this.Ya[b].bg(), this.Ya[b].Zi && this.Ya[b].Zi.bg(), this.Ya[b].ia.I("complete", this.um, this), this.Ya[b].ia.I("renderComplete", this.um, this), this.Ya = f.a.zl(this.Ya, b));
			for (var c = !1, d = !0, e = this.get("labelzIndex"), b = 0; b < a.length; b += 1) {
				if (a[b].Fi) - 1 === f.a.indexOf(this.Ya, a[b].w) && this.Ya.push(a[b].w);
				else {
					var g = this.og(a[b]);
					g && (this.Ya.push(g), a[b].Fi = !0, a[b].w = g);
					a[b].g("complete", this.um, this, !0);
					a[b].g("renderComplete", this.um, this)
				}
				a[b].ap && a[b].get("visible") && (c = !0, !1 === a[b].get("detectRetina") && (d = !1), e = a[b].get("textIndex") || e)
			}
			this.Ic && (c || "3D" !== this.J.getViewMode_() ? this.Ic.TA = !1 : (c = f.a.find(a, function(a) {
				if (w.w.Gp && a instanceof w.w.Gp && a.get("visible")) return !0
			}), this.Ic.TA = c = !! c));
			a = f.a.indexOf(this.Ya, this.Ic);
			c && this.J.get("showLabel") ? (-1 === a && this.Ya.push(this.Ic), this.Ic.ja = d && f.l.ja, this.Ic.fx(this.get("mapStyle") || "normal"), this.Ic.set("zIndex", e), this.Ic.set("visible", !0), this.J.Px = !0, this.J.get("isHotspot") ? this.Ic.Gea() : this.Ic.LI()) : (this.Ic && (this.Ic.set("visible", !1), this.J.Px = !1, this.Ic.LI()), this.J.Px = !1);
			this.J.isHotspotChanged();
			this.set("display", 0);
			this.Fy()
		},
		isHotspotChanged: function() {
			this.layersChanged()
		},
		controlsChanged: function() {
			var a = this.get("controls"),
				b, c;
			if (a.add && 0 < a.add.length) for (; 0 < a.add.length;) b = a.add.shift(), (c = b.pq || b.addTo) && c.call(b, this.J, this.Oa.controls);
			else if (a.remove && a.remove.length) for (; 0 < a.remove.length;) b = a.remove.shift(), (c = b.zr || b.removeFrom) && c.call(b, this.J, this.Oa.controls)
		},
		bT: function() {
			if (!this.YI) {
				var a = this;
				this.eT = !1;
				a.ad || (a.ad = new f.w.Gc(new w.w.Gc, a), a.ad.Fe = 36, a.ad.af = 36, a.ad.set("zIndex", 120), a.Ya.push(a.ad), a.ad.xx = !0);
				for (var b = a.get("overlays"), c = [], d = 0; d < a.mc.length; d += 1) - 1 === f.a.indexOf(b, a.mc[d].Oc) && (a.mc[d].Oc instanceof w.D.fe || a.mc[d].Oc instanceof w.D.cl ? a.mc[d].bg() : (a.ad && a.mc[d] instanceof f.D.ab ? (a.ad.Jf = f.a.Dt(a.ad.Jf, a.mc[d].M), a.ad.SX([a.mc[d].M])) : a.gp && a.gp.SX([a.mc[d].M]), a.mc[d].M.ea ? (f.j.remove(a.mc[d].M.ea), a.mc[d].M.ea = null) : a.mc[d].M.Ia && (f.j.remove(a.mc[d].M.Ia.Ye), f.j.remove(a.mc[d].M.Ia.Wb), a.mc[d].M.Ia = null), a.mc[d].Qk && a.mc[d].Qk.stop(), a.mc[d].Oc.Fi = !1, a.mc[d].Oc.Nh.map = null, a.mc[d].Oc.D = null, a.mc[d].Oc = null, a.mc[d].M.Daa(), a.mc[d].M = null, a.mc[d].vp(), a.mc[d].Nh = null, a.mc[d].Uh(), a.mc[d].map = null), c.push(a.mc[d]));
				for (d = 0; d < c.length; d += 1) a.mc = f.a.zl(a.mc, f.a.indexOf(a.mc, c[d]));
				var e = [],
					g = [];
				f.a.Fga(function(b) {
					if (!b.Fi && b.Gf) {
						var c = b.D || a.h$(b);
						c && (a.mc.push(c), c instanceof f.D.fe || c instanceof f.D.cl ? c.qD(a) : c instanceof f.D.ab ? e.push(c.M) : g.push(c.M), b.Fi = !0)
					}
				}, b);
				e.length && a.ad.oq(e);
				g.length && (a.gp || (a.gp = new f.w.Gc(new w.w.Gc, a), a.gp.set("zIndex", 110), a.Ya.push(a.gp)), a.gp.oq(g));
				a.set("display", 0)
			}
		},
		overlaysChanged: function() {
			this.mc = this.mc || [];
			this.mc.length && this.mc.length !== this.get("overlays").length ? this.bT() : this.eT || (f.a.nc(this.bT, this), this.eT = !0)
		},
		contextmenusChanged: function() {
			var a = this.get("contextmenu");
			if (a) {
				var b = this;
				f.gb.load("overlay", function() {
					b.iC = new f.D.cl(a, b);
					b.set("display", 0)
				})
			}
		},
		infosChanged: function() {
			var a = this.get("infos");
			if (a) {
				this.Il = this.Il || {};
				var b, c = this;
				f.gb.load("overlay", function() {
					for (var d in a) a.hasOwnProperty(d) && (b = a[d], c.Il[d] = c.Il[d] || new f.D.fe(b, c))
				})
			}
		},
		h$: function(a) {
			var b = null;
			if (a instanceof w.D.ab) b = new f.D.ab(a, this);
			else if (a instanceof w.D.cl) b = new f.D.cl(a, this);
			else if (a instanceof w.D.fe) b = new f.D.fe(a, this);
			else {
				var c = ["overlay"];
				"d" === this.get("overlayRender") ? (c.push("dvector"), f.l.Ol ? c.push("svg") : c.push("vml")) : c.push("cvector");
				if (!this.Bia && !f.gb.ay(c)) {
					var d = this;
					f.gb.$f(c, function() {
						this.Bia = !0;
						d.overlaysChanged()
					});
					return
				}
				a instanceof w.D.bc ? b = new f.D.bc(a, this) : a instanceof w.D.iv ? b = new f.D.iv(a, this) : a instanceof w.D.Fb ? b = new f.D.Fb(a, this) : a instanceof
				w.D.Pf ? b = new f.D.Pf(a, this) : a instanceof w.D.Fp ? b = new f.D.bc(a, this) : a instanceof w.D.Jp && (b = new f.D.bc(a, this))
			}
			return b
		},
		oka: function() {
			function a() {}
			var b = new f.w.Gc,
				c = [],
				d = new f.V(116.405467, 39.907761);
			new f.style.qf.Gg;
			for (var e = 0; 100 > e; e += 1) for (var g = 0; 100 > g; g += 1) {
				var h = new f.V(d.O + 0.02 * g, d.P + 0.02 * e),
					h = new f.Eg({
						name: "point" + (100 * e + g),
						map: this,
						Y: new f.pa.Qf(this.Jb(h))
					});
				c[100 * e + g] = h;
				h.g("hover", a, h)
			}
			b.oq(c);
			this.Ya.push(b)
		},
		Mb: function() {},
		nka: function(a) {
			var b = new f.w.Gc,
				c = [],
				c = (new f.q_({
					map: this
				})).GD(a);
			b.oq(c);
			this.Ya.push(b);
			this.set("display", 0)
		},
		og: function(a) {
			a = a.og(this);
			if (!a) return null;
			if (a.length && "string" == typeof a[0]) {
				var b = this;
				f.gb.$f(a, function() {
					b.layersChanged()
				})
			} else return a;
			return null
		},
		wla: function() {
			return this.Oa
		},
		Wma: function() {
			this.set("display", 0)
		},
		displayChanged: function(a) {
			this.TS || this.iY(a)
		},
		iY: function(a) {
			if (a) if (f.a.Sg(this.ND), f.l.yj) {
				var b = this;
				setTimeout(function() {
					b.fc()
				}, 0)
			} else this.fc();
			else this.Zr || (this.ND = f.a.nc(this.fc, this), this.Zr = !0)
		},
		fc: function() {
			if (!this.YI) {
				this.r("render");
				this.Zr = !1;
				var a = {};
				if (this.Ya) {
					for (var b = this.J.getViewMode_(), c = [], d = 0, e = this.Ya.length; d < e; d += 1) this.Ya[d].Bp && this.Ya[d].Bp !== b ? this.Ya[d].wa = !0 : (c.push(this.Ya[d]), this.Ya[d].Zi && c.push(this.Ya[d].Zi));
					c.sort(function(a, b) {
						var c = a.get("zIndex"),
							d = b.get("zIndex");
						return c > d ? 1 : c === d ? a.Lz > b.Lz ? 1 : -1 : -1
					});
					a.Ya = c;
					a.size = this.get("size");
					if (a.size.width && a.size.height) {
						b = f.l.ja ? Math.min(window.devicePixelRatio || 1, 2) : 1;
						a.Z9 = 15E5 < a.size.width * a.size.height * b * b;
						a.RC = !! this.J.get("rasterLayer");
						a.Z = f.l.Z;
						a.W = this.J.JC();
						a.S = this.J.view.get("resolution");
						a.Wo = this.get("mapStyle");
						a.Qj = this.Qj;
						a.Hc = this.Ng;
						a.Bl = this.Hs;
						a.Pe = this.Bi;
						a.Hf = this.hg;
						a.IM = this.hg && f.l.Z;
						a.uZ = f.l.Z && this.Bi;
						a.kE = f.l.Z && this.Ng;
						this.kE = a.kE;
						a.ek = a.W.zoom > this.get("targetLevel");
						a.nma = !0;
						a.xT = this.xT;
						for (var b = !1, g, c = !1, d = 0; d < this.Ya.length; d += 1) this.Ya[d].bi && this.Ya[d].get("visible") && a.W.zoom <= this.Ya[d].get("zooms")[1] && (a.VL = !0), this.Ya[d].Wm().cd && (b = !0);
						for (d = 0; d < this.Ya.length; d += 1) this.Ya[d].ia.qI && a.VL && (!this.Bi && this.Ya[d].ia.get("visible") && (g = this.Ya[d].ia.qI(), g.Ola = 1, g.zoom = a.W.zoom), c = !0);
						c ? g && this.Gb !== g && (this.Gb = g) : this.Gb = [];
						a.Gb = this.Gb;
						a.cd = b;
						a.scale = Math.pow(2, a.W.zoom - a.W.ce);
						this.Mt = a;
						if (g = this.DC()) g.fc(a), this.Qj = this.JU = !1
					}
				}
			}
		},
		DC: function() {
			if (!this.T || this.T.type !== this.J.view.type) if (this.T = null, "3D" == this.J.view.type) {
				var a = this;
				f.gb.load("Map3D", function() {
					a.T || (a.T = new f.Ja.Bz(a), a.set("display"))
				})
			} else this.T = new f.Q.canvas.Pb(this);
			return this.T
		},
		Eba: function() {
			var a = [],
				b = this.get("controls").Bc,
				c;
			for (c in b) b[c].Rt && b[c].Rt() && a.push(b[c].Rt());
			return a
		},
		destroyChanged: function() {
			this.YI = 1;
			this.R = {};
			this.Ic && (this.Ic.ia.I("complete", this.um, this), this.Ic.bg(), this.Ya = f.a.zl(this.Ya, f.a.indexOf(this.Ya, this.Ic)));
			this.A8 && clearTimeout(this.A8);
			this.g8();
			this.n5();
			this.gH && this.gH();
			this.h9();
			this.vp();
			this.J = this.J.map = null;
			this.K = this.K.qF = null;
			this.Qd && (this.Qd.stop(), this.Qd = null);
			this.Oe && (this.Oe.stop(), this.Oe = null);
			this.Tc && (this.Tc.stop(), this.Tc = null)
		},
		h9: function() {
			var a = this.K;
			this.T1();
			f.C.I$(a);
			f.j.Gy(a);
			this.lj = null;
			f.j.Ma(a, "amap-container");
			this.Oa = null
		},
		jogEnableChanged: function() {
			this.get("jogEnable") ? this.er = !0 : this.er = !1
		},
		drawChanged: function() {
			var a = this,
				b, c, d = this.get("draw");
			if (d) {
				this.an || (this.an = []);
				b = 0;
				for (c = this.an.length; b < c; b += 1) this.an[b].Ofa();
				f.gb.load("interaction", function() {
					var b = new f.kja({
						type: d,
						w: a.gp
					}, a);
					a.an.push(b);
					a.loaded = !0
				})
			} else if (this.an) for (b = 0, c = this.an.length; b < c; b += 1) this.an[b].Ofa(), this.an[b].Cka(), this.I("click", this.an[b].Ila, this)
		},
		Je: function(a, b, c) {
			return this.J.view.Je(a, b, c)
		},
		jf: function(a, b, c) {
			return this.J.view.jf(a, b, c)
		},
		sV: function(a, b) {
			var c = this.get("size"),
				d = document.createElement("canvas");
			a = a || c.width;
			b = b || c.height;
			d.width = a;
			d.height = b;
			for (var e = -(c.width - a) / 2, c = -(c.height - b) / 2, g = d.getContext("2d"), h = this.Oa.w.childNodes, k = [], l = 0; l < h.length; l += 1) k.push(h[l]);
			k.sort(function(a, b) {
				return a.style.zIndex - b.style.zIndex
			});
			for (l = 0; l < k.length; l += 1) {
				var m = k[l];
				if (f.j.El(m, "amap-layer") || f.j.El(m, "amap-e") || f.j.El(m, "amap-labels")) if ("CANVAS" === m.tagName) {
					var h = c,
						n = e,
						p = parseFloat(m.style.width) || m.width,
						q = parseFloat(m.style.height) || m.height,
						r = 1;
					m.style.transform && (r = parseFloat(m.style.transform.split("(")[1]));
					g.drawImage(m, n, h, p * r, q * r)
				} else if ("DIV" === m.tagName) for (var r = m.childNodes, s = parseFloat(m.style.top) || 0 + c, m = parseFloat(m.style.left) || 0 + e, u = 0; u < r.length; u += 1) {
					var v = r[u];
					if ("CANVAS" === v.tagName || "IMG" === v.tagName) h = parseFloat(v.style.top) || 0, n = parseFloat(v.style.left) || 0, p = parseFloat(v.style.width) || v.width, q = parseFloat(v.style.height) || v.height, g.drawImage(v, n + m, h + s, p, q)
				}
			}
			return d.toDataURL()
		}
	});
	f.Pb.ob({
		l4: function() {
			this.ow = !1;
			f.l.Me && ("3D" === this.J.view.type ? this.j1() : this.h1());
			f.l.Z || this.e1()
		},
		g8: function() {
			f.l.Me && ("3D" === this.J.view.type ? this.t5() : this.s5());
			f.l.Z || this.o5()
		},
		rotateEnableChanged: function() {
			this.TD = this.get("rotateEnable");
			f.l.Me && this.zT && "3D" !== this.J.view.type && (this.TD ? this.zT() : this.mea());
			this.rotation = this.TD ? this.get("rotation") : 0;
			this.set("rotation", this.rotation);
			this.set("display")
		},
		zoomEnableChanged: function() {
			this.get("zoomEnable") ? (f.l.Me && this.uI && "3D" !== this.J.view.type && this.uI(), f.l.Z || this.g1()) : (f.l.Me && this.hL && this.hL(), f.l.Z || this.r5())
		},
		mousewheelChanged: function() {},
		RK: function(a) {
			a && this.Kda(a.kq)
		},
		Kda: function(a) {
			this.ow = a
		},
		Tr: function() {
			this.ow = !1
		},
		vg: function(a, b, c) {
			var d, e = {};
			a || (a = window.event);
			var g = f.C.Gj(a, this.Oa.Kc);
			f.l.Me && ("touchend" !== a.type ? this.R.GQ = g : g = this.R.GQ);
			e.ub = g;
			e.Ad = this.jf(g);
			e.Ad && (e.Ad = e.Ad.toFixed(3));
			e.nf = this.de(e.Ad);
			c || (c = this.ow ? this.ow ? [this.ow] : null : this.j3(e.Ad)) && 0 < c.length && c[0].ao && (d = c[0].ao, e.kq = c[0]);
			d || (d = this);
			e.jd = d;
			e.Bja = a.altKey;
			e.ctrlKey = a.ctrlKey;
			e.button = void 0 === a.button ? 0 : a.button;
			!b && a.preventDefault && a.preventDefault();
			return e
		},
		DG: function(a) {
			return a && a !== this && a !== document
		},
		xH: function() {
			if (this.R.Pm && this.R && this.R.Ff) {
				var a = this.R.Pm.ub.Va(this.R.Ff);
				a.x || a.y ? (this.R.hg = !0, this.R.om || (this.R.Qm.r("dragstart", this.R.Om), this.R.om = !0), this.R.Qm.r("dragging", this.R.Pm), this.R.Ff = this.R.Pm.ub) : this.R.hg = !1
			}
		},
		hha: function(a) {
			for (var b = [], c = 0; c < a.length; c += 1) a[c] && (b = b.concat(a[c]));
			return b
		},
		vr: function(a, b, c) {
			return a && b && (a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y) < (c || 10)
		},
		j3: function(a) {
			var b = this.DC();
			if (!b) return null;
			var c, d = this;
			this.Ya.sort(function(a, b) {
				return a.get("zIndex") > b.get("zIndex") ? -1 : 1
			});
			b.Sq(a, this.Ya, function(a) {
				c = a;
				c = d.hha(c)
			}, function() {
				c = []
			});
			return c
		}
	});
	f.Pb.ob({
		r4: function() {
			this.g("moveend", this.bX, this);
			f.l.yj && (f.l.pE || f.l.PB) && this.g("zoomend", this.iN, this);
			this.g("movestart", this.cX, this);
			this.g("zoomstart", this.hX, this);
			this.g("zoomend", this.gX, this);
			this.wF();
			this.Op = 0;
			this.mA = {};
			"undefined" === typeof window.requestAnimationFrame && (this.Op = 2)
		},
		hX: function() {
			2 !== this.Op && 12 === this.get("zoom") && (this.Op = 1, f.a.Fx.start(this.mA));
			this.Bi = !0
		},
		gX: function() {
			1 === this.Op && 13 !== this.get("zoom") && (this.Op = 0, f.a.Fx.cancel(this.mA));
			this.Bi = !1;
			this.set("display")
		},
		CS: function(a, b) {
			this.Hs.left = 0 < a;
			this.Hs.right = 0 > a;
			this.Hs.Yu = 0 < b;
			this.Hs.rC = 0 > b
		},
		gq: function() {
			this.Hs = {}
		},
		n5: function() {
			this.I("moveend", this.bX, this);
			f.l.yj && (f.l.pE || f.l.PB) && this.I("zoomend", this.iN, this);
			this.I("movestart", this.cX, this);
			this.I("zoomstart", this.hX, this);
			this.I("zoomend", this.gX, this);
			this.p5()
		},
		bX: function(a) {
			this.hg = !1;
			this.gq();
			this.jY();
			!a.iW && this.get("limitBounds") ? (a = this.u$()) && !a.rb(this.get("center")) ? this.YD(this.get("zoom"), a, !1, !0) : this.ha("moveend") : this.ha("moveend");
			this.set("display")
		},
		cX: function() {
			this.hg = !0;
			this.gq()
		},
		dragEnableChanged: function() {
			(this.yx = this.get("dragEnable")) ? this.vF() : this.fH()
		},
		ha: function(a, b) {
			var c;
			b && (c = b.YW ? {
				type: a,
				newsize: b.YW,
				oldsize: b.nea
			} : {
				type: a,
				pixel: b.ub,
				target: this.J,
				lnglat: b.nf
			});
			this.J.r(a, c)
		},
		wF: function() {
			this.g("click", this.hR);
			this.g("dblclick", this.lR);
			f.l.Me && this.zO();
			f.l.Z || this.f1()
		},
		p5: function() {
			this.I("click", this.hR);
			this.I("dblclick", this.lR);
			f.l.Me && this.XQ();
			f.l.Z || this.q5()
		},
		$A: function(a, b) {
			var c = this.get("targetLevel") || this.get("zoom"),
				c = 0 < b ? Math.floor(c) + 1 : Math.ceil(c) - 1,
				c = Math.min(Math.max(c, this.get("zooms")[0]), this.get("zooms")[1]);
			c === this.get("zoom") || this.Oe && this.Oe.Fr && c === this.Oe.end || this.hv(c, !1, a)
		},
		hR: function(a) {
			this.ha("click", a)
		},
		lR: function(a) {
			this.get("doubleClickZoom") && this.get("zoomEnable") && this.$A(a.Ad, 1);
			this.ha("dblclick", a)
		},
		aka: function(a) {
			this.$A(a.Cna, a.Dna);
			this.ha("touchend", a)
		},
		vF: function() {
			this.yx && ("3D" === this.J.view.type ? (this.g("dragstart", this.rR), this.g("dragging", this.nR), this.g("dragend", this.pR)) : (this.g("dragstart", this.qR), this.g("dragging", this.mR), this.g("dragend", this.oR)))
		},
		fH: function() {
			this.yx || ("3D" === this.J.view.type ? (this.I("dragstart", this.rR), this.I("dragging", this.nR), this.I("dragend", this.pR)) : (this.I("dragstart", this.qR), this.I("dragging", this.mR), this.I("dragend", this.oR)))
		},
		qR: function(a) {
			this.RK(a);
			this.gq();
			this.Ng = !0;
			this.R.Ht = a.ub.x;
			this.R.zx = a.ub.y;
			this.Qd && (this.Qd.stop(), this.Co(!0));
			this.ha("dragstart");
			this.ha("movestart");
			this.r("movestart", a);
			this.oha()
		},
		mR: function(a) {
			var b = this.R,
				c = a.ub.x - b.Ht,
				d = a.ub.y - b.zx;
			if (d || c) {
				this.R.hg = !0;
				this.CS(c, d);
				b.Ht = a.ub.x;
				b.zx = a.ub.y;
				a = c;
				var b = d,
					e = this.TD ? this.rotation : 0;
				e && (e *= Math.PI / 180, a = c * Math.cos(e) + Math.sin(e) * d, b = -Math.sin(e) * c + Math.cos(e) * d);
				a = this.get("centerCoords").Va((new f.G(a, b)).Sc(this.S));
				(b = this.RT(a)) && (d = Math.round(this.Je(b).Va(this.Je(a)).y));
				this.$o(this.Oa.no, c, d);
				a.x = (a.x + f.a.fb) % f.a.fb;
				this.set("centerCoords", a, !0);
				this.set("center", this.de(a), !0);
				this.er && (this.Sf ? (a = new Date, this.Tp = 100 < a - this.Sf ? new f.G(0, 0) : new f.G(c, d), this.Sf = a) : this.Sf = new Date);
				this.ha("dragging");
				this.ha("mapmove")
			} else this.R.hg = !1, this.Tp = null, this.gq()
		},
		$o: function(a, b, c) {
			if (a && !(1 > Math.abs(b) && 1 > Math.abs(c))) {
				var d = parseFloat(a.style.top) || 0,
					e = parseFloat(a.style.left) || 0,
					g = "";
				this.rotation && (g = f.j.rp[f.j.rf] + ":rotate(" + this.rotation + "deg);overflow:visible;");
				a.style.cssText = "position:absolute;top:" + (d + c) + "px;left:" + (e + b) + "px;" + g
			}
		},
		RT: function(a) {
			var b = this.J.view.eO(),
				c = this.qM.height * this.S / 2;
			return a.y < b.xd + c ? (a.y = b.xd + c, a) : a.y > b.wd - c ? (a.y = b.wd - c, a) : null
		},
		oR: function() {
			this.Tr();
			100 < new Date - this.Sf && (this.Tp = null);
			this.R.Ff = null;
			this.Ng = !1;
			this.gq();
			this.ha("dragend");
			if (this.er && this.Tp) if (this.R.hg) {
				var a = this.Tp,
					b = new f.G(0, 0);
				this.Qd = new f.pi(a, b, function(a, b, e) {
					return 600 <= e ? b : a.Sc(1 - Math.pow(e / 600, 2)).floor()
				}, 1);
				this.Qd.kn = function(a) {
					if (2 > Math.abs(a.x) && 2 > Math.abs(a.y)) this.Qd.stop(), this.r("moveend"), this.Co(), this.Tp = this.Sf = null;
					else {
						var b = a.x,
							e = a.y,
							g = this.TD ? this.rotation : 0;
						g && (g *= Math.PI / 180, b = a.x * Math.cos(g) + Math.sin(g) * a.y, e = -Math.sin(g) * a.x + Math.cos(g) * a.y);
						b = this.get("centerCoords").Va((new f.G(b, e)).Sc(this.S));
						e = this.RT(b);
						g = a.y;
						e && (g = Math.round(this.Je(e).Va(this.Je(b)).y));
						this.$o(this.Oa.no, a.x, g);
						b.x = (b.x + f.a.fb) % f.a.fb;
						this.set("centerCoords", b, !0);
						this.set("center", this.de(b), !0);
						this.ha("mapmove")
					}
				};
				this.Qd.Xk(this)
			} else this.r("moveend"), this.Co(!0), this.Tp = this.Sf = null;
			else this.r("moveend"), this.Co(), this.Tp = this.Sf = null
		},
		oha: function() {
			if (!this.R.refresh) {
				var a = this;
				this.R.refresh = setInterval(function() {
					a.set("display", 0)
				}, f.l.Z ? 400 : 100)
			}
		},
		iN: function() {
			if (f.l.yj && (f.l.pE || f.l.PB)) {
				for (var a = this.Oa.w.childNodes, b = 0; b < a.length; b += 1) {
					var c = a[b];
					c instanceof HTMLCanvasElement && (c.width = 0);
					"amap-e" === c.className && (c.style.height = "0")
				}
				for (b = 0; b < this.Ya.length; b += 1) c = this.Ya[b], "undefined" !== typeof AMap.IndoorMap && c instanceof AMap.IndoorMap && (c.mq && (c.mq.width = 0), c.mt && (c.mt.width = 0))
			}
		},
		Co: function(a) {
			this.R.refresh && (clearInterval(this.R.refresh), this.R.refresh = null);
			a || (this.iN(), this.set("display", 0))
		},
		jY: function(a) {
			this.set("refresh", a)
		}
	});
	f.Pb.ob({
		setZoomSlow: function(a) {
			this.YD(a, null, !this.get("animateEnable"))
		},
		setPanTo: function(a) {
			this.YD(null, a, !this.get("animateEnable"))
		},
		zoomAndCenterChanged: function(a) {
			var b = a[0];
			b < this.get("zooms")[0] && (b = this.get("zooms")[0]);
			b > this.get("zooms")[1] && (b = this.get("zooms")[1]);
			this.YD(b, a[1], a[2] || !this.get("animateEnable"))
		},
		zoomChanged: function() {
			this.S = Math.pow(2, 20 - this.get("zoom"));
			this.r("closeOverlays");
			this.set("display")
		},
		rotationChanged: function(a) {
			this.rotation = this.get("rotateEnable") ? this.get("rotation") : 0;
			this.J.r("rotate", {
				rotation: this.rotation || 0
			});
			!0 !== a && this.set("display", 0)
		},
		pitchChanged: function() {
			this.pitch = this.get("pitchEnable") ? this.get("pitch") : 0;
			this.J.r("pitch", {
				pitch: this.pitch || 0
			});
			this.set("display", 0)
		},
		centerCoordsChanged: function() {
			this.r("closeOverlays");
			this.Gja ? this.set("display", 1) : this.set("display")
		}
	});
	f.YN = f.ba.extend({
		ga: [f.ka, f.se],
		B: function(a, b) {
			this.type = "2D";
			this.map = a;
			this.zg(b, !0);
			this.centerChanged();
			a.he("zoom center centerCoords scale rotation pitch resolution".split(" "), this);
			this.he(["crs", "refresh"], a)
		},
		getResolution: function(a) {
			return this.map.Lm.ZJ(a || this.get("zoom"))
		},
		eO: function() {
			this.lF || this.V$();
			return this.lF
		},
		V$: function() {
			var a;
			if (this.get("center") instanceof f.V) {
				a = new f.Wd(-180, -85, 180, 85);
				var b = this.map.Jb(a.Hj());
				a = this.map.Jb(a.Ho());
				this.lF = {
					pe: b.x,
					xd: b.y,
					Td: a.x,
					wd: a.y
				}
			} else a = this.map.get("limitBounds"), this.lF = {
				pe: a[0],
				xd: a[1],
				Td: a[2],
				wd: a[3]
			}
		},
		JC: function() {
			var a = this.map,
				b = this.get("zoom");
			return {
				zoom: b,
				qh: this.get("center"),
				Aa: this.Hk(),
				eb: this.get("centerCoords"),
				rotation: a.get("rotateEnable") && parseInt(this.get("rotation")) || 0,
				bf: a.get("crs"),
				S: Math.pow(2, 20 - b),
				ce: Math.round(b),
				Ze: Math.pow(2, 20 - Math.round(this.get("zoom")))
			}
		},
		centerChanged: function() {
			this.set("centerCoords", this.map.Jb(this.get("center")).toFixed(3), !0)
		},
		centerCoordsChanged: function() {
			var a = this.map,
				b = this.eO(),
				c = this.get("centerCoords"),
				d = a.getSize(),
				e = this.get("zoom", null, !0),
				a = this.get("center", null, !0),
				d = d.height * Math.pow(2, 20 - e) / 2;
			a instanceof f.V ? c.x = (c.x + 268435456) % 268435456 : 0 > c.x ? c.x = 0 : c.x > b.Td && (c.x = b.Td);
			c.y < b.xd + d ? c.y = b.xd + d : c.y > b.wd - d && (c.y = b.wd - d);
			this.set("center", this.map.de(c), !0)
		}
	});
	f.eF = f.YN.extend({
		Hk: function() {
			var a = this.map.get("size"),
				b = this.get("centerCoords"),
				c = (this.map.get("rotateEnable") && parseInt(this.get("rotation"))) % 360 || 0,
				d = this.get("zoom", null, !0),
				e = Math.pow(2, 20 - d),
				c = Math.PI * c / 180,
				a = new f.G((Math.abs(a.width * Math.cos(c)) + Math.abs(a.height * Math.sin(c))) / 2, (Math.abs(a.width * Math.sin(c)) + Math.abs(a.height * Math.cos(c))) / 2),
				e = new f.Qe(b.Va(a.Sc(e)), b.add(a.Sc(e))),
				c = this.map.get("targetLevel");
			if (c > d - 1) {
				var g = Math.pow(2, 20 - c);
				e.EE = new f.Qe(b.Va(a.Sc(g)), b.add(a.Sc(g)))
			}
			e.fZ = c || d;
			e.Ub = a;
			return e
		},
		xba: function(a) {
			var b = this.map.get("size"),
				c = this.get("centerCoords"),
				d = (this.map.get("rotateEnable") && parseInt(this.get("rotation"))) % 360 || 0,
				d = Math.PI * d / 180,
				b = new f.G((Math.abs(b.width * Math.cos(d)) + Math.abs(b.height * Math.sin(d))) / 2, (Math.abs(b.width * Math.sin(d)) + Math.abs(b.height * Math.cos(d))) / 2);
			a = Math.pow(2, 20 - a);
			return new f.Qe(c.Va(b.Sc(a)), c.add(b.Sc(a)))
		},
		Qc: function() {
			var a = this.Hk(),
				b = a.nd.x,
				c = a.Nb.y,
				a = new f.G(a.Nb.x, a.nd.y),
				b = new f.G(b, c);
			return new f.Wd(this.map.de(a), this.map.de(b))
		},
		zoomChanged: function() {},
		Je: function(a, b) {
			this.map.get("size");
			var c = a.Ab(),
				d = this.get("centerCoords"),
				e = c.Va(d);
			e.x < -f.a.fb / 2 ? e.x += f.a.fb : e.x > f.a.fb / 2 && (e.x -= f.a.fb);
			var c = this.map.get("size").Tu().vc(2),
				g = (this.map.get("rotateEnable") ? this.get("rotation") : 0) * Math.PI / 180,
				d = e.x * Math.cos(g) - Math.sin(g) * e.y,
				e = Math.sin(g) * e.x + Math.cos(g) * e.y;
			return c.add((new f.G(d, e)).Sc(Math.pow(2, (b || this.get("zoom")) - 20)))
		},
		jf: function(a, b) {
			var c = this.map.get("size").Tu().vc(2),
				d = a.Va(c),
				e = (this.map.get("rotateEnable") ? this.get("rotation") : 0) * Math.PI / 180,
				c = d.x * Math.cos(e) + Math.sin(e) * d.y,
				d = -Math.sin(e) * d.x + Math.cos(e) * d.y,
				c = this.get("centerCoords").add((new f.G(c, d)).Sc(Math.pow(2, 20 - (b || this.get("zoom")))));
			c.x = (c.x + 268435456) % 268435456;
			return c
		}
	});
	f.q0 = f.YN.extend({
		B: function(a, b) {
			this.Zg = new f.ge;
			this.yd = new f.ge([1, 0, 0, 0, 0, -1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1]);
			arguments.callee.oa.apply(this, arguments);
			this.scale = 1;
			this.type = "3D";
			this.qw = !0;
			this.UK = f.a.bind(this.UK, this)
		},
		refreshChanged: function() {
			this.Vr()
		},
		zoomChanged: function() {
			this.Vr()
		},
		centerChanged: function() {
			arguments.callee.oa.apply(this, arguments);
			this.Vr()
		},
		centerCoordsChanged: function() {
			arguments.callee.oa.apply(this, arguments);
			this.Vr()
		},
		rotationChanged: function() {
			this.Vr()
		},
		pitchChanged: function(a) {
			this.Nh.pitch = Math.min(this.map.get("maxPitch"), Math.max(a, 0));
			this.Vr()
		},
		Vr: function() {
			this.tia() || (this.bN(), this.Eaa())
		},
		Eaa: function() {
			f.a.Jj();
			this.qw = !1;
			this.VG && clearTimeout(this.VG);
			this.VG = setTimeout(this.UK, 150)
		},
		UK: function() {
			this.VG = null;
			this.qw = !0
		},
		Pla: function() {
			return this.qw
		},
		bN: function() {
			var a = this.get("centerCoords"),
				b = this.get("pitch"),
				c = this.get("rotation");
			this.map.get("rotateEnable") || (c = 0);
			this.map.get("pitchEnable") || (b = 0);
			a = (new f.ge).IY(-a.x + f.a.Wc.x, -a.y + f.a.Wc.y, 0);
			b = (new f.ge).Ju(180 - b, 1, 0, 0);
			this.ofa = (new f.ge).set(b);
			c = (new f.ge).Ju(c, 0, 0, 1);
			this.kp = (new f.ge).set(c);
			this.sba = a.Nj();
			this.yd = (new f.ge).IY(0, 0, -this.ul).multiply(b.multiply(c.multiply(a))).toFixed(8);
			this.yd.oe = this.yd.Nj()
		},
		tia: function(a) {
			a = a || this.get("zoom");
			var b = this.map.get("size"),
				c = b.width,
				b = b.height;
			if (!c || !b) return !0;
			this.OB = c /= b;
			b = b / 2 * Math.pow(2, 20 - a);
			a = f.a.Pc((56 - a) * Math.PI / 180, 2);
			var d = f.a.Pc(b / Math.tan(a / 2), 0);
			2400 > d && (d = 2400, a = 2 * Math.atan(b / d));
			this.ul = d;
			this.ry = this.ul / 10;
			this.yJ = 50 * this.ul;
			this.raa = (this.ul - this.ry) / (this.yJ - this.ry);
			this.Zg.Vga(a, c, this.ry, this.yJ);
			this.Zg.oe = this.Zg.Nj();
			a = this.Zg;
			var c = new f.zN,
				b = c.xy,
				e = this.Zg.elements,
				d = e[0],
				g = e[1],
				h = e[2],
				k = e[3],
				l = e[4],
				m = e[5],
				n = e[6],
				p = e[7],
				q = e[8],
				r = e[9],
				s = e[10],
				u = e[11],
				v = e[12],
				x = e[13],
				t = e[14],
				e = e[15];
			wc(b[0], k - d, p - l, u - q, e - v).normalize();
			wc(b[1], k + d, p + l, u + q, e + v).normalize();
			wc(b[2], k + g, p + m, u + r, e + x).normalize();
			wc(b[3], k - g, p - m, u - r, e - x).normalize();
			wc(b[4], k - h, p - n, u - s, e - t).normalize();
			wc(b[5], k + h, p + n, u + s, e + t).normalize();
			a.KU = c
		},
		JC: function() {
			var a = this.map,
				b = this.get("zoom");
			a.map.Jr && this.Vr();
			return {
				zoom: b,
				OB: this.OB,
				top: this.top,
				qh: this.get("center"),
				Aa: this.Hk(),
				eb: this.get("centerCoords"),
				rotation: a.get("rotateEnable") && parseInt(this.get("rotation")) || 0,
				pitch: a.get("rotateEnable") && this.get("pitch") || 0,
				foa: this.get("yaw"),
				bf: a.get("crs"),
				S: Math.pow(2, 20 - b),
				ce: Math.round(b),
				Ze: Math.pow(2, 20 - Math.round(this.get("zoom"))),
				Zg: this.Zg,
				yd: this.yd
			}
		},
		Hk: function() {
			var a = this.map.get("size"),
				b = a.width,
				a = a.height;
			if (!b || !a) return null;
			var c, d;
			d = 0;
			c = this.jf(new f.G(0, d), !0);
			if (55 < this.Nh.pitch || !c) for (; !c;) d += b / 96, c = this.jf(new f.G(0, d), !0);
			this.top = d / a;
			d = this.jf(new f.G(b, d), !0);
			var e = 0,
				g = this.Nh.zoom;
			50 <= this.Nh.pitch && 18 <= g && (e = 0);
			g = this.jf(new f.G(b, a + e), !0);
			e = this.jf(new f.G(0, a + e), !0);
			c = [c.Zj(), d.Zj(), g.Zj(), e.Zj(), c.Zj()];
			c = new f.pN(c);
			c.DI = this.jf(new f.G(b / 2, a + 256), !0);
			return c
		},
		Qc: function() {
			var a = this.Hk();
			if (a) {
				for (var b = [], c = 0; c < a.path.length; c += 1) {
					var d = this.map.de(new f.G(a.path[c][0], a.path[c][1]));
					b.push(d)
				}
				return new f.pN(b)
			}
		},
		Je: function(a, b, c) {
			a.z = c || 0;
			a = this.UW([a]);
			a = a[0];
			return new f.G(a.x, a.y)
		},
		VU: function(a) {
			var b = this.map.get("size");
			a = new f.fj([a.x / b.width * 2 - 1, 1 - a.y / b.height * 2, -1, 1]);
			a.multiply(this.ry);
			return this.Zg.oe.If(a)
		},
		jf: function(a, b, c) {
			var d = this.map.get("size"),
				e = a.x / d.width * 2 - 1,
				d = 1 - a.y / d.height * 2;
			a = new f.fj([e, d, -1, 1]);
			a.multiply(this.ry);
			if (!this.Zg.oe) return null;
			a = this.Zg.oe.If(a);
			e = new f.fj([e, d, 1, 1]);
			e.multiply(this.yJ);
			var d = this.Zg.oe.If(e),
				g = this.yd.oe,
				e = g.If(a).elements;
			a = g.If(d).elements;
			c = (e[2] - (-c || 0)) / (e[2] - a[2]);
			if (0 > a[2] || 0 > c || b && c > 2.5 * this.raa) return null;
			b = e[0] - c * (e[0] - a[0]);
			c = e[1] - c * (e[1] - a[1]);
			return isNaN(b) || isNaN(c) ? null : (new f.G(b, c)).add(f.a.Wc)
		},
		UW: function(a) {
			for (var b = this.get("center"), c = this.map, d = f.a.Wc.x, e = f.a.Wc.y, g = this.map.get("size"), h = [], k = new f.fj([0, 0, 0, 1]), l = k.elements, m = new f.G(0, 0), n = 0, p = a.length; n < p; n++) {
				m.x = a[n].x;
				m.y = a[n].y;
				m.z = -a[n].z || 0;
				var q = c.de(m); - 180 > b.O - q.O ? m.x -= 268435456 : 180 < b.O - q.O && (m.x += 268435456);
				l[0] = m.x - d;
				l[1] = m.y - e;
				l[2] = m.z;
				l[3] = 1;
				q = this.Zg.If(this.yd.If(k));
				q.multiply(1 / q.elements[3]);
				h.push({
					x: (q.elements[0] + 1) / 2 * g.width,
					y: (-q.elements[1] + 1) / 2 * g.height,
					z: q.elements[2]
				})
			}
			return h
		},
		Qia: function(a) {
			var b = this.map.get("size");
			a = this.Zg.If(this.yd.If((new f.fj).copy(a)));
			a.multiply(1 / a.elements[3]);
			b = new f.G((a.elements[0] + 1) / 2 * b.width, (-a.elements[1] + 1) / 2 * b.height);
			b.z = a.elements[2];
			return b
		}
	});
	f.a.Wc = new f.G(215440491, 106744817);
	f.Pb.ob({
		OT: function(a, b, c) {
			var d = this;
			d.zE ? (f.a.EI(d.zE), d.zE = null) : (d.ha("zoomstart", {
				zoom: a
			}), d.r("zoomstart"));
			d.zE = f.a.Ly(function() {
				d.zE = null;
				d.ha("zoomend", {
					zoom: a
				});
				d.ha("zoomchange", {
					zoom: a
				});
				d.r("zoomend")
			}, {
				timeout: 150
			});
			a = f.a.Pc(a, 2);
			d.hv(a, !0, b, c)
		},
		hv: function(a, b, c, d) {
			function e(b) {
				b = f.a.Pc(b, 2);
				var c = this.jf(k);
				this.set("zoom", b);
				var d = this.jf(k),
					c = d && d ? d.Va(c) : new f.G(0, 0);
				this.set("centerCoords", this.get("centerCoords").Va(c).toFixed(3));
				c.x && c.y && this.ha("mapmove");
				b === a && Math.floor(a) === a && (this.set("targetLevel", null), g && (this.ha("zoomchange"), this.ha("zoomend")), h && this.r("moveend"), this.r("zoomend"), this.Oe = null)
			}
			"3D" !== this.J.view.type && (f.l.Z || f.l.ne) && (b = !0);
			a = a || this.get("zoom");
			a = Math.min(Math.max(a, this.get("zooms")[0]), this.get("zooms")[1]);
			var g = a !== this.get("zoom"),
				h = !! c;
			this.Qd && (this.Qd.stop(), this.Qd = null);
			c = c || this.get("centerCoords");
			var k = this.Je(c),
				l;
			this.Tc && this.Tc.Fr && (this.Tc.stop(), this.Tc.mK && (d = !0), this.Tc.Ox && (l = !0), this.Tc = null, this.set("targetLevel", null));
			this.Oe && this.Oe.Fr && (this.Oe.stop(), d = !0, this.Oe.Ox && (l = !0), this.Oe = null, this.set("targetLevel", null));
			g && !d && this.ha("zoomstart");
			h && !l && this.ha("movestart");
			this.r("zoomstart");
			b ? e.call(this, a) : (this.Oe = new f.pi(this.get("zoom"), a, null, 0.02), this.Oe.mK = g, this.Oe.Ox = h, this.Oe.transition = function(a, b, c) {
				return c >= f.A.MB ? b : (b - a) * (1 - Math.pow(1 - c / f.A.MB, 4)) + a
			}, this.Oe.kn = e, this.Oe.Xk(this, !0), this.set("targetLevel", a))
		},
		YD: function(a, b, c, d) {
			var e = null;
			a || (a = this.Tc ? this.Tc.xha : this.get("targetLevel") || this.get("zoom"));
			var e = b ? this.Jb(b).toFixed(3) : this.Tc ? this.Tc.eZ : this.get("centerCoords"),
				g = a !== this.get("zoom"),
				h = !e.rb(this.get("centerCoords")),
				k = b = !1;
			this.Oe && this.Oe.Fr && (this.Oe.stop(), b = !0, this.Oe.Ox && (k = !0), this.Oe = null, this.set("targetLevel", null));
			this.Tc && this.Tc.Fr && (this.Tc.stop(), this.Tc.mK && (b = !0), this.Tc.Ox && (k = !0), this.Tc = null, this.set("targetLevel", null));
			this.Qd && (this.Qd.stop(), this.Qd = null);
			if (g || h) {
				if (!this.J.view.Hk().contains(e) || g && "3D" !== this.J.view.type && (f.l.Z || f.l.ne)) c = !0;
				if (c) g && (b || (this.r("zoomstart"), this.ha("zoomstart")), this.set("zoom", a), this.ha("zoomchange"), this.ha("zoomend"), this.r("zoomend")), h && (k || d || (this.ha("movestart"), this.r("movestart")), this.set("centerCoords", e), this.ha("mapmove"), this.r("moveend", {
					iW: d
				})), this.set("targetLevel", null);
				else {
					this.set("targetLevel", a);
					var l = a - this.get("zoom"),
						m = e.Va(this.get("centerCoords")).toFixed(3);
					this.Tc = new f.pi(1, 0, null, 0.001);
					this.Tc.mK = g;
					this.Tc.Ox = h;
					this.Tc.eZ = e;
					this.Tc.xha = a;
					this.Tc.transition = function(a, b, c) {
						return Math.pow(1 - Math.min(f.A.MB, c) / f.A.MB, 2)
					};
					this.Tc.kn = function(b) {
						0.02 > b ? (this.Tc && (this.Tc.stop(), this.Tc = null), g && (this.set("zoom", a), this.ha("zoomchange"), this.ha("zoomend"), g = !1, this.r("zoomend")), h && (this.set("centerCoords", e), this.r("mapmove"), this.r("moveend", {
							iW: d
						})), this.set("targetLevel", null)) : (g && this.set("zoom", a - l * b), h && (b = e.Va(m.Sc(b)).toFixed(3), this.set("centerCoords", b), this.ha("mapmove")));
						this.set("display", 1)
					};
					this.Tc.Xk(this);
					g && !b && (this.r("zoomstart"), this.ha("zoomstart"));
					!h || k || d || (this.r("movestart"), this.ha("movestart"))
				}
			}
		}
	});
	f.w = {};
	f.w.oc = f.ba.extend({
		ga: [f.ka, f.se],
		B: function(a, b) {
			this.ia = a;
			this.ed = [3, 18];
			this.Lz = f.a.Lb(this);
			a && this.he(["opacity", "visible", "zIndex", "zooms"], a);
			a.Bp = b.J.getViewMode_();
			this.h = b;
			this.X("display", b)
		},
		bg: function() {
			this.bi && this.LI();
			if (f.Ba && f.Ba.zp && f.Ba.zp.length) {
				var a = f.a.indexOf(f.Ba.zp, this); - 1 !== a && (f.Ba.zp = f.a.zl(f.Ba.zp, a))
			}
			if (a = this.xb) {
				if (a.length) for (var b = 0; b < a.length; b += 1) a[b].parentNode && a[b].parentNode.removeChild(a[b]);
				else a.parentNode && a.parentNode.removeChild(a);
				this.xb = null
			}
			this.ia.bg && this.ia.bg();
			this.ia.Fi = !1;
			this.ia.w = null;
			this.vp();
			this.Q && (this.Q.Et(), this.Q = null);
			this.$l && (this.$l.Et(), this.$l = null)
		},
		ha: function(a, b) {
			this.ia.r(a, b)
		},
		visibleChanged: function() {
			this.set("display", 0)
		},
		zIndexChanged: function() {
			this.set("display", 0)
		},
		kM: function(a) {
			f.j.un(a, this.opacity)
		},
		opacityChanged: function() {
			var a = this.get("opacity");
			this.opacity = Math.min(Math.max(0, a), 1);
			if (a = this.xb) if (a.length) for (var b = 0; b < a.length; b += 1) this.kM(a[b]);
			else this.kM(a)
		},
		KJ: function() {
			var a = this.get("bounds");
			if (a) {
				if (a instanceof f.Wd) {
					var b = a.Hj(),
						a = a.Ho(),
						c = this.h.Jb(new f.V(180, 0)).x,
						d = this.h.Jb(b),
						e = this.h.Jb(a),
						g = this.h.get("center");
					b.O > a.O && (0 < g.O ? e.x += c : d.x -= c);
					this.H = [d.x, d.y, e.x, e.y]
				} else a instanceof f.Qe ? this.H = [a.Nb.x, a.Nb.y, a.nd.x, a.nd.y] : a instanceof f.Kz && "3D" === this.ia.Bp && (b = a.path[1], d = this.h.Jb(a.path[0]), e = this.h.Jb(b), this.H = [d.x, d.y, e.x, e.y, a.xY, a.height]);
				return this.H
			}
			return null
		}
	});
	var Dc = function() {
			function a(a) {
				this.gF[f.a.Lb(a)] = a;
				return this
			}
			function b(a) {
				this.gF[f.a.Lb(a)] = null;
				return this
			}
			return function() {
				function c() {
					var a = c.gF,
						b, g = [],
						h;
					for (h in a) Object.prototype.hasOwnProperty.call(a, h) && g.push(a[h]);
					for (a = g.length - 1; 0 <= a; a -= 1) h = g[a].apply(this, arguments), void 0 !== h && (b = h);
					return b
				}
				c.gF = {};
				c.lT = a;
				c.Uma = b;
				return c
			}
		}();
	f.ff = f.ba.extend({
		ga: [f.ka],
		B: function(a, b) {
			this.ml = a | 0;
			this.Oz = !! b;
			this.count = 0;
			this.kL = Dc();
			this.clear();
			this.IA = []
		},
		Oo: function() {
			return !this.count
		},
		Nla: function() {
			return this.count >= this.ml
		},
		tna: function(a) {
			this.ml !== a && (this.ml = a | 0) && this.WS(this.ml)
		},
		Bc: function(a) {
			return !!this.h[a]
		},
		get: function(a, b) {
			var c = this.rP(a);
			return c ? c.value : b
		},
		set: function(a, b) {
			var c = this.rP(a);
			c ? c.value = b : (c = new f.ff.Hp(a, b), this.h[a] = c, this.mQ(c), this.count += 1)
		},
		Bn: function(a) {
			this.remove(a)
		},
		remove: function(a) {
			return Object.prototype.hasOwnProperty.call(this.h, a) ? (this.Ew(this.h[a]), !0) : !1
		},
		forEach: function(a, b) {
			for (var c = this.rc.next; c !== this.rc; c = c.next) a.call(b, c.value, c.key, this)
		},
		AD: function(a, b) {
			return Object.prototype.hasOwnProperty.call(this.h, a) ? this.h[a].value : b
		},
		Bma: function() {
			return this.rc.next.value
		},
		Cma: function() {
			return this.rc.va.value
		},
		shift: function() {
			return this.XR(this.rc.next)
		},
		UT: function() {
			this.IA.length = 0
		},
		GW: function(a) {
			this.IA.push(a)
		},
		push: function(a) {
			a = new f.ff.Hp("", a);
			0 === this.count ? (this.rc.va = null, a.va = this.rc, this.rc.next = a) : (this.Sw.next = a, a.va = this.Sw);
			this.count += 1;
			this.Sw = a
		},
		iia: function(a) {
			a = new f.ff.Hp("", a);
			0 === this.count ? (this.rc.va = null, a.va = this.rc, this.Sw = this.rc.next = a) : (this.rc.next.va = a, a.next = this.rc.next, a.va = this.rc, this.rc.next = a);
			this.count += 1
		},
		gea: function() {
			if (this.count) {
				this.count -= 1;
				var a = this.rc.next;
				a.next ? (a.next.va = this.rc, this.rc.next = a.next) : (this.rc.next = null, this.Sw = this.rc.va = null);
				a.next = null;
				a.va = null;
				return a.value
			}
			return null
		},
		pop: function() {
			return this.XR(this.rc.va)
		},
		rP: function(a) {
			if (Object.prototype.hasOwnProperty.call(this.h, a)) return a = this.h[a], this.Oz && (a.remove(), this.mQ(a)), a
		},
		mQ: function(a) {
			this.Oz ? (a.next = this.rc.next, a.va = this.rc, this.rc.next = a, a.next.va = a) : (a.va = this.rc.va, a.next = this.rc, this.rc.va = a, a.va.next = a);
			this.ml && this.F8(this.ml)
		},
		F8: function() {
			var a = this;
			a.Vw || (a.Vw = setTimeout(function() {
				a.Vw = null;
				a.WS(a.ml)
			}, 0))
		},
		WS: function(a) {
			this.Vw && (clearTimeout(this.Vw), this.Vw = null);
			if (!(this.count < a)) {
				for (var b = this.Oz ? this.rc.va : this.rc.next, c = {}, d = 0, e = this.IA.length; d < e; d++) c[this.IA[d]] = !0;
				for (; b && this.count > a && (d = this.Oz ? b.va : b.next, b.key && !c[b.key] && (this.Ew(b), this.kL(b.value)), b = d, b !== this.rc && b !== this.Sw););
			}
		},
		Ew: function(a) {
			a.remove();
			delete this.h[a.key];
			this.count -= 1
		},
		XR: function(a) {
			this.rc !== a && this.Ew(a);
			return a.value
		},
		clear: function() {
			this.h = {};
			this.rc = new f.ff.Hp("", null);
			this.rc.va = this.rc.next = this.rc;
			this.count = 0
		}
	});
	f.ff.Hp = function(a, b) {
		this.key = a;
		this.value = b
	};
	f.ff.Hp.prototype.va = null;
	f.ff.Hp.prototype.next = null;
	f.ff.Hp.prototype.remove = function() {
		this.va.next = this.next;
		this.next.va = this.va;
		this.next = this.va = null
	};

	function Ec(a, b, c) {
		this.url = a;
		this.yc = b;
		this.FJ = c;
		this.Dk = this.OD = !1
	}
	function Fc(a, b, c) {
		var d = Gc;
		return function() {
			return d.call(this, a, b, c)
		}
	}
	function Gc(a, b, c) {
		a.$ka = +new Date;
		a.loaded = b;
		clearTimeout(a.Gha);
		var d = a.Gda;
		d.Uk.remove(a.url) && d.M4();
		d = a.fda ? a.ta : a.qa;
		a.ta = null;
		(c || b || a.FJ) && a.yc(b ? d : null, a);
		a.oW ? (a.oW.Uh(), a.oW = null) : d && (d.onload = null, d.onerror = null, d.onabort = null, a.qa = null)
	}
	f.vz = f.ba.extend({
		Dja: "assets/image/blank.gif",
		B: function(a, b, c) {
			this.timeout = b || 15E3;
			this.qn = new f.ff(1024);
			this.Uk = new f.ff(1024);
			this.$T = a;
			this.tJ = c
		},
		EF: function(a) {
			a && this.Uk.count >= this.$T && (a = this.Uk.rc.va.value, a.Dk && (this.Uk.remove(a.url), this.lO(a)));
			for (; this.qn.count && !(this.Uk.count >= this.$T);) this.A2(this.qn.shift())
		},
		M4: function() {
			if (!this.OO) {
				this.OO = !0;
				var a = this;
				setTimeout(function() {
					a.OO = !1;
					a.EF()
				}, 0)
			}
		},
		A2: function(a) {
			var b = document.createElement("img");
			a.uba && (b.crossOrigin = "anonymous");
			b.src = a.url;
			a.qa = b;
			a.Gda = this;
			a.startTime = +new Date;
			a.OD = !0;
			b.complete ? Gc(a, !0) : (this.Uk.set(a.url, a), b.onload = Fc(a, !0), b.onerror = Fc(a, !1, !0), b.onabort = Fc(a, !1), a.Gha = setTimeout(Fc(a, !1, !0), this.timeout))
		},
		lO: function(a) {
			a.OD && (Gc(a, !1), a.Dk = !0, a.mka = !0)
		},
		bma: function(a, b, c) {
			return this.eD(a.url, b, c, !0, a.ma.z + "_" + a.ma.x + "_" + a.ma.y)
		},
		eD: function(a, b, c, d, e) {
			var g = this.Uk.get(a);
			if (g && g.Dk) g.Dk = !1, g.yc = b, g.FJ = c;
			else {
				g = new Ec(a, b, c);
				g.fda = d;
				g.key = e;
				if (this.qn.get(f.a.Lb(g))) return;
				this.qn.set(f.a.Lb(g), g);
				this.EF(!0)
			}
			return g
		},
		Ada: function(a, b, c) {
			var d = this.Uk.get(a);
			if (d && d.Dk) d.Dk = !1, d.yc = b, d.FJ = c;
			else {
				d = new Ec(a, b, c);
				d.uba = !0;
				if (this.qn.get(f.a.Lb(d))) return;
				this.qn.set(f.a.Lb(d), d);
				this.EF(!0)
			}
			return d
		},
		NT: function(a) {
			a.Dk || (a.Dk = !0, this.qn.remove(f.a.Lb(a)))
		},
		clear: function(a) {
			this.qn.forEach(function(a) {
				a.Dk = !0
			});
			this.qn.clear();
			if (a) for (; 0 < this.Uk.length;) a = this.Uk.pop(), this.lO(a);
			else this.Uk.forEach(function(a) {
				a.Dk = !0
			})
		}
	});

	function Hc(a, b, c) {
		this.z = a;
		this.x = b;
		this.y = c
	}
	Hc.prototype.Ab = function() {
		return new Hc(this.z, this.x, this.y)
	};
	Hc.prototype.toString = function() {
		return [this.z, this.x, this.y].join("/")
	};
	f.Wa = function(a) {
		var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : !1;
		this.ma = a;
		this.key = a.toString();
		this.tg = b
	};
	f.hk = Hc;
	f.w.Wa = f.w.oc.extend({
		B: function(a, b, c, d, e) {
			arguments.callee.oa.apply(this, arguments);
			this.X("tileSize", a);
			this.X("tiles", a);
			this.he(["zooms", "type", "detectRetina", "errorUrl"], a);
			this.X("lang", b, !0);
			this.X("mapStyle", b, !0);
			this.X("style", b, !0);
			this.X("features", b, !0);
			var g = "overlayer" === a.get("type") || !1 === a.get("blend");
			this.ij = !g && !f.l.Z;
			if (f.l.ne || f.l.coa) this.ij = !1;
			var h = b.get("size"),
				h = h.width * h.height / 65536;
			this.ja = f.l.Z && f.l.ja && this.get("detectRetina");
			f.l.cd && f.l.Z && 9 < h && (this.ij = !1);
			this.Qh = !g && !a.gi;
			this.Rh = !g && !a.gi;
			this.oZ = c;
			this.X("reload", a);
			a.cda ? this.X("createTile", a) : this.X("tileFun", a);
			this.Ce = d;
			this.PV = e
		},
		langChanged: function() {
			this.set("reload");
			this.ia.hp()
		},
		mapStyleChanged: function() {
			this.set("reload");
			this.ia.hp()
		},
		styleChanged: function() {
			this.h.cc || (this.set("reload"), this.ia.hp())
		},
		featuresChanged: function() {
			this.set("reload");
			this.ia.hp()
		},
		reloadChanged: function() {
			this.set("display", 0)
		},
		tileFunChanged: function() {
			var a = this.oZ || this.get("tileFun");
			this.yt = function(b, c, d) {
				var e = a(b.ma.x, b.ma.y, b.ma.z);
				if (!b.Qo || b.Qo.Dk) b.loaded = !1, b.Qo = ("3D" === this.h.J.view.type ? f.Lj.Ada : f.Lj.eD).call(f.Lj, e, function(a) {
					b.Qo = null;
					a ? c(a) : d()
				}, !1)
			}
		},
		createTileChanged: function() {
			var a = this.ia.getCreateTile();
			this.yt = function(b, c, d) {
				a.call(this.q.ia, b.ma.x, b.ma.y, b.ma.z, c, d)
			};
			this.set("reload")
		},
		Wm: function() {
			return {
				ee: this.get("tileSize"),
				visible: this.get("visible"),
				H: this.KJ(),
				ed: this.get("zooms"),
				TB: this.ij,
				Qh: this.Qh,
				Rh: this.Rh,
				opacity: this.get("opacity"),
				yt: this.ia.get("createTile"),
				Dl: this.oZ || this.get("tileFun"),
				cd: this.ia.ap ? !1 : this.get("detectRetina") && f.l.ja && f.l.Z
			}
		},
		vl: function(a) {
			if (f.Q.Gd.ri) return new f.Q.Gd.ri(this, a)
		}
	});
	f.Lj = new f.vz(6, null);
	f.w.Gc = f.w.oc.extend({
		B: function(a, b) {
			this.jb = Math.min(2, window.devicePixelRatio || 1);
			this.cd = f.l.ja && !a.Fh;
			this.map = b;
			this.wn = 0;
			this.Jk = !1;
			this.af = this.Fe = 0;
			this.Jf = [];
			arguments.callee.oa.apply(this, arguments);
			this.or = [];
			this.Yh = new f.w.n_;
			a && (this.X("style", a), this.X("cursor", a, !0), this.lha = a.get("stable") || !1, this.X("dataSources", a), this.X("bubble", a));
			this.X("display", b);
			this.b1()
		},
		Wm: function() {
			return {
				visible: this.get("visible"),
				ed: this.get("zooms"),
				opacity: this.get("opacity"),
				zIndex: this.get("zIndex"),
				ax: this.ia.get("alwaysRender") || !1
			}
		},
		dataSourcesChanged: function() {
			var a = this.get("dataSources");
			a && a.length ? "string" === typeof a ? (new f.Sa.bb(a)).g("complete", function(a) {
				this.qX(a.data);
				this.xo = a.data;
				this.Jk = !0;
				this.set("display");
				this.wa = !0;
				this.ia.r("complete")
			}, this) : a.length && (this.qX(a), this.xo = a, this.Jk = !0, this.set("display"), this.wa = !0, this.ia.r("complete")) : this.clear()
		},
		getDatas: function() {
			return this.xo
		},
		oia: function() {
			if (this.ia.Fh) {
				var a = this.Yj;
				this.Fe = a.Fe;
				this.af = a.af
			}
		},
		ha: function(a, b) {
			var c = {
				type: a,
				data: "mouseout" === a ? this.L4 || null : b.kq.Ra,
				target: this.ia
			};
			this.L4 = "mouseout" === a ? null : b.kq.Ra;
			this.ia.r(a, c)
		},
		$b: function(a) {
			this.ha(a.type, a)
		},
		b1: function() {
			this.g("click", this.$b);
			this.g("dblclick", this.$b);
			this.g("mousedown", this.$b);
			this.g("mouseup", this.$b);
			this.g("mouseover", this.$b);
			this.g("mouseout", this.$b);
			this.g("touchstart", this.$b);
			this.g("touchend", this.$b)
		},
		ika: function() {
			this.I("click", this.$b);
			this.I("dblclick", this.$b);
			this.I("mousedown", this.$b);
			this.I("mouseup", this.$b);
			this.I("mouseover", this.$b);
			this.I("mouseout", this.$b);
			this.I("touchstart", this.$b);
			this.I("touchend", this.$b)
		},
		styleChanged: function() {
			this.Yj = this.get("style");
			this.oia();
			this.set("display", 0)
		},
		qX: function(a) {
			if (a) {
				this.clear();
				for (var b = 0; b < a.length; b += 1) {
					var c = a[b].lnglat;
					a[b].lnglat = f.a.za(c);
					c = this.map.Jb(c);
					c = new f.Eg({
						name: "point-" + f.a.Lb(this),
						Y: new f.pa.Qf([c.x, c.y], !0)
					});
					c.ao = this;
					c.Ra = a[b];
					this.IB(c)
				}
			}
		},
		jV: function(a) {
			if ("geojson" === a) return new f.q_({
				map: this.map
			});
			if ("topjson" === a) return new f.tja({
				map: this.map
			});
			if ("subway" === a) return new f.rja({
				map: this.map
			})
		},
		ifa: function(a) {
			if (a) {
				var b = [],
					b = [],
					c = {};
				if (a.rules) {
					for (var b = a.rules, d = 0, e = b.length; d < e; d += 1) {
						for (var g = [], h = b[d].symbolizers, k = 0, l = h.length; k < l; k += 1) h[k].fill && (g[k] = new f.style.qf.xN(h[k].fill)), h[k].stroke && (g[k] = new f.style.qf.UN(h[k].stroke));
						h = g;
						b[d].fE = h;
						b[d] = new f.style.Y_(b[d])
					}
					c.rules = b
				}
				if (a.symbolizers) {
					b = a.symbolizers;
					a = 0;
					for (d = b.length; a < d; a += 1) b[a].fill && (b[a] = new f.style.qf.xN(b[a].fill)), b[a].stroke && (b[a] = new f.style.qf.UN(b[a].stroke));
					c.fE = b
				}
				a = new f.aF(c)
			} else a = new f.aF({});
			this.set("style", a);
			return a
		},
		gka: function(a, b) {
			if (-1 === f.a.indexOf(a, f.A.qb)) {
				var c = new f.Sa.bb(a);
				c.g("complete", function(c) {
					c = this.ta[a] = this.jV(b).GD(c);
					this.oq(c);
					this.ha("complete")
				}, this);
				c.g("error", this.Mb, this)
			} else(new f.Sa.XMLHttpRequest(a)).g("complete", function(c) {
				c = f.dba("(" + c.data + ")");
				c = this.ta[a] = this.jV(b).GD(c);
				this.oq(c)
			}, this)
		},
		Gfa: function(a) {
			"px" === a.target.get("unit") ? (this.Fe = Math.max(a.Yi, this.Fe), this.af = Math.max(a.Yi, this.af)) : a.Yi > this.Yo && (this.Yo = a.Yi, this.hu = this.Yo / this.map.get("resolution", 20))
		},
		IB: function(a) {
			this.Yh.add(a);
			if (!this.xx && !this.ia.Fh) {
				if (0 === a.name.indexOf("circle") || 0 === a.name.indexOf("ellipse")) {
					a.g("rad", this.Gfa, this);
					var b = a.get("radius");
					b.length && (b = Math.max.apply(null, b));
					"px" === a.get("unit") ? (this.Fe = Math.max(b, this.Fe), this.af = Math.max(b, this.af)) : this.Yo ? b > this.Yo && (this.Yo = b, this.hu = this.Yo / this.map.get("resolution", 20)) : (this.Yo = b, this.hu = this.Yo / this.map.get("resolution", 20))
				}
				b = a.get("strokeWeight") || 0;
				if (!this.iu || b > this.iu) this.iu = b
			}
			this.lha || a.X("feature", this, !0)
		},
		oq: function(a) {
			this.Jk = !0;
			for (var b = 0, c = a.length; b < c; b += 1) this.IB(a[b])
		},
		clear: function() {
			this.Jk = !0;
			this.xo = [];
			this.Yh.clear();
			this.set("display", 0)
		},
		Li: function(a) {
			var b;
			return 0 > a[0] ? (b = [a[0] + f.a.fb, a[1], f.a.fb, a[3]], a = [0, a[1], a[2], a[3]], b = this.Yh.Li(b), a = this.Yh.Li(a), f.extend(b, a)) : a[2] > f.a.fb ? (b = [a[0], a[1], f.a.fb, a[3]], a = [0, a[1], a[2] - f.a.fb, a[3]], b = this.Yh.Li(b), a = this.Yh.Li(a), f.extend(b, a)) : this.Yh.Li(a)
		},
		tla: function(a) {
			var b, c = this.get("style"),
				d = a.$i;
			c instanceof f.aF || (c = this.ifa(c));
			if (d && 0 < d.length) b = c.fU(d, a);
			else {
				if (c.sY.length || c.$i.length) b = c.iaa(a);
				b || (b = a.Lba())
			}
			return b
		},
		fK: function(a) {
			function b(a, b) {
				return a.Ej - b.Ej
			}
			var c = [],
				d, e, g, h, k, l = {};
			for (d in a) if (a.hasOwnProperty(d)) {
				g = a[d];
				h = g.get("zIndex");
				for (e in l) if (l.hasOwnProperty(e) && (k = c[l[e]][2], k === h)) break;
				"undefined" === typeof l[h] && (c.push([
					[],
					[], h]), l[h] = c.length - 1);
				h = c[l[h]];
				h[0].push(g)
			}
			c.sort(this.gha);
			a = 0;
			for (d = c.length; a < d; a += 1) c[a][0].sort(b);
			return c
		},
		featureChanged: function(a) {
			this.Jk = !0;
			var b = a.target,
				c = b.Y;
			0 !== this.Yh.Qba([f.a.Lb(b)]).length && (this.Yh.remove(b, a.rr), c && !a.xaa && this.Yh.add(b))
		},
		SX: function(a) {
			this.Jk = !0;
			for (var b, c = 0, d = a.length; c < d; c += 1) b = a[c], b.Y.rr = null, b.Bo(!0), b.cj("feature")
		},
		xna: function(a, b) {
			return a[1].zIndex === b[1].zIndex ? f.a.Lb(a[1]) - f.a.Lb(b[1]) : a[1].zIndex - b[1].zIndex
		},
		gha: function(a, b) {
			return a[2] - b[2]
		},
		pna: function(a) {
			return a.xla() === f.w.xja.pja
		},
		vl: function(a) {
			return this.xx ? new f.Q.Sd.gj(this, a) : "c" === this.map.get("overlayRender") && f.Q.canvas.gj ? new f.Q.canvas.gj(this, a) : f.Q.Gd.gj && "d" === this.map.get("overlayRender") ? new f.Q.Gd.gj(this, a) : null
		}
	});
	f.w.Gc.ob({
		wl: function(a) {
			return this.xx ? new f.Ja.Sd.gj(this, a) : this.ia.Fh ? new f.Ja.I_(this, a) : new f.Ja.gj(this, a)
		}
	});
	f.w.n_ = f.ba.extend({
		B: function() {
			this.clear()
		},
		clear: function() {
			this.$m = [];
			this.ML = new f.Kh
		},
		add: function(a) {
			var b = f.a.Lb(a),
				c = a.Y;
			this.$m[b] || (this.count += 1, this.$m[b] = a, c && !f.H.rb(c.Qc(), [Infinity, Infinity, -Infinity, -Infinity]) && this.ML.Wx(c.Qc(), a))
		},
		nla: function() {
			return this.$m
		},
		Li: function(a) {
			return this.ML.yga(a)
		},
		Qba: function(a) {
			var b = a.length,
				c = [],
				d;
			for (d = 0; d < b; d += 1) this.$m[a[d]] && c.push(this.$m[a[d]]);
			return c
		},
		remove: function(a, b) {
			var c = f.a.Lb(a).toString(),
				d = a.Y;
			this.$m[c] && (this.$m[c] = null, d && (c = "undefined" !== typeof b ? b : d.Qc(), this.ML.remove(c, a)))
		}
	});
	f.Kh = f.ba.extend({
		B: function(a) {
			this.MW = "undefined" !== typeof a ? a : 6;
			this.kD = Math.floor(this.MW / 2);
			this.Ny = {
				H: [Infinity, Infinity, -Infinity, -Infinity],
				sb: []
			};
			this.count = 0
		},
		y$: function(a, b) {
			var c = -1,
				d = [],
				e;
			d.push(b);
			var g = b.sb;
			do {-1 !== c && (d.push(g[c]), g = g[c].sb, c = -1);
				for (var h = g.length - 1; 0 <= h; h -= 1) {
					var k = g[h];
					if ("undefined" !== typeof k.jr) {
						c = -1;
						break
					}
					var l = f.Kh.Lu(k.H[2] - k.H[0], k.H[3] - k.H[1], k.sb.length + 1),
						k = f.Kh.Lu((k.H[2] > a.H[2] ? k.H[2] : a.H[2]) - (k.H[0] < a.H[0] ? k.H[0] : a.H[0]), (k.H[3] > a.H[3] ? k.H[3] : a.H[3]) - (k.H[1] < a.H[1] ? k.H[1] : a.H[1]), k.sb.length + 2);
					if (0 > c || Math.abs(k - l) < e) e = Math.abs(k - l), c = h
				}
			} while (-1 !== c);
			return d
		},
		Wx: function(a, b, c) {
			a = {
				H: a,
				jr: b
			};
			"undefined" !== typeof c && (a.type = c);
			this.WV(a, this.Ny);
			this.count += 1
		},
		WV: function(a, b) {
			var c;
			if (0 === b.sb.length) b.H = f.H.Ab(a.H), b.sb.push(a);
			else {
				var d = this.y$(a, b),
					e = a;
				do {
					if (c && "undefined" !== typeof c.sb && 0 === c.sb.length) {
						var g = c;
						c = d.pop();
						for (var h = 0, k = c.sb.length; h < k; h += 1) if (c.sb[h] === g || 0 === c.sb[h].sb.length) {
							c.sb.splice(h, 1);
							break
						}
					} else c = d.pop();
					g = e instanceof
					Array;
					if ("undefined" !== typeof e.jr || "undefined" !== typeof e.sb || g) {
						if (g) {
							g = 0;
							for (h = e.length; g < h; g += 1) f.H.extend(c.H, e[g].H);
							c.sb = c.sb.concat(e)
						} else f.H.extend(c.H, e.H), c.sb.push(e);
						c.sb.length <= this.MW ? e = {
							H: f.H.Ab(c.H)
						} : (e = g = this.vda(c.sb), 1 > d.length && (c.sb.push(g[0]), d.push(c), e = g[1]))
					} else f.H.extend(c.H, e.H), e = {
						H: f.H.Ab(c.H)
					}
				} while (0 < d.length)
			}
		},
		vda: function(a) {
			for (var b = this.lfa(a); 0 < a.length;) this.mfa(a, b[0], b[1]);
			return b
		},
		lfa: function(a) {
			for (var b = a.length - 1, c = 0, d = a.length - 1, e = 0, g = a.length - 2; 0 <= g; g -= 1) {
				var h = a[g];
				h.H[0] > a[c].H[0] ? c = g : h.H[2] < a[b].H[1] && (b = g);
				h.H[1] > a[e].H[1] ? e = g : h.H[3] < a[d].H[3] && (d = g)
			}
			Math.abs(a[b].H[2] - a[c].H[0]) > Math.abs(a[d].H[3] - a[e].H[1]) ? b > c ? (b = a.splice(b, 1)[0], c = a.splice(c, 1)[0]) : (c = a.splice(c, 1)[0], b = a.splice(b, 1)[0]) : d > e ? (b = a.splice(d, 1)[0], c = a.splice(e, 1)[0]) : (c = a.splice(e, 1)[0], b = a.splice(d, 1)[0]);
			return [{
				H: f.H.Ab(b.H),
				sb: [b]
			}, {
				H: f.H.Ab(c.H),
				sb: [c]
			}]
		},
		mfa: function(a, b, c) {
			for (var d = f.Kh.Lu(b.H[2] - b.H[0], b.H[3] - b.H[1], b.sb.length + 1), e = f.Kh.Lu(c.H[2] - c.H[0], c.H[3] - c.H[1], c.sb.length + 1), g, h, k, l = a.length - 1; 0 <= l; l -= 1) {
				var m = a[l],
					n = [b.H[0] < m.H[0] ? b.H[0] : m.H[0], b.H[2] > m.H[2] ? b.H[2] : m.H[2], b.H[1] < m.H[1] ? b.H[1] : m.H[1], b.H[3] > m.H[3] ? b.H[3] : m.H[3]],
					n = Math.abs(f.Kh.Lu(n[1] - n[0], n[3] - n[2], b.sb.length + 2) - d),
					m = [c.H[0] < m.H[0] ? c.H[0] : m.H[0], c.H[2] > m.H[2] ? c.H[2] : m.H[2], c.H[1] < m.H[1] ? c.H[1] : m.H[1], c.H[3] > m.H[3] ? c.H[3] : m.H[3]],
					m = Math.abs(f.Kh.Lu(m[1] - m[0], m[3] - m[2], c.sb.length + 2) - e),
					p = Math.abs(m - n);
				if (!h || !g || p < g) h = l, g = p, k = m < n ? c : b
			}
			d = a.splice(h, 1)[0];
			b.sb.length + a.length + 1 <= this.kD ? (b.sb.push(d), f.H.extend(b.H, d.H)) : c.sb.length + a.length + 1 <= this.kD ? (c.sb.push(d), f.H.extend(c.H, d.H)) : (k.sb.push(d), f.H.extend(k.H, d.H))
		},
		remove: function(a, b) {
			var c = [];
			c[0] = {
				H: a
			};
			(c[1] = b) || (c[1] = !1);
			c[2] = this.Ny;
			this.count -= 1;
			if (!1 === c[1]) {
				var d = 0,
					e = [];
				do d = e.length, e = e.concat(this.WX.apply(this, c));
				while (d !== e.length);
				return e
			}
			return this.WX.apply(this, c)
		},
		WX: function(a, b, c) {
			var d = [],
				e = [],
				g = [];
			if (!a || !f.H.mf(a.H, c.H)) return g;
			a = f.H.Ab(a.H);
			var h;
			e.push(c.sb.length);
			d.push(c);
			do {
				c = d.pop();
				var k = e.pop() - 1;
				if ("undefined" !== typeof b) for (; 0 <= k;) {
					var l = c.sb[k];
					if (f.H.mf(a, l.H)) if (b && "undefined" !== typeof l.jr && l.jr === b || !b && ("undefined" !== typeof l.jr || f.H.aU(a, l.H))) {
						"undefined" !== typeof l.sb ? (g = this.Gu(l, !0, [], l), c.sb.splice(k, 1)) : g = c.sb.splice(k, 1);
						f.Kh.PL(c);
						b = void 0;
						c.sb.length < this.kD && (h = this.Gu(c, !0, [], c));
						break
					} else "undefined" !== typeof l.sb && (e.push(k), d.push(c), c = l, k = l.sb.length);
					k -= 1
				} else if ("undefined" !== typeof h) {
					c.sb.splice(k + 1, 1);
					0 < c.sb.length && f.Kh.PL(c);
					k = 0;
					for (l = h.length; k < l; k += 1) this.WV(h[k], c);
					h.length = 0;
					0 === d.length && 1 >= c.sb.length ? (h = this.Gu(c, !0, h, c), c.sb.length = 0, d.push(c), e.push(1)) : 0 < d.length && c.sb.length < this.kD ? (h = this.Gu(c, !0, h, c), c.sb.length = 0) : h = void 0
				} else f.Kh.PL(c)
			} while (0 < d.length);
			return g
		},
		search: function(a, b) {
			return this.Gu({
				H: a
			}, !1, [], this.Ny, b)
		},
		yga: function(a, b) {
			return this.Gu({
				H: a
			}, !1, [], this.Ny, b, !0)
		},
		Gu: function(a, b, c, d, e, g) {
			var h = {},
				k = [];
			if (!f.H.mf(a.H, d.H)) return c;
			k.push(d.sb);
			do {
				d = k.pop();
				for (var l = d.length - 1; 0 <= l; l -= 1) {
					var m = d[l];
					if (f.H.mf(a.H, m.H)) if ("undefined" !== typeof m.sb) k.push(m.sb);
					else if ("undefined" !== typeof m.jr) if (b) c.push(m);
					else if ("undefined" === typeof e || m.type === e) m = m.jr, "undefined" !== typeof g ? h[f.a.Lb(m)] = m : c.push(m)
				}
			} while (0 < k.length);
			return "undefined" !== typeof g ? h : c
		}
	});
	f.Kh.PL = function(a) {
		var b = a.sb.length,
			c = a.H;
		if (0 === b) f.H.empty(c);
		else {
			var d = a.sb[0].H;
			c[0] = d[0];
			c[2] = d[2];
			c[1] = d[1];
			c[3] = d[3];
			for (d = 1; d < b; d += 1) f.H.extend(c, a.sb[d].H)
		}
	};
	f.Kh.Lu = function(a, b, c) {
		var d = (a + b) / 2;
		a *= b;
		return a * c / (a / (d * d))
	};
	f.D = f.D || {};
	f.D.Hg = f.ba.extend({
		ga: [f.ka, f.se],
		Vea: ["position", "altitude", "visible", "clickable", "bubble"],
		B: function(a, b) {
			this.map = b;
			this.he(this.Vea, a);
			this.X("zIndex", a);
			this.X("draggable", a);
			f.l.Me && this.i1();
			f.l.Z || this.wF();
			this.Oc = a;
			this.Oc.D = this
		},
		draggableChanged: function() {
			this.get("draggable") ? this.vF() : this.fH()
		},
		ha: function(a, b) {
			var c;
			c = b ? {
				type: a,
				pixel: b.ub,
				target: this.Oc,
				lnglat: b.nf
			} : {
				type: a
			};
			this.Oc && this.Oc.r(a, c)
		},
		$b: function(a) {
			("click" !== a.type && "rightclick" !== a.type && "dblclick" !== a.type && "longclick" !== a.type || this.get("clickable")) && this.ha(a.type, a)
		},
		uF: function() {
			this.g("click", this.$b);
			this.g("rightclick", this.$b);
			this.g("longclick", this.$b);
			this.g("longpress", this.$b);
			this.g("dblclick", this.$b)
		},
		YS: function() {
			this.I("click", this.$b);
			this.I("rightclick", this.$b);
			this.I("longclick", this.$b);
			this.I("longpress", this.$b);
			this.I("dblclick", this.$b)
		},
		wF: function() {
			this.get("clickable") && this.uF();
			this.g("mousemove", this.$b);
			this.g("mouseout", this.$b);
			this.g("mouseover", this.$b);
			this.g("mousedown", this.$b);
			this.g("mouseup", this.$b)
		},
		jka: function() {
			this.YS();
			this.I("mousemove", this.$b);
			this.I("mouseout", this.$b);
			this.I("mouseover", this.$b);
			this.I("mousedown", this.$b);
			this.I("mouseup", this.$b)
		},
		clickableChanged: function() {
			this.get("clickable") ? this.uF() : this.YS()
		},
		i1: function() {
			this.get("clickable") && this.uF();
			this.g("touchstart", this.$b, this);
			this.g("touchmove", this.$b, this);
			this.g("touchend", this.$b, this)
		},
		vF: function() {
			this.g("dragstart", this.$p);
			this.g("dragging", this.Yp);
			this.g("dragend", this.Zp)
		},
		$p: function(a) {
			this.map.RK(a);
			this.Ff = a.ub;
			this.sW = a.Ad;
			this.rW = a.nf;
			this.ha("dragstart", a)
		},
		Yp: function(a) {
			var b = this.map.J.view.type;
			if ("2D" == b) {
				var c = a.ub.Va(this.Ff),
					b = c.x,
					c = c.y;
				this.Ff = a.ub;
				var d = this.map.get("rotation") * Math.PI / 180,
					e = b * Math.cos(d) + Math.sin(d) * c,
					b = -Math.sin(d) * b + Math.cos(d) * c;
				this.$o(new f.G(e, b));
				this.ha("dragging", a)
			} else "3D" == b && a.Ad && (c = a.ub.Va(this.Ff), b = c.x, c = c.y, e = a.Ad.Va(this.sW), a.nf.Va(this.rW), this.Ff = a.ub, "function" === typeof this.oy && this.oy(b, c, e), this.sW = a.Ad, this.rW = a.nf, this.ha("dragging", a))
		},
		Zp: function(a) {
			this.map.Tr();
			this.ha("dragend", a)
		},
		fH: function() {
			this.I("dragstart", this.$p);
			this.I("dragging", this.Yp);
			this.I("dragend", this.Zp)
		},
		hG: function(a) {
			var b, c, d = [];
			if (a) for (b = 0, c = a.length; b < c; b += 1) d.push(this.iG(a[b]));
			return d
		},
		iG: function(a) {
			a = this.map.Jb(a);
			return [a.x, a.y]
		},
		$e: function(a) {
			var b = this.M.hb || this.map.get("centerCoords"),
				c = Math.pow(2, 20 - this.map.get("zoom"));
			return [(a[0] - b.x) / c, (a[1] - b.y) / c]
		}
	});
	f.D.ab = f.D.Hg.extend({
		AL: "content contentDom icon opacity angle autoRotation offset textAlign verticalAlign shadow title label isTop shape topWhenClick topWhenMouseOver noSelect".split(" "),
		I9: {
			AMAP_ANIMATION_NONE: !1,
			AMAP_ANIMATION_DROP: f.pi.Easing.Bounce,
			AMAP_ANIMATION_BOUNCE: f.pi.Easing.Cubic
		},
		B: function(a, b) {
			arguments.callee.oa.apply(this, arguments);
			this.he(this.AL, a);
			this.X("move", a);
			this.k$();
			this.vq();
			this.set("AnimationOffset", new f.G(0, 0), !0);
			this.X("raiseOnDrag", a);
			this.X("animation", a)
		},
		xG: function(a, b, c) {
			if (this.get("animation") && "AMAP_ANIMATION_NONE" !== this.get("animation")) {
				var d = this;
				this.Qk = new f.pi;
				this.Qk.transition = function(c, g, h) {
					if ("AMAP_ANIMATION_NONE" === d.get("animation")) return 0;
					if (a && 600 <= h) return d.Qk.stop(), 0;
					c = 0 === Math.floor(h / 600) % 2 ? "Out" : "In";
					"out" === b ? c = "Out" : "in" === b && (c = "In");
					return d.I9[d.get("animation")][c](h % 600 / 600)
				};
				c = c || 40;
				this.Qk.kn = function(a) {
					d.set("AnimationOffset", d.hH.add(new f.G(0, -1 * c * a)))
				};
				this.hH = new f.G(0, 0);
				this.Qk.Xk()
			}
		},
		AnimationOffsetChanged: function() {
			this.positionChanged()
		},
		eS: function() {
			this.Qk && (this.Qk.stop(), this.set("AnimationOffset", this.hH));
			this.set("AnimationOffset", new f.G(0, -40));
			if (this.fv) this.fv.set("position", this.get("position"));
			else {
				var a = new w.D.ab({
					zIndex: this.get("zIndex") - 1,
					icon: new w.D.Gg({
						image: f.A.qb + "/theme/v1.3/dragCross.png",
						size: new f.Uc(14, 11)
					}),
					offset: new f.G(-4, -5),
					position: this.get("position")
				});
				a.la = !0;
				this.fv = a
			}
			this.fv.setMap(this.map.J)
		},
		iP: function() {
			this.set("animation", "AMAP_ANIMATION_DROP", !0);
			this.xG(!0, "in");
			this.fv.setMap(null)
		},
		animationChanged: function() {
			this.Qk && (this.Qk.stop(), this.set("AnimationOffset", this.hH), this.Qk = null);
			var a = this.get("animation");
			a && "AMAP_ANIMATION_NONE" !== a && ("AMAP_ANIMATION_DROP" === a ? this.xG(!0, "in", 100) : this.xG())
		},
		Ng: function() {
			this.fv && this.fv.set("position", this.get("position"))
		},
		raiseOnDragChanged: function() {
			this.get("raiseOnDrag") ? (this.g("dragstart", this.eS, this), this.g("dragging", this.Ng, this), this.g("dragend", this.iP, this)) : (this.I("dragstart", this.eS, this), this.I("dragging", this.Ng, this), this.I("dragend", this.iP, this))
		},
		$o: function(a) {
			var b = this.get("position");
			a = this.map.Jb(b).add(a.Sc(Math.pow(2, 20 - this.map.get("zoom"))));
			b instanceof f.V ? this.set("position", this.map.de(a)) : this.set("position", a)
		},
		oy: function(a, b) {
			var c = this.get("position"),
				d = this.get("altitude"),
				c = this.map.Vo(c, d),
				d = this.map.so(new f.G(c.x + a, c.y + b), null, d);
			this.set("position", d)
		},
		k$: function() {
			var a = this.get("content"),
				b = this.get("shadow"),
				c = this.get("offset"),
				d = this.get("label"),
				a = a ? this.ET(a, c) : this.zI(this.get("icon"), c);
			this.set("contentDom", a, !0);
			b && (b = this.IT(b, c), this.set("shadowDom", b, !0));
			d && d.content && this.set("labelDom", this.AI(d.content), !0)
		},
		AI: function(a) {
			var b = document.createElement("div");
			b.className = "amap-marker-label";
			b.innerHTML = a;
			return b
		},
		vq: function() {
			var a = this.get("position");
			if (this.map && a && !this.M) {
				var b = this.map,
					a = this.map.Jb(a),
					a = this.M = new f.Eg({
						name: "marker-" + f.a.Lb(this),
						map: b,
						Y: new f.pa.Qf([a.x, a.y])
					});
				a.ao = this;
				this.X("coords", a, !0);
				a.he("offset textAlign verticalAlign isTop zIndex params noSelect".split(" "), this)
			}
		},
		getParams: function() {
			return {
				zIndex: this.get("zIndex"),
				LB: this.get("angle"),
				pg: this.get("contentDom"),
				qW: this.get("labelDom"),
				KY: this.get("shadowDom"),
				opacity: this.get("opacity"),
				altitude: this.get("altitude"),
				title: this.get("title"),
				label: this.get("label"),
				nN: this.get("AnimationOffset"),
				verticalAlign: this.get("verticalAlign"),
				textAlign: this.get("textAlign"),
				offset: this.get("offset"),
				mW: this.get("isTop"),
				shape: this.get("shape"),
				visible: this.get("visible") && !this.Oc.get("outOfZooms")
			}
		},
		offsetChanged: function() {
			function a(a) {
				var c = b.get("offset"),
					g = b.get("AnimationOffset"),
					h = b.get("verticalAlign"),
					k = b.get("textAlign"),
					l = Math.round(a.x) + c.x + g.x;
				a = Math.round(a.y) + c.y + g.y;
				g = f.j.Hx(b.M.pg);
				c = g[0];
				g = g[1];
				switch (k) {
				case "center":
					l -= c / 2;
					break;
				case "right":
					l -= c
				}
				switch (h) {
				case "middle":
					a -= g / 2;
					break;
				case "bottom":
					a -= g
				}
				b.M.ea.style.left = l + "px";
				b.M.ea.style.top = a + "px"
			}
			if (this.M && this.M.ea) {
				var b = this,
					c = this.map.J.view.type;
				"2D" == c ? (c = this.map.Jb(this.get("position")), c = c.Va(this.M.ra).vc(Math.pow(2, 20 - this.map.get("zoom"))), this.M.ea && (this.M.ea.yw && this.M.ea.parentNode !== this.M.ea.yw ? this.map.set("display") : a(c))) : "3D" == c && (c = this.get("position"), c = this.map.Vo(c, this.get("altitude")), this.M.ea && (this.M.ea.yw && this.M.ea.parentNode !== this.M.ea.yw ? this.map.set("display") : a(c)))
			} else this.map.set("display")
		},
		altitudeChanged: function() {
			this.offsetChanged()
		},
		positionChanged: function() {
			if (this.M) {
				var a = this.map.Jb(this.get("position"));
				this.set("coords", [a.x, a.y]);
				this.map && (this.M.S_ = !0, this.offsetChanged())
			}
		},
		textAlignChanged: function() {
			this.rO()
		},
		verticalAlignChanged: function() {
			this.rO()
		},
		rO: function() {
			this.M && (this.M.Ug = !0, this.map && (this.map.ad.Ik = !0, this.map.set("display")))
		},
		contentChanged: function() {
			if (this.M) {
				this.map.ad.Ik = !0; - 1 === f.a.indexOf(this.map.ad.Jf, this.M) && this.map.ad.Jf.push(this.M);
				var a = this.get("contentDom");
				this.M.ea && this.M.ea === a.parentNode && this.M.ea.removeChild(a);
				var a = this.get("content"),
					b = this.get("offset"),
					a = this.ET(a, b);
				this.set("contentDom", a);
				this.M.ea && (f.l.Dh && f.a.iepngFix(a), this.M.ea.appendChild(a), this.M.pg = a);
				this.map && this.map.set("display")
			}
		},
		iconChanged: function() {
			if (this.M && this.M.ea && !this.get("content")) {
				this.map.ad.Ik = !0; - 1 === f.a.indexOf(this.map.ad.Jf, this.M) && this.map.ad.Jf.push(this.M);
				this.M.ea && this.get("contentDom") && this.M.ea.removeChild(this.get("contentDom"));
				var a = this.get("icon"),
					b = this.get("offset"),
					a = this.zI(a, b);
				this.set("contentDom", a);
				this.M.ea ? (f.l.Dh && f.a.iepngFix(a), this.M.ea.appendChild(a), this.M.pg = a) : this.map && this.map.set("display")
			}
		},
		shadowChanged: function() {
			if (this.M && this.M.ea) {
				var a = this.get("shadowDom");
				this.M.ea && a && a.parentNode === this.M.ea && this.M.ea.removeChild(a);
				if (a = this.get("shadow")) {
					var b = this.get("offset"),
						a = this.IT(a, b);
					this.set("shadowDom", a);
					this.M.ea && this.M.ea.appendChild(a)
				}
			}
		},
		titleChanged: function() {
			this.M && this.M.pg && "string" === typeof this.get("title") && this.M.pg && this.get("title") && (this.M.pg.title = this.get("title"))
		},
		labelChanged: function(a) {
			a = a || this.get("label");
			if (this.M && this.M.ea) {
				var b = this.M.ea,
					c = this.get("labelDom");
				c && c.parentNode === b && b.removeChild(c);
				if (a && a.content) {
					c = "";
					if (a.content) {
						var c = this.AI(a.content),
							d = 0,
							e = 0;
						a.offset && (d = a.offset.y + "px", e = a.offset.x + "px");
						c.style.top = d;
						c.style.left = e;
						b.appendChild(c)
					}
					this.set("labelDom", c)
				}
			} else a && a.content ? this.set("labelDom", this.AI(a.content), !0) : this.set("labelDom", null)
		},
		isTopChanged: function() {
			var a = this.map.ad.jE,
				b = this.get("isTop"),
				c = this.get("zIndex");
			a ? a === this ? this.M && this.M.ea && (this.M.ea.style.zIndex = b ? this.map.ad.wn + 10 : c, this.map.ad.jE = b ? this : null) : (a.M && a.M.ea && (a.M.ea.style.zIndex = b ? a.get("zIndex") : this.map.ad.wn + 10), this.M && this.M.ea && (this.M.ea.style.zIndex = b ? this.map.ad.wn + 10 : c), this.map.ad.jE = b ? this : a) : (this.map.ad.jE = this, this.M && this.M.ea && (this.M.ea.style.zIndex = b ? this.map.ad.wn + 10 : c))
		},
		visibleChanged: function() {
			this.M && this.M.ea && (this.get("visible") && !this.Oc.get("outOfZooms") ? this.M.ea.style.display = "block" : this.M.ea.style.display = "none")
		},
		Pea: function() {
			this.visibleChanged()
		},
		angleChanged: function() {
			if (this.M && this.M.ea) {
				var a = {
					x: -1 * this.get("offset").x,
					y: -1 * this.get("offset").y
				};
				f.j.rotate(this.M.ea, this.get("angle") || 0, a)
			}
		},
		zIndexChanged: function() {
			var a = this.get("zIndex");
			if (a > this.map.ad.wn) {
				this.map.ad.wn = a;
				var b = this.map.ad.jE;
				b && b.M && b.M.ea && (b.M.ea.style.zIndex = a + 10)
			}
			this.M && this.M.ea && (this.M.ea.style.zIndex = this.get("isTop") ? this.map.ad.wn + 10 : this.get("zIndex"))
		},
		opacityChanged: function() {
			var a = this.get("contentDom"),
				b = this.get("shadowDom");
			a && f.j.un(a, this.get("opacity"));
			b && f.j.un(b, this.get("opacity"))
		},
		ET: function(a) {
			var b;
			b = document.createElement("div");
			b.className = "amap-marker-content";
			"string" !== typeof a ? b.appendChild(a) : (b.innerHTML = a, b.childNodes[0] && !b.childNodes[0].style && (b.style["white-space"] = "pre"));
			f.j.un(b, this.get("opacity"));
			return b
		},
		zI: function(a) {
			var b, c = 0,
				d = 0,
				e, g, h, k;
			a ? ("string" === typeof a ? (b = a, k = !0) : (b = a.get("image"), d = a.get("size"), e = a.get("imageSize"), c = d.width, d = d.height, e && (g = e.width, h = e.height)), c || (c = 0), d || (d = 0), a = "string" !== typeof a ? a.get("imageOffset") : {
				x: 0,
				y: 0
			}) : (b = f.A.Xg + "/mark_bs.png", a = {
				x: 0,
				y: 0
			}, c = 19, d = 33, g = 19, h = 33);
			e = document.createElement("div");
			e.className = "amap-icon";
			e.style.position = "absolute";
			k && !f.l.ne && (e.style.overflow = "inherit");
			c && (e.style.width = c + "px");
			d && (e.style.height = d + "px");
			c = document.createElement("img");
			c.src = b;
			g && h && (c.style.width = g + "px", c.style.height = h + "px");
			c.style.top = a.y + "px";
			c.style.left = a.x + "px";
			f.l.ne && k || e.appendChild(c);
			f.j.un(f.l.ne && k ? c : e, this.get("opacity"));
			return f.l.ne && k ? c : e
		},
		IT: function(a, b) {
			var c = this.zI(a, b);
			c.style.zIndex = -1;
			return c
		},
		moveChanged: function() {
			var a = this.get("move");
			if (!1 === a) return this.rha();
			void 0 !== a && ("pause" === a.action ? this.kfa() : "[object Array]" === Object.prototype.toString.call(a.nf) ? a.nf && ("resume" === a.action && this.DA ? this.moveTo(a.nf[a.nf.wm || 0], a.speed, a.ib) : (this.DA && this.r("movestop"), a.nf.wm = 0, this.set("position", a.nf[0]), this.bea(a.nf, a.speed, a.ib, a.B$))) : this.moveTo(a.nf, a.speed, a.ib, !0))
		},
		moveTo: function(a, b, c, d) {
			var e = this.get("position");
			a.Va(e);
			var g = Math.round(a.Md(e) / 1E3 / b * 36E5);
			if (0 === g) return this.r("moveend");
			this.Yg && (this.Yg.stop(), this.Yg = null);
			this.Yg = new f.pi(e, a);
			c = c ||
			function(a) {
				return a
			};
			this.Yg.transition = function(a, b, d) {
				if (d >= g) return b;
				var e = (b.O - a.O) * c(d / g) + a.O;
				a = (b.P - a.P) * c(d / g) + a.P;
				return new f.V(e, a)
			};
			this.Yg.kn = function(b) {
				this.set("position", b);
				d && this.Oc.r("moving", {
					passedPath: [this.Yg.start, this.get("position")]
				});
				this.r("moving");
				b.rb(a) && (this.Yg && (this.Yg.stop(), this.Yg = null), this.Oc.r("moveend"), this.r("moveend"))
			};
			this.get("autoRotation") && !f.l.ne && (b = "2D" == (this.map.J.view.type || "2D") ? this.h3(e, a) : this.i3(e, a), this.set("angle", b));
			this.Yg.Xk(this)
		},
		rha: function() {
			this.Yg && (this.Yg.stop(), this.Yg = null, this.r("movestop"))
		},
		kfa: function() {
			this.Yg && (this.Yg.stop(), this.Yg = null, this.r("movepause"))
		},
		bea: function(a, b, c, d) {
			function e() {
				var b = a.slice(0, a.wm || 0);
				b.push(this.get("position"));
				this.Oc.r("moving", {
					passedPath: b
				})
			}
			function g() {
				a.wm < a.length - 1 ? (a.wm += 1, this.moveTo(a[a.wm], b, c)) : (this.ha("movealong"), d ? (a.wm = 0, this.set("position", a[0]), this.moveTo(a[a.wm], b, c)) : this.r("movestop"))
			}
			var h = Math.min(a.wm || 0, a.length - 1);
			this.DA || (this.DA = !0, this.g("moving", e, this), this.g("moveend", g, this), this.g("movestop", function l() {
				this.DA = !1;
				this.I("moveend", g, this);
				this.I("moving", e, this);
				this.I("movestop", l, this)
			}, this));
			this.moveTo(a[h], b, c)
		},
		i3: function(a, b) {
			var c = this.map,
				d = c.Vo(a),
				c = c.Vo(b),
				e = 0;
			c.Md(d);
			var g = c.y - d.y,
				h = c.x - d.x;
			0 !== c.x - d.x ? (e = Math.atan((c.y - d.y) / (c.x - d.x)), 0 <= g && 0 > h ? e = Math.PI + e : 0 > g && 0 >= h ? e = Math.PI + e : 0 > g && 0 <= h && (e = 2 * Math.PI + e)) : e = c.y > d.y ? Math.PI / 2 : 3 * Math.PI / 2;
			return f.a.Pc(180 * e / Math.PI, 1)
		},
		h3: function(a, b) {
			var c = this.map,
				d = c.Jb(a),
				c = c.Jb(b),
				e = 0;
			c.Md(d);
			var g = c.y - d.y,
				h = c.x - d.x;
			0 !== c.x - d.x ? (e = Math.atan((c.y - d.y) / (c.x - d.x)), 0 <= g && 0 > h ? e = Math.PI + e : 0 > g && 0 >= h ? e = Math.PI + e : 0 > g && 0 <= h && (e = 2 * Math.PI + e)) : e = c.y > d.y ? Math.PI / 2 : 3 * Math.PI / 2;
			return f.a.Pc(180 * e / Math.PI, 1)
		}
	});
	f.D.cl = f.D.Hg.extend({
		B: function(a, b) {
			arguments.callee.oa.apply(this, arguments);
			this.X("items", a, !0);
			this.X("content", a, !0);
			this.X("resolution", b);
			this.X("centerCoords", b);
			this.bx = a
		},
		qD: function(a) {
			this.Df();
			this.wp();
			this.bk();
			this.cj("resolution");
			this.cj("centerCoords");
			this.cj("render");
			this.X("resolution", a);
			this.X("centerCoords", a);
			this.X("render", a);
			this.map.g("movestart", this.rk, this);
			this.map.g("mapmove", this.rk, this);
			this.map.g("zoomstart", this.rk, this);
			this.map.g("click", this.rk, this);
			this.map.g("closeOverlays", this.rk, this);
			this.map.g("rotate", this.rk, this)
		},
		rk: function() {
			this.bx.map && this.bx.close()
		},
		mapChanged: function() {},
		positionChanged: function() {
			this.bk()
		},
		renderChanged: function() {
			this.bk()
		},
		Df: function() {
			this.K && (this.K.parentNode && this.K.parentNode.removeChild(this.K), this.K = null);
			var a = f.j.create("div", null, "amap-menu");
			f.C.g(a, "mousedown", function(a) {
				f.C.stopPropagation(a)
			}, this);
			this.K = a;
			this.map.Oa.D.appendChild(this.K)
		},
		wp: function() {
			var a = this,
				b = this.K;
			b.innerHTML = "";
			var c = this.get("content");
			if ("object" === typeof c) b.appendChild(c);
			else if ("string" === typeof c) b.innerHTML = c;
			else if ((c = this.get("items")) && c.length) {
				var d = f.j.create("ul", b, "amap-menu-outer");
				c.sort(function(a, b) {
					return isNaN(a.xD) || isNaN(b.xD) ? 0 : a.xD - b.xD
				});
				for (b = 0; b < c.length; b += 1)(function(b) {
					var c = b.zZ,
						h = b.ib,
						k = f.j.create("li", d);
					k.innerHTML = c;
					f.C.g(k, "click", function() {
						h.call(k);
						a.bx.close()
					}, k)
				})(c[b])
			} else this.K.innerHTML = ""
		},
		bk: function() {
			var a = this.map,
				b = this.K;
			a && b && (this.map.get("zoom"), b = this.get("position"), b = a.Vo(b), a = b.y, b = b.x, this.K.style.right = "", this.K.style.bottom = "", this.K.style.left = b + "px", this.K.style.top = a + "px")
		},
		bg: function() {
			this.K && (this.map.I("click", this.Ija, this), this.map.Oa.D.removeChild(this.K), this.bx.Fi = !1, this.K = this.bx.Nh.map = null, this.map.I("movestart", this.rk, this), this.map.I("zoomstart", this.rk, this), this.map.I("click", this.rk, this), this.map.I("closeOverlays", this.rk, this), this.map.I("rotate", this.rk, this))
		},
		visibleChanged: function() {
			this.K && (this.get("visible") ? this.K.style.display = "block" : this.K.style.display = "none")
		},
		itemsChanged: function() {
			this.K && this.wp()
		}
	});
	f.D.fe = f.D.Hg.extend({
		B: function(a, b) {
			arguments.callee.oa.apply(this, arguments);
			this.he("content contentDom position contentU altitude isCustom autoMove showShadow closeWhenClickMap size offset".split(" "), a);
			this.X("retainWhenClose", a, !0);
			a.X("toBeClose", this);
			this.Ci = a
		},
		qD: function(a) {
			this.Y$ || (this.Df(), this.wp());
			this.cj("resolution");
			this.cj("centerCoords");
			this.cj("render");
			this.X("resolution", a);
			this.X("centerCoords", a);
			this.X("render", a);
			this.map = a;
			a.Oa.D.appendChild(this.Wb);
			this.cN();
			this.bk();
			this.qO();
			this.Y$ = !0;
			this.Q$();
			this.Oc.r("onAdd", {
				type: "onAdd",
				target: this.Oc
			})
		},
		Df: function() {
			var a = f.j.create("div");
			a.className = "amap-info";
			var b = f.j.create("div", a, "amap-info-shadowContainer"),
				c = f.j.create("div", a),
				d = f.j.create("div", c, "amap-info-contentContainer");
			a.style.position = "absolute";
			c.style.position = "absolute";
			c.style.bottom = "0px";
			c.style.left = "0px";
			b.style.position = "absolute";
			this.Wb = a;
			this.Ye = c;
			this.nM = b;
			this.Tg = d;
			this.set("contentDom", this.Tg, !0)
		},
		wp: function() {
			var a = this.get("contentU");
			if (a) {
				var b = this.get("isCustom"),
					c = this.Tg,
					d = this.nM;
				c.innerHTML = "";
				var e = null;
				if (b) {
					if ("string" === typeof a) c.innerHTML = a;
					else if (a instanceof Array) for (e = 0; e < a.length; e += 1) c.appendChild(a[e]);
					else c.appendChild(a);
					e = c;
					d.parentNode && d.parentNode.removeChild(d)
				} else {
					e = d = f.j.create("div", c, "amap-info-content amap-info-outer");
					"string" === typeof a ? d.innerHTML = a : d.appendChild(a);
					this.Z$ = d;
					a = f.j.create("a", this.Tg, "amap-info-close");
					a.innerHTML = "\u00d7";
					this.KI = a;
					a.href = "javascript: void(0)";
					f.l.Me && (f.C.g(a, "touchstart", function(a) {
						f.C.stop(a)
					}, this), f.C.g(a, "touchend", function(a) {
						f.C.stop(a);
						this.Ci.close()
					}, this), f.C.g(a, "click", function(a) {
						f.C.stop(a);
						this.Ci.close()
					}, this));
					f.l.Z || (f.C.g(a, "mousedown", function(a) {
						f.C.stop(a)
					}, this), f.C.g(a, "click", function(a) {
						f.C.stop(a);
						this.Ci.close()
					}, this));
					if (a = this.get("size", !0)) 0 !== a.width && (d.style.width = a.width + "px"), 0 !== a.height && (d.style.height = a.height + "px");
					a = f.j.create("div", c, "amap-info-sharp");
					a.style.height = "23px";
					if (f.l.Dh || f.l.cr) a.style.marginLeft = c.childNodes[0].offsetWidth / 2 - 5;
					this.nM.style.display = "block"
				}
				f.C.pha(e)
			}
		},
		cN: function() {
			var a = this.get("isCustom"),
				b = this.get("showShadow");
			if (!a && b) {
				var a = this.nM,
					b = f.j.KC(this.Tg),
					c = b.height - 23,
					d = b.width;
				if (f.l.Dh || f.l.cr) c = this.Tg.childNodes[0].offsetHeight, d = this.Tg.childNodes[0].offsetWidth + 26;
				b = "background-image:url(" + f.A.qb + (f.l.Dh ? "/theme/v1.3/iws.gif);" : "/theme/v1.3/iws.png);");
				a.innerHTML = "";
				var e = [],
					g;
				g = e[1] = {};
				g.height = 0.5 * c + 4;
				g.width = d;
				g.offsetX = 400;
				g.offsetY = 16;
				g.top = -g.height - 10 - 15;
				g.left = 23;
				g = e[2] = {};
				g.height = e[1].height;
				g.width = e[1].height;
				g.offsetX = 1075 - g.width;
				g.offsetY = e[1].offsetY;
				g.top = e[1].top;
				g.left = 23 + e[1].width;
				g = e[3] = {};
				g.height = 10;
				g.width = 22;
				g.offsetX = 30;
				g.offsetY = 445;
				g.top = -25;
				g.left = 23 + (f.l.cr || f.l.Dh ? 5 : 0);
				g = e[4] = {};
				g.height = 10;
				g.width = d / 2 - 15 - e[3].left - e[3].width;
				g.offsetX = 132;
				g.offsetY = 445;
				g.top = -25;
				g.left = e[3].left + e[3].width;
				g = e[5] = {};
				g.height = 10;
				g.width = 70;
				g.offsetX = 80;
				g.offsetY = 445;
				g.top = -25;
				g.left = e[4].left + e[4].width;
				g = e[6] = {};
				g.height = 10;
				g.width = d - e[5].left - e[5].width;
				g.offsetX = 132;
				g.offsetY = 445;
				g.top = -25;
				g.left = e[5].left + e[5].width;
				g = e[7] = {};
				g.height = 10;
				g.width = 30;
				g.offsetX = 621;
				g.offsetY = 445;
				g.top = -25;
				g.left = d;
				g = e[8] = {};
				g.height = 15;
				g.width = 70;
				g.offsetX = 47;
				g.offsetY = 470;
				g.top = -15;
				g.left = d / 2 - 15;
				for (c = 1; 8 >= c; c += 1) d = f.j.create("div", a), g = [], g.push("position:absolute;"), g.push(b), g.push("top:" + e[c].top + "px;"), g.push("left:" + e[c].left + "px;"), g.push("width:" + e[c].width + "px;"), g.push("height:" + e[c].height + "px;"), g.push("background-position:" + -e[c].offsetX + "px " + -e[c].offsetY + "px;"), d.style.cssText = g.join("")
			}
		},
		Nna: function() {},
		bk: function() {
			var a = this.map,
				b = this.Wb,
				c = this.get("position");
			if (a && b && c) {
				b = a.Vo(c, this.get("altitude"));
				a.get("size");
				c = f.j.KC(this.Tg);
				if (f.l.Dh || f.l.cr) c.width = this.Tg.childNodes[0].offsetWidth + 14;
				a = this.get("offset");
				c = this.get("isCustom") ? c.width / 2 : (c.width - 30) / 2;
				this.Wb.style.left = Math.round(b.x - c + (a.x || 0)) + "px";
				this.Wb.style.top = Math.round(b.y + (a.y || 0)) + "px";
				b = this.Z$;
				if (this.KI && b.childNodes[0]) {
					for (c = a = 0; c < b.childNodes.length; c += 1) a += b.childNodes[0].clientHeight || 0;
					a > (this.get("size").height || b.clientHeight) ? this.KI.style.right = "20px" : this.KI.style.right = "5px"
				}
			}
		},
		b2: function() {
			var a = new f.G(2 - this.Tg.offsetWidth / 2, 2 - this.Tg.offsetHeight),
				b = this.get("offset") || new f.G(0, 0);
			this.get("isCustom") || (a = a.add(new f.G(0, -23)));
			return a.add(b)
		},
		altitudeChanged: function() {
			this.bk()
		},
		qO: function() {
			if (this.get("position") && this.get("autoMove") && this.Tg) {
				for (var a = this.map, b = new f.Uc(this.Tg.offsetWidth, this.Tg.offsetHeight), c = a.Vo(this.get("position"), this.get("altitude")).add(this.b2()), d = c.add(b.Tu()), e = a.get("size"), g = a.Eba(), h = 0, k = 0, l = 0; l < g.length; l += 1) {
					var m = g[l],
						n = 0,
						p = 0;
					0 === m[1] && 0 === m[2] ? (n = m[3] - (c.x + h), p = m[0] - (c.y + k), 0 < n && 0 < p && (Math.abs(n) < Math.abs(p) ? h += n : k += p)) : 0 === m[2] && 0 === m[3] ? (n = e.Bh() - m[1] - (d.x + h), p = m[0] - (c.y + k), 0 > n && 0 < p && (Math.abs(n) < Math.abs(p) ? h += n : k += p)) : 0 === m[0] && 0 === m[3] ? (n = e.Bh() - m[1] - (d.x + h), p = e.zh() - m[2] - (d.y + k), 0 > n && 0 > p && (Math.abs(n) < Math.abs(p) ? h += n : k += p)) : 0 === m[0] && 0 === m[1] && (n = m[3] - (c.x + h), p = e.zh() - m[2] - (d.y + k), 0 < n && 0 > p && (Math.abs(n) < Math.abs(p) ? h += n : k += p))
				}
				c = c.add(new f.G(h, k));
				d = d.add(new f.G(h, k));
				l = g = 0;
				0 > c.x || b.Bh() > e.Bh() ? g = 20 - c.x : e.Bh() < d.x && (g = e.Bh() - d.x - 25);
				0 > c.y || b.zh() > e.zh() ? l = 5 - c.y : e.zh() < d.y && (l = e.zh() - d.y - 15);
				g += h;
				l += k;
				(g || l) && a.J.panBy(g, l)
			}
		},
		Q$: function() {
			this.get("closeWhenClickMap") && (this.map.g("clickstart", this.jR, this, !1), this.map.g("clickend", this.iR, this, !1))
		},
		jR: function() {
			this.Ci.Fi && this.Ci.getIsOpen() && (this.Ci.iE = !0)
		},
		iR: function() {
			this.Ci.Fi && (this.Ci.iE && this.Ci.close(), this.Ci.iE = !1)
		},
		bg: function() {
			this.Wb && this.map && (this.Ci.iE = !1, this.get("closeWhenClickMap") && (this.map.I("clickstart", this.jR, this), this.map.I("clickend", this.iR, this)), this.get("retainWhenClose") ? this.map.lj.appendChild(this.Wb) : (this.Wb.parentNode === this.map.Oa.D && this.map.Oa.D.removeChild(this.Wb), this.Ci.D = null), this.map = null, this.Ci.Fi = !1, this.Oc.r("close", {
				type: "close",
				target: this.Oc
			}))
		},
		Rja: function() {
			if (!this.get("isCustom")) return this.Tg.offsetWidth;
			for (var a = this.Jg, b = a.firstChild, c = a.lastChild; b && c && b.style && c.style && b === c;) a = b, b = a.firstChild, c = a.lastChild;
			a = f.j.me(a, "width");
			return a = parseInt(a.replace("px", ""), 10)
		},
		renderChanged: function() {
			this.bk()
		},
		positionChanged: function() {
			this.map && this.Wb && (this.bk(), this.qO())
		},
		offsetChanged: function() {
			this.positionChanged()
		},
		contentChanged: function() {
			this.wp();
			this.cN();
			this.bk()
		},
		sizeChanged: function() {
			this.wp();
			this.cN();
			this.bk()
		}
	});
	f.pa = {};
	f.pa.Xd = f.ba.extend({
		ga: [f.ka, f.se],
		B: function() {},
		Ab: function() {
			return new this.B(this.Na)
		},
		IJ: function() {
			return this.Na
		},
		setCoords: function(a) {
			this.Kga(a)
		},
		Kga: function(a) {
			this.rr = this.Qc();
			this.hf = null;
			if (f.pa.bc && this instanceof f.pa.bc) {
				var b = a.length;
				this.Mf = Array(b);
				for (var c, d, e = 0; e < b; e += 1) if (c = a[e], d = new f.pa.JN(c), this.Mf[e] = d, 0 === e) {
					if (0 === c.length) break;
					d.No(c) || c.reverse()
				} else 0 !== c.length && d.No(c) && c.reverse()
			} else this.Na = a
		}
	});
	f.pa.Yd = f.extend({}, {
		ls: "point",
		ME: "linestring",
		IN: "linearring",
		Cz: "polygon",
		TE: "multipoint",
		SE: "multilinestring",
		Az: "multipolygon",
		hja: "geometrycollection"
	});
	f.Eg = f.ba.extend({
		ga: [f.ka, f.se],
		B: function(a) {
			a = a || {};
			a.hw && (this.hw = a.hw);
			a.zG && (this.zG = a.zG);
			a.wQ && (this.wQ = a.wQ);
			this.map = a.map;
			this.Ej = a.dG || f.a.Lb(this);
			this.name = a.name || "";
			this.Ug = !1;
			this.set("visible", !0, !0);
			this.hM(a.Y);
			this.$i = a.fE;
			this.style = a.style
		},
		Daa: function() {
			this.style = this.$i = this.ao = this.xW = this.Y = this.name = this.map = null;
			this.vp();
			this.Uh()
		},
		nca: function() {
			return this.$i
		},
		Yga: function(a) {
			this.$i = a;
			this.zIndex = this.$i[0].oi || this.zIndex
		},
		pla: function() {
			return this.Y
		},
		hM: function(a) {
			a && (this.Y = a, this.X("coords", a, !0), this.hw || this.zG) && (a.X("radius", this), a.X("center", this), a.X("resolution", this), a.X("strokeWeight", this))
		},
		setStyle: function(a) {
			this.Yga(a);
			this.Bo()
		},
		coordsChanged: function() {
			this.Bo()
		},
		radiusChanged: function() {
			this.Y.rr = this.Y.Qc();
			this.Y.hf = null;
			this.Bo()
		},
		Bo: function(a) {
			this.set("feature", {
				target: this,
				xaa: a,
				rr: this.Y.rr || this.Y.Qc(),
				eea: this.Y.Qc()
			});
			this.Y.rr = this.Y.Qc()
		},
		visibleChanged: function() {
			this.Bo()
		},
		Cla: function(a) {
			for (var b = 0; b < this.$i.length; b += 1) {
				var c = this.$i[b];
				if (a.rb(c.wt(this))) return c
			}
		},
		Lba: function() {
			var a = this.Y,
				b = [];
			a.Vg() === f.pa.Yd.Cz || a.Vg() === f.pa.Yd.Az ? b.push(new f.style.Kd.bc({
				fillColor: "#78cdd1",
				vd: 0.2,
				strokeColor: "#122e29",
				Ua: 0.5,
				Ob: 1
			})) : a.Vg() === f.pa.Yd.ME || a.Vg() === f.pa.Yd.IN || a.Vg() === f.pa.Yd.SE ? b.push(new f.style.Kd.Jn({
				color: "#888888",
				width: 1,
				zIndex: 10
			})) : a.Vg() !== f.pa.Yd.ls && a.Vg() !== f.pa.Yd.TE || b.push(new f.style.Kd.Gg({
				url: f.A.qb + "/theme/v1.3/markers/0.png",
				width: 36,
				height: 36,
				rotation: 0,
				doa: -12,
				eoa: -36,
				zIndex: 100
			}));
			return b
		}
	});
	f.Eg.cja = "geometry";
	f.pa.Qf = f.pa.Xd.extend({
		B: function(a, b) {
			this.Na = a;
			this.Fh = b;
			this.hf = null
		},
		Qc: function() {
			if (!this.hf) {
				var a = this.Na[0],
					b = this.Na[1];
				if (this.Fh) this.hf = [a, b, a, b];
				else {
					var c = this.get("radius"),
						d = this.get("resolution") * this.get("strokeWeight") || 0,
						c = c ? c / Math.cos(Math.PI * this.get("center").P / 180) : 0;
					this.hf = [a - c - d, b - c - d, a + c + d, b + c + d]
				}
			}
			return this.hf
		},
		Vg: function() {
			return f.pa.Yd.ls
		}
	});
	f.Q = {
		canvas: {},
		Gd: {},
		of: {},
		Sd: {}
	};
	f.Q.oc = f.ba.extend({
		ga: [f.ka, f.se],
		B: function(a, b) {
			this.q = a;
			this.Fh = a.ia.Fh;
			this.T = b;
			this.h = b.h;
			this.X("display", b)
		},
		Et: function() {
			this.nu && this.nu();
			this.vp();
			this.h = this.T = this.q = null
		},
		Sq: function(a, b) {
			var c = this.zoom,
				d = [],
				e = this.q;
			if (Math.floor(c) !== c) b(d, e);
			else {
				c = [a.x, a.y];
				if (e.Ik) {
					for (var g = e.Jf, h = !0, k = [], l = 0; l < g.length; l += 1) {
						var m = g[l].pg;
						if (m) if (m.parentNode && m.parentNode.parentNode && this.T && m.parentNode.parentNode !== this.T.lj && "none" !== m.parentNode.style.display) {
							var n = f.j.Hx(m),
								m = n[0],
								n = n[1];
							if (m && n) {
								var p = Math.max(Math.abs(g[l].get("offset").x), Math.abs(g[l].get("offset").y)) + Math.max(m, n);
								e.Fe = Math.max(e.Fe, p);
								e.af = Math.max(e.af, p);
								g[l].width = m;
								g[l].height = n
							} else h = !1, k.push(g[l])
						} else h = !1, k.push(g[l])
					}
					h ? (e.Ik = !1, e.Jf = []) : e.Jf = k
				}
				g = Math.max(e.Fe, e.iu || 0) * this.S;
				h = Math.max(e.af, e.iu || 0) * this.S;
				k = 0;
				e.hu && (k = e.hu / Math.cos(Math.PI * this.h.get("center").P / 180));
				h = Math.max(h, k || 0);
				g = Math.max(g, k || 0);
				if (g = e.Li([c[0] - g, c[1] - h, c[0] + g, c[1] + h])) {
					for (var q in g) if (g.hasOwnProperty(q) && (h = g[q], h.get("visible") && !h.get("noSelect"))) if (k = h.Y, k instanceof f.pa.Qf) if (this.Fh) {
						l = this.q.Yj;
						l instanceof Array && (l = "number" === typeof h.Ra.style && l[h.Ra.style] ? l[h.Ra.style] : l[0]);
						var m = l.size.width * this.S,
							n = l.size.height * this.S,
							p = l.anchor.x * this.S,
							r = l.anchor.y * this.S,
							k = k.Na,
							s = l.rotation_,
							u = [c[0], c[1]];
						if (s) {
							var v = (c[0] - k[0]) / this.S,
								x = (c[1] - k[1]) / this.S,
								t = s,
								s = Math.cos(-t),
								y = Math.sin(-t),
								t = v * s - x * y,
								v = v * y + x * s;
							u[0] = k[0] + t * this.S;
							u[1] = k[1] + v * this.S
						}
						m = f.H.vI([
							[u[0] - m + p, u[1] - n + r],
							[u[0] + p, u[1] + r]
						]);
						f.H.md(m, k) && d.push(h)
					} else if ("undefined" !== typeof k.get("radius")) l = k.Na, l = new f.G(l[0], l[1]), m = new f.G(c[0], c[1]), k = k.get("radius"), "px" === h.get("unit") ? m.Md(l) / Math.pow(2, 20 - this.zoom) < k && d.push(h) : m.Md(l) * Math.cos(h.get("center").P * Math.PI / 180) <= k / this.jn * Math.pow(2, 20 - this.zoom) && d.push(h);
					else {
						if (l = h.get("params"), l.visible) {
							k = k.Na;
							s = l.LB % 360;
							u = [c[0], c[1]];
							s && (v = (c[0] - k[0]) / this.S, x = (c[1] - k[1]) / this.S, t = Math.PI * s / 180, s = Math.cos(-t), y = Math.sin(-t), t = v * s - x * y, v = v * y + x * s, u[0] = k[0] + t * this.S, u[1] = k[1] + v * this.S);
							m = h.width * this.S;
							n = h.height * this.S;
							p = l.offset.x * this.S;
							r = l.offset.y * this.S;
							v = l.verticalAlign;
							switch (l.textAlign) {
							case "center":
								p -= m / 2;
								break;
							case "right":
								p -= m
							}
							switch (v) {
							case "middle":
								r -= n / 2;
								break;
							case "bottom":
								r -= n
							}
							m = f.H.vI([
								[u[0] - m - p, u[1] - n - r],
								[u[0] - p, u[1] - r]
							]);
							k[0] instanceof Array || (k = [k]);
							for (n = k.length - 1; 0 <= n; n -= 1) if (f.H.md(m, k[n])) {
								l.shape ? this.$x(h, u, k) && d.push(h) : d.push(h);
								break
							}
						}
					} else k.md ? k.md(c) && d.push(h) : k.Gt && 1.8 * k.Gt(c) <= h.get("strokeWeight") * this.S && d.push(h);
					this.Fh ? d.sort(function(a, b) {
						return a.Ej > b.Ej ? -1 : 1
					}) : d.sort(function(a, b) {
						return a.get("isTop") ? -1 : b.get("isTop") ? 1 : a.get("zIndex") > b.get("zIndex") || a.get("zIndex") === b.get("zIndex") && a.Ej > b.Ej ? -1 : 1
					});
					b(d, e)
				} else b([], e)
			}
		},
		$x: function(a, b, c) {
			var d = (b[0] - c[0][0]) / this.S;
			b = (b[1] - c[0][1]) / this.S;
			a = a.get("params");
			c = a.offset;
			var d = [d - c.x, b - c.y],
				e;
			a = a.shape;
			if ("circle" === a.F.type) {
				if (b = a.F.coords[0], c = a.F.coords[1], Math.sqrt((d[0] - b) * (d[0] - b) + (d[1] - c) * (d[1] - c)) <= a.F.coords[2]) return !0
			} else {
				if ("poly" === a.F.type) return e = a.F.coords, e = this.$B(e), f.Mc.md(d, e);
				if ("rect" === a.F.type) return e = a.F.coords, a = e[0], b = e[1], c = e[2], e = e[3], e = [
					[a, b],
					[c, b],
					[c, e],
					[a, e]
				], f.Mc.md(d, e)
			}
			return !1
		},
		$B: function(a) {
			for (var b = [], c = 0; c / 2 < a.length / 2; c += 2) b.push([a[c], a[c + 1]]);
			return b
		},
		aV: function(a, b, c, d, e, g, h) {
			var k = ["position:absolute;"];
			k.push("top:" + Math.round(c) + "px;");
			k.push("left:" + Math.round(b) + "px;");
			k.push("width:" + Math.round(d) + "px;");
			k.push("height:" + Math.round(e) + "px;");
			1 > g && ("opacity" in a.style ? (k.push("opacity"), k.push(":"), k.push(g), k.push(";")) : 8 <= document.documentMode ? (k.push("-ms-filter:'progid:DXImageTransform.Microsoft.Alpha(opacity="), k.push(Math.ceil(100 * g)), k.push(")';")) : (k.push("filter:alpha(opacity="), k.push(Math.ceil(100 * g)), k.push(");")));
			k.push("z-index:" + h + ";");
			k.join("");
			f.j.AY(a, k.join(""))
		}
	});
	f.Q.Pb = f.ba.extend({
		ga: [f.ka, f.se],
		B: function(a) {
			this.h = a;
			this.lj = a.lj;
			this.K = a.Oa.w;
			this.X("display", a);
			this.X("rotateEnable", a);
			this.X("style", a);
			this.X("hightlight", a)
		},
		jL: function(a) {
			this.qd = a || f.a.rq("ff" + this.h.qd.slice(1))
		},
		Sq: function(a, b, c, d) {
			function e(a, d) {
				a.length && (h[f.a.indexOf(b, d)] = a);
				k -= 1;
				0 >= k && (c(h), k = 0)
			}
			for (var g = b.length, h = [], k = 0, l, m = [], n = 0; n < g; n += 1) l = b[n], l instanceof f.w.Gc && l.get("visible") && (m.push(this.Vq(l)), k += 1);
			for (g = 0; g < m.length; g += 1) m[g].Sq(a, e, d)
		}
	});
	f.iU = {
		Vf: function(a, b) {
			for (var c = [], d = 0, e = a.length; d < e; d += 2) {
				var g = 0,
					g = "str" === b ? f.a.Pc(parseInt(a.substr(d, 2), 16) / (0 === d ? 255 : 1), 3) : f.a.Pc(parseInt(a.substr(d, 2), 16) / 255, 3);
				c.push(g)
			}
			c.push(c.shift());
			return "str" === b ? "rgba(" + c.join(",") + ")" : c
		},
		sX: function(a, b, c) {
			if (b[c]) console.log("customType repeat!!", c);
			else {
				var d = {};
				d.visible = void 0 === a.visible ? !0 : a.visible;
				d.eha = void 0 === a.showLabel ? !0 : a.showLabel;
				d.Wj = void 0 === a.showIcon ? !0 : a.showIcon;
				if (void 0 !== a.color) {
					var e = "",
						g = "";
					a.color && (e = this.Vf(a.color, "str"), g = this.Vf(a.color));
					d.color = {
						canvas: e,
						of: g
					}
				} else d.opacity = a.opacity;
				void 0 !== a.fillColor ? (g = e = "", a.fillColor && (e = this.Vf(a.fillColor, "str"), g = this.Vf(a.fillColor)), d.fillColor = {
					canvas: e,
					of: g
				}) : d.vd = a.fillOpacity;
				void 0 !== a.strokeColor ? (g = e = "", a.strokeColor && (e = this.Vf(a.strokeColor, "str"), g = this.Vf(a.strokeColor)), d.strokeColor = {
					canvas: e,
					of: g
				}) : d.Ua = a.strokeOpacity;
				void 0 !== a.textFillColor ? (g = e = "", a.textFillColor && (e = this.Vf(a.textFillColor, "str"), g = this.Vf(a.textFillColor)), d.zha = {
					canvas: e,
					of: g
				}) : d.Aha = a.textFillOpacity;
				void 0 !== a.textStrokeColor ? (g = e = "", a.textStrokeColor && (e = this.Vf(a.textStrokeColor, "str"), g = this.Vf(a.textStrokeColor)), d.Bha = {
					canvas: e,
					of: g
				}) : d.Cha = a.textStrokeOpacity;
				void 0 !== a.backgroundColor ? (g = e = "", a.backgroundColor && (e = this.Vf(a.backgroundColor, "str"), g = this.Vf(a.backgroundColor)), d.backgroundColor = {
					canvas: e,
					of: g
				}) : d.T9 = a.backgroundOpacity;
				a.texture && (d.hc = f.A.Qb + "://" + a.texture);
				b[c] = d
			}
		},
		CL: function(a, b, c, d) {
			if (a) for (var e in a) if (a.hasOwnProperty(e)) {
				var g = a[e],
					h = e;
				c && (h = c + ":" + e);
				if (g.detailedType) this.sX(g, b, h), this.CL(g.detailedType, b, h, g);
				else if (g.subType) this.CL(g.subType, b, h);
				else {
					if (void 0 !== g.code) {
						for (var k in d) d.hasOwnProperty(k) && void 0 === g[k] && void 0 !== d[k] && "isDetailed" !== k && "detailedType" !== k && (g[k] = d[k]);
						h = c + ":" + g.code
					}
					this.sX(g, b, h)
				}
			}
		},
		styleChanged: function() {
			if (this.h.J.Wg) {
				var a = {};
				this.CL(this.h.get("style"), a);
				this.At = a;
				var a = this.At["regions:land"],
					b = this.At.water,
					c = this.At.sky,
					d, e, g;
				if (a) {
					var h = "rgba(0,0,0,0)";
					if (a.visible) {
						var k = this.Rq(f.a.mY(this.h.qd.substr(1)), a.opacity, a.color);
						k && (h = k, d = this.Ot(f.a.Cr(this.h.qd.substr(1)), a.opacity, a.color))
					}
					this.h.lC = h
				}
				b && b.visible && (e = this.Ot(f.a.Cr(this.h.FB.substr(1)), b.opacity, b.color));
				c && c.visible && (g = this.Ot(f.a.Cr(this.h.Mw.substr(1)), void 0, c.color));
				this.jL && this.jL(d, e, g);
				this.HZ ? this.HZ(this.At) : this.set("display")
			}
		},
		Rq: function(a, b, c) {
			if (a) {
				if (void 0 !== b) return a = a.split(","), a[3] = f.a.Pc(parseFloat(b), 3) + ")", a.join(",");
				if (c) return c.canvas
			}
			return a
		},
		Ot: function(a, b, c) {
			if (a) {
				if (void 0 !== b) return [a[0], a[1], a[2], f.a.Pc(parseFloat(b), 3)];
				if (c) return c.of
			}
			return a
		},
		GC: function(a, b) {
			if (void 0 !== b) {
				var c = this.At[a + ":" + b];
				if (c) return c
			}
			return this.At[a]
		},
		Fj: function(a, b, c, d) {
			var e = null,
				g = a;
			d = d ? this.Rq : this.Ot;
			if (e = this.GC(b)) if (e.visible) {
				var g = 1,
					h = "";
				if (c) if (e.fillColor || e.vd) g = e.vd, h = e.fillColor;
				else {
					if (e.color || e.opacity) g = e.opacity, h = e.color
				} else if (e.strokeColor || e.Ua) g = e.Ua, h = e.strokeColor;
				else if (e.color || e.opacity) g = e.opacity, h = e.color;
				g = d(a, g, h)
			} else g = "";
			this.Ko === b && (g = this.Uq(g || a));
			return g
		},
		Fo: function(a, b, c) {
			c = c ? this.Rq : this.Ot;
			var d = null,
				e = a;
			(d = this.GC(b)) && (e = d.visible ? c(a, d.opacity, d.color) : "");
			this.Ko === b && (e = this.Uq(e || a));
			return e
		},
		Nt: function(a, b, c, d, e) {
			var g = a,
				h = b,
				k = c,
				l = !0,
				m = !0,
				n = 1,
				p = this.GC(d, e);
			p && (p.visible && p.eha ? (g = this.Rq(a, p.Aha, p.zha), h = this.Rq(b, p.Cha, p.Bha), k = this.Rq(c, p.T9, p.backgroundColor), l = p.Wj) : (m = l = !1, g = h = k = ""));
			p = !1;
			this.Ko === d ? p = !0 : void 0 !== e && this.Ko === d + "-" + e && (p = !0);
			p && (g = this.Uq(g || a), h = this.Uq(h || b), k = this.Uq(k || c), n = 1 - 1.6 * this.Yt, m = l = !0);
			return [g, h, k, l, m, n]
		},
		Oq: function(a, b, c, d) {
			var e = null,
				g = a,
				h = b;
			d = d ? this.Rq : this.Ot;
			if (e = this.GC(c)) e.visible ? (g = d(a, e.vd, e.fillColor), h = d(b, e.Ua, e.strokeColor)) : g = h = "";
			this.Ko === c && (b = h || b, g = this.Uq(g || a), h = this.Uq(b));
			return [g, h]
		}
	};
	f.Q.Pb.ob(f.iU);
	f.Q.canvas.Pb = f.Q.Pb.extend({
		B: function(a) {
			arguments.callee.oa.apply(this, arguments);
			this.type = "2D"
		},
		Vq: function(a) {
			if (!a.Q) {
				var b = a.vl(this);
				b && !b.gaa && (a.Q = b)
			}
			return a.Q
		},
		fc: function(a) {
			var b = this.h.lC || this.h.qd;
			this.OL !== b && this.h.J.Wg && (this.h.zY(b), this.OL = b);
			this.h.Oa.no.style.cssText = "";
			for (var c = a.Ya, b = a.W, d = a.size.width, e = a.size.height, g = 0; g < c.length; g += 1) {
				var h = c[g],
					k = this.Vq(h),
					l = c[g].Wm();
				if (k && k.q) if (!l.visible || l.ed[0] > b.zoom || l.ed[1] < b.zoom || h.ta && 0 === h.ta.length) {
					if (k = k.$h()) if (k.length) for (l = 0; l < k.length; l += 1) k[l].parentNode === this.K && this.K.removeChild(k[l]);
					else k.parentNode === this.K && this.K.removeChild(k)
				} else {
					k.fc(a, l);
					var h = k.$h(),
						m, n, p = k.transform;
					if (!p || !h || k.ai && !this.h.J.wa) c[g].Ni && h.parentNode !== this.K && (this.K.appendChild(h), c[g].xb = h);
					else {
						c[g].xb = h;
						h.length || (h = [h], p = [p]);
						for (var q = 0; q < h.length; q += 1) if (m = h[q], n = p[q], !n.Xt) {
							var r = n.translate.x,
								s = n.translate.y;
							c[g].aD || (r = f.a.Pc(r, 2), s = f.a.Pc(s, 2));
							var u = n.scale;
							1E-5 > Math.abs(r) && (r = 0);
							1E-5 > Math.abs(s) && (s = 0);
							var v = [];
							v.push("position:absolute");
							v.push("z-index:" + (n.oi || c[g].get("zIndex")));
							c[g].xx ? (v.push("top:" + Math.floor(e / 2 + s) + "px"), v.push("left:" + Math.floor(d / 2 + r) + "px")) : m.gW ? (v.push("height:" + m.height * u + "px"), v.push("width:" + m.width * u + "px"), v.push("top:" + (e / 2 - s * u) + "px"), v.push("left:" + (d / 2 - r * u) + "px")) : (1 !== u && (v.push(f.j.rp[f.j.rf] + "-origin:" + r + "px " + s + "px"), v.push(f.j.rp[f.j.rf] + ":scale3d(" + u + "," + u + ",1)")), v.push("top:" + Math.floor(e / 2 - s) + "px"), v.push("left:" + Math.floor(d / 2 - r) + "px"), k.Gh && (v.push("height:" + m.height + "px"), v.push("width:" + m.width + "px")));
							k.aD || 1 === l.opacity || "number" !== typeof l.opacity || v.push(f.j.gV(m, l.opacity));
							m.parentNode !== this.K && this.K.appendChild(m);
							f.j.AY(m, v.join(";"))
						}
					}
				}
			}
			a = this.h.Oa.no;
			h = this.h.Oa.w;
			c = this.h.Oa.D;
			f.j.rf && "number" === typeof b.rotation && 0 !== b.rotation ? (a.style[f.j.rf + "Origin"] = d / 2 + "px " + e / 2 + "px", a.style[f.j.rf] = "rotate(" + b.rotation + "deg)", a.style.overflow = "visible", h.style.overflow = "visible", c.style.overflow = "visible") : (a.style.cssText = "", h.style.cssText = "-webkit-transform: translateZ(0);", c.style.cssText = "");
			this.h.Jr = !1
		}
	});
	f.Q.ri = f.Q.oc.extend({
		B: function(a, b) {
			arguments.callee.oa.apply(this, arguments);
			this.X("reload", a, !0);
			var c = a.ia.get("cacheSize");
			if (this.h && this.h.J) {
				var d = this.h.J.get("tileCacheSize");
				d && 0 < d && (c = d)
			}
			this.xa = new f.ff(c);
			this.yi = !1;
			var e = this;
			this.xa.kL.lT(function(a) {
				e.Pv(a)
			});
			this.ec = 1;
			this.mm = 50;
			this.sO = !0;
			this.q.xa = this.xa;
			this.Lj = new f.vz(6, null, a.tJ);
			new f.vz(5, null, a.tJ)
		},
		nu: function() {
			this.clear();
			this.xa.clear();
			this.Ec && (this.Ec.I("tiles", this.wD, this), this.Ec.I("ack", this.vD, this), this.Ec.I("disable", this.uD, this), this.Ec = null);
			this.Gh && f.C.I(this.Qa, "webglcontextlost", this.ty, this);
			this.h.I("zoomend", this.Ii, this);
			this.h.I("moveend", this.Ii, this)
		},
		reloadChanged: function() {
			this.q && (this.q.wa = !1);
			this.xa.clear();
			this.reload = !0;
			this.set("display")
		},
		Ri: function(a, b, c) {
			function d(b) {
				a.loaded = !0;
				e.q && (a.status = "loaded", a.qa = !0, a.sc = b, e.set("display", 0), "function" === typeof c && c())
			}
			var e = this;
			a.status = "loading";
			e.xa.set(a.key, a);
			this.q.yt && this.q.yt.call(this, a, d, function() {
				a.loaded = !0;
				e.q && (a.status = "loaded", a.qa = !0, "function" === typeof c && c())
			})
		},
		vZ: function(a, b, c, d) {
			var e = [];
			c = c || 18;
			b = Math.pow(2, b - c);
			for (var g = 0; g < a.length; g += 1) {
				var h = a[g].ma,
					k = Math.floor(h.x / b),
					h = Math.floor(h.y / b);
				d ? (k = c + "/" + k + "/" + h, h = this.xa.get(k)) : (h = new f.hk(c, k, h), k = h + "", h = new f.Wa(h));
				!e[k] && h && (e.push(h), e[k] = 1)
			}
			return e
		},
		Pk: function(a) {
			for (var b = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : !1, c = a.length - 1; 0 <= c; c -= 1) {
				var d = a[c];
				if (d.length) {
					if (this.q.Tw) {
						for (var e = [], g = d.length - 1; 0 <= g; g -= 1) {
							var h = d[g],
								k = h.ma;
							this.q.h.Rn.Wy(k.x, k.y, k.z) ? e.push(d[g]) : (this.xa.set(h.key, h), h.loaded = !0, h.status = "loaded", h.qa = !0, h.Pa = {})
						}
						d = e;
						a[c] = e;
						if (0 == e.length) continue
					}
					if (this.bi) {
						if (this.h.kz) break;
						e = d[0].ma.z;
						18 < e && (d = this.vZ(d, e));
						this.Kr(d, this.Gh ? 1 : 0);
						for (h = g = 0; g < d.length;) this.QK(d.slice(50 * h, 50 * h + 50), e, b), g += 50, h += 1
					} else {
						var l = this,
							e = function() {
								var a = d.length;
								return function() {
									if (0 === --a) {
										var b = {
											key: "rb",
											index: 0,
											id: l.h.J.id
										};
										l.q.ia.gi || (f.Zd.te.end(b), f.Zd.te.end(f.extend(b, {
											index: 1
										})))
									}
								}
							}();
						this.Kr(d);
						this.fn += d.length;
						for (g = d.length - 1; 0 <= g; g -= 1) this.Ri(d[g], this.Lj, e)
					}
				}
			}
		},
		St: function(a, b) {
			var c = this.xa.get(a + "");
			c || b || (c = new f.Wa(a.Ab()));
			return c
		},
		bE: function(a, b) {
			return this.ee * Math.pow(2, a - b)
		},
		Pv: function(a) {
			a.Qo && this.Lj.NT(a.Qo);
			a.OD = !1;
			a.loaded = !1
		},
		vt: function(a, b) {
			var c = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0) || this.Ta,
				d = a.nd.x,
				e = a.nd.y,
				g = a.Nb.x,
				h = a.Nb.y;
			new f.G(0, 0);
			var k = this.bE(20, c);
			b && (g = Math.max(b[0], g) - b[0], h = Math.max(b[1], h) - b[1], d = Math.min(b[2], d) - b[0], e = Math.min(b[3], e) - b[1], new f.G(Math.floor(b[0] / k), Math.floor(b[1] / k)));
			d /= k;
			e /= k;
			d = {
				Td: 0 === d % 1 ? d - 1 : Math.floor(d),
				wd: 0 === e % 1 ? e - 1 : Math.floor(e),
				pe: Math.floor(g / k),
				xd: Math.floor(h / k)
			};
			d.MX = d.Td - d.pe + 1;
			d.Hfa = d.wd - d.xd + 1;
			d.z = c;
			d.S = this.S * Math.pow(2, this.zoom - c);
			d.NC = Math.ceil(d.MX / 2);
			return d
		},
		dr: function(a, b, c) {
			return b < a.pe || b > a.Td || c < a.xd || c > a.wd ? !1 : !0
		},
		Kr: function(a, b) {
			if (a.length) {
				var c = this.eb.vc(this.ee << 20 - a[0].ma.z),
					d = Math.floor(c.x),
					e = Math.floor(c.y);
				a.sort(function(a, c) {
					var k = a.ma,
						l = c.ma,
						m = k.x - d,
						k = k.y - e,
						n = l.x - d,
						l = l.y - e;
					return (b ? -1 : 1) * (n * n + l * l - (m * m + k * k))
				})
			}
		},
		clear: function() {
			this.Lj.clear()
		},
		Xl: function(a, b) {
			this.ng = !1;
			this.clear();
			this.Rh = b.Rh;
			this.Qh = b.Qh;
			this.ee = b.ee;
			var c = a.W;
			this.bf = b.bf || a.W.bf;
			this.qh = c.qh;
			this.size = a.size;
			this.rotation = c.rotation;
			this.eb = c.eb;
			this.Aa = a.W.Aa;
			this.zoom && (this.pu = c.zoom > this.zoom ? "in" : c.zoom < this.zoom ? "out" : !1);
			this.Pe = a.Pe;
			this.Hf = a.Hf;
			this.zoom = c.zoom;
			this.ce = c.ce;
			this.Ta = !1 === this.bi && !this.q.PV && this.q.ja ? this.ce + 1 : this.ce;
			this.Ce && this.Ta > this.Ce && (this.Ta = this.Ce);
			this.Sl && this.Ta < this.Sl && (this.Ta = this.Sl);
			this.S = c.S;
			this.Ze = c.Ze;
			c = a.W.Aa;
			this.Kf = this.vt(c, b.H);
			this.em = c.EE ? this.vt(c.EE, b.H) : null;
			var c = this.Kf,
				d = this.Aa.fZ,
				e = null,
				e = d < this.zoom && this.em ? this.em : c,
				g = [],
				h = [],
				k, l = [],
				m = [],
				n = [],
				p = new f.hk(0, 0, 0),
				q, r = this.zoom,
				m = this.pm || "",
				s = {},
				u = {},
				v, x, t, y, A, z;
			this.Lc = 1E6 * Math.random() << 0;
			for (q = m.length - 1; 0 <= q; q -= 1) if (k = m[q], !(k.ws < b.opacity)) if (p.z = k.ma.z, p.x = k.ma.x, p.y = k.ma.y, p.z === this.Ta) s[p + ""] |= 16;
			else if (p.z < this.Ta) {
				if (s[p + ""] |= 64, this.Rh) for (y = this.Ta - p.z, v = Math.max(c.pe, p.x << y), r = Math.min(c.Td, (p.x + 1 << y) - 1), x = Math.max(c.xd, p.y << y), t = Math.min(c.wd, (p.y + 1 << y) - 1), p.z = this.Ta, y = v; y <= r; y += 1) for (p.x = y, A = x; A <= t; A += 1) p.y = A, z = p + "", s[z] |= 32, u[z] = u[z] ? Math.max(k.ma.z, u[z]) : k.ma.z
			} else if (this.Qh) for (v = 1; p.z >= this.Ta;) {
				s[p + ""] |= v;
				v = p.x >> 1;
				x = p.y >> 1;
				r = v << 1;
				t = x << 1;
				k = 0;
				for (y = 2; 0 < y; y -= 1) for (p.x = r + y, A = 2; 0 < A; A -= 1) p.y = t + A, s[p + ""] & 5 && (k += 1);
				p.z -= 1;
				p.x = v;
				p.y = x;
				v = 4 === k ? 4 : 2
			}
			m = [];
			p.z = this.Ta;
			q = !0;
			this.xa.UT();
			for (y = e.pe; y <= e.Td; y += 1) for (p.x = y, A = e.xd; A <= e.wd; A += 1) p.y = A, this.xa.GW("" + p), k = this.St(p), v = !1, k.qa ? (k.Lc = this.Lc, this.dr(c, y, A) && (m.push(k), this.ij && (k.ec !== this.ec || 1 > k.ws) && (v = !0))) : (q = !1, this.dr(c, y, A) && (v = !0), k.status || this.ce !== d || this.em && !this.dr(this.em, y, A) || l.push(k)), v && n.push(k);
			q ? (this.Cx || (this.Cx = !0), this.q.wa || (k = {
				key: this.q.ai ? "rl" : "rb",
				index: 1,
				id: this.h.J.id
			}, this.q.ia.gi || (f.Zd.te.end(k), f.Zd.te.push({
				key: "ftc",
				Dn: m.length,
				id: this.h.J.id
			})))) : this.q.wa = !1;
			this.ng = q;
			m.length && this.Cx && (g.push(m), m.ng = q);
			h.push(l);
			d = !1;
			if (this.Qh) {
				n = n.slice(0);
				e = [];
				for (q = n.length - 1; 0 <= q; q -= 1) k = n[q], s[k.key] & 4 || e.push(k);
				k = b.ed[1];
				for (r = this.Ta + 1; n.length && r <= k; r += 1) {
					m = [];
					l = n;
					n = [];
					p.z = r;
					for (q = l.length - 1; 0 <= q; q -= 1) if (y = l[q], v = s[y.key], v & 7) for (v = y.ma.x << 1, x = y.ma.y << 1, y = 1; 0 <= y; y -= 1) for (p.x = v + y, A = 1; 0 <= A; A -= 1) p.y = x + A, z = p + "", t = this.xa.AD(z), s[z] & 5 && t && t.qa ? (t.tw = !0, t.Lc = this.Lc, m.push(t)) : n.push(new f.Wa(p.Ab()));
					m.length && (d = !0, g.push(m))
				}
				n = e
			}
			if (!d && this.Rh) for (y = !g.length || this.Gh ? b.ed[0] : Math.max(b.ed[0], this.Ta - 2), Math.max(y, this.Ta - this.V4), r = this.Ta - 1; n.length && r >= y; r -= 1) {
				m = [];
				A = {};
				l = n;
				n = [];
				for (q = l.length - 1; 0 <= q; q -= 1) k = l[q], p.z = r, p.x = k.ma.x >> 1, p.y = k.ma.y >> 1, k = this.St(p), A[k.key] || (A[k.key] = 1, v = !1, k.qa && (!this.W6 || s[k.key] & 64) ? (p.x = Math.min(c.Td, Math.max(c.pe, p.x << this.Ta - r)), p.y = Math.min(c.wd, Math.max(c.xd, p.y << this.Ta - r)), p.z = this.Ta, z = p + "", "number" === typeof u[z] && k.ma.z > u[z] ? v = !0 : k.tw = !0, k.Lc = this.Lc, m.push(k)) : v = !0, v && n.push(k));
				m.length && g.push(m)
			}
			this.kr = this.fn = 0;
			this.Pk(h);
			this.bj = g;
			this.q.set("tiles", g);
			this.LL(a, b)
		},
		QI: function(a) {
			var b = a.Bl,
				b = void 0 === b ? {} : b,
				c = a.as,
				d = void 0 === c ? 0 : c,
				c = a.op,
				c = void 0 === c ? 0 : c;
			a = a.H;
			var e = null;
			d ? (b = this.Ta + d, c = this.h.J.getCoordsBoundByZoom(b), e = this.vt(c, a, b)) : (a = this.Kf, d = this.yi, e = {
				pe: a.pe - (!d || b.left ? c : 0),
				Td: a.Td + (!d || b.right ? c : 0),
				xd: a.xd - (!d || b.Yu ? c : 0),
				wd: a.wd + (!d || b.rC ? c : 0)
			});
			return e
		},
		Lx: function(a) {
			var b = this,
				c = a.op,
				d = a.as,
				e = void 0 === d ? 0 : d,
				d = a.mode,
				g = void 0 === d ? 0 : d,
				h = [];
			a = this.QI({
				Bl: a.Bl,
				as: e,
				op: void 0 === c ? 0 : c,
				H: a.H
			});
			c = function() {
				var a = void 0;
				switch (g) {
				case 0:
					a = function(a, c) {
						if (0 <= a && 0 <= c && (a < b.Kf.pe || c < b.Kf.xd || a > b.Kf.Td || c > b.Kf.wd)) {
							var d = new f.hk(b.Ta + e, a, c);
							b.xa.Bc(d.toString()) || h.push(new f.Wa(d, !0))
						}
					};
					break;
				default:
					a = function(a, c) {
						var d = new f.hk(b.Ta + e, a, c);
						b.xa.Bc(d.toString()) || h.push(new f.Wa(d, !0))
					}
				}
				return a
			}();
			for (d = a.pe; d <= a.Td; d++) for (var k = a.xd; k <= a.wd; k++) c(d, k);
			return h
		},
		BF: function() {
			var a = this.h.J;
			return a.HX && a.get("preloadMode") && 200 <= this.xa.ml && this.q.ia.gr()
		},
		LL: function(a, b) {
			var c = a.Bl,
				d = a.Hc,
				e = b.H,
				g = b.ed;
			if (this.BF()) {
				if (d || !this.yi) c = this.Lx({
					Bl: c,
					op: this.yi ? 2 : 1
				}), c.length && this.Pk([c], !0);
				this.Ta >= g[0] + 2 && ("out" === this.pu || !this.yi) && (e = this.Lx({
					as: this.yi ? -2 : -1,
					mode: 1,
					H: e
				}), e.length && this.Pk([e], !0));
				this.yi = !0
			}
		}
	});
	f.Q.Gd.ri = f.Q.ri.extend({
		B: function(a, b) {
			arguments.callee.oa.apply(this, arguments);
			this.mm = 120;
			this.bi = !1;
			this.Df();
			this.Ce = a.Ce;
			this.Sl = a.Sl
		},
		$h: function() {
			return this.xb
		},
		Df: function() {
			this.xb = document.createElement("div");
			this.xb.className = this.q.ia.get("className") || "amap-layer";
			this.Mq = document.createDocumentFragment()
		},
		Br: function(a) {
			var b = Math.pow(2, a.W.zoom - this.qe),
				c = a.W.eb.Va(this.Ro).vc(this.ii);
			this.transform = {
				translate: this.transform.translate.add(c),
				scale: b,
				rotate: 0
			};
			this.eb = a.W.eb
		},
		rI: function(a, b) {
			if (!this.ra || 3E4 < Math.abs(this.eb.x - this.ra.x) / this.S || 3E4 < Math.abs(this.eb.y - this.ra.y) / this.S) this.ra = this.eb;
			this.qe = this.ce;
			this.ii = this.Ze;
			this.hi = !1;
			this.currentTime = +new Date;
			this.dN = b.dN;
			var c = this.Kf;
			this.ij = this.mm && b.TB;
			var d = this.bj,
				e = 256 * c.MX,
				c = 256 * c.Hfa;
			this.Pe = this.zoom << 0 !== this.zoom;
			var g = this.eb.Va(this.ra);
			g.x < -f.a.fb / 2 && (g.x += f.a.fb);
			g.x > f.a.fb / 2 && (g.x -= f.a.fb);
			this.GI = g.vc(this.Ze);
			return [d, e, c, b]
		},
		Cu: function(a, b) {
			var c = this.rI(a, b);
			this.ip.apply(this, c);
			this.Ne(a);
			this.ng && !this.q.wa && (c = this.q, c.ia.gi || f.Zd.te.end({
				key: "rb",
				index: 2,
				id: this.h.J.id
			}), c.wa = !0, c.$c ? c.ha("renderComplete") : (c.$c = !0, c.ha("complete")))
		},
		fc: function(a, b) {
			this.ek = a.ek;
			this.Hf = a.Hf;
			this.Xl(a, b);
			this.Ro && f.l.yj && (a.Pe || a.Hf) ? this.Br(a, b) : this.Cu(a, b);
			this.Ro = this.eb;
			this.hi && this.set("display", 0)
		},
		Ar: function() {
			for (var a = this.xb.childNodes, b = a.length - 1; 0 <= b; b -= 1) a[b] && a[b].ec !== this.ec && this.xb.removeChild(a[b])
		},
		FD: function(a, b) {
			return a.xd === b.xd && a.pe === b.pe && a.wd === b.wd && a.Td === b.Td
		},
		ip: function(a) {
			var b = this.ec;
			this.ec += 1;
			var c = !1,
				d, e, g;
			e = !1;
			var h = [];
			this.ra.x - this.eb.x < -f.a.fb / 2 ? this.ra = new f.G(this.ra.x + f.a.fb, this.ra.y) : this.ra.x - this.eb.x > f.a.fb / 2 && (this.ra = new f.G(this.ra.x - f.a.fb, this.ra.y));
			for (d = a.length - 1; 0 <= d; d -= 1) if (g = a[d], g.length) {
				e = g[0].ma.z;
				for (var k, l, m = this.bE(this.ce, e), n = g.length - 1; 0 <= n; n -= 1) {
					l = g[n];
					this.gY(l);
					if (!l.Fc && this.ra === l.ra && l.qe === this.qe) {
						var p = l.sc;
						if (p && p.parentNode === this.xb && 1 === l.ws) {
							h.push(l);
							p.ec = this.ec;
							l.ec = this.ec;
							continue
						}
					}
					l.ra = this.ra;
					l.qe = this.qe;
					k = l.ma;
					var c = !0,
						q = (new f.G((k.x << 20 - e) * this.ee, (k.y << 20 - e) * this.ee)).Va(this.ra),
						q = q.vc(this.Ze);
					q.x = Math.floor(q.x);
					q.y = Math.floor(q.y);
					var r = 1;
					if (!l.jP || this.sO && l.ec !== b) l.jP = this.currentTime;
					this.ij && !l.tw ? (p = Math.max(0, Math.abs(k.z - this.zoom) - 1), r = Math.min(1, (this.currentTime - l.jP) / (1 / Math.pow(1.32, p) * this.mm)), 1 !== r && (this.hi = !0)) : l.tw = !1;
					l.ec = this.ec;
					l.ws = r;
					l.qa ? (p = l.sc, !p && l.Fc && l.Fc.sc && (p = l.Fc.sc), 0 !== r && p && (this.aV(p, q.x, q.y, m, m, r, k.z), p.parentNode !== this.xb && (f.l.Dh && "overlayer" === this.q.get("type") && (p.style.display = "none"), this.Mq.appendChild(p)), p.ec = this.ec, l.ce = this.ce, h.push(l))) : l.Lc = null
				}
				e = !0
			}
			1 < a.length && (this.hi = !0);
			this.pm = h;
			this.Ar();
			this.xb.appendChild(this.Mq);
			return c || !e
		},
		gY: function() {},
		Ne: function() {
			this.transform = {
				translate: this.GI,
				scale: Math.pow(2, this.zoom - this.ce),
				rotate: 0
			}
		}
	});
	window.CanvasRenderingContext2D && (window.CanvasRenderingContext2D.prototype.XI = function(a, b, c, d, e) {
		"undefined" === typeof e && (e = [10, 10]);
		this.moveTo(a, b);
		var g = c - a,
			h = d - b,
			k = Math.floor(Math.sqrt(g * g + h * h));
		d = g / k;
		c = h / k;
		e.KK = 0;
		for (var l = [], g = this.mC, m = 0, n = 0, p = !1, q = h = 0; q < e.length; q += 1) e.KK += e[q], l[q] = {
			mJ: e[q] * d,
			nJ: e[q] * c,
			cD: h += e[q]
		}, g -= e[q], 0 > g && !p && (m = q, n = -g, p = !0);
		for (p = 0; n + p <= k;) n < e[m] ? (g = n * d, h = n * c) : (g = l[m].mJ, h = l[m].nJ), a += g, b += h, this.Ty ? this.moveTo(a, b) : this.lineTo(a, b), p += n, this.Ty = !this.Ty, n = e[(m + 1) % e.length], m = (m + 1) % e.length;
		k -= p;
		a += k * d;
		b += k * c;
		this.Ty ? this.moveTo(a, b) : this.lineTo(a, b);
		this.mC = (this.mC + p + k) % e.KK
	}, window.CanvasRenderingContext2D.prototype.oaa = function(a, b, c, d) {
		"undefined" === typeof d && (d = [10, 10]);
		var e = 2 * Math.PI * c,
			g = 0 >= d ? e : Math.round(e / (d[0] + d[1])),
			h = (d[0] + d[1]) / e * 2 * Math.PI;
		d = d[0] / e * 2 * Math.PI;
		for (e = 0; e < g; e += 1) this.beginPath(), this.arc(a, b, c, e * h, e * h + d), this.stroke()
	});
	f.Q.Sd.gj = f.Q.ri.extend({
		B: function(a, b) {
			arguments.callee.oa.apply(this, arguments);
			this.Df()
		},
		bK: function() {
			return this.mb.zM
		},
		$h: function() {
			return this.xb
		},
		Df: function() {
			this.xb = document.createElement("div");
			this.xb.className = "amap-markers";
			this.mb = new f.Q.Sd.Gc(this.xb);
			this.mb.q = this.q;
			this.T.K.appendChild(this.xb)
		},
		xp: function(a, b) {
			this.Mq = b.Mq;
			this.du = b;
			this.bf = a.W.bf;
			this.S = a.W.S;
			this.zoom = a.W.zoom;
			this.size = a.size;
			this.Aa = a.W.Aa;
			this.jn = a.S;
			this.hb = a.W.eb;
			this.qh = a.W.qh;
			var c = !1;
			if (!this.ra || 3E4 < Math.abs(this.hb.x - this.ra.x) / this.S || 3E4 < Math.abs(this.hb.y - this.ra.y) / this.S) c = !0;
			if (c || this.zoom << 0 !== this.zoom || this.qe !== this.zoom) this.ra = this.hb, this.qe = this.zoom
		},
		Yq: function(a) {
			var b = a.W.Aa.Ub.y * this.S;
			a = a.W.Aa.Ub.x * this.S;
			return [this.hb.x - a, this.hb.y - b, this.hb.x + a, this.hb.y + b]
		},
		Ar: function() {
			if (this.xg && this.xg) for (var a in this.xg) if (this.xg.hasOwnProperty(a)) {
				var b = this.xg[a];
				b.Lc !== this.Lc && b.ea && this.T.lj.appendChild(b.ea)
			}
		},
		fc: function(a, b) {
			this.Lc = 1E6 * Math.random() << 0;
			this.xp(a, b);
			this.W = a.W;
			this.size = a.size;
			var c = this.q;
			this.ee = 256;
			var d, e;
			e = this.Yq(a);
			var g = 0;
			c.Ik && (g = 50 * this.S);
			e[0] -= this.q.Fe * this.S + g;
			e[1] -= this.q.af * this.S + g;
			e[2] += this.q.Fe * this.S + g;
			e[3] += this.q.af * this.S + g;
			c = c.Li(e);
			for (d in c) c.hasOwnProperty(d) && (c[d].Lc = this.Lc, c[d].xW = this);
			this.Ar(c);
			this.xp.call(this.mb, a, b);
			this.mb.Jy(c);
			this.xg = c;
			this.Ne(a)
		},
		Ne: function() {
			var a = Math.pow(2, this.zoom - this.ce);
			this.transform = {
				translate: this.ra.Va(this.hb).vc(this.S),
				scale: a,
				rotate: 0
			}
		}
	});
	f.Q.Sd.Gc = f.ba.extend({
		B: function(a) {
			this.Vi = a
		},
		Jy: function(a, b) {
			var c = document.createDocumentFragment(),
				d = b && b.wK ? null : {},
				e = !0,
				g;
			for (g in a) if (a.hasOwnProperty(g)) {
				var h = a[g],
					k, l = h.get("params");
				if (h.ea) k = h.ea;
				else {
					k = f.j.create("div");
					k.className = "amap-marker";
					var m = l.pg,
						n = l.KY;
					m && k.appendChild(m);
					n && k.appendChild(n);
					h.ea = k;
					h.pg = m;
					if (n = l.title) m.title = n;
					this.q.Ik = !0; - 1 === f.a.indexOf(this.q.Jf, h) && this.q.Jf.push(h);
					h.Ug = !0
				}
				var m = l.offset,
					n = m.x,
					p = m.y,
					q = l.textAlign,
					r = l.verticalAlign,
					m = !1;
				if ("left" !== q || "top" !== r) if (k.parentNode !== this.Vi && d && (m = !0, d[g] = h, e = !1), !m) {
					var s = f.j.Hx(h.pg),
						u = s[0],
						s = s[1];
					switch (q) {
					case "center":
						n -= u / 2;
						break;
					case "right":
						n -= u
					}
					switch (r) {
					case "middle":
						p -= s / 2;
						break;
					case "bottom":
						p -= s
					}
				}
				if (h.Ug) u = [], r = this.vo(h.Y.Na), h.ra = this.ra, s = l.nN, q = Math.round(r[1] + p + s.y), r = Math.round(r[0] + n + s.x), u.push("top:" + q + "px"), u.push("left:" + r + "px"), u.push("z-index:" + (l.mW ? this.q.wn + 10 : l.zIndex)), f.l.ne || u.push(f.j.rV(k, l.LB, {
					x: -n,
					y: -p
				})), u.push("display:" + (l.visible ? "block" : "none") + ";"), k.style.cssText = u.join(";"), (n = l.label) && n.content && (l = l.qW, r = q = 0, n.offset && (q = n.offset.y + "px", r = n.offset.x + "px"), l.style.top = q, l.style.left = r, k.appendChild(l));
				else if (h.S_ || this.zoom << 0 !== this.zoom || h.zoom !== this.zoom || k.parentNode !== this.Vi || h.ra !== this.ra) r = this.vo(h.Y.Na), h.ra = this.ra, s = l.nN, q = Math.round(r[1] + p + s.y), r = Math.round(r[0] + n + s.x), k.style.top = q + "px", k.style.left = r + "px";
				h.zoom = this.zoom;
				k.parentNode !== this.Vi && (f.l.Dh && f.a.iepngFix(k), c.appendChild(k), h.Ug = m);
				k.yw = this.Vi
			}
			this.Vi.appendChild(c);
			e || this.Jy(d, {
				wK: !0
			})
		},
		vo: function(a) {
			return [(a[0] - this.ra.x) / this.S, (a[1] - this.ra.y) / this.S]
		}
	});
	var zc = f.A,
		Ic = f.l,
		Xb = f.ba.Eq,
		Jc = f.pfa,
		da = document,
		Kc = !0,
		Lc = [];
	Ic.Me && Lc.push("touch");
	Ic.Z || Lc.push("mouse");
	Ic.Uy && (Lc.push("vectorlayer", "overlay"), Ic.bm ? Lc.push("wgl") : Lc.push("cmng", "cgl"));
	if (Jc) {
		for (var Mc = [], Nc = Jc.split(","), Oc = 0; Oc < Nc.length; Oc += 1) {
			var Pc = Nc[Oc];
			Xb[Pc] && Mc.push.apply(Mc, Xb[Pc]);
			Mc.push(Pc)
		}
		Lc = Lc.concat(Mc)
	}
	Lc.push("sync");
	if (Ic.Si) {
		var Qc = !0,
			Rc = [],
			Sc = [];
		try {
			for (var Oc = 0, Tc = Lc.length; Oc < Tc; Oc++) {
				var Uc = JSON.parse(localStorage.getItem("_AMap_" + Lc[Oc]));
				if (Uc && Uc.version === zc.Jh) Rc.push(Uc.script), Uc.css && Sc.push(Uc.css);
				else {
					Rc = void 0;
					Qc = !1;
					break
				}
			}
		} catch (Vc) {
			Rc = Sc = void 0, Qc = !1
		}
		if (Qc) try {
			Sc.length && Wc();
			var Xc = Rc.join(";");
			eval(Xc)
		} catch (Yc) {
			Kc = !1
		} else Kc = !1
	} else Kc = !1;
	if (Kc) for (Oc = 0; Oc < Lc.length; Oc += 1) f.gb.ux(Lc[Oc]).status = 1;
	else zc.iy = !1, Zc();

	function $c() {
		for (var a = da.getElementsByTagName("script"), b, c = 0; c < a.length; c += 1) if (0 === a[c].src.indexOf(zc.qb + "/maps?")) {
			b = a[c];
			break
		}
		return zc.yc || b && b.async
	}
	function Zc() {
		var a = zc.qb + "/maps/modules?v=" + zc.lt + "&key=" + zc.key + "&vrs=" + zc.Jh + "&m=" + Lc.join(",");
//TODO 指定本地的插件地址		crossorigin="anonymous"
		a = offlineMap.baseUrl + 'js/plugins.js';
		$c() ? ad(a) : (da.write('<script  id="amap_plus_js" src="' + a + '" type="text/javascript">\x3c/script>'), setTimeout(function() {
			da.getElementById("amap_plus_js") || ad(a)
		}, 1))
	}

	function ad(a) {
		var b = da.createElement("script");
		b.charset = "utf-8";
		b.src = a;
		b.id = "amap_plus_js";
		(a = da.head || da.getElementsByTagName("head")[0] || da.body) && a.appendChild(b)
	}

	function Wc() {
		var a = Sc.join("\n"),
			b = da.createElement("style");
		b.type = "text/css"; - 1 === zc.qb.indexOf("webapi.amap.com") && (a = a.replace(/webapi.amap.com/gi, zc.qb.split("://")[1]));
		"https" === zc.Qb && (a = a.replace(/http:/gi, "https:"));
		if (b.styleSheet) {
			var c = function() {
					try {
						b.styleSheet.cssText = a
					} catch (c) {}
				};
			b.styleSheet.disabled ? setTimeout(c, 10) : c()
		} else b.appendChild(da.createTextNode(a));
		c = da.head || da.getElementsByTagName("head")[0];
		2 > c.childNodes.length ? c.appendChild(b) : c.insertBefore(b, c.childNodes[1])
	};
})(["3df2f506e62d385e8e9976c4d7b20673", [112.958507, 22.51436, 114.059957, 23.932988, 113.280637, 23.125178], 
	offlineMap.baseUrl /*"http://webapi.amap.com"*/, 
	1, "1.4.6", null, "440100", 
	"Map3D,AMap.ControlBar,AMap.Scale,AMap.MouseTool,AMap.Weather", 
	true, true, true, true, "1523971747-1"])