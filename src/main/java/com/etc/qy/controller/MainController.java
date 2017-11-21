package com.etc.qy.controller;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.etc.qy.entity.Avaluate;
import com.etc.qy.entity.Scenic;
import com.etc.qy.entity.ScenicPicture;
import com.etc.qy.entity.TourNotes;
import com.etc.qy.service.AvaluateService;
import com.etc.qy.service.ScenicPictureService;
import com.etc.qy.service.ScenicService;
import com.etc.qy.service.TourNoteService;
import com.etc.qy.util.PageData;

@Controller
public class MainController {

	@Resource
	private ScenicService ss;
	@Resource
	private ScenicPictureService sps;
	@Resource
	private AvaluateService as;
	@Resource
	private TourNoteService tns;
	
	/**
	 * 近日推荐遍历
	 * @return
	 */
	@RequestMapping(value="recommed",method=RequestMethod.GET)
	@ResponseBody
	public List<Scenic> recommend(){
		List<Scenic> list = ss.selectByrecomm();
		return list;
		
	}
	/**
	 * 近日推荐找图片
	 * @param scenicId
	 * @return
	 */
	@RequestMapping(value="img",method=RequestMethod.GET)
	@ResponseBody
	public List<ScenicPicture> getimg( int scenicId){
		List<ScenicPicture> list = sps.selectByScenicId(scenicId);
		return list;
		
	}
	/**
	 * 评论条数
	 * @param scenicId
	 * @return
	 */
	@RequestMapping(value="times",method=RequestMethod.GET)
	@ResponseBody
	public int getcount(int scenicId){
		int count = as.selectcount(scenicId);
		return count;
	}
	/**
	 * 热门景点，实现分页
	 * @return
	 */
	@RequestMapping(value="hottournote/page/{page}",method=RequestMethod.GET)
	@ResponseBody
	public PageData<TourNotes> hottourNote(@PathVariable(value="page") int page,@RequestParam(value="pageSize",defaultValue="8") int pageSize){
		PageData<TourNotes> pd = tns.hottourNote(page, pageSize);
		return pd;
		
	}
	
}
