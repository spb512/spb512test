package com.spb.demo.controller;

import javax.servlet.http.HttpServletRequest;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.subject.Subject;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/home")
public class HomeController {
	/**
	 * 进入登录页面
	 * @param model
	 * @return
	 */
	@RequestMapping("/login")
	public String loginMathod(Model model ){
		return "login";
	}
	@RequestMapping("/logins")
	public String login(@RequestParam(value="name")String name,String password){
		Subject user = SecurityUtils.getSubject();
		return "";
	}
}
