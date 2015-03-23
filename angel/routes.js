if (Meteor.isClient) {
  //home
  Router.route('/', {
    name: 'home'
  });
  ApplicationController = RouteController.extend({
  });
  HomeController = ApplicationController.extend({
    action: function() {
      this.render('home');
    }
  });

  //signup
  Router.route('/signup', {
    name: 'signup'
  });
  SignupController = ApplicationController.extend({
    action: function() {
      this.render('signup');
    }
  });

  //add (workshop)
  Router.route('/add', {
    name: 'add'
  });
  NewController = RouteController.extend({
    action: function() {
      this.render('add');
    }
  });

  //workshop landing page
  Router.route('/workshop/:name', function() {
    this.render('workshop', {
      data: function() {
        return Workshops.findOne({name: this.params.name});
      }
    });
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
  });
}

