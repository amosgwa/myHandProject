Meteor.methods({
	'insertPost' : function(e){
		Posts.insert({
			content : e.postContent,
			date : new Date(),
			day : 0,
			imgurl : e.imageURL
		})
	}
});