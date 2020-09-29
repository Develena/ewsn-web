package com.nuri.ewsn.web.config;

import org.springframework.context.MessageSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.support.ReloadableResourceBundleMessageSource;
import org.springframework.validation.beanvalidation.LocalValidatorFactoryBean;

import java.util.Locale;

@Configuration
public class AppConfig {

    @Bean
    public MessageSource messageSource() {

        Locale.setDefault(Locale.KOREA); // 위치 한국으로 설정
        ReloadableResourceBundleMessageSource messageSource = new ReloadableResourceBundleMessageSource();
        // 커스텀한 properties 파일, security properties 파일 순서대로 설정
        messageSource.setBasenames("classpath:messages/security-message", "classpath:org/springframework/security/messages");
        messageSource.setDefaultEncoding("UTF-8"); // 인코딩 설정
        return messageSource;
    }

    @Bean
    public LocalValidatorFactoryBean getValidator() {
        LocalValidatorFactoryBean bean = new LocalValidatorFactoryBean();
        bean.setValidationMessageSource(messageSource());
        return bean;
    }
}
