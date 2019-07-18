$("#project-arrow").click(function() {
    $('html,body').animate({
        scrollTop: $("#projects").offset().top},
        'slow');
});
$("#contact-arrow").click(function() {
    $('html,body').animate({
        scrollTop: $("#contact").offset().top},
        'slow');
});
$("#contact-crumb").click(function() {
    $('html,body').animate({
        scrollTop: $("#contact").offset().top},
        'slow');
});
$("#project-crumb").click(function() {
    $('html,body').animate({
        scrollTop: $("#projects").offset().top},
        'slow');
});
$("#about-crumb").click(function() {
    $('html,body').animate({
        scrollTop: $(".jumbotron").offset().top},
        'slow');
});
$('.carousel').carousel({
    interval: 10000
  })

