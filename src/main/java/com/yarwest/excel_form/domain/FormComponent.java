package com.yarwest.excel_form.domain;

import java.util.ArrayList;
import java.util.List;

public class FormComponent {

	private String name;
	private FormComponentTypeEnum type;
	private List<String> errors;
	private String value;
	private String pattern;
	private int id;
	private Validation validation;

	public FormComponent(String name, FormComponentTypeEnum type, int id, String pattern) {
		this.name = name;
		this.type = type;
		this.id = id;
		this.pattern = pattern;
		this.value = null;
		this.errors = new ArrayList<>();
	}

	public FormComponent(String name, FormComponentTypeEnum type, int id, String pattern, Validation validation) {
		this(name, type, id, pattern);
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

	public String getPattern() {
		return pattern;
	}

	public String[] getErrors() {
		return errors.toArray(new String[errors.size()]);
	}

	public FormComponentTypeEnum getType() {
		return type;
	}
}
