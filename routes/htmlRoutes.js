var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index", {
      title: "Home | Portfolio Builder"
    });
  });

  //When user click on login at the navbar he will be directed to the login page
  app.get("/login", function(req, res) {
    res.render("login", {
      title: "Log In | Portfolio Builder"
    });
  });
  //When user click on dark template button on the account page it will open the dark template including all of their inputs
  app.get("/dark/:id", function(req, res) {
    db.User.findOne({
      include: [
        db.ProfileName,
        db.Experience,
        db.Skaccom,
        db.Licert,
        db.ConnectLink,
        db.Education,
        db.ProfileImage
      ],
      where: { id: req.params.id }
    }).then(function(results) {
      res.render("dark", {
        layout: "templates",
        title: "Dark Template | Portfolio Builder",
        data: results
      });
    });
  });
  //When user click on light template button on the account page it will open the dark template including all of their inputs
  app.get("/light/:id", function(req, res) {
    db.User.findOne({
      include: [
        db.ProfileName,
        db.Experience,
        db.Skaccom,
        db.Licert,
        db.ConnectLink,
        db.Education,
        db.ProfileImage
      ],
      where: { id: req.params.id }
    }).then(function(results) {
      res.render("light", {
        layout: "templates",
        title: "Light Template | Portfolio Builder",
        data: results
      });
    });
  });
  //When user click on light template button on the account page it will open the dark template including all of their inputs
  app.get("/additional/:id", function(req, res) {
    db.User.findOne({
      include: [
        db.ProfileName,
        db.Experience,
        db.Skaccom,
        db.Licert,
        db.ConnectLink,
        db.Education,
        db.ProfileImage
      ],
      where: { id: req.params.id }
    }).then(function(results) {
      res.render("additional", {
        layout: "templates",
        title: "Additional Template | Portfolio Builder",
        data: results
      });
    });

  });

  //When user click on light template image in the main page he will be directed to the light template page
  app.get("/lightTemplateView", function(req, res) {
    res.render("lightTemplateView", {
      layout: "templates",
      title: "Light Template | Portfolio Builder"
    });
  });

  //When user click on dark template image in the main page he will be directed to the dark template page
  app.get("/darkTemplateView", function(req, res) {
    res.render("darkTemplateView", {
      layout: "templates",
      title: "Dark Template | Portfolio Builder"
    });
  });

  //When user click on alternative template image in the main page he will be directed to the alternative template page
  app.get("/additionalTemplateView", function(req, res) {
    res.render("additionalTemplateView", {
      layout: "templates",
      title: "Additional Template | Portfolio Builder"
    });
  });

  //When user click on improvements in the main page he will be directed to this page
  app.get("/improvements", function(req, res) {
    res.render("improvements", {
      title: "Portfolio Builder | Improvements"
    });
  });

  //When user sign up or login he will be directed to the account page
  app.get("/account/:id", function(req, res) {
    var userId = req.params.id;

    db.User.findOne({
      include: [
        db.ProfileName,
        db.Experience,
        db.Skaccom,
        db.Licert,
        db.Education,
        db.ProfileImage,
        db.ConnectLink
      ],
      where: { id: userId }
    }).then(function(results) {
      res.render("account", {
        title: "Account | Portfolio Creator",
        data: results
      });
    });
  });

  app.get("/api/profileName/:UserId", function(req, res) {
    //Selecting user signup/data to display in account page
    db.User.findOne({ where: { id: req.params.UserId } }).then(function(results) {
      var fullName = results.profileFirstName + " " + results.profileLastName;
      res.render("dark", {
        title: fullName + " | Portfolio Creator",
        data: results
      });
    });
  });
};
