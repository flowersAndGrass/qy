package com.etc.qy.dao;

import com.etc.qy.entity.TourInfo;

public interface TourInfoMapper {
    int deleteByPrimaryKey(int infoId);

    int insert(TourInfo record);

    int insertSelective(TourInfo record);

    TourInfo selectByPrimaryKey(int infoId);

    int updateByPrimaryKeySelective(TourInfo record);

    int updateByPrimaryKey(TourInfo record);
}