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
	 * 根据景点id查票
	 */
	public Ticket selectByScenicId(int scenicId) {
		// TODO Auto-generated method stub
		return tm.selectByScenicId(scenicId);
	}

}
