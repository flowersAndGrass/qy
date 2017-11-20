package com.etc.qy.dao;

import java.util.List;

import com.etc.qy.entity.TourNotes;

public interface TourNotesMapper {
    int deleteByPrimaryKey(int tourNoteId);

    int insert(TourNotes record);

    int insertSelective(TourNotes record);

    TourNotes selectByPrimaryKey(int tourNoteId);

    int updateByPrimaryKeySelective(TourNotes record);

    int updateByPrimaryKey(TourNotes record);

    
    /**
 * Ä£ºý²éÑ¯
 * @param tourNoteName
 * @return
 */
    List<TourNotes> selectBytournoteName(String tourNoteName);
}