package com.lhq.loader.service;

import com.lhq.loader.controller.vo.DownloadParamVO;

public interface IMapService {

    /**
     * 计算下载的瓦片数量
     * 
     * @param downloadParamVO
     * @return
     */
    Long calculateCount(DownloadParamVO downloadParamVO);
	
    /**
     * 开始下载瓦片
     * 
     * @param downloadParamVO
     */
    void startDownload(DownloadParamVO downloadParamVO);
	
}
