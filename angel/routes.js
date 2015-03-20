if (Meteor.isClient) {

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
  Router.route('/signup', {
    name: 'signup'
  });
  SignupController = ApplicationController.extend({
    action: function() {
      this.render('signup');
    }
  });


  Router.route('/add', {
    name: 'add'
  });
  NewController = RouteController.extend({
    action: function() {
      this.render('add');
    }
  });

  Router.route('/add/:_id', function() {
    var params = this.params;
    var id = params._id;
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
  });
}

