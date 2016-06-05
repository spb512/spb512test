package com.spb.demo.service.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.spb.demo.dao.IUserDao;
import com.spb.demo.dao.common.IOperations;
import com.spb.demo.model.User;
import com.spb.demo.service.IUserService;
import com.spb.demo.service.common.AbstractService;


@Service("userService")
public class UserService extends AbstractService<User> implements IUserService {

    @Resource(name="usersDao")
    private IUserDao dao;
    
    public UserService() {
        super();
    }

    @Override
    protected IOperations<User> getDao() {
        return this.dao;
    }
}