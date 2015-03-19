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

  Router.route('/signup', function() {
    this.render('signup');
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
  });
}

