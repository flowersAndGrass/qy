package com.etc.qy.dao;

import com.etc.qy.entity.Tour;

public interface TourMapper {
    int deleteByPrimaryKey(int tourId);

    int insert(Tour record);

    int insertSelective(Tour record);

    Tour selectByPrimaryKey(int tourId);

    int updateByPrimaryKeySelective(Tour record);

    int updateByPrimaryKey(Tour record);
}