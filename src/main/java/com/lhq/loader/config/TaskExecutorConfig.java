package com.lhq.loader.config;

import java.util.concurrent.Callable;
import java.util.concurrent.Future;
import java.util.concurrent.ThreadPoolExecutor;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.task.TaskExecutor;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;
import org.springframework.util.concurrent.ListenableFuture;

/**
 * 线程池
 * 
 * @author lhq
 *
 */
@Configuration
@EnableAsync(proxyTargetClass = true)
public class TaskExecutorConfig {

    @Value("${config.pool.coreSize}")
    private int coreSize;
    @Value("${config.pool.maxSize}")
    private int maxSize;
    @Value("${config.pool.queueSize}")
    private int queueSize;
    // 服务线程池数量需要和最大支持的下载任务数量一样（不小于maxTask，但大于没意义）
    @Value("${config.maxTask}")
    private int serviceCoreSize;

    @Bean("downloaderExecutor")
    public TaskExecutor downloaderExecutor() {
        ThreadPoolTaskExecutor executor = new VisiableThreadPoolTaskExecutor();
        // 设置核心线程数
        executor.setCorePoolSize(coreSize);
        // 设置最大线程数
        executor.setMaxPoolSize(maxSize);
        // 设置队列容量
        executor.setQueueCapacity(queueSize);
        // 设置线程活跃时间（秒）
        executor.setKeepAliveSeconds(60);
        // 设置默认线程名称
        executor.setThreadNamePrefix("downloader-");
        // 设置拒绝策略
        executor.setRejectedExecutionHandler(new ThreadPoolExecutor.CallerRunsPolicy());
        // 等待所有任务结束后再关闭线程池
        executor.setWaitForTasksToCompleteOnShutdown(true);
        return executor;
    }

    /**
     * 服务线程的数量应该和maxTask值相同
     * 
     * @return
     */
    @Bean("servicesExecutor")
    public TaskExecutor servicesExecutor() {
        ThreadPoolTaskExecutor executor = new VisiableThreadPoolTaskExecutor();
        // 设置核心线程数
        executor.setCorePoolSize(serviceCoreSize);
        // 设置最大线程数
        executor.setMaxPoolSize(serviceCoreSize);
        // 设置队列容量
        executor.setQueueCapacity(serviceCoreSize);
        // 设置线程活跃时间（秒）
        executor.setKeepAliveSeconds(60);
        // 设置默认线程名称
        executor.setThreadNamePrefix("services-");
        // 设置拒绝策略
        executor.setRejectedExecutionHandler(new ThreadPoolExecutor.CallerRunsPolicy());
        // 等待所有任务结束后再关闭线程池
        executor.setWaitForTasksToCompleteOnShutdown(true);
        return executor;
    }

    static class VisiableThreadPoolTaskExecutor extends ThreadPoolTaskExecutor {
        private static final long serialVersionUID = 1L;
        private static final Logger logger = LoggerFactory.getLogger(VisiableThreadPoolTaskExecutor.class);
        // 打印线程池的使用情况
        private void showThreadPoolInfo() {
            ThreadPoolExecutor threadPoolExecutor = this.getThreadPoolExecutor();
            logger.info("{}, taskCount [{}], completedTaskCount [{}], activeCount [{}], queueSize [{}]", this.getThreadNamePrefix(), threadPoolExecutor.getTaskCount(),
                    threadPoolExecutor.getCompletedTaskCount(), threadPoolExecutor.getActiveCount(), threadPoolExecutor.getQueue().size());
        }

        @Override
        public void execute(Runnable task) {
            showThreadPoolInfo();
            super.execute(task);
        }

        @Override
        public void execute(Runnable task, long startTimeout) {
            showThreadPoolInfo();
            super.execute(task, startTimeout);
        }

        @Override
        public Future<?> submit(Runnable task) {
            showThreadPoolInfo();
            return super.submit(task);
        }

        @Override
        public <T> Future<T> submit(Callable<T> task) {
            showThreadPoolInfo();
            return super.submit(task);
        }

        @Override
        public ListenableFuture<?> submitListenable(Runnable task) {
            showThreadPoolInfo();
            return super.submitListenable(task);
        }

        @Override
        public <T> ListenableFuture<T> submitListenable(Callable<T> task) {
            showThreadPoolInfo();
            return super.submitListenable(task);
        }
    }

}
