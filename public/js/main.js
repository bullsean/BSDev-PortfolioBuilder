// var licenseKey = process.env.fullPage_key;

$.ajax({
  url: "/api/keys",
  method: "GET"
}).then(function(data) {
  var myFullpage = new fullpage("#fullpage", {
    licenseKey: data,
    verticalCentered: false,
    //to avoid problems with css3 transforms and fixed elements in Chrome, as detailed here: https://github.com/alvarotrigo/fullPage.js/issues/208
    css3: false
  });
});
