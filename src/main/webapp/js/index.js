$(document).ready(
	$.get({
		url: "/form/",
		success: function(data) {
			data.components.forEach(function (component) {
				switch (component.type) {
					case "PASSWORD":
						$("<div>").load("/components/passwordFormField.html", function() {
							$("#formBody").append($(this).html());
						});
						break;
					case "EMAIL":
						$("<div>").load("/components/emailFormField.html", function() {
							$("#formBody").append($(this).html());
						});
						break;
					case "TEXT":
					default:
						$("<div>").load("/components/textFormField.html", function() {
							$("#formBody").append($(this).html());
						});
						break;
				}
			});
		}}
	)
);