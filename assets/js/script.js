var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  $(function () {
    $( "#btn-who1" ).click(function() {
        $( "#who-1" ).addClass( "display-none" );
        $( "#who-2" ).removeClass( "display-none" );
      });
      $( "#btn-who2" ).click(function() {
        $( "#who-3" ).removeClass( "display-none" );
        $( "#who-2" ).addClass( "display-none" );
      });
      $( "#btn-who3" ).click(function() {
        $( "#who-3" ).addClass( "display-none" );
        $( "#who-2" ).removeClass( "display-none" );
      });
      $( "#btn-back" ).click(function() {
        $( "#who-2" ).addClass( "display-none" );
        $( "#who-1" ).removeClass( "display-none" );
      });
  });