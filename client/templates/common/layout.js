//Keeps track of current page
Session.setDefault('currentPage', 0);

Meteor.autorun(function(){
	Meteor.subscribe("posts", Session.get('currentPage'));
});

Meteor.startup(function() {
	Template.layout.rendered = function(){


		$('.currentContent').css('visibility','visible').hide().stop().fadeIn('slow');


		$('.footer').css('visibility','visible').hide().stop().fadeIn('slow');

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