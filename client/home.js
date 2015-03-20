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
        $all:[{name: this.name }]
      }
    });

    return registered_kids;
  }
});
