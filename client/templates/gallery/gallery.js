Template.gallery.helpers({
	galleryPosts : function(){
		return Posts.find({}, {sort : {date : -1}});
	}
});