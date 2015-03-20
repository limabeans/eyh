Template.signup.helpers({
  workshop_entries: function() {
    return Workshops.find();
  },
});
if(Meteor.isClient) {

  Template.signup.events({
    "change #box": function(event) {
      var workshop = event.target.value;
      var attending = event.target.checked;
      Session.set(workshop, attending);
    },
    "click .btn": function(event) {
      var nickname=document.getElementById('nickname').value;
      var first_name=document.getElementById('first_name').value;
      var last_name=document.getElementById('last_name').value;
      var password=document.getElementById('password1').value;
      var email=document.getElementById('email').value;
      var phone_number=document.getElementById('phone_number').value;
      var school=document.getElementById('school').value;

      map = []
      for (name in Session.keys) {
        if(Session.keys[name] === "true") {
          map.push({
            name: name
          });
        }
      }

      Kids.insert({
        nickname: nickname,
        first_name: first_name,
        last_name: last_name,
        password: password,
        email: email,
        phone_number: phone_number,
        school: school,
        workshops: map
      });

      return false;
    }
  });
}

