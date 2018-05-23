$(document).ready(function () {
	var timer = null,
		$formBody = $("#formBody");

	if(Templates.loaded) {
		renderPage();
	} else {
		Templates.onLoaded = renderPage;
	}

	function renderPage() {
		$.get({
			url: "/form/",
			success: function(data) {
				data.components.forEach(function (component) {
					switch (component.type) {
						case "PASSWORD":
							$formBody.append(
								Templates["passwordFormField"](component)
							);
							break;
						case "EMAIL":
							$formBody.append(
								Templates["emailFormField"](component)
							);
							break;
						case "TEXT":
						default:
							$formBody.append(
								Templates["textFormField"](component)
							);
							break;
					}
					$formBody.on("keyup", "*", function() {
						clearTimeout(timer);
						timer = setTimeout(function() {
							validate(component)
						}, 500);
					});
				});
			}}
		)
	}
});