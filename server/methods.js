Meteor.methods({
	'insertPost' : function(e){
		Posts.insert({
			content : e.postContent,
			date : new Date(),
			title : e.title,
			imgurl : e.imageURL
		})
	}
});