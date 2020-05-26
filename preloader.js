$(document).ready(function($) {
    var Body = $('body');
    Body.addClass('preloader-site');
    $("#mass").get(0).play();
});
$(window).load(function() {
    setTimeout(function() {
        preloaderFadeOutTime = 3000;
        $('.preloader-wrapper').fadeOut(preloaderFadeOutTime);
        $('body').removeClass('preloader-site');
    }, 5000);
});
