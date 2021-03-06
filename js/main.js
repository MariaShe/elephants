//Function checks screen size and starts script
$(window).resize(function() {
    if ( $(window).width() < 1920 ) {
        $(document).ready(function() {
            $(".owl-carousel").owlCarousel({
                loop: true,
                items: 1,
                autoplay:true,
                smartSpeed:1000,
                autoplayTimeout:2000,
            });
        });        
    }
})

//Smooth navigation on page
$(document).on('click', '.header_list li a', function() {
    var linkID = $(this).attr('href');
    $('html, body').animate({ 
      scrollTop: $(linkID).offset().top 
    }, 'slow');
  });