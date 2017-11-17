package com.etc.qy.dao;

import com.etc.qy.entity.Linkman;

public interface LinkmanMapper {
    int deleteByPrimaryKey(int linkManId);

    int insert(Linkman record);

    int insertSelective(Linkman record);

    Linkman selectByPrimaryKey(int linkManId);

    int updateByPrimaryKeySelective(Linkman record);

    int updateByPrimaryKey(Linkman record);
}