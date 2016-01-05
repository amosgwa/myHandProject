Session.set('fileInfo', null);

//Current page is admin
Session.set('page', 'admin');

Template.admin.helpers({
	finishedUpload: function(){
		return {
			finished : function(index, fileInfo, context){
				console.dir(fileInfo);
				Session.set('fileInfo', fileInfo);
				console.dir(Session.get('fileInfo').url);
				showUploadedImage(Session.get('fileInfo').url);
			}
		}
	}
});

Template.admin.events({	
	'click #delete' : function(event){
		console.log("Removed");
		$("#images").toggle("slow");
		if(Session.get('fileInfo')) {
			Meteor.call('removeImage', Session.get('fileInfo').path);
		}
	},
	'submit form' : function(event){
		event.preventDefault();
		var e = {
			imageURL : Session.get('fileInfo').url,
			fileinfo : Session.get('fileInfo'),
			draft : document.getElementById("draft").checked,
			postContent : event.target.content.value,
		}
		console.log(e);

		// Insert post.
		Meteor.call('insertPost',e, function(error, result) {

			// Remove the image upon failure.
			if(error) {
				console.dir('Error Submission');
				// Only remove after the image is uploaded.
				if(Session.get('fileInfo')) {
					Meteor.call('removeImage', Session.get('fileInfo').path);
				}
			}
		});
	}
});