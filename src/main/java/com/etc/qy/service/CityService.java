package com.etc.qy.service;

import java.util.List;

import com.etc.qy.entity.City;

public interface CityService {
	/**
	 * ���ݵ���ID������ʾ
	 * @param areaId
	 * @return
	 */
public  List<City> selectByareaID(int areaId);


/**
 * ģ������
 * @param cityName
 * @return
 */
public City selectBycityName(String cityName);
}
