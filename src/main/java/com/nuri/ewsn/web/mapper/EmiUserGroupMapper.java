package com.nuri.ewsn.web.mapper;

import com.nuri.ewsn.web.model.user.EmiGroupInfo;
import com.nuri.ewsn.web.model.user.EmiUserGroup;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface EmiUserGroupMapper {

    List<Map<String,Object>> selectList(EmiUserGroup param);

    int selectCount(EmiUserGroup param);

    int insert(EmiUserGroup param);

    int update(EmiUserGroup param);

    int delete(EmiUserGroup param);
}
