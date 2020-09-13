
// 是否使用mongo存储瓦片
var useMongoStore = false;

//layui组件
var lay = {};
layui.use([ 'form', 'element', 'layer' ], function() {
	lay.form = layui.form;
	lay.element = layui.element;
	lay.layer = layui.layer;
})

//瓦片下载参数
var downloadParam = {
	type: null,
	path: null,
	zooms: null,
	northwest: {
		lng: null,
		lat: null
	}, 
	southeast: {
		lng: null,
		lat: null
	}
}

$(function() {
	// 默认加装高德地图
	$('iframe').attr('src', 'amap/index');
	// 地图切换
	$('.changeMap').on('click', function() {
		$('iframe').attr('src', $(this).attr('data-mapurl'));
	})
	// 获取存储方式
	$.ajax({
		type: 'post',
		url: '/tile-loader/useMongoStore',
		success: function(data){
			ResultHandler.successNoTip(data, function() {
				useMongoStore = data.result;
				if(useMongoStore) {
					$('.save-path-config').hide();
				}
			});
		}
	});
	// 初始化树列表
	initZtree();
	//设置下载路径
	$('.setPath').on('click', function() {
		lay.layer.open({
			type: 2,
			title: '设置保存路径',
			area: ['500px', '350px'],
			content: ['folder', 'yes'],
			btn: ['确认', '取消'],
			yes: function(index, layero) {
				var $body = layer.getChildFrame('body', index);
				var path = $body.find('.currentPath').attr('data-path');
				$('input[name="path"]').val(path);
				layer.closeAll('iframe');
			},
			btn2: function(index, layero) {
			},
			btnAlign: 'r',
			shade: [0.8, '#393D49']
		})
	});
	
	//开始任务
	$('.downloadTask').on('click', '.start', function() {
		if($(this).is('.layui-btn-disabled')) {
			return;
		}
		var id = $(this).attr('data-id');
		var $this = $(this);
		$.post('/tile-loader/map/start/' + id, function(data) {
			ResultHandler.successNoTip(data, function() {
				$this.next('.pause').show();
				$this.hide();
			});
		})
	})
	
	//暂停任务
	$('.downloadTask').on('click', '.pause', function() {
		if($(this).is('.layui-btn-disabled')) {
			return;
		}
		var id = $(this).attr('data-id');
		var $this = $(this);
		$.post('/tile-loader/map/pause/' + id, function(data) {
			ResultHandler.successNoTip(data, function() {
				$this.prev('.start').show();
				$this.hide();
			})
		})
	})
	
	//停止任务
	$('.downloadTask').on('click', '.stop', function() {
		var id = $(this).attr('data-id');
		var $this = $(this);
		$.post('/tile-loader/map/stop/' + id, function(data) {
			ResultHandler.successNoTip(data, function() {
				$this.prev('.start').hide();
				$this.prev('.pause').hide();
				$this.next('.remove').show();
				$this.hide();
			})
		})
		
	})
	
	//移除任务
	$('.downloadTask').on('click', '.remove', function() {
		$(this).parent().parent().remove();
	})
	
	//选择下载级别，计算下载瓦片数量
	lay.form.on('checkbox(zoomCheck)', function(data) {
		calculateCount();
	})
})





// 初始化树列表
function initZtree() {
	var setting = {
		view : {
			showIcon : true
		},
		data : {
			simpleData : {
				enable : true,
				idKey : 'id',
				pIdKey : 'pid'
			}
		},
		callback : {
			onClick : function(event, treeId, treeNode) {
				$('iframe')[0].contentWindow.clickTree(treeNode);
			}
		},
	};

	$.getJSON('/tile-loader/js/datas/placenames.json', function(data) {
		var zTreeObj = $.fn.zTree.init($('#placenameTree'), setting, data.value);
		zTreeObj.expandNode(zTreeObj.getNodeByParam('id', '0', null), true, false, false);
		fuzzySearch('placenameTree', '#searchTree', true, false);
	})
}


//设置地图允许下载的级别
function setAllowZooms(minZoom, maxZoom) {
	var $checkbox = $('input[name="zoom"]');
	$.each($checkbox, function(i, o) {
		var zoom = $(o).val();
		if(parseInt(zoom) < minZoom || parseInt(zoom) > maxZoom) {
			$(o).removeAttr('checked').attr('disabled', 'disabled');
		} else {
			$(o).removeAttr('disabled');
		}
	});
	lay.form.render();
}

//计算瓦片下载数量
function calculateCount() {
	setDownloadparam();
	if(downloadParam.zooms.length == 0  || downloadParam.northwest.lng == null) {
		$('#sumNum').text(0);
		return;
	}
	var data = {
		type: downloadParam.type,
		zooms: downloadParam.zooms,
		northwest: downloadParam.northwest,
		southeast: downloadParam.southeast
	};
	
	if(downloadParam.northwest.lng && downloadParam.zooms.length>0) {
		$.ajax({
			type: 'post',
			url: '/tile-loader/map/calculateCount',
			contentType: 'application/json',
			data: JSON.stringify(data),
			success: function(data) {
				ResultHandler.successNoTip(data, function(data) {
					$('#sumNum').text(data.result);
				})
			}
		})
	}
}

//设置下载参数
function setDownloadparam() {
	var win = $('iframe')[0].contentWindow;
	
	downloadParam.type = win.initData.type;
	downloadParam.northwest = win.initData.northwest;
	downloadParam.southeast = win.initData.southeast;
	
	var zooms = [];
	var $checkbox = $('input[name="zoom"]:checked');
	$.each($checkbox, function(i, o) {
		zooms.push($(o).val())
	})
	downloadParam.zooms = zooms;
	downloadParam.path = $('input[name="path"]').val();
}

//下载
function download() {
	setDownloadparam();
	if(downloadParam.zooms.length == 0) {
		lay.layer.alert('请选择下载级别');  
		return;
	}
	if(!useMongoStore && downloadParam.path.trim().length == 0) {
		lay.layer.alert('请选择下载路径');  
		return;
	}
	var data = {
		type: downloadParam.type,
		path: downloadParam.path,
		zooms: downloadParam.zooms,
		northwest: downloadParam.northwest,
		southeast: downloadParam.southeast
	}
	$.ajax({
		type: 'post',
		url: '/tile-loader/map/startDownload',
		contentType: 'application/json',
		data: JSON.stringify(data),
		success: function(data) {
			ResultHandler.successNoTip(data, function(data) {
				addTaskList(data.result);
			})
		}
	})
}						
// 添加下载任务列表
function addTaskList(id) {
	$(".downloadTask").append(
		'<div id="_'+id+'" style="margin: 4px;">' +
			'<div style="float: left;">任务:</div>' +
			'<div class="layui-progress layui-progress-big" lay-showPercent="yes" lay-filter="_'+id+'" style="width: 50%; float: left; margin-top: 2px;margin-left: 5px;">' +
				'<div class="layui-progress-bar" lay-percent="0"></div>' +
			'</div>' +
			'<div class="layui-btn-group" style="float: none; margin-left: 10px;">' +
				'<button class="layui-btn layui-btn-xs start" data-id="'+id+'" style="cursor: pointer; display: none;">开始</button>' +
				'<button class="layui-btn layui-btn-xs pause" data-id="'+id+'" style="cursor: pointer;">暂停</button>' +
				'<button class="layui-btn layui-btn-xs stop" data-id="'+id+'" style="cursor: pointer;">停止</button>' +
				'<button class="layui-btn layui-btn-xs remove" data-id="'+id+'" style="cursor: pointer; display: none;">移除</button>' +
			'</div>' +
		'</div>'
	);
	lay.element.render();
}

//定时器，同步瓦片下载进度，每秒同步一次
setInterval(function() {
	$.ajax({
		type: 'post',
		url: '/tile-loader/map/getProgress',
		success: function(data) {
			ResultHandler.successNoTip(data, function(data) {
				for(var i in data.result) {
					var state = data.result[i]['STATE'];
					// 页面刷新后，重现渲染下载列表
					if($('#_'+i).length == 0 && state != 2) {
						addTaskList(i);
					}
					var progress = data.result[i]['CURRENT'] / data.result[i]['COUNT'];
					if(!isNaN(progress)) {
						progress = progress.toFixed(4);
						if(progress == 1 && data.result[i]['CURRENT'] != data.result[i]['COUNT']) {
							progress = 0.9999;
						}
						lay.element.progress('_'+i, progress * 100 + '%');
						
						// 开始状态
						if(state == 0) {
							$('.downloadTask').find('.start[data-id="'+i+'"]').hide();
							$('.downloadTask').find('.pause[data-id="'+i+'"]').show();
							$('.downloadTask').find('.stop[data-id="'+i+'"]').show();
							$('.downloadTask').find('.remove[data-id="'+i+'"]').hide();
						// 暂停状态
						} else if(state == 1) {
							$('.downloadTask').find('.start[data-id="'+i+'"]').show();
							$('.downloadTask').find('.pause[data-id="'+i+'"]').hide();
							$('.downloadTask').find('.stop[data-id="'+i+'"]').show();
							$('.downloadTask').find('.remove[data-id="'+i+'"]').hide();
						// 停止状态
						} else {
							$('.downloadTask').find('.start[data-id="'+i+'"]').hide();
							$('.downloadTask').find('.pause[data-id="'+i+'"]').hide();
							$('.downloadTask').find('.stop[data-id="'+i+'"]').hide();
							$('.downloadTask').find('.remove[data-id="'+i+'"]').show();
						}
					}
				}
			})
		}
	})
}, 3000);