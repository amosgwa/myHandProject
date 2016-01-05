Template.registerHelper('formatTime', function(context, options) {
	if(context)
		return moment(context).format('MMM DD, YYYY');
});

showUploadedImage = function(url) {
	$("#uploadedimage").attr("src",url);
	$("#images").toggle("slow");
};