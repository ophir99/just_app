import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';



Template.dashBoard.helpers({
	'Courses'(){
		return Courses.find({});
	},
	'Chapters'(){

		return Chapters.find();


	},
});


Template.EditCourse.helpers({
	course:()=>{
		var course_id = FlowRouter.getParam("id");
		return Courses.findOne({_id:course_id});
	}
	

});

Template.EditChapter.helpers({
	courses:()=>{
		return Courses.find();
	},
	chapter:()=>{
		var chapter_id = FlowRouter.getParam("id");
		return Chapters.findOne({_id:chapter_id});
	}

});

Template.EditVideo.helpers({
	courses:()=>{
		return Courses.find();
	},
	chapter:()=>{
		
		return Chapters.find();
	},
	video:()=>{
		var video_id = FlowRouter.getParam("id");
		return Videos.findOne({_id:video_id});
	}

});

Template.EditCourse.events({
	'submit .editCourse'( event){
		var cid = event.target.c_id.value;
		var courseName = event.target.category_name.value;
		var duration = event.target.duration.value;
		var price = event.target.price.value;
		var description = event.target.description.value;
		var tags = event.target.tags.value;
		if (courseName == '' || duration == '' || price == '' || description == '' || tags =='') {
			 var $toastContent = $('<span class="red-text">Enter All  fields</span>');
  			Materialize.toast($toastContent, 1000, 'white rounded', );
		}else{
			Courses.update({_id:cid}, {$set:{course_name:courseName, course_duration:duration, course_price:price
				, course_description:description, course_tags:tags}});
			var $toastContent = $('<span class="green-text">Course updated</span>');
  			Materialize.toast($toastContent, 1000, 'white rounded', );
		}
		return false;
	},

});


Template.EditChapter.events({
	'submit .editChapter': function(event){
		var courses_ticked = $('input[type=checkbox]:checked').map(function()
            {
                return $(this).val();
            }).get();
		var chap_name = event.target.chapter_name.value;
		var chid = event.target.chid.value;
		if (courses_ticked.length == 0 ||  chap_name == '') {
		var $toastContent = $('<span class="red-text">Please fill all fields</span>');
  			Materialize.toast($toastContent, 1000, 'black rounded', );
	}
	else{

		
		Chapters.update({_id:chid},{$set: {chapter_name:chap_name, course:courses_ticked }});
		var $toastContent = $('<span class="green-text">Chapter updated</span>');
  			Materialize.toast($toastContent, 1000, 'white rounded');

		
  			
	}
		return false;
	}

});


Template.EditVideo.events({
	'submit #editVideo': function(event){
		var courses_ticked = $('input.coursesV[type=checkbox]:checked').map(function()
            {
                return $(this).val();
            }).get();
		var chapters_ticked = $('input.chaptersV[type=checkbox]:checked').map(function()
            {
                return $(this).val();
            }).get();
		var vid_name = event.target.video_name.value;
		var vid_url = event.target.video_url.value;
		var vid = event.target.vid.value;
		if (courses_ticked.length == 0 ||chapters_ticked.length == 0 ||  vid_name == '' || vid_url=='') {
		var $toastContent = $('<span class="red-text">Please fill all fields</span>');
  			Materialize.toast($toastContent, 1000, 'black rounded', );
	}
	else{

		
		Videos.update({_id:vid},{$set: {name:vid_name, video_url:vid_url, courses_belongto:courses_ticked,chapters_belongto:chapters_ticked }});
		var $toastContent = $('<span class="green-text">Video updated</span>');
  			Materialize.toast($toastContent, 1000, 'black rounded');

		
  			
	}
		return false;
	}

});


Template.dashBoard.events({
	'click .delCourse'(event){
		alert(this._id);

		Courses.remove(this._id);
		var $toastContent = $('<span class="red-text">Course deleted</span>');
  			Materialize.toast($toastContent, 1000, 'black rounded', );
		return false;
	},

	'click .delChapter'(event){
		alert(this._id);

		Chapters.remove(this._id);
		var $toastContent = $('<span class="red-text">Course deleted</span>');
  			Materialize.toast($toastContent, 1000, 'black rounded', );
		return false;
	}
});