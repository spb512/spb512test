package com.spb.demo.dao.impl;

import org.springframework.stereotype.Repository;

import com.spb.demo.dao.IUserDao;
import com.spb.demo.dao.common.AbstractHibernateDao;
import com.spb.demo.model.User;

@Repository("usersDao")
public class UserDao extends AbstractHibernateDao<User> implements IUserDao{
	public UserDao(){
		super();setClazz(User.class);
	}
}
