package com.nuri.ewsn.web.user;

import com.nuri.ewsn.web.mapper.EmiUserInfoMapper;
import com.nuri.ewsn.web.model.user.EmiUserInfo;
import com.nuri.ewsn.web.svc.TestService;
import lombok.extern.slf4j.Slf4j;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.util.Assert;

@Slf4j
@RunWith(SpringRunner.class)
@SpringBootTest
public class UserTest {


    //    @Autowired
//    EmiUserInfoMapper userInfoMapper;

    @Autowired
    TestService testService;

    private final EmiUserInfoMapper userInfoMapper;

//  생성자 주입 방식 사용.
    @Autowired
    public UserTest(EmiUserInfoMapper userInfoMapper) {
        this.userInfoMapper = userInfoMapper;
    }

    @Before
    public void test(){
        if(userInfoMapper == null) {
            log.error("null");
        }else{
            log.info("this is not null");
        }
//        Assert.isNull(testService, "ERROR");
    }


    @Test
    public void test2(){
        log.info("test2()");
        testService.getTime();
    }


}
