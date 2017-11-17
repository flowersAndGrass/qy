package com.etc.qy.dao;

import com.etc.qy.entity.CityPicture;

public interface CityPictureMapper {
    int deleteByPrimaryKey(int pictureId);

    int insert(CityPicture record);

    int insertSelective(CityPicture record);

    CityPicture selectByPrimaryKey(int pictureId);

    int updateByPrimaryKeySelective(CityPicture record);

    int updateByPrimaryKey(CityPicture record);
}