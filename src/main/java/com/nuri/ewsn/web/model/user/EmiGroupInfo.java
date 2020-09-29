package com.nuri.ewsn.web.model.user;

import com.nuri.ewsn.web.model.common.CommonParam;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class EmiGroupInfo extends CommonParam {

    private Integer groupUserSeq; // 사용자그룹관리키
    private String groupId; // 그룹아이디
    private String groupName; // 그룹명
    private Integer groupSort; // 그룹정렬순서
    private Integer groupYn; // 사용여부
    private String groupDesc; //그룹설명
    private String regDt; // 등록일시
    private String regUserId; // 등록자 아이디
    private Integer regUserIp; // 등록자 아이피
}
