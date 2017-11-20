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
 * 模糊查询
 * @param tourNoteName
 * @return
 */
    List<TourNotes> selectBytournoteName(String tourNoteName);
    
    /**
     * 热门游记
     * @return
     */
    List<TourNotes> hottourNote();
}