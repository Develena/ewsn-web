package com.nuri.ewsn.web.model.user;

import com.nuri.ewsn.web.model.common.CommonParam;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class EmiUserGroup extends CommonParam {

    private Integer userSeq; // 사용자관리키
    private Integer groupUserSeq; // 사용자그룹관리키
    private String regDt; // 등록일시
    private String regUserId; // 등록자 아이디
    private Integer regUserIp; // 등록자 아이피
}
