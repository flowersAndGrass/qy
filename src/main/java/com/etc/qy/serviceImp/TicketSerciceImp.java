package com.etc.qy.serviceImp;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.etc.qy.dao.TicketMapper;
import com.etc.qy.entity.Ticket;
import com.etc.qy.service.TicketService;

@Service
public class TicketSerciceImp implements TicketService{
	
	@Resource
	private TicketMapper tm; 
	/**
	 * ���ݾ���id��Ʊ
	 */
	public Ticket selectByScenicId(int scenicId) {
		// TODO Auto-generated method stub
		return tm.selectByScenicId(scenicId);
	}

}
