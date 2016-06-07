package com.spb.demo.dao.impl;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.spb.demo.dao.SUserDao;
import com.spb.demo.dao.common.AbstractHibernateDao;
import com.spb.demo.model.SUser;

@Repository("sUserDao")
public class SUserDaoImpl extends AbstractHibernateDao<SUser> implements SUserDao{
	public SUserDaoImpl(){
		super();
		setClazz(SUser.class);
	}
	@Override
	public SUser findByName(String name) {
		@SuppressWarnings("unchecked")
		List<SUser>sUserList=getCurrentSession().createQuery(" from SUser where userName =:userName")
		.setParameter("userName", name).list();
		return sUserList.get(0);
	}

}
