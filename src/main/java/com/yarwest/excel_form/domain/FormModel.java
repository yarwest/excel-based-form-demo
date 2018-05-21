package com.yarwest.excel_form.domain;

import java.util.ArrayList;
import java.util.Arrays;

public class FormModel {

	private ArrayList<FormComponent> components;

	public FormModel() {
		components = new ArrayList<>();
	}

	public FormModel(FormComponent[] components) {
		this();
		this.components.addAll(Arrays.asList(components));
	}

	public void addComponents(FormComponent[] components) {
		this.components.addAll(Arrays.asList(components));
	}

	public void addComponent(FormComponent component) {
		this.components.add(component);
	}

	public FormComponent[] getComponents() {
		return this.components.toArray(new FormComponent[components.size()]);
	}
}
