package com.lhq.loader.commons.consts;

/**
 * 返回结果状态
 * 
 * @author lhq
 *
 */
public enum ResultDataEnum {

    SUCCESS("0", "操作成功"), ERROR("1", "操作失败");

    private String reCode;
    private String reInfo;

    private ResultDataEnum(String reCode, String reInfo) {
        this.reCode = reCode;
        this.reInfo = reInfo;
    }

    public String getReCode() {
        return reCode;
    }

    public String getReInfo() {
        return reInfo;
    }

}
