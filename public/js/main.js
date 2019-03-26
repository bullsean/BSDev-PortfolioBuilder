$(document).ready(function() {
  //Start of Document Ready function
  //Parallax initialization
  $(".parallax").parallax();

  $(".carousel.carousel-slider").carousel({
    fullWidth: true
  });

  autoplay();
  function autoplay() {
    $(".carousel").carousel("next");
    setTimeout(autoplay, 5000);
  }

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 550) {
      $("#header").css("background", "#f5c2aa");
    } else {
      $("#header").css("background", "transparent");
    }
  });

  $("#signUp").on("click", function() {
    var firstName = $("#first_name").val().trim();
    var lastName = $("#last_name").val().trim();
    var password = $("#password").val().trim();
    var email = $("#email").val().trim();

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
}); //End of Document Ready Function