if(Meteor.isServer) {
  Meteor.startup(function() {
    return Meteor.methods({
      removeAllWorkshops: function() {
        Workshops.remove({});
      }
    });
  });
}


