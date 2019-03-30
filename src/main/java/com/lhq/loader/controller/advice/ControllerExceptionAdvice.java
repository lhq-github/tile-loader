package com.lhq.loader.controller.advice;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

import com.lhq.loader.commons.bean.ResultData;
import com.lhq.loader.exception.BaseException;

/**
 * 统一异常处理
 * 
 * @author lhq
 *
 */
@ControllerAdvice
public class ControllerExceptionAdvice {
    private static final Logger logger = LoggerFactory.getLogger(ControllerExceptionAdvice.class);

    @ExceptionHandler(value = BaseException.class)
    @ResponseBody
    public ResultData<String> baseTipException(BaseException ex) {
        logger.info(ex.getMessage());
        return new ResultData<String>().error(ex.getMessage());
    }

}
