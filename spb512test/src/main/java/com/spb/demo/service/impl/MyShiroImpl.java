package com.spb.demo.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.SimpleAuthenticationInfo;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.spb.demo.dao.SUserDao;
import com.spb.demo.model.Role;
import com.spb.demo.model.SUser;
import com.spb.demo.service.SUserService;

public class MyShiroImpl extends AuthorizingRealm{
	
	@Resource(name="sUserDao")
    private SUserDao dao;
	/**
	 * 权限认证
	 */
	@Override
	protected AuthorizationInfo doGetAuthorizationInfo(
			PrincipalCollection principals) {
		//获取登录时输入的用户名  
		String loginName = (String) principals.fromRealm(getName()).iterator().next();
		//到数据库查是否有此对象  
		SUser sUser = dao.findByName(loginName);
        if(sUser!=null){  
            //权限信息对象info,用来存放查出的用户的所有的角色（role）及权限（permission）  
            SimpleAuthorizationInfo info=new SimpleAuthorizationInfo();  
            //用户的角色集合  
            info.setRoles(sUser.getRolesName());  
            //用户的角色对应的所有权限，如果只使用角色定义访问权限，下面的四行可以不要  
            List<Role> roleList=sUser.getRoleList();  
            for (Role role : roleList) {  
                info.addStringPermissions(role.getPermissionsName());  
            }  
            return info;  
        }  
        return null; 
	}
	/** 
     * 登录认证
     */ 
	@Override
	protected AuthenticationInfo doGetAuthenticationInfo(
			AuthenticationToken token) throws AuthenticationException {
		//UsernamePasswordToken对象用来存放提交的登录信息  
        UsernamePasswordToken tokens=(UsernamePasswordToken) token;  
        //查出是否有此用户  
        String username = tokens.getUsername();
        SUser sUser=dao.findByName(username);  
        if(sUser!=null){  
            //若存在，将此用户存放到登录认证info中  
            return new SimpleAuthenticationInfo(sUser.getUserName(), sUser.getPassword(), getName());  
        }  
        return null;  
    }  

}
