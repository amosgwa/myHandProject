Template.content.helpers({
	'newestPost' : function(){
		//console.log(Posts.find({}, {sort : {date : -1}}));
		return Posts.find({}, {sort : {date : -1} ,limit:1});
	}
});

Template.content.events({
	'click .deletePost' : function(){
		console.log(this._id);
		Meteor.call('removeThisPost', this._id);
	}
})