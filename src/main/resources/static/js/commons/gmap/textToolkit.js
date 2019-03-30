

function GMapText(map, options) {
	this.latlng = options.latlng; //设置图标的位置  
	this.labelText = options.labelText || '标记';
	this.labelStyle = options.style || {};
	this.clickFun = options.clickFun; //注册点击事件  
	this.map = map;

	this.div = null;
	// Explicitly call setMap() on this overlay     
	this.setMap(map);
}
GMapText.prototype = new google.maps.OverlayView();

//初始化图标  
GMapText.prototype.onAdd = function() {
	// Note: an overlay's receipt of onAdd() indicates that    
	// the map's panes are now available for attaching     
	// the overlay to the map via the DOM.      
	// Create the DIV and set some basic attributes.    
	var div = document.createElement('div'); //创建存放图片和文字的div  
	div.style.border = "none";
	div.style.borderWidth = "0px";
	div.style.position = "absolute";
	div.style.cursor = "hand";
	div.style.whiteSpace = "nowrap";
	//div.style.width = "500px";
	//div.style.height = "500px";
	div.onclick = this.clickFun || function() {}; //注册click事件，没有定义就为空函数  
	// Create an IMG element and attach it to the DIV.    
//		var img = document.createElement("img"); //创建图片元素  
//		img.src = this.image_;
//		img.style.width = "100%";
//		img.style.height = "100%";
	//初始化文字标签  
	var label = document.createElement('div'); //创建文字标签  
//		label.className = this.labelClass;
	label.innerHTML = '<span>' + this.labelText + '</span>';
	label.style.position = 'fixed';
	label.style.position = 'absolute';
//		label.style.width = '100%';
	for(var i in this.labelStyle) {
		label.style[i] = this.labelStyle[i];
	}
	
	
//		label.style.textAlign = 'left';
//		label.style.padding = "2px";
//		label.style.fontSize = "10px";
	//  label.style.fontFamily = "Courier New";  

//		div.appendChild(img);
	div.appendChild(label);

	this.div = div;
	// We add an overlay to a map via one of the map's panes.    
	// We'll add this overlay to the overlayImage pane.    
	var panes = this.getPanes();
	panes.overlayMouseTarget.appendChild(div);
}

//绘制图标，主要用于控制图标的位置  
GMapText.prototype.draw = function() {
	// Size and position the overlay. We use a southwest and northeast     
	// position of the overlay to peg it to the correct position and size.    
	// We need to retrieve the projection from this overlay to do this.    
	var overlayProjection = this.getProjection();
	// Retrieve the southwest and northeast coordinates of this overlay    
	// in latlngs and convert them to pixels coordinates.    
	// We'll use these coordinates to resize the DIV.    
	var position = overlayProjection.fromLatLngToDivPixel(this.latlng); //将地理坐标转换成屏幕坐标  
	//  var ne = overlayProjection.fromLatLngToDivPixel(this.bounds_.getNorthEast());      
	// Resize the image's DIV to fit the indicated dimensions.     
	var div = this.div;
	div.style.left = position.x - 5 + 'px';
	div.style.top = position.y - 5 + 'px';
	//控制图标的大小  
//		div.style.width = '10px';
//		div.style.height = '10px';
}

GMapText.prototype.onRemove = function() {
	if(this.div) {
		this.div.parentNode.removeChild(this.div);
		this.div = null;
	}
}

//Note that the visibility property must be a string enclosed in quotes   
GMapText.prototype.hide = function() {
	if(this.div) {
		this.div.style.visibility = "hidden";
	}
}
GMapText.prototype.show = function() {
	if(this.div) {
		this.div.style.visibility = "visible";
	}
}
//显示或隐藏图标  
GMapText.prototype.toggle = function() {
	if(this.div) {
		if(this.div.style.visibility == "hidden") {
			this.show();
		} else {
			this.hide();
		}
	}
}

	

