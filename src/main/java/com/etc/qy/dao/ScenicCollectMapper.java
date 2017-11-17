package com.etc.qy.dao;

import com.etc.qy.entity.ScenicCollect;

public interface ScenicCollectMapper {
    int deleteByPrimaryKey(int scenicCollectId);

    int insert(ScenicCollect record);

    int insertSelective(ScenicCollect record);

    ScenicCollect selectByPrimaryKey(int scenicCollectId);

    int updateByPrimaryKeySelective(ScenicCollect record);

    int updateByPrimaryKey(ScenicCollect record);
}