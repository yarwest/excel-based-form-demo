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
					$formBody.append(
						Templates[componentName](component)
					);
				});
			}
		})
	}
});