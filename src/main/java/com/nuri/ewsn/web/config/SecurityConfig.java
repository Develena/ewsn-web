package com.nuri.ewsn.web.config;

import com.nuri.ewsn.web.security.LoginFailureHandler;
import com.nuri.ewsn.web.security.LoginSuccessHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.thymeleaf.extras.springsecurity5.dialect.SpringSecurityDialect;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    /**
     * Filter Chain 및 url 정보를 설정한다.
     */
    @Override
    protected void configure(HttpSecurity http) throws Exception {

        http
                .csrf().disable()
                .authorizeRequests()
                .antMatchers("/login").permitAll()
                .antMatchers("/dashboard").hasAnyRole("SUPER", "ADMIN")
                .antMatchers("/monitoring/**").hasAnyRole("SUPER", "ADMIN")
                .antMatchers("/devices/info").hasAnyRole("SUPER", "ADMIN")
                .antMatchers("/devices/resource").hasAnyRole("SUPER", "ADMIN")
                .antMatchers("/devices/authentication").hasRole("SUPER")
                .antMatchers("/system/vendor").hasRole("SUPER")
                .antMatchers("/system/code").hasRole("SUPER")
                .antMatchers("/system/user").hasAnyRole("SUPER", "ADMIN")
                .antMatchers("/system/notice").hasAnyRole("SUPER", "ADMIN")
                .anyRequest().authenticated()
                .and()
                .formLogin()
                .loginPage("/login") // custom
//                .failureUrl("/loginError")
                .permitAll()
                .successHandler(getSuccessHandler())
                .failureHandler(getFailHandler())
                .and()

                /**
                 * 로그아웃 설정
                 */
                .logout()
                .permitAll()
//                .deleteCookies("JSESSIONID")
                .logoutSuccessUrl("/login")
//                .logoutSuccessHandler(getLogoutSuccessHandler())
                .invalidateHttpSession(true)
                .and()
//                .rememberMe()
//                .key("ewsn-nms")
//                .tokenValiditySeconds(86400) // one day.
//	             .rememberMeParameter("ewsn-nms-remember-me")
//	             .rememberMeCookieName("ewsn-nms-remember-me")
//                .and()
                .httpBasic(); // 3. 사용자는 Http 기반으로 인증한다.

    }

//    @Bean
//    public PasswordEncoder passwordEncoder() {
//        return new BCryptPasswordEncoder();
//    }

    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        auth.inMemoryAuthentication()
                .withUser("ewsn").password("{noop}ewsn").roles("ADMIN")
                .and()
                .withUser("super").password("{noop}super").roles("SUPER");
    }

//    @Bean("authenticationManager")
//    @Override
//    public AuthenticationManager authenticationManagerBean() throws Exception {
//        return super.authenticationManagerBean();
//    }
    @Bean
    public AuthenticationSuccessHandler getSuccessHandler() {
        return new LoginSuccessHandler();
    }

    @Bean
    public AuthenticationFailureHandler getFailHandler() {
        return new LoginFailureHandler();
    }

    /**
     * 자원 접근 권한 해제.
     */
    @Override
    public void configure(WebSecurity web) throws Exception {
        web.ignoring().antMatchers("/css/**", "/js/**" ,"/font/**","/images/**", "/lib/**");
    }

}
