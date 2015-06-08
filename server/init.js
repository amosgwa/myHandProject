Meteor.publish("posts", function(skipCursor){
	return Posts.find({}, {sort : {date : -1},skip: skipCursor});
});

//users
Meteor.publish('users', function() {
	return Meteor.users.find({_id:this.userId});
});

Meteor.startup(function () {
  UploadServer.init({
    tmpDir: process.env.PWD + '/.uploads/tmp',
    uploadDir: process.env.PWD + '/uploads/',
    checkCreateDirectories: true //create the directories for you
  })
});