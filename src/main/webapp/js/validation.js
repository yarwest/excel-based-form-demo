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
	// if there are errors, display the error popup
	if(component.errors.length > 0) {
		// but first remove the old popup inside the same input container
		Array.from(document.getElementsByClassName("errorContainer")).forEach(function (container) {
			eventTarget.parentNode.removeChild(container);
		});

		// and then create a new one with a list of the error messages
		var errorContainer = document.createElement("div");
		errorContainer.classList.add("errorContainer");
		var errorList = document.createElement("ul");
		component.errors.forEach(function (errorMessage) {
			var errorItem = document.createElement("li");
			errorItem.append(document.createTextNode(errorMessage));
			errorList.append(errorItem);
		});
		errorContainer.append(errorList);
		eventTarget.after(errorContainer);
	}

}

function equals(component) {
	formModel.filter(function(item){ return component.validation.ids.includes(item.id); }).forEach(function (item) {
		if(component.value !== item.value) {
			component.errors.push("Value should be matching the " + item.name + " field");
		}
	})

}