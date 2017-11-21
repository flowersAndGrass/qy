package com.etc.qy.serviceImp;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.etc.qy.dao.TourNotesMapper;
import com.etc.qy.entity.Tour;
import com.etc.qy.entity.TourNotes;
import com.etc.qy.service.TourNoteService;
import com.etc.qy.util.PageData;

@Service
public class TourNoteServiceImpl implements TourNoteService {

	@Resource
	private TourNotesMapper tnm;
	public List<TourNotes> selectBytournoteName(String tourNoteName) {
		// TODO Auto-generated method stub
		return tnm.selectBytournoteName(tourNoteName);
	}

	public PageData<TourNotes> hottourNote(int page, int pageSize) {
		// TODO Auto-generated method stub
		PageData<TourNotes> pd = new PageData<TourNotes>();
		int start = 0;
		if(page>=1){
			start = (page-1)*pageSize;
		}
		List<TourNotes> list1 = tnm.hottourNote(start, pageSize);
		pd.setData(list1);
		pd.setPage(page);
		pd.setPageSize(pageSize);
		pd.setTotal(gettotal());
		return pd;
	}

	public int gettotal() {
		// TODO Auto-generated method stub
		return tnm.gettotal();
	}

}
