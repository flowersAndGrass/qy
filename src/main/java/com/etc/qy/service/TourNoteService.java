package com.etc.qy.service;

import java.util.List;

import com.etc.qy.entity.TourNotes;

public interface TourNoteService {
public List<TourNotes> selectBytournoteName(String tourNoteName);
}
