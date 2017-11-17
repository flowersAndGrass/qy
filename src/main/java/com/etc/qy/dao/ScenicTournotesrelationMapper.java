package com.etc.qy.dao;

import com.etc.qy.entity.ScenicTournotesrelation;

public interface ScenicTournotesrelationMapper {
    int deleteByPrimaryKey(int relationId);

    int insert(ScenicTournotesrelation record);

    int insertSelective(ScenicTournotesrelation record);

    ScenicTournotesrelation selectByPrimaryKey(int relationId);

    int updateByPrimaryKeySelective(ScenicTournotesrelation record);

    int updateByPrimaryKey(ScenicTournotesrelation record);
}