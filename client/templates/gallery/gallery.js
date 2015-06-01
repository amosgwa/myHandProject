
//Current page is gallery
Session.set('page', 'gallery');

Template.gallery.helpers({
	galleryPosts : function(){
		return Posts.find({}, {sort : {date : -1}});
	}
});