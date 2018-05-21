package com.yarwest.excel_form.domain;

public class FormComponent {

	private String name;
	private FormComponentTypeEnum type;
	private int id;

	public FormComponent(String name, FormComponentTypeEnum type, int id) {
		this.name = name;
		this.type = type;
		this.id = id;
	}

	public int getId() {
		return id;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getName() {
		return name;
	}

	public void setType(FormComponentTypeEnum type) {
		this.type = type;
	}

	public FormComponentTypeEnum getType() {
		return type;
	}
}
