var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index", {
      title: "Home | Portfolio Creator"
    });
    // db.Example.findAll({}).then(function(dbExamples) {
      // res.render("index", {
      //   title: "Home | Portfolio Creator",
      //   msg: "Welcome!",
      //   examples: dbExamples
      // });
    // });
  // });

  // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  // // Render 404 page for any unmatched routes
  // app.get("*", function(req, res) {
  //   res.render("404");
  });

  app.get("/signup", function(req, res) {
    res.render("signup", {
      title: "Sign Up | Portfolio Creator"
    });
  });

  app.get("/login", function(req, res) {
    res.render("login", {
      title: "Log In | Portfolio Creator"
    });
  });

  app.get("/account", function(req, res) {
    res.render("account", {
      title: "Account | Portfolio Creator"
    });
  });

  app.get("/light", function(req, res) {
    res.render("light", {
      layout: "templates",
      title: "Light Template | Portfolio Creator"
    });
  });

  app.get("/dark", function(req, res) {
    db.User.findAll({}).then(function(result) {
      res.render("dark", {
        layout: "templates",
        title: "Dark Template | Portfolio Creator",
        data: result
      });
    });
  });
};
