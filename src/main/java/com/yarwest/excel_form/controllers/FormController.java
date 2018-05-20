package com.yarwest.excel_form.controllers;

import com.yarwest.excel_form.domain.FormComponent;
import com.yarwest.excel_form.domain.FormModel;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/form")
public class FormController {

	private FormModel formModel;

	public FormController() {
		FormComponent[] components = new FormComponent[2];
		components[0] = new FormComponent("Username", "Text", 1);
		components[1] = new FormComponent("Password", "Password", 2);
		formModel = new FormModel();
	}

	@RequestMapping("/")
	public FormModel getFormModel() {
		return formModel;
	}

	@RequestMapping("/upload")
	public void uploadFormModel() {
		formModel = new FormModel();
	}
}
