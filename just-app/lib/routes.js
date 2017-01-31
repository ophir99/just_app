FlowRouter.route('/', {
	name:"Home",
	action(){
		BlazeLayout.render("main_layout", {main_nav:"nav_temp", main_con: "content_temp"});
	}
});


FlowRouter.route('/adminHome', {
	name: "Admin Home",
	action(){
		BlazeLayout.render("main_layout", {main_nav: "admin_nav", main_con: "admin_content"});
	}
});