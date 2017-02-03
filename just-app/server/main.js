import { Meteor } from 'meteor/meteor';
Courses = new Meteor.Collection('courses');
Meteor.startup(() => {
  // code to run on server at startup
});
