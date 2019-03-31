var db = require("../models");

module.exports = function(app) {

  //When the user submit sign up form, his data will be captured here to process them into the authintication method
  app.post("/api/account", function(req, res) {
    var uid = req.body.uid;
    var password = req.body.password;
    var email = req.body.email;

    db.User.create({
      password: password,
      email: email,
      uid: uid
    }).then(function(results) {
      res.json(results);
    });
  });

  //app.get for the account page
  app.get("/api/account", function(req, res) {
    db.User.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  //add profile info (names coming from the account page) to the DB
  app.post("/api/profileName/:UserId", function(req, res) {
    var profileFirstName = req.body.firstName;
    var profileLastName = req.body.lastName;
    var title = req.body.title;
    var UserId = parseInt(req.params.UserId);

    db.ProfileName.create({
      profileFirstName: profileFirstName,
      profileLastName: profileLastName,
      title: title,
      UserId: UserId
    }).then(function(results) {
      res.json(results);
    });
    
    // isUnique(UserId).then(function(results) {
    //   if (results === null) {
    //     db.ProfileName.create({
    //       profileFirstName: profileFirstName,
    //       profileLastName: profileLastName,
    //       title: title,
    //       UserId: UserId
    //     }).then(function(results) {
    //       res.json(results);
    //     });
    //   } else {
    //     return;
    //   }
    // });
  });

  // function isUnique(id) {
  //   return db.ProfileName.findOne({
  //     where: { UserId: id }
  //   });/*.then(function(results) {
  //     console.log(results);
  //     res.json(results);
  //   });*/
  // }

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

  // Updating data record
  app.put("/api/updateName/:idToUpdate", function(req, res) {

    var profileFirstName = req.body.firstName;
    var profileLastName = req.body.lastName;
    var title = req.body.title;
    var UserId = parseInt(req.params.idToUpdate);

    db.ProfileName.update({
      profileFirstName: profileFirstName,
      profileLastName: profileLastName,
      title: title
    }, {
      where: {
        id: UserId
      }
    }).then(function(result) {
      res.json(result);
    });
  });
  // Updating data record
  app.put("/api/updateExp/:idToUpdate", function(req, res) {

    var comJectName = req.body.comJectName;
    var titleRole = req.body.titleRole;
    var description = req.body.desc;
    var UserId = parseInt(req.params.idToUpdate);

    db.Experience.update({
      comJectName: comJectName,
      titleRole: titleRole,
      description: description
    }, {
      where: {
        id: UserId
      }
    }).then(function(result) {
      res.json(result);
    });
  });
  // Updating data record
  app.put("/api/updateEdu/:idToUpdate", function(req, res) {

    var institution = req.body.institution;
    var degree = req.body.degree;
    var UserId = parseInt(req.params.idToUpdate);
    
    db.Education.update({
      institution: institution,
      degree: degree
    }, {
      where: {
        id: UserId
      }
    }).then(function(result) {
      res.json(result);
    });
  });

  // Updating data record
  app.put("/api/updateLicert/:idToUpdate", function(req, res) {

    var licertName = req.body.licertName;
    var UserId = parseInt(req.params.idToUpdate);

    db.Licert.update({
      licertName: licertName
    }, {
      where: {
        id: UserId
      }
    }).then(function(result) {
      res.json(result);
    });
  });

  // Updating data record
  app.put("/api/updateSkaccom/:idToUpdate", function(req, res) {

    var skaccomName = req.body.skaccomName;
    var UserId = parseInt(req.params.idToUpdate);

    db.Skaccom.update({
      skaccomName: skaccomName
    }, {
      where: {
        id: UserId
      }
    }).then(function(result) {
      res.json(result);
    });
  });

  //Deleting record
  app.delete("/api/deleteExp/:idToDelete", function(req, res) {
    var UserId = parseInt(req.params.idToDelete);
    db.Experience.destroy({
      where: {
        id: UserId
      }
    }).then(function(result) {
      res.json(result);
    });
  });

  //Deleting record
  app.delete("/api/deleteEdu/:idToDelete", function(req, res) {
    var UserId = parseInt(req.params.idToDelete);
    db.Education.destroy({
      where: {
        id: UserId
      }
    }).then(function(result) {
      res.json(result);
    });
  });

  //Deleting record
  app.delete("/api/deleteLicert/:idToDelete", function(req, res) {
    var UserId = parseInt(req.params.idToDelete);
    db.Licert.destroy({
      where: {
        id: UserId
      }
    }).then(function(result) {
      res.json(result);
    });
  });

  //Deleting record
  app.delete("/api/deleteSkaccom/:idToDelete", function(req, res) {
    var UserId = parseInt(req.params.idToDelete);
    db.Skaccom.destroy({
      where: {
        id: UserId
      }
    }).then(function(result) {
      res.json(result);
    });
  });

  //uploading images
  app.post("/upload/:id", function(req, res){
    if (req.files) {
      // console.log(req.files);
      var file = req.files.filename;
      var filename = file.name;
      file.mv("public/uploads/" + filename, function(error){
        if (error) {
          console.log(error);
        } else {
          console.log("Image uploaded");
          db.ProfileImage.create({
            imageName: filename,
            UserId: parseInt(req.params.id)
          }).then(function(results) {
            console.log(results.dataValues.imageName);
            res.redirect(`/account/${req.params.id}`);
          });
        }
      });
    }
  });
};
