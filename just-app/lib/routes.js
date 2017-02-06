


FlowRouter.route('/adminHome', {
	name: "Admin Home",
	action(){
		BlazeLayout.render("main_layout", {main_nav: "admin_nav", main_con: "admin_content"});
	}
});


