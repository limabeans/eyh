var importedWorkshopsReact = new ReactiveVar(null);

Template.importWorkshops.helpers({
});


Template.importWorkshops.events({
  'change #formImportWorkshops input[type="file"]': function(e,template) {
    var fileInput = e.currentTarget;
    var file = fileInput.files[0];

    var reader = new FileReader();
    reader.onload = function() {
      console.log(reader.result);
      var inputObj = JSON.parse(reader.result);
      inputObj.workshops.forEach( function(elem) {
        var workshop = {};
        workshop.name = elem.name;
        workshop.leader = elem.leader;
        workshop.description = elem.description;
        workshop.category = elem.category;
        workshop.enrolled = 0;
        workshop.capacity = 2;
        Workshops.insert(workshop);
      });
    };
    reader.readAsText(file);
  },
  'submit #formImportWorkshops': function(e,template) {
    console.log('swag');
  }
  
});
