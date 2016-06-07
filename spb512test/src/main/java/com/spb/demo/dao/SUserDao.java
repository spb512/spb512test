package com.spb.demo.dao;

import com.spb.demo.dao.common.IOperations;
import com.spb.demo.model.SUser;

public interface SUserDao extends IOperations<SUser>{
	SUser findByName(String name);
}
