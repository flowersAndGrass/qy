package com.etc.qy.dao;

import com.etc.qy.entity.Scenic;

public interface ScenicMapper {
    int deleteByPrimaryKey(Integer scenicId);

    int insert(Scenic record);

    int insertSelective(Scenic record);
    
    /**
     * ����id�Ҿ���
     * @param scenicId
     * @return
     */
    Scenic selectByPrimaryKey(Integer scenicId);

    int updateByPrimaryKeySelective(Scenic record);

    int updateByPrimaryKey(Scenic record);
}