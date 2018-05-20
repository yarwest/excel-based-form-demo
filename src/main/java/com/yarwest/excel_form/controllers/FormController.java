package com.yarwest.excel_form.controllers;

import com.yarwest.excel_form.domain.FormModel;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/form")
public class FormController {

	@RequestMapping("/")
	public FormModel getFormModel() {
		System.out.println("Form Model passed on");
		return new FormModel();
	}
}
