Template.signup.helpers({
  workshop_entries: function() {
    return Workshops.find();
  }
});


if(Meteor.isClient) {

  Template.signup.events({
  });
}
var hooksObject = {

  // Called when any submit operation succeeds
  onSuccess: function(formType, result) {
    console.log(this);
    var workshops = this.insertDoc.workshops;
    for(var i = 0; i < workshops.length; i++) {
      //Workshops.update({name: workshops[i]},{ $inc: {capacity: 1}});
      var ws = Workshops.findOne({name: workshops[i]});
      var id = ws._id;
      Workshops.update({_id: id}, {$inc: {enrolled: 1}});
    }
  },
};

AutoForm.hooks({
  "signupKidsForm": hooksObject
});
