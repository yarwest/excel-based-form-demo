package com.yarwest.excel_form.controllers;

import com.yarwest.excel_form.domain.FormComponent;
import com.yarwest.excel_form.domain.FormComponentTypeEnum;
import com.yarwest.excel_form.domain.FormModel;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/form")
public class FormController {

	private FormModel formModel;

	public FormController() {
		FormComponent[] components = new FormComponent[2];
		components[0] = new FormComponent("Username", FormComponentTypeEnum.TEXT, 1);
		components[1] = new FormComponent("Password", FormComponentTypeEnum.PASSWORD, 2);
		formModel = new FormModel();
		formModel.addComponents(components);
	}

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public FormModel getFormModel() {
		return formModel;
	}

	@RequestMapping(value = "/submit", method = RequestMethod.POST)
	public void sumbit() {
		System.out.println("Sumbitted");
	}

	@RequestMapping(value = "/upload", method = RequestMethod.POST)
	public void uploadFormModel() {
		formModel = new FormModel();
	}
}
