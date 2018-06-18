$(document).ready(function() {
  var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
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

  $('#fullpage').fullpage({
    'scrollBar': true,
    'navigation': true
  });

  jQuery(document).ready(function($){
    var contentSections = $('.cd-section'),
      navigationItems = $('#cd-vertical-nav a');
  
    updateNavigation();
    $(window).on('scroll', function(){
      updateNavigation();
    });
  
    //smooth scroll to the section
    navigationItems.on('click', function(event){
          event.preventDefault();
          smoothScroll($(this.hash));
      });
      //smooth scroll to second section
      $('.cd-scroll-down').on('click', function(event){
          event.preventDefault();
          smoothScroll($(this.hash));
      });
  
      //open-close navigation on touch devices
      $('.touch .cd-nav-trigger').on('click', function(){
        $('.touch #cd-vertical-nav').toggleClass('open');
    
      });
      //close navigation on touch devices when selectin an elemnt from the list
      $('.touch #cd-vertical-nav a').on('click', function(){
        $('.touch #cd-vertical-nav').removeClass('open');
      });
  
    function updateNavigation() {
      contentSections.each(function(){
        $this = $(this);
        var activeSection = $('#cd-vertical-nav a[href="#'+$this.attr('id')+'"]').data('number') - 1;
        if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
          navigationItems.eq(activeSection).addClass('is-selected');
        }else {
          navigationItems.eq(activeSection).removeClass('is-selected');
        }
      });
    }
  
    function smoothScroll(target) {
          $('body,html').animate(
            {'scrollTop':target.offset().top},
            600
          );
    }
  });

  });