package com.etc.qy.dao;

import com.etc.qy.entity.ScenicPicture;

public interface ScenicPictureMapper {
    int deleteByPrimaryKey(int pictureId);

    int insert(ScenicPicture record);

    int insertSelective(ScenicPicture record);

    ScenicPicture selectByPrimaryKey(int pictureId);

    int updateByPrimaryKeySelective(ScenicPicture record);

    int updateByPrimaryKey(ScenicPicture record);
}