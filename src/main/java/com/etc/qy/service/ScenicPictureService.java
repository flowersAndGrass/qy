package com.etc.qy.service;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.etc.qy.entity.ScenicPicture;

/**
 * @author Administrator游晓娟
 *景点图片
 */
public interface ScenicPictureService {
	/**
     * 根据scenicId 查景点图片
     * @param scenicId
     * @return
     */
    public List<ScenicPicture> selectByScenicId(int scenicId);
}
