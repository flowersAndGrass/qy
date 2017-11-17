package com.etc.qy.dao;

import com.etc.qy.entity.City;

public interface CityMapper {
    int deleteByPrimaryKey(int cityId);

    int insert(City record);

    int insertSelective(City record);

    City selectByPrimaryKey(int cityId);

    int updateByPrimaryKeySelective(City record);

    int updateByPrimaryKey(City record);
}