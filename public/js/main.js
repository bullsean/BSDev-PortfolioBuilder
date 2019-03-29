$(document).ready(function() {
  //Start of Document Ready function
  //Parallax initialization
  $(".parallax").parallax();
  //Collapsible initialization
  $(".collapsible").collapsible();

  //Navbar background to change to other color when scroll down to the page --- 
  //done to overcome the change of page body color
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 550) {
      $("#header").css("background", "#f5c2aa");
    } else {
      $("#header").css("background", "transparent");
    }
  });

  //On submiting user signup info
  $("#signUp").on("click", function(event) {
    event.preventDefault();
    //1. get user input
    var userName = $("#username")
      .val()
      .trim();
    var password = $("#password")
      .val()
      .trim();
    var email = $("#email")
      .val()
      .trim();
    //validate user input
    if (signupValidation(userName, password, email)) {
      //if user input is valid .. send data to the (authintication methods - post action below --
      //check the api-routes file --- we do not need any html route for "/signup" rather we will render "/dashboard"
      //if authintication success .. redirect the user to his dashboard where his username will be displayed
      $.ajax({
        url: "/api/dashboard",
        method: "POST",
        data: {
          userName: userName,
          password: password,
          email: email
        }
      }).then(function(data) {
        window.location = "/dashboard" + "/" + data.id;
      });
    } else {
      return false;
    }
  });

  // //On submiting user login info
  // $("#login").on("click", function(event) {
  //   event.preventDefault();
  //   var userName = $("#username")
  //     .val()
  //     .trim();
  //   var password = $("#password")
  //     .val()
  //     .trim();

  //   //loginValidation(userName, password);

  //   // $.ajax({
  //   //   url: "/login",
  //   //   method: "POST",
  //   //   data: {
  //   //     userName: userName,
  //   //     password: password
  //   //   }
  //   // }).then(function() {
  //   //   window.location = "/account"; //should be modified to redirect to user profile or his template
  //   // });
  // });

  // //On logout user login info
  // $("#logout").on("click", function(event) {
  //   event.preventDefault();

  //   // $.ajax({
  //   //   url: "/logout",
  //   //   method: "POST"
  //   // }).then(function() {
  //   //   window.location = "/";
  //   // });
  // });
  var userId = $("#data").data("id");
  //When user submit his name, these info will be sent to the server -- check api-routes file
  $("#nameSubmit").on("click", function(event) {
    event.preventDefault();
    var firstName = $("#first_name")
      .val()
      .trim();
    var lastName = $("#last_name")
      .val()
      .trim();
    var title = $("#title")
      .val()
      .trim();

    $.ajax({
      url: "/api/profileName/" + userId,
      method: "POST",
      data: {
        firstName: firstName,
        lastName: lastName,
        title: title
      }
    }).then(function() {
      location.reload();
    });
  });

  //When user submit his experiences, these info will be sent to the server -- check api-routes file
  $("#expSubmit").on("click", function(event) {
    event.preventDefault();
    var comJectName = $("#company-project")
      .val()
      .trim();
    var titleRole = $("#title-role")
      .val()
      .trim();
    var desc = $("#description")
      .val()
      .trim();

    $.ajax({
      url: "/api/experiences/" + userId,
      method: "POST",
      data: {
        comJectName: comJectName,
        titleRole: titleRole,
        desc: desc
      }
    }).then(function() {
      location.reload();
    });
  });

  //When user submit his education, these info will be sent to the server -- check api-routes file
  $("#eduSubmit").on("click", function(event) {
    event.preventDefault();
    var institution = $("#institute")
      .val()
      .trim();
    var degree = $("#degree")
      .val()
      .trim();

    $.ajax({
      url: "/api/education/" + userId,
      method: "POST",
      data: {
        institution: institution,
        degree: degree
      }
    }).then(function() {
      location.reload();
    });
  });

  //When user submit his licenses or certificates, these info will be sent to the server --
  //check api-routes file
  $("#licertSubmit").on("click", function(event) {
    event.preventDefault();
    var licertName = $("#lice-cert-name")
      .val()
      .trim();

    $.ajax({
      url: "/api/licert/" + userId,
      method: "POST",
      data: {
        licertName: licertName
      }
    }).then(function() {
      location.reload();
    });
  });

  //When user submit his skills and accomplishments, these info will be sent to the server -- check api-routes file
  $("#skaccomSubmit").on("click", function(event) {
    event.preventDefault();
    var skaccomName = $("#skill-accom-name")
      .val()
      .trim();

    $.ajax({
      url: "/api/skaccom/" + userId,
      method: "POST",
      data: {
        skaccomName: skaccomName
      }
    }).then(function() {
      location.reload();
    });
  });

  //When user submit his coonections, these info will be sent to the server -- check api-routes file
  $("#connectSubmit").on("click", function(event) {
    event.preventDefault();
    var facebook = $("#facebook")
      .val()
      .trim();
    var linkedin = $("#linkedin")
      .val()
      .trim();
    var github = $("#github")
      .val()
      .trim();
    var instagram = $("#instagram")
      .val()
      .trim();

    $.ajax({
      url: "/api/connectLinks/" + userId,
      method: "POST",
      data: {
        facebook: facebook,
        linkedin: linkedin,
        github: github,
        instagram: instagram
      }
    }).then(function() {
      location.reload();
    });
  });

  // //On submiting profile image through account page
  // $("#profileImgSubmit").on("click", function(event){
  //   //to be done later
  // });

  //On readyToGo load the selected template
  $("#readyToGo").on("click", function(event) {
    // event.preventDefault();

    // // $.ajax({
    // //   url: "/api/dark" + data.id,
    // //   method: "GET"
    // // }).then(function(data) {
    // window.location = "/dark" + "/" + $(this).data("id");
    // });
  });

  // //Validation functions
  function signupValidation(uname, pass, email) {
    if (uname.length < 1) {
      $("#username").css("border", "1px solid red");
    } else {
      $("#username").css("border", "");
    }

    if (pass.length < 8) {
      $("#password").css("border", "1px solid red");
    } else {
      $("#password").css("border", "");
    }

    if (email.length < 1) {
      $("#email").css("border", "1px solid red");
    } else {
      $("#email").css("border", "");
    }

    if (uname.length > 1 && pass.length > 8 && email.length > 0) {
      return true;
    }
  }
}); //End of Document Ready Function
