package com.etc.qy.dao;

import java.util.List;

import com.etc.qy.entity.view_scenic_avaluate;

public interface view_scenic_avaluateMapper {
    int insert(view_scenic_avaluate record);

    int insertSelective(view_scenic_avaluate record);
    
    /**
     * ��ʾ���ž���
     */
    List<view_scenic_avaluate> selectByhot();
}