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
});