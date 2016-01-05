Meteor.methods({
	'insertPost' : function(e){
		if(Meteor.user()) {
				Posts.insert({
				content : e.postContent,
				date : new Date(),
				draft : e.draft,
				imgurl : e.imageURL,
				fileinfo : e.fileinfo
			})
		} else {
			console.log("Cannot update : User not logged in.");
		}
		
	},
	'removeThisPost' : function(thisPost){
		if(Meteor.user()) {
			Posts.remove({
				_id : thisPost._id
			});
			console.log(thisPost.fileinfo.path);
			Meteor.call('removeImage', thisPost.fileinfo.path);
		} else {
			console.log("Cannot remove : User not logged in.");
		}
	},
	'removeImage' : function(path){
		UploadServer.delete(path);
	}
});