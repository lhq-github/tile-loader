package com.lhq.loader.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.lhq.loader.commons.bean.ResultData;

/**
 * @author lhq
 *
 */
@Controller
public class IndexController {

    @Value("${config.store.mongo}")
    private boolean mongoStore;

    @GetMapping("/index")
    public String index() {
        return "index";
    }

    @GetMapping("/folder")
    public String folder() {
        return "folder";
    }

    @GetMapping("/amap/index")
    public String amap() {
        return "amap";
    }

    @GetMapping("/bmap/index")
    public String bmap() {
        return "bmap";
    }

    @GetMapping("/gmap/index")
    public String gmap() {
        return "gmap";
    }
    
    /**
     * 获取存储服务是否是mongo
     * 
     * @return
     */
    @PostMapping("/useMongoStore")
    @ResponseBody
    public ResultData<Boolean> useMongoStore() {
        return new ResultData<Boolean>().success(mongoStore);
    }

}
