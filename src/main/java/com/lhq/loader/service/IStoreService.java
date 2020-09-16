package com.lhq.loader.service;


/**
 * 存储器服务
 * 
 * @author 灯火-lhq910523@sina.com
 * @time 2020-09-16 14:01:42
 */
public interface IStoreService {

    /**
     * 文件是否已经存在了
     * 
     * @param fileName
     * @param mapType
     */
    public boolean exsits(String fileName, String mapType);

    /**
     * 
     * @param fileName
     * @param mapType
     * @param content
     * @throws Exception
     */
    public void store(String fileName, String mapType, byte[] content) throws Exception;

}
