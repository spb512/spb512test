package com.spb.demo.dao.common;

import java.io.Serializable;
import java.util.List;

import javax.annotation.Resource;

import org.hibernate.Session;
import org.hibernate.SessionFactory;

import com.google.common.base.Preconditions;

public class AbstractHibernateDao<T extends Serializable> implements IOperations<T> {
	private Class<T> clazz;
	@Resource(name="sessionFactory")
	private SessionFactory sessionFactory;
	protected void setClazz(final Class<T> clazzToSet){
		this.clazz=Preconditions.checkNotNull(clazzToSet);
	}
	protected final Session getCurrentSession(){
		return sessionFactory.getCurrentSession();
	}
	@SuppressWarnings("unchecked")
	@Override
	public T findOne(long id) {
		return (T) getCurrentSession().get(clazz, id);
	}

	@SuppressWarnings("unchecked")
	@Override
    public final List<T> findAll() {
        return getCurrentSession().createQuery("from " + clazz.getName()).list();
    }
	@Override
	public void create(T entity) {
		Preconditions.checkNotNull(entity);
		getCurrentSession().saveOrUpdate(entity);
	}

	@Override
	public T update(T entity) {
		Preconditions.checkNotNull(entity);
		getCurrentSession().update(entity);
		return entity;
	}

	@Override
	public void delete(T entity) {
		Preconditions.checkNotNull(entity);
		getCurrentSession().delete(entity);
	}

	@Override
	public void deleteById(long entityId) {
		final T entity=findOne(entityId);
		Preconditions.checkNotNull(entity);
		delete(entity);
	}

}
