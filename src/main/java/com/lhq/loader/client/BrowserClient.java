package com.lhq.loader.client;

import java.awt.BorderLayout;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;
import java.lang.reflect.Field;
import java.lang.reflect.Modifier;
import java.math.BigInteger;

import javax.swing.JFrame;
import javax.swing.WindowConstants;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import com.teamdev.jxbrowser.chromium.Browser;
import com.teamdev.jxbrowser.chromium.az;
import com.teamdev.jxbrowser.chromium.swing.BrowserView;

/**
 * jxbrower客户端
 * 
 * @author lhq
 *
 */
@Component
public class BrowserClient {
    private static final Logger logger = LoggerFactory.getLogger(BrowserClient.class);
    /**
     * licenses破解
     */
    static {
        try {
            Field e = az.class.getDeclaredField("e");
            e.setAccessible(true);
            Field f = az.class.getDeclaredField("f");
            f.setAccessible(true);
            Field modifersField = Field.class.getDeclaredField("modifiers");
            modifersField.setAccessible(true);
            modifersField.setInt(e, e.getModifiers() & ~Modifier.FINAL);
            modifersField.setInt(f, f.getModifiers() & ~Modifier.FINAL);
            e.set(null, new BigInteger("1"));
            f.set(null, new BigInteger("1"));
            modifersField.setAccessible(false);
        } catch (Exception e) {
            logger.error(e.getMessage(), e);
        }

    }

    private static JFrame jFrame;

    @Value("${server.port}")
    private int port;
    @Value("${server.servlet.context-path}")
    private String path;

    public void open() {
        Browser browser = new Browser();
        BrowserView browserView = new BrowserView(browser);
        initJFrame(jFrame, browserView);
        browser.loadURL("http://localhost:" + port + path);

    }

    private void initJFrame(JFrame frame, BrowserView browserView) {
        frame.setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);
        frame.add(browserView, BorderLayout.CENTER);
        frame.setExtendedState(JFrame.MAXIMIZED_BOTH);
        frame.setLocationRelativeTo(null);
        frame.setVisible(true);
        frame.addWindowListener(new WindowAdapter() {
            @Override
            public void windowClosing(WindowEvent e) {
                System.exit(0);
            }
        });
    }

    public static void setjFrame(JFrame jFrame) {
        BrowserClient.jFrame = jFrame;
    }
}
