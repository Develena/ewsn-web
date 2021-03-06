package com.nuri.ewsn.web.mapper;

import com.nuri.ewsn.web.model.user.EmiGroupInfo;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

//@Repository
@Mapper
public interface EmiGroupInfoMapper {

    List<Map<String,Object>> selectList(EmiGroupInfo param);

    int selectCount(EmiGroupInfo param);

    int insert(EmiGroupInfo param);

    int update(EmiGroupInfo param);

    int delete(Integer groupSeq);

}
