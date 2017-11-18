package com.etc.qy.dao;

import org.apache.ibatis.annotations.Param;

import com.etc.qy.entity.Ticket;

public interface TicketMapper {
    int deleteByPrimaryKey(int ticketId);

    int insert(Ticket record);

    int insertSelective(Ticket record);

    Ticket selectByPrimaryKey(int ticketId);

    int updateByPrimaryKeySelective(Ticket record);

    int updateByPrimaryKey(Ticket record);
    
    /**
     * ¸ù¾Ý scenicId ²éÆ±
     * @param scenicId
     * @return
     */
    public Ticket selectByScenicId(@Param(value="scenicId") int scenicId);
}