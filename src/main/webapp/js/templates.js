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
	var $navigationScript = $('script[name="navigation"]'),
		$notificationScript = $('script[name="notifications"]'),
		navigationTemplate = Handlebars.compile($navigationScript.html()),
		notificationTemplate = Handlebars.compile($notificationScript.html());

	$navigationScript.remove();
	$notificationScript.remove();

	$('#navigation').append(navigationTemplate());

	var urlParams = new URLSearchParams(window.location.search),
		notifications = {};
	if(urlParams.has("successMessage")) {
		notifications.successMessage = urlParams.get("successMessage");
	}
	if(urlParams.has("errorMessage")) {
		notifications.errorMessage = urlParams.get("errorMessage");
	}
	if(urlParams.has("noticeMessage")) {
		notifications.noticeMessage = urlParams.get("noticeMessage");
	}
	$('#notifications').append(notificationTemplate(notifications));
}