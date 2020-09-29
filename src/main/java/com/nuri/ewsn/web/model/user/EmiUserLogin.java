package com.nuri.ewsn.web.model.user;

import com.nuri.ewsn.web.model.common.CommonParam;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class EmiUserLogin extends CommonParam {

    private Integer userSeq; // 사용자관리키
    private String loginDt; // 로그인일시
    private String userId; // 사용자아이디
    private Integer loginYn; // 로그인성공여부
    private String loginText; // 로그인성공/실패이유
    private String loginIp; // 로그인 아이피

}
