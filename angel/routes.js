if (Meteor.isClient) {
  Router.route('/signup', function() {
    this.render('signup');
  });
  Router.route('/', function() {
    this.render('home');
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
  });
}

