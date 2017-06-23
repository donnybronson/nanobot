Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { return Meteor.subscribe('facts'); }
});

Router.route('/',{name: 'factsList'});
Router.route('/facts/:_id', {
  name: 'factPage',
  data: function() {return Facts.findOne(this.params._id);}
});
Router.onBeforeAction('dataNotFound',{only: 'factPage'});
