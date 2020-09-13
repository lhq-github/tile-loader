
var initData = {
	type: 'bmap',
	northwest: {
		lng: null,
		lat: null
	}, 
	southeast: {
		lng: null,
		lat: null
	}
}
var map, boundary, label;

$(function(){
	map = new BMap.Map('bmap', {
		minZoom: 3,
		maxZoom: 19,
		enableMapClick: false
	});
	
	map.centerAndZoom(new BMap.Point(116.40391,39.915317), 3);
	map.enableScrollWheelZoom();
	map.disableDoubleClickZoom();
	
	boundary = new BMap.Boundary();
	
	label = new BMap.Label('点击下载', {});
	label.setStyle({
		border: '0px',
		borderRadius: '3px',
		fontSize: '16px',
		padding: '2px 3px',
		cursor: 'pointer'
	});
	label.addEventListener('click', function(e) {
		window.parent.download();
	});
	
	window.parent.setAllowZooms(1, 19);
})

function clickTree(treeNode) {
	var name = treeNode.oldname? treeNode.oldname : treeNode.name;
	boundary.get(name, function(result){
		if(result.boundaries == undefined || result.boundaries.length == 0) {
			window.parent.layui.layer.alert('未获取到“' + name + '”的边界数据', {
				icon: 2
			});
			return;
		}
		map.clearOverlays();
		if(result) {
			var bounds = new BMap.Bounds(new BMap.Point(0, 0), new BMap.Point(0, 0));
			var allPoints = [];
			for(var i in result.boundaries) {
				var points = [];
				var arr = result.boundaries[i].split(';');
				for(var j in arr) {
					var point = new BMap.Point(arr[j].split(',')[0], arr[j].split(',')[1]);
					points.push(point);
					allPoints.push(point);
					bounds.extend(point);
				}
				
				var polygon = new BMap.Polygon(points, {
					fillColor: '#0000ff',
		 			fillOpacity: 0.1,
		 			strokeColor: '#0000ff',
		 			strokeOpacity: 0.6
				});
				map.addOverlay(polygon);
			}
			
			map.setViewport(allPoints);
			
			label.setPosition(bounds.getCenter());
			map.addOverlay(label);
			
	 		initData.northwest.lng = bounds.getSouthWest().lng;
	 		initData.northwest.lat = bounds.getNorthEast().lat;
	 		initData.southeast.lng = bounds.getNorthEast().lng;
	 		initData.southeast.lat = bounds.getSouthWest().lat;
	 		
	 		window.parent.calculateCount();
		}
		
	})
}

