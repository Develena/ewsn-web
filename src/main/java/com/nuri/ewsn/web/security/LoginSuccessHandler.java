package com.nuri.ewsn.web.security;

import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * 로그인 성공 시 Handler.
 *
 * @author hyun
 *
 */
@Slf4j
public class LoginSuccessHandler implements AuthenticationSuccessHandler {
    @Override
    public void onAuthenticationSuccess(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Authentication authentication) throws IOException, ServletException {
        // 1. user 정보 확인
        log.info("login success");

        // TODO: 로그인 로그 저장

        httpServletResponse.sendRedirect(httpServletRequest.getContextPath() + "/hello");
    }
}

