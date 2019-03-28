var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
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

  //When user click on login at the navbar he will be directed to the login page
  app.get("/login", function (req, res) {
    res.render("login", {
      title: "Log In | Portfolio Creator"
    });
  });
  //When user click on dark template image in the main page he will be directed to the dark template page
  app.get("/dark/:id", function (req, res) {
    db.User.findOne({
      include: [
        db.ProfileName,
        db.Experience,
        db.Skaccom,
        db.Licert,
        db.ConnectLinks,
        db.Education
      ],
      where: { id: req.params.id }
    }).then(function(results) {
      for(var i = 0 ; i < results.Education.length ; i++) {
        console.log(results.Education[i]);
      }

      res.render("dark", {
        layout: "templates",
        title: "Dark Template | Portfolio Creator",
        data: results
      });
    });

    // res.render("dark", {
    //   layout: "templates",
    //   title: "Dark Template | Portfolio Creator"
    // });
  });
  //When user click on light template image in the main page he will be directed to the light template page
  app.get("/light", function (req, res) {
    res.render("light", {
      layout: "templates",
      title: "Light Template | Portfolio Creator"
    });
  });


  // db.User.findAll({
  //   include: [
  //     db.ProfileName,
  //     db.Experience,
  //     db.Skaccom,
  //     db.Licert,
  //     db.ConnectLinks,
  //     db.Education
  //   ]
  // }).then(function (result) {
  //   console.log(result);
  //   console.log(result[0].dataValues);
  //   console.log(result[0].dataValues.profileFirstName);
  //   res.render("dark", {
  //     layout: "templates",
  //     title: "Dark Template | Portfolio Creator",
  //     data: result[0].dataValues
  //   });
  // });

  app.get("/account/:id", function (req, res) {
    res.render("account", {
      title: "Account | Portfolio Creator",
      data: {
        id: req.params.id
      }
    });
  });

  app.get("/dashboard/:id", function (req, res) {
    db.User.findOne({ where: { id: req.params.id } }).then(function (results) {
      res.render("dashboard", {
        title: "Dashboard | Portfolio Creator",
        data: results
      });
    });
  });

  app.get("/api/profileName/:UserId", function (req, res) {
    db.User.findOne({ where: { id: req.params.UserId } }).then(function (results) {
      var fullName = results.profileFirstName + " " + results.profileLastName;
      res.render("dark", {
        title: fullName + " | Portfolio Creator",
        data: results
      });
    });
  });

  //   db.User.findOne({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(result) {
  //       console.log(result);
  //       // console.log(result[0].dataValues);
  //       // console.log(result[0].dataValues.firstName);
  //       res.render("dashboard", {
  //         title: "Dashboard | Portfolio Creator",
  //         data: result.dataValues
  //       });
  //     });
  //   res.render("dashboard", {
  //     title: "Dashboard | Portfolio Creator"
  //   });
  // });
};
