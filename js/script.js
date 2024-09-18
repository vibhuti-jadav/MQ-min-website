$('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: false,
    arrows:false,
    dots:true,
    infinite:true,
    autoplaySpeed: 2000,
    responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            
          }
        },
        {
          breakpoint:578,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            
          }
        }
   
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  });
      