package com.etc.qy.serviceImp;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.etc.qy.dao.view_scenic_avaluateMapper;
import com.etc.qy.entity.view_scenic_avaluate;
import com.etc.qy.service.view_scenic_avaluateService;

@Service
public class view_scenic_avaluateServiceImpl implements view_scenic_avaluateService {

	@Resource
	private view_scenic_avaluateMapper vsam ;
	public List<view_scenic_avaluate> selectByhot() {
		// TODO Auto-generated method stub
		return vsam.selectByhot();
	}

}
