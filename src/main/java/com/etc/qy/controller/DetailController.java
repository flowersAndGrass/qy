package com.etc.qy.controller;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.etc.qy.entity.Scenic;
import com.etc.qy.entity.ScenicPicture;
import com.etc.qy.entity.Ticket;
import com.etc.qy.service.ScenicPictureService;
import com.etc.qy.service.ScenicService;
import com.etc.qy.service.TicketService;

@Controller
public class DetailController {
	@Resource
	private ScenicService ss;
	@Resource
	private ScenicPictureService sps;
	@Resource
	private TicketService ts;
	
	/**
	 * ��ʾ��ϸҳ
	 * @param scenicId
	 * @param model
	 * @return
	 */
	@RequestMapping(value="/showDetial/{scenicId}",method=RequestMethod.GET)
	public String showDetial(@PathVariable(value="scenicId") int scenicId,Model model) {
		//��ȡ���㣬��Ʊ������ͼƬ
		Scenic scenic = ss.selectByPrimaryKey(scenicId);
		Ticket ticket = ts.selectByScenicId(scenicId);
		List<ScenicPicture> pictureList = sps.selectByScenicId(scenicId);
		//������Ϣ
		model.addAttribute("scenic", scenic);
		model.addAttribute("ticket", ticket);
		model.addAttribute("pictureList", pictureList);
		return "forwad:/detail.jsp";
	}
}
