package com.nuri.ewsn.web.cont;

import lombok.extern.slf4j.Slf4j;
import lombok.extern.slf4j.XSlf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Slf4j
@Controller
public class LoginController {

    // 로그인 페이지 호출: /login
    // 로그아웃  이후 로그인 페이지: /login
    // 로그인 실패 시 로그인 페이지: /login?error
    // 로그아웃 호출: /logout
    @GetMapping(value = "/login")
    public String login(HttpServletRequest req, HttpServletResponse res, Model model){
        log.info("/login");
        return "login";
    }

//    @GetMapping("/loginError")
//    public String loginError(Model model){
//        log.info("/loginError");
//        model.addAttribute("loginError", true);
//        return "login";
//    }
}
