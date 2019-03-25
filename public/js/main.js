$.ajax({
  url: "/api/keys",
  method: "GET"
}).then(function(data) {
  var myFullpage = new fullpage("#fullpage", {
    licenseKey: data.fullPageKeys,
    verticalCentered: false,
    //to avoid problems with css3 transforms and fixed elements in Chrome, as detailed here: https://github.com/alvarotrigo/fullPage.js/issues/208
    css3: false
  });
});

// $.ajax({
//   url: "/api/keys",
//   method: "GET"
// }).then(function(data) {
//   var deCaptchaSiteKey = {
//     deCaptchaSiteKey: data.deCaptchaSiteKey
//   };
// });

// $(".g-recaptcha").attr("data-sitekey", )

$("#signup_form").submit(function() {
  $(this).ajaxSubmit({
    error: function(xhr) {
      status("Error: " + xhr.status);
    },
    success: function(response) {
      console.log(response);
    }
  });
  //Very important line, it disable the page refresh.
  return false;
});

$(".modal").modal();

$("#tableBody tbody tr td addBtn").on("click", function(event) {
  event.preventDefault();
  $("#modal1").modal("open");
});
