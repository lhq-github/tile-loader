package com.lhq.loader.commons.consts;

/**
 * 进程状态
 * 
 * @author lhq
 *
 */
public enum ProgressStateEnum {
    START(0L, "进行中"), PAUSE(1L, "暂停中"), STOP(2L, "已停止");

    private Long state;
    private String info;

    private ProgressStateEnum(Long state, String info) {
        this.state = state;
        this.info = info;
    }

    public Long getState() {
        return state;
    }

    public String getInfo() {
        return info;
    }
}
