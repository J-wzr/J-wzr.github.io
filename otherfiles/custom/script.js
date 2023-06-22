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

$(document).ready(function(){

    // footer formatings
    setInterval(function(){
        $(".footer-header").fadeIn(3000).delay(4000).fadeOut(1000)
    }, 8000);

    

// closing the sidebar
    $('.close-btn').click(function(){
        $('#side-bar').css({"left":"-100%", "transition": "0.5s"});
    });

// showing the side-bar
    $('.open-btn i').click(function(){
        $('#side-bar').css({"left": "0","transition":"0.5s"});
    });
});

$(document).ready(function() {
    var stickyDiv = $('#sticky-div');
    var stickyOffset = stickyDiv.offset().top;
  
    $(window).scroll(function() {
      if ($(window).scrollTop() >= stickyOffset) {
        stickyDiv.addClass('sticky');
      } else {
        stickyDiv.removeClass('sticky');
      }
    });
  });
  