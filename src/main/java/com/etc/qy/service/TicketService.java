package com.etc.qy.service;

import org.apache.ibatis.annotations.Param;

import com.etc.qy.entity.Ticket;

/**
 * @author Administrator
 *Ʊ
 */
public interface TicketService {
	/**
     * ���� scenicId ��Ʊ
     * @param scenicId
     * @return
     */
    public Ticket selectByScenicId(int scenicId);
}
