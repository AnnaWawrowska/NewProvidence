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
      scrollTop: $('.section--clients').offset().top
    },
    'slow');
  });


  $('.nav__toggle').click(function() {
    $(this).toggleClass('nav__toggle--active');
    $('.nav__list').toggleClass('nav__list--visibile');
  });
});

var change = $('.section--clients').offset()

$(document).scroll(function() {
  var scroll__start = $(this).scrollTop();
  if(scroll__start > change.top - 59) {
    $('.header').addClass('header--background');
    $('.nav__list').addClass('nav__list--background')
  } else {
    $('.header').removeClass('header--background');
    $('.nav__list').removeClass('nav__list--background')
  }
});
