Template.uSubmit.events({
    'submit form': function(e) {
    e.preventDefault();

    var post = {
      title: $(e.target).find('[name=title]').val()
    };
    //Ugc.insert(post);
    //alert();
    // TODO
    // ADD DATA TO SESSION
    // ADD DATA TO PAGE
    // PERFORM CALCULATIONS :)
    //alert(var);
  //  post._id = Session.set('testvar', post);
  // post._id = Ugc.insert(post);
    // console.log(e.target.find('[name=Milk]').val() );
    //console.log(post.title.toString() );
    //Session.set('cup','conical deco');
  //  Session.set('d1',post);
  }
});
Template.uSubmit.helpers({
  unitCheck: function() {
        if(this.si !== 'integer'){
          return 'much';
        }else {
          return 'many';
        };
  }
});
Template.uSubmit.helpers({
  uText: function(){
  //return Session.get('cup');
 var tm = Session.get('testvar');
 return 'the text entered was: ' + tm.name.val();
//
  // return 'word up';
  }
})//
