function loadTemplates(location, callback) {
	$.ajax({
		url: "../components/" + location,
		dataType: "html",
		cache: true,
		success: callback
	});
}

loadTemplates("generic_elements.html", function (data) {
	$('body').append(data);
	genericElementsLoaded();
});

function genericElementsLoaded() {
	var navigationTemplate = Handlebars.compile($('script[name="navigation"]').html());
	$('script[name="navigation"]').remove();
	$('#navigation').append(navigationTemplate());
}