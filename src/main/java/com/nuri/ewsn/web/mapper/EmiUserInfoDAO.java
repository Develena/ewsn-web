package com.nuri.ewsn.web.mapper;


import com.nuri.ewsn.web.model.user.EmiUserInfo;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface EmiUserInfoDAO {

    List<Map<String,Object>> selectList(EmiUserInfo param);

    int selectCount(EmiUserInfo param);

    int insert(EmiUserInfo param);

    int update(EmiUserInfo param);

    int delete(Integer userSeq);

}
