var db = require("../models");

module.exports = function(app) {
  //reCaptcha feature configuration
  app.post("/submit", function(req, res) {
    // g-recaptcha-response is the key that browser will generate upon form submit.
    // if its blank or null means user has not selected the captcha, so return the error.
    if (
      req.body["g-recaptcha-response"] === undefined ||
      req.body["g-recaptcha-response"] === "" ||
      req.body["g-recaptcha-response"] === null
    ) {
      return res.json({
        responseCode: 1,
        responseDesc: "Please select captcha"
      });
    }
    // Put your secret key here.
    var secretKey = process.env.RECAPTCHA_SECRET_KEY;
    // req.connection.remoteAddress will provide IP address of connected user.
    var verificationUrl =
      "https://www.google.com/recaptcha/api/siteverify?secret=" +
      secretKey +
      "&response=" +
      req.body["g-recaptcha-response"] +
      "&remoteip=" +
      req.connection.remoteAddress;
    // Hitting GET request to the URL, Google will respond with success or error scenario.
    request(verificationUrl, function(_error, _response, body) {
      body = JSON.parse(body);
      // Success will be true or false depending upon captcha validation.
      if (body.success !== undefined && !body.success) {
        return res.json({
          responseCode: 1,
          responseDesc: "Failed captcha verification"
        });
      }
      res.json({ responseCode: 0, responseDesc: "Sucess" });
    });
  });

  //When the user submit sign up form, his data will be captured here to process them into the authintication method
  app.post("/api/dashboard", function(req, res) {
    var userName = req.body.userName;
    var password = req.body.password;
    var email = req.body.email;

    db.User.create({
      userName: userName,
      password: password,
      email: email
    }).then(function(results) {
      res.json(results);
    });

    // res.render("dashboard", { username: userName });
  });

  //add profile info (names coming from the account page) to the DB
  app.post("/api/profileName/:UserId", function(req, res) {
    var profileFirstName = req.body.firstName;
    var profileLastName = req.body.lastName;
    var title = req.body.title;
    // console.log(req.params.UserId);

    db.ProfileName.create({
      profileFirstName: profileFirstName,
      profileLastName: profileLastName,
      title: title,
      UserId: parseInt(req.params.UserId)
    }).then(function(results) {
      res.json(results);
    });
  });

  //add profile info (experiences coming from the account page) to the DB
  app.post("/api/experiences/:UserId", function(req, res) {
    var comJectName = req.body.comJectName;
    var titleRole = req.body.titleRole;
    var description = req.body.desc;

    db.Experience.create({
      comJectName: comJectName,
      titleRole: titleRole,
      description: description,
      UserId: parseInt(req.params.UserId)
    }).then(function(result) {
      res.json(result);
    });
  });

  //add profile info (education coming from the account page) to the DB
  app.post("/api/education/:UserId", function(req, res) {
    var institution = req.body.institution;
    var degree = req.body.degree;

    db.Education.create({
      institution: institution,
      degree: degree,
      UserId: parseInt(req.params.UserId)
    }).then(function(result) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(result);
    });
  });

  //add user account inputs (license/certifications) to the DB
  app.post("/api/licert/:UserId", function(req, res) {
    var licertName = req.body.licertName;

    db.Licert.create({
      licertName: licertName,
      UserId: parseInt(req.params.UserId)
    }).then(function(result) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(result);
    });
  });

  //add user account inputs (skills and accomplishments) to the DB
  app.post("/api/skaccom/:UserId", function(req, res) {
    var skaccomName = req.body.skaccomName;

    db.Skaccom.create({
      skaccomName: skaccomName,
      UserId: parseInt(req.params.UserId)
    }).then(function(result) {
      console.log("this is the skill result:" + result);
      // We have access to the new todo as an argument inside of the callback function
      res.json(result);
    });
  });

  //add user account inputs (connection info) to the DB
  app.post("/api/connectLinks/:UserId", function(req, res) {
    var facebook = req.body.facebook;
    var linkedin = req.body.linkedin;
    var github = req.body.github;
    var instagram = req.body.instagram;

    db.ConnectLinks.create({
      facebook: facebook,
      linkedin: linkedin,
      github: github,
      instagram: instagram,
      UserId: parseInt(req.params.UserId)
    }).then(function(result) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(result);
    });
  });

  // app.get("/api/users", function(req, res) {
  //   // Here we add an "include" property to our options in our findAll query
  //   // We set the value to an array of the models we want to include in a left outer join
  //   db.User.findAll({
  //     include: [
  //       db.ProfileName,
  //       db.Experience,
  //       db.Skaccom,
  //       db.Licert,
  //       db.ConnectLinks,
  //       db.Education
  //     ]
  //   }).then(function(result) {
  //     console.log(result);
  //     res.json(result);
  //   });
  // });
};
