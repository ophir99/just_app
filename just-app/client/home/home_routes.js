FlowRouter.route('/courseView/:cname/:id', {
	name: "Admin Home",
	action(){
		BlazeLayout.render("main_layout", {main_nav:"nav_temp", main_con: "content_temp"});
	}
});

FlowRouter.route('/', {
	name:"Home",
	action(){
		BlazeLayout.render("main_layout", {main_nav:"nav_temp", main_con: "all"});
	}
});


FlowRouter.route('/user/signIn', {
	name:"signIn",
	action(){
		BlazeLayout.render("main_layout", {main_nav:"nav_temp", main_con:"signInTemp"});
	}
});

FlowRouter.route('/user/signUp', {
	name:"signUp",
	action(){
		BlazeLayout.render("main_layout", {main_nav:"nav_temp", main_con:"signUpTemp"});
	}
});

FlowRouter.route('/courses/All', {
	name:"signIn",
	action(){
		BlazeLayout.render("main_layout", {main_nav:"nav_temp", main_con:"all"});
	}
});