package com.etc.qy.serviceImp;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.etc.qy.dao.TourNotesMapper;
import com.etc.qy.entity.TourNotes;
import com.etc.qy.service.TourNoteService;

@Service
public class TourNoteServiceImpl implements TourNoteService {

	@Resource
	private TourNotesMapper tnm;
	public List<TourNotes> selectBytournoteName(String tourNoteName) {
		// TODO Auto-generated method stub
		return tnm.selectBytournoteName(tourNoteName);
	}

}
