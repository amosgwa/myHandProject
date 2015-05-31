Template.customUpload.created = function() {
  Uploader.init(this);
}

Template.customUpload.rendered = function () {
  Uploader.render.call(this);
};

Template.customUpload.events({
  'click .start': function (e) {
  	console.log(e);
  	console.log(Template.instance());

	//Upload the image at last
    Uploader.startUpload.call(Template.instance(), e);

    console.log($(e.delegateTarget).find("[name='content']").val());

  	//Update the Posts db
  	console.log(Session.get('postDay'));
		var e = {
			postDay : Session.get('postDay'),
			imageURL : Session.get('imgUrl'),
			postContent : $(e.delegateTarget).find("[name='content']").val()
		}
	Meteor.call('insertPost',e);

  }
});

Template.customUpload.helpers({
  'infoLabel': function() {
    var instance = Template.instance();

    // we may have not yet selected a file
    var info = instance.info.get()
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