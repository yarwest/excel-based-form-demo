function validate(eventTarget) {
	var component = formModel.filter(function(item){return item.id === parseInt(eventTarget.id)})[0];
	component.value = eventTarget.value;
	if(component.validation) {
		switch (component.validation.validationRule) {
			case "EQ":
				equals(component);
				break;
		}
	}
}

function equals(component) {
	formModel.filter(function(item){ return component.validation.ids.includes(item.id); }).forEach(function (item) {
		if(component.value !== item.value) {
			console.log("Error: " + component.value + " does not match " + item.value);
			return;
		}
	})

}