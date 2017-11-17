package com.etc.qy.dao;

import com.etc.qy.entity.TourNotesCollect;

public interface TourNotesCollectMapper {
    int deleteByPrimaryKey(int tNotesCollectId);

    int insert(TourNotesCollect record);

    int insertSelective(TourNotesCollect record);

    TourNotesCollect selectByPrimaryKey(int tNotesCollectId);

    int updateByPrimaryKeySelective(TourNotesCollect record);

    int updateByPrimaryKey(TourNotesCollect record);
}