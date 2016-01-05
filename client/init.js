//meteor login config
Accounts.config({
  forbidClientAccountCreation : true
});

//login config
Accounts.ui.config({
	passwordSignupFields: "USERNAME_AND_EMAIL"
});

Meteor.startup(function() {
  Uploader.uploadUrl = Meteor.absoluteUrl("upload"); // Cordova needs absolute URL
  // Successful upload of image.
  Uploader.finished = function(index, fileInfo, templateContext) {
	Session.set('fileInfo', fileInfo);
	showUploadedImage(Session.get('fileInfo').url);

	if(Session.get('fileInfo') && !Session.get('fileInfo').error) {

		// Extract the post from template instance
		var postInput = templateContext.$("#contentInput")[0].value;
		var e = {
			imageURL : Session.get('fileInfo').url,
			fileinfo : Session.get('fileInfo'),
			draft : document.getElementById("draft").checked,
			postContent : postInput,
		}
		Session.set('fileInfo', null);
		console.log(e);

		// Insert post.
		Meteor.call('insertPost',e, function(error, result) {

			// Remove the image upon failure.
			if(error) {
				console.dir('Error Submission');
				// Only remove after the image is uploaded.
				if(Session.get('fileInfo')) {
					Meteor.call('removeImage', Session.get('fileInfo').path);
				}
			} else {
				Router.go('/');
			}
		});
	}
  }
});