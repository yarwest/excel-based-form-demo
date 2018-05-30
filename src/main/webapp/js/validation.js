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
		var errorContainer = document.createElement("div");
		errorContainer.classList.add("errorContainer");
		errorContainer.classList.add("error");
		errorContainer.classList.add("card");
		var errorList = document.createElement("ul");
		component.errors.forEach(function (errorMessage) {
			var errorItem = document.createElement("li");
			errorItem.append(document.createTextNode(errorMessage));
			errorList.append(errorItem);
		});
		errorContainer.append(errorList);
		eventTarget.after(errorContainer);
	}

	// also revalidate any components that look at this component
	formModel.filter(function(item){ return (item.validation?item.validation.ids.includes(component.id):false); }).forEach(function (item) {
		validate(document.getElementById(item.id));
	});

}

function equals(component) {
	formModel.filter(function(item){ return component.validation.ids.includes(item.id); }).forEach(function (item) {
		if(component.value !== item.value) {
			component.errors.push("Value should be matching the " + item.name + " field");
		}
	})

}