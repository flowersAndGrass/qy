package com.etc.qy.service;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.etc.qy.entity.TourNotes;
import com.etc.qy.util.PageData;

public interface TourNoteService {
public List<TourNotes> selectBytournoteName(String tourNoteName);
/**
 * �����μ�
 */
public PageData<TourNotes> hottourNote(int start,int pageSize);

/**
 * ����ܼ�¼��
 * @return
 */
public int gettotal();
}
