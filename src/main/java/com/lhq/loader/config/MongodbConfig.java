package com.lhq.loader.config;

import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.MongoDbFactory;
import org.springframework.data.mongodb.core.convert.MongoConverter;
import org.springframework.data.mongodb.gridfs.GridFsTemplate;

/**
 * @author 钱多多--李海青
 *
 */
@Configuration
@ConditionalOnProperty(value = "config.mongoStore", havingValue = "1")
public class MongodbConfig {

    @Bean
    public GridFsTemplate gridFsTemplateAmap(MongoDbFactory dbFactory, MongoConverter converter) {
        return new GridFsTemplate(dbFactory, converter, "amap");
    }

    @Bean
    public GridFsTemplate gridFsTemplateBmap(MongoDbFactory dbFactory, MongoConverter converter) {
        return new GridFsTemplate(dbFactory, converter, "bmap");
    }

    @Bean
    public GridFsTemplate gridFsTemplateGmap(MongoDbFactory dbFactory, MongoConverter converter) {
        return new GridFsTemplate(dbFactory, converter, "gmap");
    }

}
