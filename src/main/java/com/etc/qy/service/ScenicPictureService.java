package com.etc.qy.service;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.etc.qy.entity.ScenicPicture;

/**
 * @author Administrator������
 *����ͼƬ
 */
public interface ScenicPictureService {
	/**
     * ����scenicId �龰��ͼƬ
     * @param scenicId
     * @return
     */
    public List<ScenicPicture> selectByScenicId(int scenicId);
}
