"use strict";
(function ($) {
  /*====================scroll to top====================== */
  function scrollToTop() {
    const $window = $(window);
    const $button = $(".scroll-top");
    const $header = $(".header");
    const scrollOffset = 100;

    function updateScrollState() {
      const isScrolled = $window.scrollTop() >= scrollOffset;

      $header.toggleClass("fixed-header", isScrolled);
      $button.toggleClass("show", isScrolled);
    }

    $window.on("scroll", updateScrollState);
    updateScrollState();

    $button.on("click", function (e) {
      e.preventDefault();
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        300,
      );
    });
  }
  /*====================scroll to top====================== */

  // ========================== Add Bg Image Start =====================
  function setBackgroundImage() {
    $(".bg-img").css("background-image", function () {
      return `url(${$(this).data("background-image")})`;
    });
  }
  // ========================== Add Bg Image End =====================

  // ================== Password Show Hide Js Start ==========
  function togglePassword() {
    $(".toggle-password").on("click", function () {
      $(this).toggleClass("fa-eye");
      var input = $($(this).attr("id"));
      if (input.attr("type") == "password") {
        input.attr("type", "text");
      } else {
        input.attr("type", "password");
      }
    });
  }
  // =============== Password Show Hide Js End =================

  // Sidebar Dropdown Menu Start
  function hasDropdown() {
    $(".has-dropdown > a").click(function () {
      $(".sidebar-submenu").slideUp(200);
      if ($(this).parent().hasClass("active")) {
        $(".has-dropdown").removeClass("active");
        $(this).parent().removeClass("active");
      } else {
        $(".has-dropdown").removeClass("active");
        $(this).next(".sidebar-submenu").slideDown(200);
        $(this).parent().addClass("active");
      }
    });
  }
  // Sidebar Dropdown Menu End

  // Sidebar Toggle Start
  function toggleSidebar() {
    $(document).on("click", "[data-sidebar-toggle='true']", function () {
      const target = $(this).attr("data-bs-target");
      const $sidebar = $(target);

      $("[id]").removeClass("show");
      $(".sidebar-overlay").removeClass("show");

      $sidebar.addClass("show");
      $(".sidebar-overlay").addClass("show");
    });

    $(document).on("click", "[data-close='true']", function () {
      const $sidebar = $(this).closest("[id]");
      $sidebar.removeClass("show");
      $(".sidebar-overlay").removeClass("show");
    });

    $(document).on("click", ".sidebar-overlay", function () {
      $("[id]").removeClass("show");
      $(this).removeClass("show");
    });
  }
  // Sidebar Toggle Start End

  // ========================= Select2 Js Start ==============

  function initializeSelect2() {
    $(".select2").each(function (index, element) {
      if (!$(element).parent().hasClass("select2-wrapper")) {
        $(element).wrap('<div class="select2-wrapper"></div>');
      }

      $(element).select2({
        dropdownParent: $(element).closest(".select2-wrapper"),
      });
    });
  }
  // ========================= Select2 Js End ==============

  // ========================= Slick Slider Js Start ==============
  function initializeSlickSlider() {
    const sliderConfig = {
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      speed: 1500,
      dots: true,
      pauseOnHover: true,
      arrows: false,
      prevArrow:
        '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
      nextArrow:
        '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
    };

    $(".testimonial-slider").slick({
      ...sliderConfig,
      slidesToShow: 3,
      arrows: true,
      slidesToScroll: 1,
      dots: false,
      autoplay: false,
      appendArrows: $(".testimonial-slider-arrow"),
      prevArrow: `<button type="button" class="slick-prev">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 15.8333L4.16669 10L10 4.16667" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M15.8334 10H4.16669" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
        </button>`,
      nextArrow: `<button type="button" class="slick-next">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="14" viewBox="0 0 50 14" fill="none">
              <path d="M42.5003 12.6667L48.3336 6.83333L42.5003 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M1.00003 6.83325L48.0001 6.83325" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </button>`,

      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });

    $(".latest-live-slider").slick({
      ...sliderConfig,
      slidesToShow: 4,
      arrows: true,
      appendArrows: $(".latest-live-arrow"),
      slidesToScroll: 1,
      dots: false,
      autoplay: false,
      prevArrow: `<button type="button" class="slick-prev">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 15.8333L4.16669 10L10 4.16667" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M15.8334 10H4.16669" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
        </button>`,
      nextArrow: `<button type="button" class="slick-next">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="14" viewBox="0 0 50 14" fill="none">
              <path d="M42.5003 12.6667L48.3336 6.83333L42.5003 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M1.00003 6.83325L48.0001 6.83325" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </button>`,

      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });

    $(".feature-card-slider").slick({
      ...sliderConfig,
      slidesToShow: 5,
      arrows: true,
      appendArrows: $(".feature-card-arrow"),
      slidesToScroll: 1,
      dots: false,
      autoplay: false,
      prevArrow: `<button type="button" class="slick-prev">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 15.8333L4.16669 10L10 4.16667" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M15.8334 10H4.16669" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
        </button>`,
      nextArrow: `<button type="button" class="slick-next">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="14" viewBox="0 0 50 14" fill="none">
              <path d="M42.5003 12.6667L48.3336 6.83333L42.5003 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M1.00003 6.83325L48.0001 6.83325" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </button>`,

      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });

    $(".details-product-slider").slick({
      ...sliderConfig,
      slidesToShow: 5,
      arrows: true,
      appendArrows: $(".details-slider-arrow"),
      slidesToScroll: 1,
      dots: false,
      autoplay: false,
      prevArrow: `<button type="button" class="slick-prev">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 15.8333L4.16669 10L10 4.16667" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M15.8334 10H4.16669" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
        </button>`,
      nextArrow: `<button type="button" class="slick-next">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="14" viewBox="0 0 50 14" fill="none">
              <path d="M42.5003 12.6667L48.3336 6.83333L42.5003 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M1.00003 6.83325L48.0001 6.83325" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </button>`,

      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });

    $(".live-product-slider").slick({
      ...sliderConfig,
      arrows: true,
      slidesToScroll: 1,
      dots: false,
      autoplay: false,
      variableWidth: true,
    });

    $(".product-details-slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      speed: 1000,
      arrows: false,
      fade: true,
      infinite: false,
      pauseOnHover: true,
      asNavFor: ".product-details-slider-nav",
    });

    $(".product-details-slider-nav").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      speed: 1000,
      dots: false,
      pauseOnHover: true,
      arrows: false,
      infinite: false,
      focusOnSelect: true,
      asNavFor: ".product-details-slider",
      prevArrow:
        '<button type="button" class="slick-prev"><i class="fa-solid fa-chevron-left"></i></button>',
      nextArrow:
        '<button type="button" class="slick-next"><i class="fa-solid fa-chevron-right"></i></button>',
    });
  }
  // ========================= Slick Slider Js End ===================

  // ========================= Odometer Counter Up Js End ==========
  function counterUp() {
    $(".counter-item").each(function () {
      $(this).isInViewport(function (status) {
        if (status === "entered") {
          for (
            var i = 0;
            i < document.querySelectorAll(".odometer").length;
            i++
          ) {
            var el = document.querySelectorAll(".odometer")[i];
            el.innerHTML = el.getAttribute("data-odometer-final");
          }
        }
      });
    });
  }
  // ========================= Odometer Up Counter Js End =====================

  // ========================= Height calculate Js End =====================
  function setHeight(variable, name) {
    let headerSelect = document.getElementsByClassName(`${name}`)[0];
    if (headerSelect) {
      let headerHeight = headerSelect.clientHeight;
      document.documentElement.style.setProperty(
        `${variable}`,
        `${headerHeight}px`,
      );
    }
  }
  // ========================= Height calculate Js End =====================

  // ========================= tooltips Js start =====================

  function initializeTooltips() {
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]',
    );
    const tooltipList = [...tooltipTriggerList].map(
      (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl),
    );
  }

  // ========================= tooltips Js End =====================

  // ========================= Swiper Js Start =====================

  function initializeSwiper() {
    var swiper = new Swiper(".banner-slider", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      spaceBetween: 60,
      loop: true,
      coverflowEffect: {
        rotate: 0,
        stretch: 120,
        depth: 100,
        modifier: 2,
        slideShadows: true,
      },
      keyboard: {
        enabled: true,
      },
      mousewheel: {
        thresholdDelta: 70,
      },
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

  // ========================= Swiper Js end =====================

  // ========================= Search start  =====================

  function searchToggle() {
    $(".header-search-toggle").on("click", function () {
      $(".header-search-form").addClass("show");
    });

    $(".header-search-close").on("click", function () {
      $(".header-search-form").removeClass("show");
    });
  }

  // ========================= Search end  =====================

  // ========================= Range slider Start  =====================

  function initRangeSlider() {
    $("#slider-range").slider({
      range: true,
      min: 60,
      max: 100,
      values: [60, 100],
      slide: function (event, ui) {
        $("input[name=min_price]").val(ui.values[0]);
        $("input[name=max_price]").val(ui.values[1]);
      },
    });
  }

  // ========================= Range slider end  =====================

  // ========================= plyr js start  =====================
  function liveTv() {
    const liveTv = document.querySelector(".live-video");
    new Plyr(liveTv, {
      controls: [
        "play-large",
        "settings",
        "fullscreen",
        "progress",
        "time",
        "mute",
        "quality",
        "volume",
        "pip",
        "airplay",
        "loop",
      ],
      autoplay: true,
      loop: { active: true },
    });
  }
  // ========================= plyr js end  =====================

  // ==========================================
  //      Start Document Ready function
  // ==========================================

  $(document).ready(function () {
    scrollToTop();
    setBackgroundImage();
    togglePassword();
    hasDropdown();
    toggleSidebar();
    initializeSelect2();
    initializeSlickSlider();
    counterUp();
    new WOW().init();
    initializeTooltips();
    initializeSwiper();
    setHeight("--header-h", "header");
    searchToggle();
    initRangeSlider();
    liveTv();
  });

  // ========================= Preloader Js Start =====================
  $(window).on("load", function () {
    $(".preloader").fadeOut();
  });
  // ========================= Preloader Js End=====================
})(jQuery);
