Template.home.helpers({
  kids: function() {
    return Kids.find();
  },
  workshops_entries: function() {
    return Workshops.find();
  }
});
