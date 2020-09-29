package com.nuri.ewsn.web.model.user;

import com.nuri.ewsn.web.model.common.CommonParam;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class EmiCompInfo extends CommonParam {

    private Integer compSeq; // 회사관리키
    private String compName; // 회사명
    private String corpRegNum; // 법인등록번호
    private String compRegNum; // 사업자등록번호
    private Integer compYn; // 사용여부
    private String compManager; // 담당자
    private String compType; // 기업형태(개인, 법인)
    private String compSector; // 업종
    private String compCat; // 종목
    private Integer compZcode; // 우편번호
    private String compAddr1; // 주소1
    private String compAddr2; // 주소2
    private String compAddr3; // 주소3(전체)
    private String compPhone; // 전화번호
    private String compEmail; // 이메일
    private String compFax; // 팩스번호
    private String compId; // 회사아이디
    private String regDt; // 등록일시
    private String regUserId; // 등록자 아이디
    private Integer regUserIp; // 등록자 아이피
}
