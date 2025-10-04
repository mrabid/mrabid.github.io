/**
* Modern Portfolio - Enhanced v3.0
* Enhanced with Modern Animations and Interactions
*/
!(function($) {
  "use strict";

  // Header scroll effect
  $(window).on('scroll', function() {
    if ($(window).scrollTop() > 50) {
      $('#header').addClass('scrolled');
    } else {
      $('#header').removeClass('scrolled');
    }
  });

  // Smooth Scroll Reveal Animation
  function revealOnScroll() {
    const reveals = document.querySelectorAll('.icon-box, .portfolio-item, .info-box, .resume-item, .skills-grid, .skill-category, img');
    
    reveals.forEach(element => {
      const windowHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 100;
      
      if (elementTop < windowHeight - elementVisible) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  }

  // Initialize reveal elements
  window.addEventListener('load', () => {
    const revealElements = document.querySelectorAll('.icon-box, .portfolio-item, .info-box, .resume-item, .skills-grid, .skill-category');
    revealElements.forEach(element => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(30px)';
      element.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    });
    revealOnScroll();
  });

  window.addEventListener('scroll', revealOnScroll);

  // Cursor Glow Effect
  const createCursorGlow = () => {
    const glow = document.createElement('div');
    glow.className = 'cursor-glow';
    glow.style.cssText = `
      position: fixed;
      width: 300px;
      height: 300px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(102, 126, 234, 0.15) 0%, transparent 70%);
      pointer-events: none;
      z-index: 9999;
      transition: transform 0.2s ease;
      transform: translate(-50%, -50%);
    `;
    document.body.appendChild(glow);

    document.addEventListener('mousemove', (e) => {
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
    });
  };

  if (window.innerWidth > 768) {
    createCursorGlow();
  }

  // Remove Parallax Effect from Header as it's now a fixed bar
  // window.addEventListener('scroll', () => {
  //   const scrolled = window.pageYOffset;
  //   const header = document.querySelector('#header');
  //   if (header) {
  //     const parallaxElements = header.querySelectorAll('.container > *');
  //     parallaxElements.forEach((el, index) => {
  //       const speed = 0.1 + (index * 0.05);
  //       el.style.transform = `translateY(${scrolled * speed}px)`;
  //     });
  //   }
  // });

  // Add tilt effect to cards
  const addTiltEffect = () => {
    const cards = document.querySelectorAll('.icon-box, .portfolio-wrap, .info-box');
    
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
      });
    });
  };

  setTimeout(addTiltEffect, 1000);

  // Nav Menu - Simplified for fixed header
  $(document).on('click', '.nav-menu a, .mobile-nav a', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var hash = this.hash;
      var target = $(hash);
      if (target.length) {
        e.preventDefault();

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        // Scroll to target section smoothly
        $('html, body').animate({
          scrollTop: target.offset().top - $('#header').outerHeight() // Adjust for fixed header height
        }, 500, 'easeInOutExpo');

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }

        return false;
      }
    }
  });

  // Activate/show sections on load with hash links - Simplified
  if (window.location.hash) {
    var initial_nav = window.location.hash;
    if ($(initial_nav).length) {
      // No header-top class needed as header is always compact
      $('.nav-menu .active, .mobile-nav .active').removeClass('active');
      $('.nav-menu, .mobile-nav').find('a[href="' + initial_nav + '"]').parent('li').addClass('active');
      
      $('html, body').scrollTop($(initial_nav).offset().top - $('#header').outerHeight());
    }
  } else {
    // Ensure page always starts at the top of hero-main if no hash
    $('html, body').scrollTop($('#hero-main').offset().top - $('#header').outerHeight());
  }

  // Mobile Navigation
  if ($('.nav-menu').length) {
    // Clone navigation menu for mobile
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav'
    });
    $('body').append($mobile_nav);
    $('body').append('<div class="mobile-nav-overly"></div>');

    // Mobile nav toggle click handler
    $(document).on('click', '.mobile-nav-toggle', function(e) {
      e.preventDefault();
      $('body').toggleClass('mobile-nav-active');
      $(this).find('i').toggleClass('icofont-navigation-menu icofont-close');
    });

    // Close mobile nav when clicking outside
    $(document).on('click', '.mobile-nav-overly', function() {
      if ($('body').hasClass('mobile-nav-active')) {
        $('body').removeClass('mobile-nav-active');
        $('.mobile-nav-toggle i').removeClass('icofont-close').addClass('icofont-navigation-menu');
      }
    });

    // Close mobile nav after clicking a link
    $(document).on('click', '.mobile-nav a', function() {
      if ($('body').hasClass('mobile-nav-active')) {
        $('body').removeClass('mobile-nav-active');
        $('.mobile-nav-toggle i').removeClass('icofont-close').addClass('icofont-navigation-menu');
      }
    });
  }

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // Skills section - using Intersection Observer instead of waypoints
  if ($('.skills-content').length) {
    const skillsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          $('.progress .progress-bar').each(function() {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
          });
          skillsObserver.disconnect();
        }
      });
    }, { threshold: 0.3 });
    
    $('.skills-content').each(function() {
      skillsObserver.observe(this);
    });
  }

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      900: {
        items: 3
      }
    }
  });

  // Porfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
    });

  });

  // Initiate venobox (lightbox feature used in portofilo)
  $(document).ready(function() {
    $('.venobox').venobox();
  });

})(jQuery);