package com.lhq.loader.commons.consts;


/**
 * 下载任务状态
 * 
 * @author 灯火-lhq910523@sina.com
 * @time 2020-09-16 14:42:49
 */
public enum TaskStateEnum {
    START(0L, "进行中"), PAUSE(1L, "已暂停"), STOP(2L, "已停止");

    private long state;
    private String info;

    private TaskStateEnum(long state, String info) {
        this.state = state;
        this.info = info;
    }

    public long getState() {
        return state;
    }

    public String getInfo() {
        return info;
    }
}
