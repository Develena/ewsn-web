package com.nuri.ewsn.web;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@MapperScan(basePackages = "com.nuri.ewsn.web.mapper")
public class EwsnWebApplication {

    public static void main(String[] args) {
        SpringApplication.run(EwsnWebApplication.class, args);
    }

}



