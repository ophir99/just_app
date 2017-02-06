import { Meteor } from 'meteor/meteor';
Courses = new Meteor.Collection('courses');
Chapters = new Meteor.Collection('chapters');
Videos = new Meteor.Collection('videos');

Meteor.startup(() => {
  // code to run on server at startup
});

