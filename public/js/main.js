$(document).ready(function() {
  //Start of Document Ready function
  //Parallax initialization
  $(".parallax").parallax();

  $(".collapsible").collapsible();

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 550) {
      $("#header").css("background", "#f5c2aa");
    } else {
      $("#header").css("background", "transparent");
    }
  });

  $("#signUp").on("click", function(event) {
    event.preventDefault();
    var firstName = $("#first_name").val().trim();
    var lastName = $("#last_name").val().trim();
    var password = $("#password").val().trim();
    var email = $("#email").val().trim();

    signupValidation(firstName, lastName, password, email);

    $.ajax({
      url: "/api/users",
      method: "POST",
      data: {
        firstName: firstName,
        lastName: lastName,
        password: password,
        email: email
      }
    }).then(function() {
      location.reload();
    });
  });

  $("#login").on("click", function(event) {
    event.preventDefault();
    var userName = $("#username").val().trim();
    var password = $("#password").val().trim();

    //loginValidation(userName, password);

    $.ajax({
      url: "/api/users",
      method: "POST",
      data: {
        userName: userName,
        password: password
      }
    }).then(function() {
      location.reload();
    });
  });

  $("#nameSubmit").on("click", function(event) {
    event.preventDefault();
    var firstName = $("#first_name").val().trim();
    var lastName = $("#last_name").val().trim();

    $.ajax({
      url: "/api/users",
      method: "POST",
      data: {
        firstName: firstName,
        lastName: lastName
      }
    }).then(function() {
      location.reload();
    });
  });

  $("#expSubmit").on("click", function(event) {
    event.preventDefault();
    var inst_Name = $("#company-project").val().trim();
    var  title_role = $("#title-role").val().trim();
    var desc = $("#description").val().trim();

    $.ajax({
      url: "/api/users",
      method: "POST",
      data: {
        inst_Name: inst_Name,
        title_role: title_role,
        desc: desc
      }
    }).then(function() {
      location.reload();
    });
  });

  $("#eduSubmit").on("click", function(event) {
    event.preventDefault();
    var institute = $("#institute").val().trim();
    var degree = $("#degree").val().trim();

    $.ajax({
      url: "/api/users",
      method: "POST",
      data: {
        institute: institute,
        degree: degree
      }
    }).then(function() {
      location.reload();
    });
  });

  $("#licertSubmit").on("click", function(event) {
    event.preventDefault();
    var licert_Name = $("#ice-cert-name").val().trim();

    $.ajax({
      url: "/api/users",
      method: "POST",
      data: {
        licert_Name: licert_Name
      }
    }).then(function() {
      location.reload();
    });
  });

  $("#skaccomSubmit").on("click", function(event) {
    event.preventDefault();
    var skaccom = $("#skill-accom-name").val().trim();

    $.ajax({
      url: "/api/users",
      method: "POST",
      data: {
        skaccom: skaccom
      }
    }).then(function() {
      location.reload();
    });
  });

  $("#contactSubmit").on("click", function(event) {
    event.preventDefault();
    var facebook = $("#facebook").val().trim();
    var linkedin = $("#linkedin").val().trim();
    var github = $("#github").val().trim();
    var instagram = $("#instagram").val().trim();

    $.ajax({
      url: "/api/users",
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

  $("#profileImgSubmit").on("click", function(event){
    //to be done later
  });

  function signupValidation(fn, ln, pass, email){

    if (fn.length < 1) {
      $("#first_name").css("border", "1px solid red");
    } else {
      $("#first_name").css("border", ""); 
    }

    if (ln.length < 1) {
      $("#last_name").css("border", "1px solid red");
    } else {
      $("#last_name").css("border", "");
    }

    if (pass.length < 8) {
      $("#password").css("border", "1px solid red");
    } else {
      $("#password").css("border", "");
    }

    if (email.length < 0) {
      $("#email").css("border", "1px solid red");
    } else {
      $("#email").css("border", "");
    }
  }

  function loginValidation(un, pass){

     //needs to interact with DB
  }

}); //End of Document Ready Function
