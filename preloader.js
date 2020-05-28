$(document).ready(function($) {
    var Body = $('body');
    Body.addClass('preloader-site');
    $("#mass").get(0).play();
});
$(window).load(function() {
    setTimeout(function() {
        preloaderFadeOutTime = 2000;
        $('.preloader-wrapper').fadeOut(preloaderFadeOutTime);
        $('body').removeClass('preloader-site');
    }, 2000);
});
