package com.etc.qy.serviceImp;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.etc.qy.dao.CityMapper;
import com.etc.qy.entity.City;
import com.etc.qy.service.CityService;

@Service
public class CityServiceImpl implements CityService{

	@Resource
	private CityMapper cm;

	public List<City> selectByareaID(int areaId) {
		// TODO Auto-generated method stub
		return cm.selectByAreaId(areaId);
	}

	public City selectBycityName(String cityName) {
		// TODO Auto-generated method stub
		return cm.selectBycityName(cityName);
	}
	
	
}
