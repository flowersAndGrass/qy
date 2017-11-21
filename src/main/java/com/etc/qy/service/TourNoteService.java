package com.etc.qy.service;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.etc.qy.entity.TourNotes;
import com.etc.qy.util.PageData;

public interface TourNoteService {
public List<TourNotes> selectBytournoteName(String tourNoteName);
/**
 * 热门游记
 */
public PageData<TourNotes> hottourNote(int start,int pageSize);

/**
 * 获得总记录数
 * @return
 */
public int gettotal();
}
