window.offlineMap = {

}

var scripts = document.getElementsByTagName("script");
var curScript = scripts[scripts.length - 1].getAttribute("src");

offlineMap.baseUrl = curScript.substr(0, curScript.lastIndexOf("/")+1);
offlineMap.domain = offlineMap.baseUrl.substr(offlineMap.baseUrl.indexOf("://"), offlineMap.baseUrl.length);

document.write('<script type="text/javascript" src="' + offlineMap.baseUrl + 'js/gmap.3.32.js"></script>');
document.write('<script type="text/javascript" src="' + offlineMap.baseUrl + 'js/markerclusterer.js"></script>');
