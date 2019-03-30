package com.lhq.loader.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * @author lhq
 *
 */
@Controller
public class IndexController {

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
}
