package com.etc.qy.dao;

import com.etc.qy.entity.TicketType;

public interface TicketTypeMapper {
    int deleteByPrimaryKey(int typeId);

    int insert(TicketType record);

    int insertSelective(TicketType record);

    TicketType selectByPrimaryKey(int typeId);

    int updateByPrimaryKeySelective(TicketType record);

    int updateByPrimaryKey(TicketType record);
}