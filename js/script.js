$('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
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

  $('.btnclick').click(function(){
    $('.side-nav').css('width','300px')
  })


  $('.btnclick1').click(function(){
    $('.side-nav').css('width','0px')
  })

  $('.d1').click(function(){
    $('.m1').toggle();
  })
      
  $('.d2').click(function(){
    $('.m2').toggle();
  })
      
  $('.d3').click(function(){
    $('.m3').toggle();
  })
      
  $('.d4').click(function(){
    $('.m4').toggle();
  })
    
  $('.d5').click(function(){
    $('.m5').toggle();
  })
    