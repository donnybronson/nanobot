Template.uSubmit.events({
    'submit form': function(e) {
    e.preventDefault();

    var post = {
      title: $(e.target).find('[name=title]').val()
    };
    // var newText = event.target.foodtype.value;
    // console.log("user entered: "+ newText);
    //Ugc.insert(post);
    //alert();
    // TODO
    // ADD DATA TO SESSION
    // ADD DATA TO PAGE
    // PERFORM CALCULATIONS :)

    //Session.set('testEntry',newText);
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
    var tm = Session.get('testEntry');
    // if (tm !== undefined){
    //   return 'the text entered was: ' + tm;
    // }
    return "hats rock";

  }
});
