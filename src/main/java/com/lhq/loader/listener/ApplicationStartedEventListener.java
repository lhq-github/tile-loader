package com.lhq.loader.listener;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationStartedEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;

import com.lhq.loader.bean.SysConfig;
import com.lhq.loader.client.BrowserClient;

/**
 * 服务启动后，开启客户端
 * 
 * @author lhq
 *
 */
@Component
public class ApplicationStartedEventListener implements ApplicationListener<ApplicationStartedEvent> {

    @Autowired
    private BrowserClient browserClient;
    @Autowired
    private SysConfig sysConfig;

    @Override
    public void onApplicationEvent(ApplicationStartedEvent event) {
        if (sysConfig.getOpenClient() == 1) {
            browserClient.open();
        }
    }

}
