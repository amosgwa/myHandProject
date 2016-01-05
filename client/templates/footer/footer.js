Template.footer.helpers({
	//Check if the navigation is on the valid page
	validPage : function(){
		if(Router.current().options.route._path != '/'){
			return false;
		}
		return true;
	},
	showPrev: function(){
		//console.log(Session.get('currentPage') + " postSize " + Posts.find().fetch().length);
		if(Session.get('currentPage') < 1 ){
			return false;
		}
		return true;
	},
	showNext: function(){
		if(Posts.find().fetch().length < 2){
			return false;
		}
		return true;
	}
});

Template.footer.events({
	'click #prevPost' : function(){
		$('.currentContent').css('visibility','visible').hide().fadeIn('slow');
		console.log('Clicked prev');
		Session.set('currentPage',Session.get('currentPage')-1);
	},
	'click #nextPost' : function(){
		$('.currentContent').css('visibility','visible').hide().fadeIn('slow');
		console.log('Clicked next');
		Session.set('currentPage',Session.get('currentPage')+1);
	}
})