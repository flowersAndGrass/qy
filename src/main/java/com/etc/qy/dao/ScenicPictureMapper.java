package com.etc.qy.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.etc.qy.entity.ScenicPicture;

public interface ScenicPictureMapper {
    int deleteByPrimaryKey(int pictureId);

    int insert(ScenicPicture record);

    int insertSelective(ScenicPicture record);

    ScenicPicture selectByPrimaryKey(int pictureId);

    int updateByPrimaryKeySelective(ScenicPicture record);

    int updateByPrimaryKey(ScenicPicture record);
    
    /**
     * 根据scenicId 查景点图片
     * @param scenicId
     * @return
     */
    public List<ScenicPicture> selectByScenicId(@Param(value="scenicId") int scenicId);
}