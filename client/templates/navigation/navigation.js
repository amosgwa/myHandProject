Template.navigation.helpers({
	//Check if the navigation is on the valid page
	validPage : function(){
		if(Router.current().options.route._path == '/adminpost'){
			return false;
		}
		return true;
	}
});