package com.etc.qy.serviceImp;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.etc.qy.dao.ScenicMapper;
import com.etc.qy.entity.Scenic;
import com.etc.qy.service.ScenicService;
@Service
public class ScenicServiceImp implements ScenicService{
	
	@Resource
	private ScenicMapper sm;
	
	/**
	 * ¸ù¾ÝidÕÒ¾°µã
	 */
	public Scenic selectByPrimaryKey(Integer scenicId) {
		// TODO Auto-generated method stub
		return sm.selectByPrimaryKey(scenicId);
	}

	public List<Scenic> selectByscenicName(String scenicName) {
		// TODO Auto-generated method stub
		return sm.selectByscenicName(scenicName);
	}

	public List<Scenic> selectByrecomm() {
		// TODO Auto-generated method stub
		return sm.selectByrecomm() ;
	}

}
