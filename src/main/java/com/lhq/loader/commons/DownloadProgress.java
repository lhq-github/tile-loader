package com.lhq.loader.commons;

import java.util.HashMap;
import java.util.concurrent.Semaphore;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.lhq.loader.bean.SysConfig;
import com.lhq.loader.bean.Task;
import com.lhq.loader.commons.consts.TaskStateEnum;
import com.lhq.loader.exception.BaseException;


/**
 * 下载进度管理器
 * 
 * @author 灯火-lhq910523@sina.com
 * @time 2020-09-16 14:41:44
 */
@Component
public class DownloadProgress extends HashMap<String, Task> {
    private static final long serialVersionUID = 1L;

    @Autowired
    private SysConfig sysConfig;

    /**
     * 判断任务线程是否已经满了
     * 
     * @return
     */
    public boolean downPoolFull() {
        int count = 0;
        for (Entry<String, Task> entry : this.entrySet()) {
            if (entry.getValue().getState() != TaskStateEnum.STOP) {
                count++;
            }
        }
        return count == sysConfig.getDownPoolSize();
    }

    /**
     * 开启一个下载任务
     * 
     * @param id
     * @return
     */
    public synchronized void openTask(String id, long count) {
        this.computeIfAbsent(id, (ks) -> {
            Task task = new Task();
            task.setCount(count);
            task.setCurrent(0L);
            task.setState(TaskStateEnum.START);
            task.setSemaphore(new Semaphore(1));
            return task;
        });
    }

    /**
     * 累加当前任务已下载瓦片数量
     * 
     * @param id
     * @param current
     */
    public void addTaskCurrent(String id, long current) {
        Task task = this.get(id);
        if (task == null) {
            throw new BaseException("下载任务" + id + "不存在");
        }
        synchronized (task) {
            task.setCurrent(task.getCurrent() + current);
            // 瓦片下载结束后，将状态标记为stop
            if (task.getCurrent() == task.getCount()) {
                task.setState(TaskStateEnum.STOP);
            }
        }
    }

    /**
     * 启动下载进程
     * 
     * @param id
     */
    public void start(String id) {
        Task task = this.get(id);
        if (task == null) {
            throw new BaseException("下载任务" + id + "不存在");
        }
        synchronized (task) {
            if (task.getCurrent() == task.getCount()) {
                throw new BaseException("该任务已经下载结束，不能启动");
            }
            if (task.getState() == TaskStateEnum.STOP) {
                throw new BaseException("该任务已经停止，不能启动");
            }
            task.getSemaphore().drainPermits();// 消耗掉所有的许可
            task.getSemaphore().release(1);// 新增一个许可
            task.setState(TaskStateEnum.START);
        }
    }

    /**
     * 暂停下载进程
     * 
     * @param id
     */
    public void pause(String id) {
        Task task = this.get(id);
        if (task == null) {
            throw new BaseException("下载任务" + id + "不存在");
        }
        synchronized (task) {
            if (task.getCurrent() == task.getCount()) {
                throw new BaseException("该任务已经下载结束，不能暂停");
            }
            if (task.getState() == TaskStateEnum.STOP) {
                throw new BaseException("该任务已经停止，不能暂停");
            }
            task.getSemaphore().drainPermits();// 消耗掉所有的许可
            task.setState(TaskStateEnum.PAUSE);
        }
    }

    /**
     * 停止下载进程
     * 
     * @param id
     */
    public void stop(String id) {
        Task task = this.get(id);
        if (task == null) {
            throw new BaseException("下载任务" + id + "不存在");
        }
        synchronized (task) {
            task.getSemaphore().drainPermits();// 消耗掉所有的许可
            task.getSemaphore().release(1);// 新增一个许可
            task.setState(TaskStateEnum.STOP);
        }
    }

}
