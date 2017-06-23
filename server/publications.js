Meteor.publish('facts',function(){
  return Facts.find();
});
Meteor.publish('ugc',function(){
  return Ugc.find();
});
