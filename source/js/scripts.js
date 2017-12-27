(function () {
  $(document).ready(function(){
    project.sliderInit();
    project.heroBackground();
    project.scrollDown();
    project.mobileNav();
  });

  $(document).scroll(function() {
    project.mobileHeader();
  });

  $( window ).resize(function() {
    console.log("resize");
    project.heroBackground();
  });

  var project = {
    sliderInit: function() {
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
    },
    heroBackground: function() {
      var canvasParent = $('.section--hero')
      var pattern = Trianglify({
        height: canvasParent.height(),
        width: canvasParent.width(),
        cell_size: 80,
        x_colors: 'Blues'
      });
      $('.canvas-wrapper').html(pattern.canvas());
    },
    scrollDown: function() {
      $('.button__down').click(function() {
        $('html, body').animate({
          scrollTop: $('.section--clients').offset().top
        },
        'slow');
      });
    },
    mobileNav: function() {
      $('.nav__toggle').click(function() {
        $(this).toggleClass('nav__toggle--active');
        $('.header').toggleClass('header--nav-open');
        $('.nav__list').toggleClass('nav__list--visibile');
      });
    },
    clientsSectionOffset: $('.section--clients').offset(),
    mobileHeader: function() {
      var scroll__start = $(document).scrollTop();
      if(scroll__start > this.clientsSectionOffset.top - 59) {
        $('.header').addClass('header--scrolled');
      } else {
        $('.header').removeClass('header--scrolled');
      }
    }
  };
})();
