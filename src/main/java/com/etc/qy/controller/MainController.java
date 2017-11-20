package com.etc.qy.controller;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.etc.qy.entity.Avaluate;
import com.etc.qy.entity.Scenic;
import com.etc.qy.entity.ScenicPicture;
import com.etc.qy.entity.TourNotes;
import com.etc.qy.service.AvaluateService;
import com.etc.qy.service.ScenicPictureService;
import com.etc.qy.service.ScenicService;
import com.etc.qy.service.TourNoteService;

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
	public List<ScenicPicture> getimg(@RequestBody int scenicId){
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
	public int getcount(@RequestBody int scenicId){
		int count = as.selectcount(scenicId);
		return count;
	}
	/**
	 * 热门景点，实现分页
	 * @return
	 */
	@RequestMapping(value="hottournote",method=RequestMethod.GET)
	@ResponseBody
	public List<TourNotes> hottourNote(){
		List<TourNotes> list = tns.hottourNote();
		return list;
		
	}
	
}
