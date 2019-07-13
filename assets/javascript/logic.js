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
