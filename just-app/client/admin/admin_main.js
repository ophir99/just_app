import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
Courses = new Meteor.Collection('courses');
Chapters = new Meteor.Collection('chapters');
Videos = new Meteor.Collection('videos');

Template.admin_nav.events({
	'submit .createCourse'(event){
		var courseName = event.target.category_name.value;
		var duration = event.target.duration.value;
		var price = event.target.price.value;
		var description = event.target.description.value;
		var tags = event.target.tags.value;
		if (courseName == '' || duration == '' || price == '' || description == '' || tags =='') {
			 var $toastContent = $('<span class="red-text">Enter All  fields</span>');
  			Materialize.toast($toastContent, 1000, 'white rounded', );
		}else{
			Courses.insert({course_name: courseName, course_duration: duration, course_price: price, course_description: description,
				course_tags:tags});
			  $('#createExam').modal('close');
			  var $toastContent = $('<span class="green-text">Course has created</span>');
  			Materialize.toast($toastContent, 1000, 'white rounded', );
  			event.target.category_name.value = "";
		}
		return false;
	},

	'submit .createChapter':function (event){
		var ChapterName = event.target.chapter_name.value;
		var courses_ticked = $('input[type=checkbox]:checked').map(function()
            {
                return $(this).val();
            }).get();

	if (courses_ticked.length ==0 || ChapterName =='') {
		var $toastContent = $('<span class="red-text">Please fill all fields</span>');
  			Materialize.toast($toastContent, 1000, 'white rounded', );
	}else{
		Chapters.insert({chapter_name: ChapterName, course:courses_ticked });
		    $("input[type=checkbox]:checkbox").prop("unchecked");
		    //$(".kselItems").attr('checked', this.checked);
		var $toastCon = $('<span class="green-text">Chapter has created</span>');
		$('#createChapter').modal('close');
  			Materialize.toast($toastCon, 1000, 'white rounded', );
	}

		return false;
},

/*'click .course_check':function(){
	var courses_tick = $('input.course_check[type=checkbox]:checked').map(function()
            {
                return $(this).val();
            }).get();

	/*Meteor.call('filter_chaps', courses_tick, function(error, result){


      if (error) {
         console.log(error);}
         else {
            console.log('wow');
         }


	}); 

	
},*/

'submit .vid_upl': function(event){
	alert("there??");
	var coursesV_ticked = $('input.Vcourse[type=checkbox]:checked').map(function()
            {
                return $(this).val();
            }).get();
	var chaptersV_ticked = $('input.Vchap[type=checkbox]:checked').map(function()
            {
                return $(this).val();
            }).get();
	var vid_name = event.target.vid_name.value;
	var vid_url = event.target.vid_url.value;
	if (coursesV_ticked.length == 0 || chaptersV_ticked.length ==0 || vid_name == '' || vid_url == '') {
		var $toastContent = $('<span class="red-text">Please fill all fields</span>');
  			Materialize.toast($toastContent, 1000, 'white rounded', );
	}
	else{alert("wow");

		Videos.insert({name: vid_name, video_url: vid_url, courses_belongto: coursesV_ticked, chapters_belongto: chaptersV_ticked});
		var $toastContent = $('<span class="green-text">Video entered</span>');
  			Materialize.toast($toastContent, 1000, 'white rounded', );
  			$('#upload_course').modal('close');
	}
	return false;
},


		
		
		
});


Template.admin_nav.helpers({
	courses(){
		return Courses.find();
	},
	chapters(){

		return Chapters.find();


	},
	videos(){
		return Chapters.find();
	}
});

/*


Meteor.methods({
	filter_chaps:function(var_catch){
		
		alert(var_catch);
		var allChap = Chapters.find();
		alert(allChap);

	}
});

*/

Template.admin_content.helpers({

	videos(){
		return Videos.find();
	}

});

Template.admin_content.events({
	'click .delVid'(event){
		alert(this._id);
		
		Videos.remove(this._id);
		var $toastContent = $('<span class="red-text">Video deleted</span>');
  			Materialize.toast($toastContent, 1000, 'black rounded', );
		return false;

	}
});