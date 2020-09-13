
var initData = {
	type: 'gmap',
	northwest: {
		lng: null,
		lat: null
	}, 
	southeast: {
		lng: null,
		lat: null
	}
}
var map, polygon, downText;

$(function(){
	map = new google.maps.Map(document.getElementById('gmap'), {
		center: {
			lat: 39.908935,
			lng: 116.397162
		},
		zoom: 3,
		minZoom: 3,
		maxZoom: 20,
		clickableIcons: false,
		gestureHandling: 'greedy',
		disableDoubleClickZoom: true,
		
		zoomControl: false,
		mapTypeControl: false,
		streetViewControl: false,
		rotateControl: false,
		fullscreenControl: false,
		scaleControl: true
	});
	window.parent.setAllowZooms(1, 21);
})

function clickTree(treeNode) {
	var name = treeNode.oldname? treeNode.oldname : treeNode.name;
	$.post('https://restapi.amap.com/v3/config/district',{
		keywords: name,
		subdistrict: 0,
		key: '384ad4927f4025558ab8c5384cc4d9e7',
		extensions: 'all'
	}, function(data) {
		if(data.status == '1') {
			if(polygon != null) {
				polygon.setMap(null);
			}
			if(downText != null) {
				downText.setMap(null);
			}
			if(data.districts == undefined || data.districts.length == 0) {
				window.parent.layui.layer.alert('未获取到“' + name + '”的边界数据', {
					icon: 2
				});
				return;
			}
			
			var polylineStr = data.districts[0].polyline;
			var polylines = polylineStr.split('|');
			var bounds = new google.maps.LatLngBounds();
			var path = [];
			for(var i in polylines) {
				var points = polylines[i].split(';');
				var temp = [];
				for(var j in points) {
					var point = points[j].split(',');
					var lnglat = new google.maps.LatLng(point[1], point[0]);
					temp.push(lnglat);
					bounds.extend(lnglat);
				}
				path.push(temp);
			}
			polygon = new google.maps.Polygon({
				paths: path,
				fillColor : '#0000ff',
				fillOpacity : 0.1,
				strokeColor : '#0000ff',
				strokeOpacity : 0.6,
				map: map
			});
			map.fitBounds(bounds);
			
			initData.northwest.lng = bounds.getSouthWest().lng();
	 		initData.northwest.lat = bounds.getNorthEast().lat();
	 		initData.southeast.lng = bounds.getNorthEast().lng();
	 		initData.southeast.lat = bounds.getSouthWest().lat();
			window.parent.calculateCount();
			
			downText = new GMapText(map, {
				latlng: bounds.getCenter(),
				labelText: '点击下载',
				style: {
					border: '0px',
					borderRadius: '3px',
					fontSize: '16px',
					padding: '2px 3px',
					cursor: 'pointer',
					backgroundColor: 'white'	
				},
				clickFun: function() {
					window.parent.download();
				}
			});
		}
	});
}

