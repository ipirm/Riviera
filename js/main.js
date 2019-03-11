$('.slider-inner').owlCarousel({
    loop:true,
    mouseDrag: false,
      animateOut: 'fadeOut',
    animateIn: 'fadeTo',
    nav:false,
//    autoplay:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

  $(".lang-items li").click(function(){
        $(this).parents('.lang-items').find('li').removeClass('active--lang');
     $(this).addClass('active--lang');
   });
    var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
      forEach(hamburgers, function(hamburger) {
        hamburger.addEventListener("click", function() {
          this.classList.toggle("is-active");
        }, false);
      });
    }