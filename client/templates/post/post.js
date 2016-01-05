Template.post.helpers({
});

Template.post.events({
	'click .deletePost' : function(){
		console.log(this._id);
		var confirmDelete = confirm("Delete this post?");
		
		if(confirmDelete) {
			Meteor.call('removeThisPost', this, function(error,success){
				if(error) {
					alert('Error Deletiion');
				} else {
					Router.go('/');
				}
			});
		} 
	}
})