package com.lhq.loader.bean;

import java.io.Serializable;
import java.util.concurrent.Semaphore;

import com.lhq.loader.commons.consts.TaskStateEnum;

/**
 * 下载任务
 * 
 * @author 灯火-lhq910523@sina.com
 * @time 2020-09-16 14:44:08
 */
public class Task implements Serializable {
    private static final long serialVersionUID = 1L;

    private String id;// 当前任务ID
    private long count;// 任务瓦片总数
    private long current;// 当前已经下载的瓦片数
    private TaskStateEnum state;// 当前任务状态
    private Semaphore semaphore;// 信号量，用于控制进程暂停状态

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public long getCount() {
        return count;
    }

    public void setCount(long count) {
        this.count = count;
    }

    public long getCurrent() {
        return current;
    }

    public void setCurrent(long current) {
        this.current = current;
    }

    public TaskStateEnum getState() {
        return state;
    }

    public void setState(TaskStateEnum state) {
        this.state = state;
    }

    public Semaphore getSemaphore() {
        return semaphore;
    }

    public void setSemaphore(Semaphore semaphore) {
        this.semaphore = semaphore;
    }

}
