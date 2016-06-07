package com.spb.demo.service.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.spb.demo.dao.SUserDao;
import com.spb.demo.dao.common.IOperations;
import com.spb.demo.model.SUser;
import com.spb.demo.service.SUserService;
import com.spb.demo.service.common.AbstractService;

@Service("sUserService")
public class SUserServiceImpl extends AbstractService<SUser> implements SUserService{
	
	@Resource(name="sUserDao")
    private SUserDao dao;

	@Override
	public SUser findByName(String name) {
		return dao.findByName(name);
	}

	@Override
	protected IOperations<SUser> getDao() {
		return this.dao;
	}

}
