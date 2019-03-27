var db = require("../models");

module.exports = function(app) {
  //reCaptcha feature
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
    request(verificationUrl, function (_error, _response, body) {
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

  app.post("/api/users", function(req, res) {
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var password = req.body.password;
    var email = req.body.email;

    db.User.create({
      firstName: firstName,
      lastName: lastName,
      password: password,
      email: email
    }).then(function(result) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(result);
    });

    app.post("/api/certifications", function(req, res) {
      var nameOfCert = req.body.nameOfCert;
  
      db.Certifications.create({
        nameOfCert: nameOfCert,
      }).then(function(result) {
        // We have access to the new todo as an argument inside of the callback function
        res.json(result);
      });

    app.post("/api/contact", function(req, res) {
      var facebook = req.body.facebook;
      var linkedin = req.body.linkedin;
      var github = req.body.github;
      var instagram = req.body.instagram;
  
      db.ContactLinks.create({
        facebook: facebook,
        linkedin: linkedin,
        github: github,
        instagram: instagram
      }).then(function(result) {
        // We have access to the new todo as an argument inside of the callback function
        res.json(result);
      });

      app.post("/api/education", function(req, res) {
        var institution = req.body.institution;
        var degree = req.body.degree;
    
        db.Education.create({
          institution: institution,
          degree: degree
        }).then(function(result) {
          // We have access to the new todo as an argument inside of the callback function
          res.json(result);
        });

  });

  

  // // Get all examples
  // app.get("/api/examples", function(req, res) {
  //   db.Example.findAll({}).then(function(dbExamples) {
  //     res.json(dbExamples);
  //   });
  // });

  // app.get("/api/keys", function(req, res) {
  //   console.log(process.env.RECAPTCHA_SITE_KEY);
  //   var keys = {
  //     reCaptchaSiteKey: process.env.RECAPTCHA_SITE_KEY
  //   };
  //   res.json(keys);
  // });

  // // Create a new example
  // app.post("/api/examples", function(req, res) {
  //   db.Example.create(req.body).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });

  // // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });
};
