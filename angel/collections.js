Workshops = new Mongo.Collection("workshops");
Workshops.attachSchema( new SimpleSchema ({
  name: {
    type: String,
    label: 'name'
  },
  leader: {
    type: String,
    label: 'leader'
  },
  description: {
    type: String,
    label: 'description'
  },
}));

Kids = new Mongo.Collection("kids");
Kids.attachSchema(new SimpleSchema ({
  nickname: {
    type: String,
    label: 'Nickname'
  },
  first_name: {
    type: String,
    label: 'First Name'
  },
  last_name: {
    type: String,
    label: 'Last Name'
  },
  password: {
    type: String,
    label: 'Password'
  },
  email: {
    type: String,
    label: 'Email Address'
  },
  phone_number: {
    type: String,
    label: 'Phone Number'
  },
  school: {
    type: String,
    label: 'School'
  },
  workshops: {
    type: [String],
    label: 'Workshops',
    autoform: {
      options: function() {
        return Workshops.find().map(function(doc, ind, curs) {
          return {
            label: doc.name+' -- '+doc.leader,
            value: doc.name
          };
        });
      }
    }
  }
}));
