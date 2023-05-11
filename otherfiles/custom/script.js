$(document).ready(function(){
    // customising the intro
    $(".intro-div").hide().each(function(){
        $(this).fadeIn(2000);
    });
    $(".my-image").fadeIn().animate({
        left: "170px"
    },2000).animate({
        left: 0
    });
    // work of typed js
    var typed = new Typed("#typed-text",{
        strings:['Website Development, Integrating Web Apps.',
         'Software Development, Integrating Mobile Apps with Web technologies',
    'Graphics Design', 'Network Security', 'Multiplatform-Os use adept with a strong command of linux environments'],
        typeSpeed: 80,
        loop: true,
        startDelay: 2000
    });
    

});