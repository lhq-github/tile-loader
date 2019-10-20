package com.lhq.loader;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * @author lhq
 *
 */
@SpringBootApplication
//去掉mongo的自动化配置
//@SpringBootApplication(exclude = { MongoDataAutoConfiguration.class, MongoAutoConfiguration.class })
public class TileLoaderApplication {

    public static void main(String[] args) {
        SpringApplication.run(TileLoaderApplication.class, args);
    }

}
