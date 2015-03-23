Template.signup.helpers({
  workshop_entries: function() {
    return Workshops.find();
  }
});


if(Meteor.isClient) {

  Template.signup.events({
  });
}
