package com.etc.qy.dao;

import com.etc.qy.entity.Avaluate;

public interface AvaluateMapper {
    int deleteByPrimaryKey(int avaluateId);

    int insert(Avaluate record);

    int insertSelective(Avaluate record);

    Avaluate selectByPrimaryKey(int avaluateId);

    int updateByPrimaryKeySelective(Avaluate record);

    int updateByPrimaryKey(Avaluate record);
}