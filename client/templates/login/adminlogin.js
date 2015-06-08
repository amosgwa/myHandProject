

//meteor login config
Accounts.config({
  forbidClientAccountCreation : true
});

//login config
Accounts.ui.config({
	passwordSignupFields: "USERNAME_AND_EMAIL"
});