package com.etc.qy.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.etc.qy.entity.City;

public interface CityMapper {
    int deleteByPrimaryKey(int cityId);

    int insert(City record);

    int insertSelective(City record);

    City selectByPrimaryKey(int cityId);

    int updateByPrimaryKeySelective(City record);

    int updateByPrimaryKey(City record);
    
    /**
     * 根据地区id查找
     */
    List<City> selectByAreaId(int areaId);
    
    /**
     * 模糊查找
     */
    City selectBycityName(@Param(value="cityName") String cityName);
}