package com.etc.qy.service;

import org.apache.ibatis.annotations.Param;

import com.etc.qy.entity.Ticket;

/**
 * @author Administrator
 *Æ±
 */
public interface TicketService {
	/**
     * ¸ù¾Ý scenicId ²éÆ±
     * @param scenicId
     * @return
     */
    public Ticket selectByScenicId(int scenicId);
}
