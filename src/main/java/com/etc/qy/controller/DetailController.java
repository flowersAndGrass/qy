package com.etc.qy.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class DetailController {
	
	
	@RequestMapping(value="/showDetial/{scenicId}",method=RequestMethod.GET)
	public String showDetial() {
		
	}
}
