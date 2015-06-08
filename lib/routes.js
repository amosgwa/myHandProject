//routes.js

Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound',
});

Router.route('home', {
	path: '/'
});

Router.route('admin',{
	path: '/adminpost'
});

Router.route('gallery',{
	path: '/gallery'
});

Router.route('adminlogin',{
	path: '/adminlogin'
});