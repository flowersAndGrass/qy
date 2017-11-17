package com.etc.qy.dao;

import com.etc.qy.entity.Area;

public interface AreaMapper {
    int deleteByPrimaryKey(int areaId);

    int insert(Area record);

    int insertSelective(Area record);

    Area selectByPrimaryKey(int areaId);

    int updateByPrimaryKeySelective(Area record);

    int updateByPrimaryKey(Area record);
}