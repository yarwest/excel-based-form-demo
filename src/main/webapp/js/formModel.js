var formModel = null;

$(document).ready(function () {
	var $formBody = $("#formBody");

	if(Templates.loaded) {
		renderPage();
	} else {
		Templates.onLoaded = renderPage;
	}

	function renderPage()  {
		$.get({
			url: "/form/",
			success: function(data) {
				$formBody.empty();
				formModel = data.components;
				var componentName;
				data.components.forEach(function (component) {
					switch (component.type) {
						case "PASSWORD":
							componentName = "passwordFormField";
							break;
						case "EMAIL":
							componentName = "emailFormField";
							break;
						case "TEXT":
						default:
							componentName = "textFormField";
							break;
					}

					// create input container, add the input template, and add the entire thing to the form
					var inputDiv = document.createElement("div");
					inputDiv.innerHTML = Templates[componentName](component);
					$formBody.append(inputDiv);
				});
			}
		})
	}
});