$(document).ready(function() {
  //Start of Document Ready function
  //Parallax initialization
  $(".parallax").parallax();

  $(".carousel.carousel-slider").carousel({
    fullWidth: true,
  });

  $(".collapsible").collapsible();

  autoplay();
  function autoplay() {
    $(".carousel").carousel("next");
    setTimeout(autoplay, 5000);
  }

  $(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll > 550){
    $("#header").css("background", "#f5c2aa");
  } else {
    $("#header").css("background", "transparent");
  }
})
}); //End of Document Ready Function