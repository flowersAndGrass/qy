package com.etc.qy.serviceImp;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;

import com.etc.qy.dao.AvaluateMapper;
import com.etc.qy.service.AvaluateService;

@Controller
public class AvaluateServiceImpl implements AvaluateService {

	@Resource
	private AvaluateMapper am;


	public int selectcount(int scenicId) {
		// TODO Auto-generated method stub
		return am.selectcount(scenicId);
	}
	
}
