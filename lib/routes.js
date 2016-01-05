//routes.js

Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound',
});

Router.route('gallery', {
	path: '/'
});

Router.route('/post/:id', {
	template: 'post',
	data: function(){
		console.log(this.params.id);
		return Posts.findOne({_id: this.params.id});
	}
});

Router.route('admin',{
	path: '/adminpost'
});

Router.route('adminlogin',{
	path: '/adminlogin',
	onBeforeAction: function () {
		if (! Meteor.user()) {
			if (Meteor.loggingIn()) {
				if(Meteor.user()) {
					Router.go('/');
				} else {
					Router.go('/adminlogin');
				}
			}
			else{
				this.next();
			}
		}
	}
});