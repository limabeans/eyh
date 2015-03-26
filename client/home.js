
Template.home.events({
  'click #dropWorkshops': function() {
    Meteor.call('removeAllWorkshops');
  }
});


Template.workshopsList.helpers({
  maxCapacity: function() {
    var workshop = Workshops.findOne({_id: this._id});
    if(workshop.enrolled < workshop.capacity) {
      return false;
    }
    return true;
  },
  workshops_entries: function() {
    return Workshops.find();
  },

});

Template.home.helpers({
  kids: function() {
    return Kids.find();
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
