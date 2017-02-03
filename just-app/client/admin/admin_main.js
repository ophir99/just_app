import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
Courses = new Meteor.Collection('courses');

Template.admin_nav.events({
	'submit .createCourse'(event){
		var courseName = event.target.category_name.value;
		if (courseName == '') {
			 var $toastContent = $('<span class="red-text">Enter Course name</span>');
  			Materialize.toast($toastContent, 1000, 'white rounded', );
		}else{
			Courses.insert({course_name: courseName});
			  $('#createExam').modal('close');
			  var $toastContent = $('<span class="green-text">Course has created</span>');
  			Materialize.toast($toastContent, 1000, 'white rounded', );
  			event.target.category_name.value = "";
		}
		return false;
	}
});


Template.admin_nav.helpers({
	courses(){
		return Courses.find();
	}
});