
var initData = {
	type : 'amap',
	northwest : {
		lng : null,
		lat : null
	},
	southeast : {
		lng : null,
		lat : null
	}
}
var map, districtSearch, downText;

$(function() {
	map = new AMap.Map('amap', {
		viewMode : '2D',
		center : [ 116.397162, 39.908935 ],
		zoom : 3,
		zooms : [ 3, 20 ],
		expandZoomRange : true,
		doubleClickZoom : false,
		resizeEnable : true,
		showIndoorMap : false// 隐藏地图自带的室内地图图层
	});
	districtSearch = new AMap.DistrictSearch({});

	downText = new AMap.Text({
		text : '点击下载'
	});
	downText.on('click', function(e) {
		window.parent.download();
	});
	
	window.parent.setAllowZooms(1, 20);
})

function clickTree(treeNode) {
	var name = treeNode.oldname ? treeNode.oldname : treeNode.name;
	districtSearch.setLevel(treeNode.level);
	districtSearch.setExtensions('all');
	districtSearch.setSubdistrict(0);
	districtSearch.search(name,
		function(status, result) {
			if(result.districtList == undefined) {
				window.parent.layui.layer.alert('未获取到“' + name + '”的边界数据', {
					icon: 2
				});
				return;
			}
			map.clearMap();
			var boundaries = result.districtList[0].boundaries;
			var maxArea = 0;
			var polygon = null;
			for(var i in boundaries) {
				var tmp = new AMap.Polygon({
					path : boundaries[i],
					fillColor : '#0000ff',
					fillOpacity : 0.1,
					strokeColor : '#0000ff',
					strokeOpacity : 0.6,
					map : map
				});
				if(tmp.getArea() > maxArea) {
					maxArea = tmp.getArea();
					polygon = tmp;
				}
			}
			
			downText.setPosition(polygon.getBounds().getCenter());
			downText.setMap(map);
			map.setFitView(polygon);

			initData.northwest.lng = polygon.getBounds().getNorthWest().getLng();
			initData.northwest.lat = polygon.getBounds().getNorthWest().getLat();
			initData.southeast.lng = polygon.getBounds().getSouthEast().getLng();
			initData.southeast.lat = polygon.getBounds().getSouthEast().getLat();
			window.parent.calculateCount();
		}
	)
}