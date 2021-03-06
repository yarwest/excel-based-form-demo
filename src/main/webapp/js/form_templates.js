Templates = {};

loadTemplates("form_templates.html", function (data) {
	$('body').append(data);
	templatesLoaded();
});

Templates.onLoaded = function () {};
Templates.loaded = false;

function templatesLoaded() {
	$('script[type="text/x-handlebars-template"]').each(function () {
		var name = $(this).attr("name"),
			src = $(this).html(),
			partialName = $(this).attr("partial-name");
		if(partialName)
			Handlebars.registerPartial(partialName, src);
		Templates[name] = Handlebars.compile(src);
	});
	Templates.loaded = true;
	Templates.onLoaded();
}