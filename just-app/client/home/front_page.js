import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';


Template.header.helpers({
	'courses'(){
		return Courses.find();
	}

});

Template.content_temp.helpers({
	'CourseD'(){
		var course_id = FlowRouter.getParam("id");
		return Courses.findOne({_id:course_id});
	},
	'videos'(){
		var course_name= FlowRouter.getParam("cname");	
		return Videos.find({courses_belongto:{"$in":[course_name]}});
	}
});

Template.all.helpers({
	'videos'(){
		return Videos.find();
	}
});