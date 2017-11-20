package com.etc.qy.controller;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.etc.qy.entity.City;
import com.etc.qy.entity.Scenic;
import com.etc.qy.entity.TourNotes;
import com.etc.qy.entity.view_scenic_avaluate;
import com.etc.qy.service.CityService;
import com.etc.qy.service.ScenicService;
import com.etc.qy.service.TourNoteService;
import com.etc.qy.service.view_scenic_avaluateService;

@Controller
public class SearchController {

	@Resource
	private CityService cs;
	@Resource
	private ScenicService ss;
	@Resource
	private TourNoteService tns;
	@Resource
	private view_scenic_avaluateService vsas;
	
	@RequestMapping(value="/search",method=RequestMethod.POST)
	public String search(String wd,Model model){
		//优先级查询，第一次查询城市，没有查询景点，在没有查询游记
		//第一次查询城市
		City city = cs.selectBycityName(wd);
		if(city!=null){
			//不为空返回到城市搜索页面（大类）
			model.addAttribute("list", city);
			return "subclass";
		}
		else{
			//第二次查询景点
			List<Scenic> list = ss.selectByscenicName(wd);
			if(list.size()!=0){
				model.addAttribute("list", list.get(0));
				//返回到景点详情页面
				return "detail";
			}
			else{
				//都为空查询第三次，游记
				List<TourNotes> list1 = tns.selectBytournoteName(wd);
				if(list1.size()!=0){
					model.addAttribute("list",list1);
					return "bbs";
				}
				else{
					//如果都没有，跳到一个错误页面
					return "error";
				}
			}
		}
	}
	
	
	@RequestMapping(value="hotscenic",method=RequestMethod.GET)
	@ResponseBody
	public List<view_scenic_avaluate> gethotscenic(){
		List<view_scenic_avaluate> list = vsas.selectByhot();
		for (int i = 0; i < 10; i++) {
			System.out.println(list);
			return list;
		}
		return null;
		
		
		
	}
	
	
	
	
	
}
