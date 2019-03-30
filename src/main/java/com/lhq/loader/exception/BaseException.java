package com.lhq.loader.exception;

/**
 * 自定义异常
 * 
 * @author lhq
 *
 */
public class BaseException extends RuntimeException {
    private static final long serialVersionUID = 1L;

    public BaseException() {
        super();
    }

    public BaseException(String message, Throwable cause) {
        super(message, cause);
    }

    public BaseException(String message) {
        super(message);
    }

    public BaseException(Throwable cause) {
        super(cause);
    }

}
