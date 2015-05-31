Meteor.startup(function() {
	Template.layout.rendered = function(){
	//var postDay = Template._globalHelpers('getPostDay')[0];

	//Session.set('postDay', postDay);
	//console.log(Session.get('postDay'));
	//console.log(Posts.find().fetch());

		var width = $(window).width();
		//console.log(width);
		//alert("Got in");

		if (width < 550) {
			$(".toggleA").hide();
			$(".toggleB").show();
			//alert("A hide B show");
		}else{
			$(".toggleB").hide();
			$(".toggleA").show();
			//alert("B hide A show");
		}
	};
});

//Current page is layout
Session.set('page', 'layout');

//Get todayPost
// Template.registerHelper("getPostDay", function () {
//     return Counter.find().fetch();
// });