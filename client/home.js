
Template.home.events({
  'click #dropWorkshops': function() {
    Meteor.call('removeAllWorkshops');
  }
});


Template.home.helpers({
  kids: function() {
    return Kids.find();
  },
  workshops_entries: function() {
    return Workshops.find();
  },
  registered: function() {
    var registered_kids = Kids.find({
      workshops: {
        $all:[ this.name ]
      }
    });
    return registered_kids;
  },
  num_registered_in_workshop: function() {
    var registered_kids = Kids.find({
      workshops: {
        $all:[ this.name ]
      }
    }).fetch();
    return registered_kids.length;
  },
});
