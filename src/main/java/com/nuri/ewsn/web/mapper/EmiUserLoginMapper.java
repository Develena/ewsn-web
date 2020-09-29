package com.nuri.ewsn.web.mapper;

import com.nuri.ewsn.web.model.user.EmiUserLogin;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

//@Repository
@Mapper
public interface EmiUserLoginMapper {

    List<Map<String,Object>> selectList(EmiUserLogin param);

    int selectCount(EmiUserLogin param);

    int insert(EmiUserLogin param);

    int update(EmiUserLogin param);

    int delete(EmiUserLogin param);

}
