package com.yarwest.excel_form.domain;

public class FormComponent {

	private String name;
	private String type;
	private int id;

	public FormComponent(String name, String type, int id) {
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

	public void setType(String type) {
		this.type = type;
	}

	public String getType() {
		return type;
	}
}
