package com.spb.demo.controller;

import javax.annotation.Resource;
import javax.validation.Valid;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.spb.demo.model.SUser;
import com.spb.demo.service.SUserService;

@Controller
@RequestMapping("/home")
public class HomeController {
	@Resource(name="sUserService")
    private SUserService sUserService;
	/**
	 * 实际的登录代码
	 * 如果登录成功，跳转至首页；登录失败，则将失败信息反馈对用户
	 * 
	 * @param request
	 * @param model
	 * @return
	 */
	/*@RequestMapping(value = "/dologin")
	public String doLogin(HttpServletRequest request, Model model) {
		String msg = "";
		String userName = request.getParameter("userName");
		String password = request.getParameter("password");
		System.out.println(userName);
		System.out.println(password);
		UsernamePasswordToken token = new UsernamePasswordToken(userName, password);
		token.setRememberMe(true);
		Subject subject = SecurityUtils.getSubject();
		try {
			subject.login(token);
			if (subject.isAuthenticated()) {
				return "redirect:/";
			} else {
				return "login";
			}
		} catch (IncorrectCredentialsException e) {
			msg = "登录密码错误. Password for account " + token.getPrincipal() + " was incorrect.";
			model.addAttribute("message", msg);
			System.out.println(msg);
		} catch (ExcessiveAttemptsException e) {
			msg = "登录失败次数过多";
			model.addAttribute("message", msg);
			System.out.println(msg);
		} catch (LockedAccountException e) {
			msg = "帐号已被锁定. The account for username " + token.getPrincipal() + " was locked.";
			model.addAttribute("message", msg);
			System.out.println(msg);
		} catch (DisabledAccountException e) {
			msg = "帐号已被禁用. The account for username " + token.getPrincipal() + " was disabled.";
			model.addAttribute("message", msg);
			System.out.println(msg);
		} catch (ExpiredCredentialsException e) {
			msg = "帐号已过期. the account for username " + token.getPrincipal() + "  was expired.";
			model.addAttribute("message", msg);
			System.out.println(msg);
		} catch (UnknownAccountException e) {
			msg = "帐号不存在. There is no user with username of " + token.getPrincipal();
			model.addAttribute("message", msg);
			System.out.println(msg);
		} catch (UnauthorizedException e) {
			msg = "您没有得到相应的授权！" + e.getMessage();
			model.addAttribute("message", msg);
			System.out.println(msg);
		}
		return "login";
	}*/
	@RequestMapping(value="/login",method=RequestMethod.GET)  
    public String loginForm(Model model){  
        model.addAttribute("sUser", new SUser());  
        SUser sUser=sUserService.findByName("tom"); 
        System.out.println(sUser.getPassword()+"&&&&&&&&&&&&&&&&&&");
        return "/login";  
    }  
      
    @RequestMapping(value="/login",method=RequestMethod.POST)  
    public String login(@Valid SUser sUser,BindingResult bindingResult,RedirectAttributes redirectAttributes){  
        try {  
            if(bindingResult.hasErrors()){  
                return "/login";  
            }  
            //使用权限工具进行用户登录，登录成功后跳到shiro配置的successUrl中，与下面的return没什么关系！  
            SecurityUtils.getSubject().login(new UsernamePasswordToken(sUser.getUserName(), sUser.getPassword()));  
            return "redirect:/user/list";  
        } catch (AuthenticationException e) {  
            redirectAttributes.addFlashAttribute("message","用户名或密码错误");  
            return "redirect:/login";  
        }  
    }  
      
    @RequestMapping(value="/logout",method=RequestMethod.GET)    
    public String logout(RedirectAttributes redirectAttributes ){   
        //使用权限管理工具进行用户的退出，跳出登录，给出提示信息  
        SecurityUtils.getSubject().logout();    
        redirectAttributes.addFlashAttribute("message", "您已安全退出");    
        return "redirect:/login";  
    }   
      
    @RequestMapping("/403")  
    public String unauthorizedRole(){  
        return "/403";  
    }  
}
