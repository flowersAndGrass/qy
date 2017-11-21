package com.etc.qy.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.etc.qy.entity.TourNotes;

public interface TourNotesMapper {
    int deleteByPrimaryKey(int tourNoteId);

    int insert(TourNotes record);

    int insertSelective(TourNotes record);

    TourNotes selectByPrimaryKey(int tourNoteId);

    int updateByPrimaryKeySelective(TourNotes record);

    int updateByPrimaryKey(TourNotes record);

    
    /**
 * ģ����ѯ
 * @param tourNoteName
 * @return
 */
    List<TourNotes> selectBytournoteName(String tourNoteName);
    
    /**
     * �����μ�
     * @return
     */
    List<TourNotes> hottourNote(@Param(value = "start") int start,@Param(value = "pageSize")int pageSize);

    /**
     * ����ܼ�¼��
     * @return
     */
    int gettotal();
}