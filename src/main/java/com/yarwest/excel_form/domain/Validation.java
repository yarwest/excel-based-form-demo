package com.yarwest.excel_form.domain;

public class Validation {

	private String validationRule;
	private int[] ids;

	public Validation(String validation) {
		String[] validationComponents = validation.split("([(])");
		System.out.println(validationComponents);
		this.validationRule = validationComponents[0].trim().toUpperCase();
		validationComponents[1] = validationComponents[1].substring(0, validationComponents[0].length()-1);
		String[] validationIds = validationComponents[1].split(",");
		ids = new int[validationIds.length];
		for(int i = 0; i < validationIds.length; i++) {
			ids[i] = Integer.parseInt(validationIds[i]);
		}
	}

	public String getValidationRule() {
		return validationRule;
	}

	public int[] getIds() {
		return ids;
	}
}
