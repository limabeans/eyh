Template.signup.helpers({
  workshop_entries: function() {
    return Workshops.find();
  }
});

if(Meteor.isClient) {
  var signupHooksObject = {
    //when submit operation succeeds
    onSuccess: function(formType, result) {
      //Updates each of the workshops' enrolled count by one.
      var workshops = this.insertDoc.workshops;
      for(var i = 0; i < workshops.length; i++) {
        var ws = Workshops.findOne({name: workshops[i]});
        var id = ws._id;
        Workshops.update({_id: id}, {$inc: {enrolled: 1}});
      }

      Router.go('account.nickname', {
        nickname: this.insertDoc.nickname
      });

    },
    onError: function(formType, error) {
      
    }
  };

  AutoForm.hooks({
    signupKidForm: signupHooksObject
  });


  Template.signup.events({
  });
}


