package com.etc.qy.service;

import java.util.List;

import com.etc.qy.entity.Scenic;

/**
 * @author ������
 * ����
 *
 */
public interface ScenicService {
	/**
	 * ����id�Ҿ���
	 * @param scenicId
	 * @return
	 */
	public Scenic selectByPrimaryKey(Integer scenicId);
	
	
	
	/**
	 * ģ������
	 * @param scenicName
	 * @return
	 * ��ɺ
	 */
	public List<Scenic> selectByscenicName(String scenicName);
}
