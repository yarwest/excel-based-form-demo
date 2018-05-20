package com.yarwest.excel_form.domain;

public class FormComponent {

	private String name;
	private String type;

	public FormComponent(String name, String type) {
		this.name = name;
		this.type = type;
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
