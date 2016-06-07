package com.spb.demo.service;

import com.spb.demo.dao.common.IOperations;
import com.spb.demo.model.SUser;

public interface SUserService extends IOperations<SUser>{
	SUser findByName(String name);
}
