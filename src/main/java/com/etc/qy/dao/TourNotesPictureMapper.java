package com.etc.qy.dao;

import com.etc.qy.entity.TourNotesPicture;

public interface TourNotesPictureMapper {
    int deleteByPrimaryKey(int pictureId);

    int insert(TourNotesPicture record);

    int insertSelective(TourNotesPicture record);

    TourNotesPicture selectByPrimaryKey(int pictureId);

    int updateByPrimaryKeySelective(TourNotesPicture record);

    int updateByPrimaryKey(TourNotesPicture record);
}