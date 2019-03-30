require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
//var multer = require("multer");
// var path = require("path");
var upload = require("express-fileupload");

// //Set storage engine
// var storage = multer.diskStorage({
//   //destination where we want our files uploaded
//   destination: "./public/uploads/",
//   //this argument is a function that takes 3 params, the req, the actual file, and a cb
//   filename: function (req, file, cb){
//     //first thing call the cb
//     //this cb takes 2 params, first is the error and we put null because we do not want it
//     //the second param is what we want to call this file after uploading it, and we used here Date.now() to concatenate
//     //its name to its timestamp to avoid duplicate names if other users uploaded files with the same name
//     //In our case I do not think the name will be an issue as each image will be linked to a specific user regardless
//     //of its name but will for the tutorial for now
//     //fieldname here is the name in the form "myImage"
//     //then we will add the extension name usin path.extname which will extract the extension of the file and return it back
//     //and add it to our file name
//     cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
//   }
// });

// //Initialize the upload variable
// //we used single becuase it is a single file to be uploaded and we pass the name of the field in the form "myImage"
// upload = multer({ 
//   storage: storage,
//   limits: { filesize: 1000000 },
//   fileFilter: function(re, file, cb){
//     checkTypeFile(file, cb);
//   }
// }).single("myImage");

// //check File Type function
// function checkTypeFile(file, cb){
//   //allowed extensions
//   var fileTypes = /jpeg|jpg|png|gif/;
//   //check the extension
//   var extname = filetypes.test(path.extname(file.originalname).toLowerCase());
//   //check mime
//   var mimetype = fileTypes.test(file.mimetype);

//   if (mimetype && extname) {
//     //null is the error
//     return cb(null, true);
//   } else {
//     cb("Error: File type not supported");
//   }
// }
var db = require("./models");

var app = express();
var PORT = process.env.PORT || 8080;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(upload());

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
