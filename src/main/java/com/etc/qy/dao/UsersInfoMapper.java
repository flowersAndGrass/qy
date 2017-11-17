package com.etc.qy.dao;

import com.etc.qy.entity.UsersInfo;

public interface UsersInfoMapper {
    int deleteByPrimaryKey(int infoId);

    int insert(UsersInfo record);

    int insertSelective(UsersInfo record);

    UsersInfo selectByPrimaryKey(int infoId);

    int updateByPrimaryKeySelective(UsersInfo record);

    int updateByPrimaryKey(UsersInfo record);
}