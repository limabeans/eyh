Template.signup.helpers({
});
if(Meteor.isClient) {

  Template.signup.events({
    "click .btn": function(event) {
      var nickname=document.getElementById('nickname').value;
      var first_name=document.getElementById('first_name').value;
      var last_name=document.getElementById('last_name').value;
      var password=document.getElementById('password1').value;
      var email=document.getElementById('email').value;
      var phone_number=document.getElementById('phone_number').value;
      var school=document.getElementById('school').value;
      var workshops=document.getElementById('workshops').value;
      Kids.insert({
        nickname: nickname,
        first_name: first_name,
        last_name: last_name,
        password: password,
        email: email,
        phone_number: phone_number,
        school: school,
        workshops: workshops
      });
      Router.go('/');
      return false;
    }
  });
}

