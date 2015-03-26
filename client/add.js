Template.add.helpers({
});

if(Meteor.isClient) {
  AutoForm.hooks({
    addWorkshopForm: {
      after: {
        'insert': function(error,result) {
          //console error here, although everything 'seems' to be running smoothly.
          //....
          //Uncaught Error: No form with ID addWorkshopForm is currently rendered. 
          //If this call originated from within a template event or helper, 
          //you should call without passing a formId to avoid seeing this error.
          //....
          Router.go('workshop.name', {name: this.insertDoc.name});
        }
      },
    }
  });



  Template.add.events({
    
  });
}
