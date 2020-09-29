package com.nuri.ewsn.web.model.common;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OrderByMap {

    private String sort;
    private String dir;

    public OrderByMap (String sort, String dir) {
        this.sort = sort;
        this.dir = dir;
    }
}
