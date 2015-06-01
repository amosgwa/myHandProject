Session.set('imgUrl', null);

//Current page is admin
Session.set('page', 'admin');

Template.admin.helpers({
	finishedUpload: function(){
		return {
			finished : function(index, fileInfo, context){
				console.log(fileInfo.url);
				Session.set('imgUrl', fileInfo.url);
			}
		}
	}
});

Template.admin.events({	
	'submit form' : function(event){
		event.preventDefault();
		//console.log(imageUrl);
		var e = {
			imageURL : Session.get('imgUrl'),
			title : event.target.title.value,
			postContent : event.target.content.value,
		}
		console.log(e);
		Meteor.call('insertPost',e);
	}
});