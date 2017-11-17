package com.etc.qy.dao;

import com.etc.qy.entity.Order;

public interface OrderMapper {
    int deleteByPrimaryKey(int orderId);

    int insert(Order record);

    int insertSelective(Order record);

    Order selectByPrimaryKey(int orderId);

    int updateByPrimaryKeySelective(Order record);

    int updateByPrimaryKey(Order record);
}