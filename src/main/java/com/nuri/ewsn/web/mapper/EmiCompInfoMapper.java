package com.nuri.ewsn.web.mapper;

import com.nuri.ewsn.web.model.user.EmiCompInfo;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

//@Repository
@Mapper
public interface EmiCompInfoMapper {

    List<Map<String,Object>> selectList(EmiCompInfo param);

    int selectCount(EmiCompInfo param);

    int insert(EmiCompInfo param);

    int update(EmiCompInfo param);

    int delete(Integer compSeq);
}
