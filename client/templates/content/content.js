Template.content.helpers({
	'newestPost' : function(){
		//console.log(Posts.find({}, {sort : {date : -1}}));
		return Posts.find({}, {sort : {date : -1} ,limit:1});
	}
});