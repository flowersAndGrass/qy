package com.etc.qy.dao;

import java.util.List;

import com.etc.qy.entity.Scenic;

public interface ScenicMapper {
    int deleteByPrimaryKey(Integer scenicId);

    int insert(Scenic record);

    int insertSelective(Scenic record);
    
    /**
     * 根据id找景点
     * @param scenicId
     * @return
     */
    Scenic selectByPrimaryKey(Integer scenicId);

    int updateByPrimaryKeySelective(Scenic record);

    int updateByPrimaryKey(Scenic record);
    
    /**
     * 模糊查找
     * @param scenicName
     * @return
     */
    List<Scenic> selectByscenicName(String scenicName);
    
    
    /**
     * 热门景点
     */
    List<Scenic> selectbyhotscenic();
    
    /**
     * 多表查询
     * 显示城市
     */
    List<Scenic> selectByrecomm();
}