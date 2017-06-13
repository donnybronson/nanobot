Meteor.publish('facts',function(){
  return Facts.find();
});
