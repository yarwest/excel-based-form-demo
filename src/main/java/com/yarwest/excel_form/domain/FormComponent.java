package com.yarwest.excel_form.domain;

public class FormComponent {

	private String name;
	private FormComponentTypeEnum type;
	private int id;
	private Validation validation;

	public FormComponent(String name, FormComponentTypeEnum type, int id) {
		this.name = name;
		this.type = type;
		this.id = id;
	}

	public FormComponent(String name, FormComponentTypeEnum type, int id, Validation validation) {
		this(name, type, id);
		this.validation = validation;
	}

	public int getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public Validation getValidation() {
		return validation;
	}

	public FormComponentTypeEnum getType() {
		return type;
	}
}
