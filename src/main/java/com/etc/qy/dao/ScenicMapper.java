package com.etc.qy.dao;

import java.util.List;

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
    
    /**
     * ģ������
     * @param scenicName
     * @return
     */
    List<Scenic> selectByscenicName(String scenicName);
    
    
    /**
     * ���ž���
     */
    List<Scenic> selectbyhotscenic();
    
    /**
     * ����ѯ
     * ��ʾ����
     */
    List<Scenic> selectByrecomm();
}