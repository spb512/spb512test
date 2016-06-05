package com.spb.demo.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
@Entity(name="User")
public class User implements Serializable{
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="id")
	private long id;
	@Column(name="age")
	private Integer age;
	@Column(name="name",length=32)
	private Integer name;
	@Column(name="nice_name",length=32)
	private String nice_name;
	public User() {
		
	}
	public User(long id, Integer age, Integer name, String nice_name) {
		super();
		this.id = id;
		this.age = age;
		this.name = name;
		this.nice_name = nice_name;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public Integer getAge() {
		return age;
	}
	public void setAge(Integer age) {
		this.age = age;
	}
	public Integer getName() {
		return name;
	}
	public void setName(Integer name) {
		this.name = name;
	}
	public String getNice_name() {
		return nice_name;
	}
	public void setNice_name(String nice_name) {
		this.nice_name = nice_name;
	}
	
}
