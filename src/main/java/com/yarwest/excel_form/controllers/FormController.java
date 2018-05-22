package com.yarwest.excel_form.controllers;

import com.yarwest.excel_form.domain.FormComponent;
import com.yarwest.excel_form.domain.FormComponentTypeEnum;
import com.yarwest.excel_form.domain.FormModel;
import com.yarwest.excel_form.domain.Validation;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.util.Iterator;
import java.util.logging.Level;
import java.util.logging.Logger;

@RestController
@RequestMapping("/form")
public class FormController {

	private FormModel formModel;

	private static final Logger LOGGER = Logger.getLogger(FormController.class.getName());

	public FormController() {
		FormComponent[] components = new FormComponent[2];
		components[0] = new FormComponent("Username", FormComponentTypeEnum.TEXT, 1);
		components[1] = new FormComponent("Password", FormComponentTypeEnum.PASSWORD, 2);
		formModel = new FormModel();
		formModel.addComponents(components);
	}

	@GetMapping("/")
	public FormModel getFormModel() {
		return formModel;
	}

	@PostMapping("/submit")
	public void sumbit() {
		System.out.println("Sumbitted");
	}

	@PostMapping("/upload")
	public void uploadFormModel(@RequestParam("file") MultipartFile file) {
		formModel = new FormModel();

		try {

			InputStream inputStream = file.getInputStream();
			XSSFWorkbook workBook = new XSSFWorkbook(inputStream);
			XSSFSheet firstSheet = workBook.getSheetAt(0);
			Iterator<Row> rowIterator = firstSheet.iterator();

			while (rowIterator.hasNext()) {
				Row row = rowIterator.next();
				Iterator<Cell> cellIterator = row.cellIterator();

				// Name
				Cell cell = cellIterator.next();
				String name = cell.getStringCellValue();

				// Type enum
				cell = cellIterator.next();
				FormComponentTypeEnum type = FormComponentTypeEnum.valueOf(cell.getStringCellValue().trim().toUpperCase());

				// Id
				cell = cellIterator.next();
				int id = (int)cell.getNumericCellValue();

				if(cellIterator.hasNext()) {
					cell = cellIterator.next();
					formModel.addComponent(new FormComponent(name, type, id, new Validation(cell.getStringCellValue())));
				} else {
					formModel.addComponent(new FormComponent(name, type, id));
				}
			}

		} catch (IOException e) {
			LOGGER.log(Level.SEVERE, e.getMessage(), e);
		}
	}
}
