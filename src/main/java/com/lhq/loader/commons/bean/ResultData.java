package com.lhq.loader.commons.bean;

import java.io.Serializable;

import com.lhq.loader.commons.consts.ResultDataEnum;

/**
 * 返回结果
 * 
 * @author lhq
 *
 */
public class ResultData<T> implements Serializable {
    private static final long serialVersionUID = 1L;

    // 返回码
    private String reCode;
    // 返回信息
    private String reInfo;
    // 返回值
    private T result;

    public ResultData<T> success(T result) {
        this.reCode = ResultDataEnum.SUCCESS.getReCode();
        this.reInfo = ResultDataEnum.SUCCESS.getReInfo();
        this.result = result;
        return this;
    }

    public ResultData<T> success() {
        this.reCode = ResultDataEnum.SUCCESS.getReCode();
        this.reInfo = ResultDataEnum.SUCCESS.getReInfo();
        return this;
    }

    public ResultData<T> error(String reInfo) {
        this.reCode = ResultDataEnum.ERROR.getReCode();
        this.reInfo = reInfo;
        return this;
    }

    public ResultData<T> error() {
        this.reCode = ResultDataEnum.ERROR.getReCode();
        this.reInfo = ResultDataEnum.ERROR.getReInfo();
        return this;
    }

    public String getReCode() {
        return reCode;
    }

    public void setReCode(String reCode) {
        this.reCode = reCode;
    }

    public String getReInfo() {
        return reInfo;
    }

    public void setReInfo(String reInfo) {
        this.reInfo = reInfo;
    }

    public T getResult() {
        return result;
    }

    public void setResult(T result) {
        this.result = result;
    }

}
