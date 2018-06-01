function validate(eventTarget) {
	var component = formModel.filter(function(item){return item.id === parseInt(eventTarget.id)})[0];
	component.value = eventTarget.value;
	component.errors = [];
	if(component.validation) {
		switch (component.validation.validationRule) {
			case "EQ":
				equals(component);
				break;
		}
	}

	validatePattern(component);

	// remove the old popup inside the same input container
	Array.from(eventTarget.parentNode.childNodes).forEach(function (element) {
		if (element.classList) {
			if (element.classList.contains("errorContainer")) {
				eventTarget.parentNode.removeChild(element);
			}
		}
	});

	// if there are errors, create a new error popup with a list of the error messages
	if(component.errors.length > 0) {
		eventTarget.setCustomValidity("Invalid field.");
		eventTarget.after(errorContainer(component.errors));
	} else {
		eventTarget.setCustomValidity("");
	}

	// also revalidate any components that look at this component
	formModel.filter(function(item){ return (item.validation?item.validation.ids.includes(component.id):false); }).forEach(function (item) {
		validate(document.getElementById(item.id));
	});

}

// Create error container
function errorContainer(errors) {
	var errorContainer = document.createElement("div");
	errorContainer.classList.add("errorContainer");
	errorContainer.classList.add("error");
	errorContainer.classList.add("card");
	var errorList = document.createElement("ul");
	errors.forEach(function (errorMessage) {
		var errorItem = document.createElement("li");
		errorItem.append(document.createTextNode(errorMessage));
		errorList.append(errorItem);
	});
	errorContainer.append(errorList);
	return errorContainer;
}

// Validate if the value matches the given pattern.
function validatePattern(component) {
	var regex = new RegExp("^(" + component.pattern + ")$");
	if(!regex.test(component.value)) {
		component.errors.push("Value does not match expected formatting");
	}
}

// Validate equals rule on component and related components
function equals(component) {
	formModel.filter(function(item){ return component.validation.ids.includes(item.id); }).forEach(function (item) {
		if(component.value !== item.value) {
			component.errors.push("Value should be matching the " + item.name + " field");
		}
	})

}