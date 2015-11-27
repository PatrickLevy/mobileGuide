Template.navigation.events({
    'click .nav-tabs': function (e) {
     
      console.log("click");
      console.log("e", e);

      $(e.currentTarget).addClass("active");
    }
  });