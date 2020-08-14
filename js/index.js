function scrollToProducts() {
    var height = $("#masthead").offset().top+$("#masthead").height() - $("#topNavbar").outerHeight()+4;
    $("html, body").animate({scrollTop: height}, 1000);
}

$(document).ready(function () {
    $(window).scroll(function () {
        var height = $(window).scrollTop();
        var breakpoint = $("#navbar-breakpoint").offset().top;

        if(height > breakpoint) {
            $("#topNavbarBackgroundNormal").fadeIn();
            $("#topNavbarBackgroundMasthead").fadeOut();
        }
        if(height < breakpoint) {
            $("#topNavbarBackgroundMasthead").fadeIn();
            $("#topNavbarBackgroundNormal").fadeOut();
        }
    });
});