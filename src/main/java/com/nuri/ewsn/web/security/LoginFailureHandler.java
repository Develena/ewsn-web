package com.nuri.ewsn.web.security;

import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationFailureHandler;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * 로그인 실패 시 Handler.
 *
 * @author hyun
 *
 */
@Slf4j
public class LoginFailureHandler extends SimpleUrlAuthenticationFailureHandler {

    public LoginFailureHandler() {
        this.setDefaultFailureUrl("/login?error");
    }

    @Override
    public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response,
                                        AuthenticationException exception) throws IOException, ServletException {

        // 1. user 정보 확인
        String userId = request.getParameter("username");
        log.info("userId : " + userId);

        log.error("login AuthenticationFail exception Msg : " + exception.getMessage());

        // login 접속 정보 저장
//        LoginInfo body = new LoginInfo();
//        body.setUser_id(userId);
//        body.setLogin_out(0); // 0 : login, 1:logout
//        body.setLogin_page("/login");
//        body.setLogin_pre_page("");
//        body.setLogin_text(exception.getMessage());
//        body.setLogin_yn(1); // 0: 성공, 1: 실패


//        try {
//            Map<String, Object> result = mgService.postLoginHistory(body);
//            log.info("로그인 기록 저장 결과: " + result.get("code") + " : " + result.get("msg"));
//        } catch (Exception e) {
//            log.error("로그인 기록 저장에 실패하였습니다");
//            e.printStackTrace();
//
//        }
        super.onAuthenticationFailure(request, response, exception);
    }


}
