$(document).ready(function () {
    $("#year").html(new Date().getFullYear());
    
    $('.menu-toggler').on('click', function () {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click', function () {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });

    $('nav a[href*="#"]').on('click', function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1050);
    });

    $('#up').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1050);
    });

    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: true
    });
});
