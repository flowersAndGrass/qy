package com.etc.qy.service;

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
}
