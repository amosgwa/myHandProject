Session.set('fileInfo', null);

Template.admin.created = function() {
	Uploader.init(this);
}

Template.admin.rendered = function () {
	Uploader.render.call(this);
};

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
	},
	'infoLabel': function() {
		var instance = Template.instance();

		// we may have not yet selected a file
		var info = instance.info.get();
		if (!info) {
			return;
		}

		var progress = instance.globalInfo.get();

		// we display different result when running or not
		return progress.running ?
		info.name + ' - ' + progress.progress + '% - [' + progress.bitrate + ']' :
		info.name + ' - ' + info.size + 'B';
	},
	'progress': function() {
		return Template.instance().globalInfo.get().progress + '%';
	}
});

Template.admin.events({	
	'click #delete' : function(event){
		console.log("Removed");
		$("#images").toggle("slow");
		if(Session.get('fileInfo') && !Session.get('fileInfo').error) {
			Meteor.call('removeImage', Session.get('fileInfo').path);
		}
	},
	'submit form' : function(event){
		event.preventDefault();
		Uploader.startUpload.call(Template.instance(), event);
	}
});