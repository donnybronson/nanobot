Template.factItem.helpers({
  domain: function() {
    var a = document.createElement('a');
    a.href = this.url;
    return a.hostname;
  },
  unitCheck: function() {
  //  var b = 'much bloomin';
  //  return b;
        if(this.si !== 'integer'){
          return 'much';
        }else {
          return 'many';
        };
  }

});
