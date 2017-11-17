package com.etc.qy.dao;

import com.etc.qy.entity.Ticket;

public interface TicketMapper {
    int deleteByPrimaryKey(int ticketId);

    int insert(Ticket record);

    int insertSelective(Ticket record);

    Ticket selectByPrimaryKey(int ticketId);

    int updateByPrimaryKeySelective(Ticket record);

    int updateByPrimaryKey(Ticket record);
}