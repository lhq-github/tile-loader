
/**
 * AJAX请求返回值统一处理
 * 
 */
var ResultHandler = {
	//成功时提示
	successTip: function(data, successCallback, errorCallback) {
		var result = null;
		switch (data.reCode) {
		case '0':
			layui.layer.msg(data.reInfo || '操作成功', {
				offset: 't',
				icon: 1
			});
			typeof successCallback === 'function' && (result = successCallback(data));
			break;
		case '1':
			layui.layer.alert(data.reInfo || '操作失败', {
				icon: 2
			});
			typeof errorCallback === 'function' && (result = errorCallback(data));
			break;
		}
		return result;
	},
	
	//成功时不提示
	successNoTip: function(data, successCallback, errorCallback) {
		var result = null;
		switch (data.reCode) {
		case '0':
			typeof successCallback === 'function' && (result = successCallback(data));
			break;
		case '1':
			layui.layer.msg(data.reInfo || '操作失败', {
				offset: 't',
				icon: 2
			});
			typeof errorCallback === 'function' && (result = errorCallback(data));
			break;
		}
		return result;
	}
	
}

