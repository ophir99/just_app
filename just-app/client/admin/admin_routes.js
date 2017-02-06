FlowRouter.route('/editCourse/:id', {
	name:"Edit Course",
	action(){
		BlazeLayout.render("main_layout", {main_nav: "admin_nav", main_con: "EditCourse"});
	}
});

FlowRouter.route('/editChapter/:id', {
	name:"Edit Chapter",
	action(){
		BlazeLayout.render("main_layout", {main_nav: "admin_nav", main_con: "EditChapter"});
	}
});

FlowRouter.route('/editVideo/:id', {
	name:"Edit Video",
	action(){
		BlazeLayout.render("main_layout", {main_nav: "admin_nav", main_con: "EditVideo"});
	}
});