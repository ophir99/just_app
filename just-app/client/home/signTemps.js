import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';


Template.signUpTemp.helpers({
	'courses'(){
		return Courses.find();
	}
});


Template.signInTemp.events({
	'submit #signIn'(event){
		alert(event);
		return false;
	}
});


Template.signUpTemp.events({
	'submit #signUp'(event){
		alert(event);
		return false;
	}
});