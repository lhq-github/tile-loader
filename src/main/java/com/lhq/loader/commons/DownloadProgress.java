package com.lhq.loader.commons;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.lhq.loader.bean.SysConfig;
import com.lhq.loader.commons.consts.ProgressStateEnum;
import com.lhq.loader.exception.BaseException;

/**
 * @author lhq
 * TODO synchronized效率太低，有待调整
 * 下载进度管理器
 * key: 任务ID
 * value: 下载总数，已下载数，下载状态
 */
@Component
public class DownloadProgress extends HashMap<String, Map<String, Long>> {
    private static final long serialVersionUID = 1L;

    public static final String COUNT = "COUNT";     //待下载总数量
    public static final String CURRENT = "CURRENT"; //当前已下载数据
    public static final String STATE = "STATE";     //任务状态,start,pause,stop

    @Autowired
    private SysConfig sysConfig;

    /**
     * 开启一个下载任务
     * 
     * @param id
     * @return
     */
    public synchronized boolean startTask(String id) {
        boolean flag = false;
        Map<String, Long> task = this.get(id);
        // 当前任务不存在
        if (task == null) {
            // 当前进行中任务数量小于maxTask，允许操作
            if (this.inStartingNum() < sysConfig.getMaxTask()) {
                task = new HashMap<>();
                task.put(COUNT, -1L);
                task.put(CURRENT, 0L);
                task.put(STATE, ProgressStateEnum.START.getState());
                this.put(id, task);
                flag = true;
            }
        } else {
            // 当前任务已经存在
            // 已经开启状态，允许操作
            if (task.get(STATE).longValue() == ProgressStateEnum.START.getState()) {
                flag = true;
            } else if (task.get(STATE).longValue() == ProgressStateEnum.PAUSE.getState()) {
                // 暂停状态，且当前进行中任务数量小于maxTask，允许操作
                if (this.inStartingNum() < sysConfig.getMaxTask()) {
                    task.put(STATE, ProgressStateEnum.START.getState());
                    flag = true;
                }
            }
        }
        return flag;
    }


    /**
     * 设置当前任务的瓦片总数
     * 
     * @param id
     * @param count
     */
    public synchronized void setTaskCount(String id, Long count) {
        Map<String, Long> task = this.get(id);
        if (task == null) {
            throw new BaseException("下载任务" + id + "不存在");
        }
        task.put(COUNT, count);
    }

    /**
     * 累加当前任务已下载瓦片数量
     * 
     * @param id
     * @param current
     */
    public synchronized void addTaskCurrent(String id, Long current) {
        Map<String, Long> task = this.get(id);
        if (task == null) {
            throw new BaseException("下载任务" + id + "不存在");
        }
        task.put(CURRENT, task.get(CURRENT) + current);
        // 瓦片下载结束后，将状态标记为stop
        if (task.get(CURRENT).longValue() == task.get(COUNT)) {
            task.put(STATE, ProgressStateEnum.STOP.getState());
        }
    }

    /**
     * 启动下载进程
     * 
     * @param id
     */
    public synchronized boolean start(String id) {
        Map<String, Long> task = this.get(id);
        if (task == null) {
            throw new BaseException("下载任务" + id + "不存在");
        }
        if (this.inStartingNum() >= sysConfig.getMaxTask()) {
            throw new BaseException("下载任务最大支持" + sysConfig.getMaxTask() + "个，请等待其他任务下载结束或暂停其他任务");
        }
        if (task.get(STATE).longValue() == ProgressStateEnum.STOP.getState()) {
            throw new BaseException("该任务已经停止，不能启动");
        }
        if (task.get(COUNT).longValue() == task.get(CURRENT)) {
            task.put(STATE, ProgressStateEnum.STOP.getState());
            throw new BaseException("该任务已经下载结束，不能启动");
        }
        task.put(STATE, ProgressStateEnum.START.getState());
        return true;
    }

    /**
     * 暂停下载进程
     * 
     * @param id
     */
    public synchronized boolean pause(String id) {
        Map<String, Long> task = this.get(id);
        if (task == null) {
            throw new BaseException("下载任务" + id + "不存在");
        }
        if (task.get(STATE).longValue() == ProgressStateEnum.STOP.getState()) {
            throw new BaseException("该任务已经停止，不能暂停");
        }
        if (task.get(COUNT).longValue() == task.get(CURRENT)) {
            task.put(STATE, ProgressStateEnum.STOP.getState());
            throw new BaseException("该任务已经下载结束，不能暂停");
        }
        task.put(STATE, ProgressStateEnum.PAUSE.getState());
        return true;
    }

    /**
     * 停止下载进程
     * 
     * @param id
     */
    public synchronized boolean stop(String id) {
        Map<String, Long> task = this.get(id);
        if (task == null) {
            throw new BaseException("下载任务" + id + "不存在");
        }
        task.put(STATE, ProgressStateEnum.STOP.getState());
        return true;
    }

    /**
     * 正在下载的任务数量
     * 
     * @return
     */
    private int inStartingNum() {
        int num = 0;
        for (Entry<String, Map<String, Long>> entry : this.entrySet()) {
            if (entry.getValue().get(STATE).longValue() == ProgressStateEnum.START.getState()) {
                num++;
            }
        }
        return num;
    }
}
