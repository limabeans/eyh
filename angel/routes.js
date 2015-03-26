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

  //import workshop
  Router.route('/import', {
    name: 'import',
    template: 'import_workshops'
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

  WorkshopController = RouteController.extend({
    template: 'workshop',
    data: function() {
      return Workshops.findOne({name: this.params.name});
    },
    action: function() {
      this.render();
    }
  });

  //workshop landing page
  Router.route('/workshop/:name', {
    name: 'workshop.name',
    controller: 'WorkshopController'
  });
  
  AccountController = RouteController.extend({
    template: 'account',
    data: function() {
      console.log(this.params);
      return Kids.findOne({nickname: this.params.nickname});
    },
    action: function() {
      this.render();
    }
  });

  //account landing page
  Router.route('/account/:nickname', {
    name: 'account.nickname',
    controller: 'AccountController'
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
  });
}

