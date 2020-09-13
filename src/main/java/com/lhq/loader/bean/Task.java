package com.lhq.loader.bean;

import java.io.Serializable;
import java.util.concurrent.Semaphore;

import com.lhq.loader.commons.consts.ProgressStateEnum;

/**
 * @author lhq
 * 
 */
public class Task implements Serializable {
    private static final long serialVersionUID = 1L;

    private String id;// 当前任务ID
    private Long count;// 任务瓦片总数
    private Long current;// 当前已经下载的瓦片数
    private ProgressStateEnum state;// 当前任务状态
    private Semaphore semaphore;// 信号量，用于控制进程暂停状态

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Long getCount() {
        return count;
    }

    public void setCount(Long count) {
        this.count = count;
    }

    public Long getCurrent() {
        return current;
    }

    public void setCurrent(Long current) {
        this.current = current;
    }

    public ProgressStateEnum getState() {
        return state;
    }

    public void setState(ProgressStateEnum state) {
        this.state = state;
    }

    public Semaphore getSemaphore() {
        return semaphore;
    }

    public void setSemaphore(Semaphore semaphore) {
        this.semaphore = semaphore;
    }

}
