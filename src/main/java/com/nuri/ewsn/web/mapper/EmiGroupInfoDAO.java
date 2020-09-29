package com.nuri.ewsn.web.mapper;

import com.nuri.ewsn.web.model.user.EmiGroupInfo;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface EmiGroupInfoDAO {

    List<Map<String,Object>> selectList(EmiGroupInfo param);

    int selectCount(EmiGroupInfo param);

    int insert(EmiGroupInfo param);

    int update(EmiGroupInfo param);

    int delete(Integer groupSeq);

}
