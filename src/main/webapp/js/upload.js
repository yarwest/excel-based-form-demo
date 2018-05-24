$(document).ready(function () {
	$('#file-input').change(function(e){
		var fileName = e.target.files[0].name;
		console.log(fileName);
		$('#file-name').html(fileName);
	});
});
