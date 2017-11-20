package com.etc.qy.service;

import java.util.List;

import com.etc.qy.entity.City;

public interface CityService {
	/**
	 * 根据地区ID查找显示
	 * @param areaId
	 * @return
	 */
public  List<City> selectByareaID(int areaId);


/**
 * 模糊查找
 * @param cityName
 * @return
 */
public City selectBycityName(String cityName);
}
