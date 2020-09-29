package com.nuri.ewsn.web.model.common;

import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class CommonParam {

    private String searchfield;
    private String searchquery;
    private int limit;
    private int page;
    private int start;
    private List keywordList = new ArrayList();
    private List<OrderByMap> orderByList = new ArrayList<OrderByMap>();
    private String content;
    private String date;
    private String sdate;
    private String edate;

}
