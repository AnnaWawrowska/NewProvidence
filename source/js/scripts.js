$(document).ready(function(){
  $('.slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.slider__arrow--prev'),
    nextArrow: $('.slider__arrow--next'),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  var canvasParent = $('.section--hero')
  var pattern = Trianglify({
    height: canvasParent.height(),
    width: canvasParent.width(),
    cell_size: 80,
    x_colors: 'Blues'
  });
  $('.canvas-wrapper').append(pattern.canvas());


  $('.button__down').click(function() {
    $('html, body').animate({
      scrollTop: $(".section--clients").offset().top
    },
    'slow');
  });
});
