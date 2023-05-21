package com.wx.exam;

import com.wx.exam.core.api.utils.JsonConverter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.List;

/**
 * 老王在线考试系统
 * @author wx
 * @date 2021-08-19
 */
@SpringBootApplication
@EnableScheduling
@EnableAsync
public class ExamApplication extends SpringBootServletInitializer implements WebMvcConfigurer  {

	public static void main(String[] args) {
		SpringApplication.run(ExamApplication.class, args);
	}

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
		return builder.sources(ExamApplication.class);
	}

	@Override
	public void extendMessageConverters(List<HttpMessageConverter<?>> converters) {
		//保留原有converter,把新增fastConverter插入集合头,保证优先级
		converters.add(0, JsonConverter.fastConverter());
	}

}