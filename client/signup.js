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
    alert('fuck yeah');
  },
};

AutoForm.hooks({
  "signupKidsForm": hooksObject
});
