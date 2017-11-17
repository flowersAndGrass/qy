package com.etc.qy.dao;

import com.etc.qy.entity.Users;

public interface UsersMapper {
    int deleteByPrimaryKey(int userId);

    int insert(Users record);

    int insertSelective(Users record);

    Users selectByPrimaryKey(int userId);

    int updateByPrimaryKeySelective(Users record);

    int updateByPrimaryKey(Users record);
}