package com.etc.qy.service;

import com.etc.qy.entity.Scenic;

/**
 * @author 游晓娟
 * 景点
 *
 */
public interface ScenicService {
	/**
	 * 根据id找景点
	 * @param scenicId
	 * @return
	 */
	public Scenic selectByPrimaryKey(Integer scenicId);
}
