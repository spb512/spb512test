package com.spb.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/home")
public class HomeController {
	/**
	 * 进入登录页面
	 * @param model
	 * @return
	 */
	@RequestMapping("login")
	public String loginMathod(Model model ){
		return "login";
	}
}
