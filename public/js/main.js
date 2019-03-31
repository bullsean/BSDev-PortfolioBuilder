$(document).ready(function() {
  //Start of Document Ready function

  //Modal initialization
  var modals = $(".modal");
  M.Modal.init(modals);
  //Parallax initialization
  $(".parallax").parallax();
  //Collapsible initialization
  $(".collapsible").collapsible();

  //Navbar background to change to other color when scroll down to the page ---
  //done to overcome the change of page body color
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 550) {
      $("#header").css("background", "#1e5250");
    } else {
      $("#header").css("background", "transparent");
    }
  });

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

    if (validateName(firstName, lastName, title)) {
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
    } else {
      return;
    }
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

    if (validateExperiences(comJectName, titleRole, desc)) {
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
    }
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

    if (validateEducation(institution, degree)) {
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
    }
  });

  //When user submit his licenses or certificates, these info will be sent to the server --
  //check api-routes file
  $("#licertSubmit").on("click", function(event) {
    event.preventDefault();
    var licertName = $("#lice-cert-name")
      .val()
      .trim();

    if (validateLicert(licertName)) {
      $.ajax({
        url: "/api/licert/" + userId,
        method: "POST",
        data: {
          licertName: licertName
        }
      }).then(function() {
        location.reload();
      });
    }
  });

  //When user submit his skills and accomplishments, these info will be sent to the server -- check api-routes file
  $("#skaccomSubmit").on("click", function(event) {
    event.preventDefault();
    var skaccomName = $("#skill-accom-name")
      .val()
      .trim();

    if (validateSkaccom(skaccomName)) {
      $.ajax({
        url: "/api/skaccom/" + userId,
        method: "POST",
        data: {
          skaccomName: skaccomName
        }
      }).then(function() {
        location.reload();
      });
    }
  });

  //When user submit his connectLinks, these info will be sent to the server -- check api-routes file
  $("#connectSubmit").on("click", function(event) {
    event.preventDefault();
    var website = $("#website")
      .val()
      .trim();
    var link = $("#link")
      .val()
      .trim();

    if (validateConnect(website, link)) {
      $.ajax({
        url: "/api/connectLinks/" + userId,
        method: "POST",
        data: {
          website: website,
          link: link
        }
      }).then(function() {
        location.reload();
      });
    }
  });

  //When updateExp button clicked update the record in DB
  $(".updateName").on("click", function() {
    var idToUpdate = $(this).data("updateid");
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

    if (validateName(firstName, lastName, title)){
      // Send the PUT request.
      $.ajax("/api/updateName/" + idToUpdate, {
        type: "PUT",
        data: {
          firstName: firstName,
          lastName: lastName,
          title: title
        }
      }).then(function() {
        // Reload the page to get the updated list
        location.reload();
      });
    }
  });
  //When updateExp button clicked update the record in DB
  $(".updateExp").on("click", function() {
    var idToUpdate = $(this).data("updateid");
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

    if (validateExperiences(comJectName, titleRole, desc)) {
      // Send the PUT request.
      $.ajax("/api/updateExp/" + idToUpdate, {
        type: "PUT",
        data: {
          comJectName: comJectName,
          titleRole: titleRole,
          desc: desc
        }
      }).then(function() {
        // Reload the page to get the updated list
        location.reload();
      });
    }
  });

  //When updateEdu button clicked update the record in DB
  $(".updateEdu").on("click", function() {
    var idToUpdate = $(this).data("updateid");
    event.preventDefault();
    var institution = $("#institute")
      .val()
      .trim();
    var degree = $("#degree")
      .val()
      .trim();

    if (validateEducation(institution, degree)) {
      // Send the PUT request.
      $.ajax("/api/updateEdu/" + idToUpdate, {
        type: "PUT",
        data: {
          institution: institution,
          degree: degree
        }
      }).then(function() {
        // Reload the page to get the updated list
        location.reload();
      });
    }
  });

  //When updateLicert button clicked update the record in DB
  $(".updateLicert").on("click", function() {
    var idToUpdate = $(this).data("updateid");
    event.preventDefault();
    var licertName = $("#lice-cert-name")
      .val()
      .trim();

    if (validateLicert(licertName)) {
      // Send the PUT request.
      $.ajax("/api/updateLicert/" + idToUpdate, {
        type: "PUT",
        data: {
          licertName: licertName
        }
      }).then(function() {
        // Reload the page to get the updated list
        location.reload();
      });
    }
  });

  //When updateSkaccom button clicked update the record in DB
  $(".updateSkaccom").on("click", function() {
    var idToUpdate = $(this).data("updateid");
    event.preventDefault();
    var skaccomName = $("#skill-accom-name")
      .val()
      .trim();

    if (validateSkaccom(skaccomName)) {
      // Send the PUT request.
      $.ajax("/api/updateSkaccom/" + idToUpdate, {
        type: "PUT",
        data: {
          skaccomName: skaccomName
        }
      }).then(function() {
        // Reload the page to get the updated list
        location.reload();
      });
    }
  });

  //When updateConnect button clicked update the record in DB
  $(".updateConnect").on("click", function() {
    var idToUpdate = $(this).data("updateid");
    event.preventDefault();
    var website = $("#website")
      .val()
      .trim();
    var link = $("#link")
      .val()
      .trim();

    if (validateConnect(website, link)) {
      console.log("hi");
      // Send the PUT request.
      $.ajax("/api/updateConnect/" + idToUpdate, {
        type: "PUT",
        data: {
          website: website,
          link: link
        }
      }).then(function() {
        // Reload the page to get the updated list
        location.reload();
      });
    }
  });

  //When DeleteExp button clicked delete the record from DB
  $(".deleteExp").on("click", function() {
    var idToDelete = $(this).data("deleteid");

    $.ajax("/api/deleteExp/" + idToDelete, {
      method: "DELETE"
    }).then(function() {
      // Reload the page to get the updated list
      location.reload();
    });
  });

  //When DeleteEdu button clicked delete the record from DB
  $(".deleteEdu").on("click", function() {
    var idToDelete = $(this).data("deleteid");

    $.ajax("/api/deleteEdu/" + idToDelete, {
      method: "DELETE"
    }).then(function() {
      // Reload the page to get the updated list
      location.reload();
    });
  });

  //When DeleteLicert button clicked delete the record from DB
  $(".deleteLicert").on("click", function() {
    var idToDelete = $(this).data("deleteid");

    $.ajax("/api/deleteLicert/" + idToDelete, {
      method: "DELETE"
    }).then(function() {
      // Reload the page to get the updated list
      location.reload();
    });
  });

  //When DeleteSkaccom button clicked delete the record from DB
  $(".deleteSkaccom").on("click", function() {
    var idToDelete = $(this).data("deleteid");

    $.ajax("/api/deleteSkaccom/" + idToDelete, {
      method: "DELETE"
    }).then(function() {
      // Reload the page to get the updated list
      location.reload();
    });
  });

  //When DeleteConnect button clicked delete the record from DB
  $(".deleteConnect").on("click", function() {
    var idToDelete = $(this).data("deleteid");

    $.ajax("/api/deleteConnect/" + idToDelete, {
      method: "DELETE"
    }).then(function() {
      // Reload the page to get the updated list
      location.reload();
    });
  });

  //Validate profile info
  function validateName(fn, ln, title) {
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

    if (title.length < 1) {
      $("#title").css("border", "1px solid red");
    } else {
      $("#title").css("border", "");
    }

    if (fn.length > 1 && ln.length > 1 && title.length > 1) {
      return true;
    }
  }

  function validateExperiences(cjn, tr, des) {
    if (cjn.length < 1) {
      $("#company-project").css("border", "1px solid red");
    } else {
      $("#company-project").css("border", "");
    }

    if (tr.length < 1) {
      $("#title-role").css("border", "1px solid red");
    } else {
      $("#title-role").css("border", "");
    }

    if (des.length < 1) {
      $("#description").css("border", "1px solid red");
    } else {
      $("#description").css("border", "");
    }

    if (cjn.length > 1 && tr.length > 1 && des.length > 1) {
      return true;
    }
  }

  function validateEducation(inst, deg) {
    if (inst.length < 1) {
      $("#institute").css("border", "1px solid red");
    } else {
      $("#institute").css("border", "");
    }

    if (deg.length < 1) {
      $("#degree").css("border", "1px solid red");
    } else {
      $("#degree").css("border", "");
    }

    if (inst.length > 1 && deg.length > 1) {
      return true;
    }
  }

  function validateLicert(lcn) {
    if (lcn.length < 1) {
      $("#lice-cert-name").css("border", "1px solid red");
    } else {
      $("#lice-cert-name").css("border", "");
    }

    if (lcn.length > 1) {
      return true;
    }
  }

  function validateSkaccom(san) {
    if (san.length < 1) {
      $("#skill-accom-name").css("border", "1px solid red");
    } else {
      $("#skill-accom-name").css("border", "");
    }

    if (san.length > 1) {
      return true;
    }
  }

  function validateConnect(ws, l) {
    var validws = false;
    var validlink = false;

    if (ws.length < 1) {
      $("#website").css("border", "1px solid red");
    } else {
      validws = true;
      $("#website").css("border", "");
    }

    // Check if links begin with "http://" or "https://"
    if (l.charAt(4) !== ":" && l.charAt(5) !== ":") {
      $("#link").css("border", "1px solid red");
    } else {
      validlink = true;
      $("#link").css("border", "");
    }

    if (validws && validlink) {
      {
        return true;
      }
    }
  }
}); //End of Document Ready Function
