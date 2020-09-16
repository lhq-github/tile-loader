package com.lhq.loader.service;

import java.io.ByteArrayInputStream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.data.mongodb.gridfs.GridFsOperations;
import org.springframework.data.mongodb.gridfs.GridFsResource;
import org.springframework.stereotype.Component;

/**
 * 下载保存到mongodb中
 * 
 * @author 灯火-lhq910523@sina.com
 * @time 2020-09-16 13:52:17
 */
@Component
@ConditionalOnProperty(value = "config.mongoStore", havingValue = "1")
public class MongoStoreService implements IStoreService {
    @Autowired(required = false)
    @Qualifier("gridFsTemplateAmap")
    private GridFsOperations gridFsTemplateAmap;
    @Autowired(required = false)
    @Qualifier("gridFsTemplateBmap")
    private GridFsOperations gridFsTemplateBmap;
    @Autowired(required = false)
    @Qualifier("gridFsTemplateGmap")
    private GridFsOperations gridFsTemplateGmap;

    @Override
    public boolean exsits(String fileName, String mapType) {
        GridFsOperations gridFsTemplate = this.getGridFsOperations(mapType);
        GridFsResource resource = gridFsTemplate.getResource(fileName);
        return resource != null && resource.exists();
    }

    @Override
    public void store(String fileName, String mapType, byte[] content) throws Exception {
        GridFsOperations gridFsTemplate = this.getGridFsOperations(mapType);
        gridFsTemplate.store(new ByteArrayInputStream(content), fileName);
    }

    private GridFsOperations getGridFsOperations(String type) {
        if ("amap".equals(type)) {
            return gridFsTemplateAmap;
        } else if ("bmap".equals(type)) {
            return gridFsTemplateBmap;
        } else {
            return gridFsTemplateGmap;
        }
    }
}
