package com.yarwest.excel_form.domain;

public class FormComponent {

	private String name;
	private FormComponentTypeEnum type;
	private String value;
	private int id;
	private Validation validation;

	public FormComponent(String name, FormComponentTypeEnum type, int id) {
		this.name = name;
		this.type = type;
		this.id = id;
		this.value = null;
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

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}

	public Validation getValidation() {
		return validation;
	}

	public FormComponentTypeEnum getType() {
		return type;
	}
}
