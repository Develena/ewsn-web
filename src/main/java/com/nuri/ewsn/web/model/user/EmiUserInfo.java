package com.nuri.ewsn.web.model.user;

import com.nuri.ewsn.web.model.common.CommonParam;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class EmiUserInfo extends CommonParam {

    private Integer userSeq; // 사용자관리키
    private Integer compSeq; // 회사관리키
    private String userId; // 사용자아이디
    private String userName; // 사용자명
    private String userPass; // 비밀번호
    private Integer userYn; // 사용여부
    private String deptName; // 부서명
    private String userPhone; // 전화번호
    private String userEmail; // 이메일
    private String regDt; // 등록일시
    private String regUserId; // 등록자 아이디
    private Integer regUserIp; // 등록자 아이피

}
