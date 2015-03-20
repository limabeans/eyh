Template.add.helpers({
});


if(Meteor.isClient) {
  Template.add.events({
    "click .btn": function(event) {
      var name = document.getElementById('name').value;
      var leader = document.getElementById('leader').value;
      var description = document.getElementById('description').value;
      Workshops.insert({
        name: name,
        leader: leader,
        description: description
      });

      Router.go('/');
      return false;
    }
  });
}
