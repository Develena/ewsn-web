package com.nuri.ewsn.web.mapper;

import com.nuri.ewsn.web.model.user.EmiCompInfo;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface EmiCompInfoDAO {

    List<Map<String,Object>> selectList(EmiCompInfo param);

    int selectCount(EmiCompInfo param);

    int insert(EmiCompInfo param);

    int update(EmiCompInfo param);

    int delete(Integer compSeq);
}
