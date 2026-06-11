"use strict";
(function ($) {

  // ========================== Add Bg Image Start =====================
  function setBackgroundImage() {
    $(".bg-img").css("background-image", function () {
      return `url(${$(this).data("background-image")})`;
    });
  }
  // ========================== Add Bg Image End =====================

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
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
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
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

        breakpoints: {
          0: {
            spaceBetween: 0,
            coverflowEffect: {
              stretch: 180,
              depth: 170,
              modifier: 1,
            },
          },

          424: {
            spaceBetween: 60,
            coverflowEffect: {
              stretch: 120,
              depth: 100,
              modifier: 2,
            },
          },
        },
    });
  }

  // ========================= Swiper Js end =====================

  // ========================= cookie card start =====================
  function initializeCookieCard() {
    const cookieCard = document.getElementById("cookieCard");

    if (!cookieCard) {
      return;
    }

    cookieCard.setAttribute("aria-hidden", "true");

    function revealCookieCard() {
      cookieCard.classList.remove("hide");
      cookieCard.classList.add("show");
      cookieCard.setAttribute("aria-hidden", "false");
    }

    function dismissCookieCard() {
      cookieCard.classList.remove("show");
      cookieCard.classList.add("hide");
      cookieCard.setAttribute("aria-hidden", "true");
    }

    window.setTimeout(revealCookieCard, 1000);

    cookieCard.addEventListener("click", function (event) {
      if (event.target.closest("[data-cookie-dismiss]")) {
        dismissCookieCard();
      }
    });
  }
  // ========================= cookie card end =====================

  // ========================= shop refine card start =====================
  function initializeShopRefineCard() {
    const refineCard = document.getElementById("shopRefineCard");

    if (!refineCard) {
      return;
    }

    const refineToggle = refineCard.querySelector("[data-shop-refine-toggle]");
    const visibleOffset = 80;
    let lastScrollY = window.scrollY;

    function syncToggleState() {
      refineToggle.setAttribute(
        "aria-expanded",
        refineCard.classList.contains("is-expanded") ? "true" : "false"
      );
    }

    function expandCard() {
      refineCard.classList.add("is-expanded");
      syncToggleState();
    }

    function collapseCard() {
      refineCard.classList.remove("is-expanded");
      syncToggleState();
    }

    function revealCard() {
      refineCard.classList.remove("is-hidden");
      refineCard.setAttribute("aria-hidden", "false");
      syncToggleState();
    }

    function hideCard() {
      refineCard.classList.add("is-hidden");
      refineCard.setAttribute("aria-hidden", "true");
      syncToggleState();
    }

    function updateCardVisibility() {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY;
      const isScrollingUp = currentScrollY < lastScrollY;

      if (currentScrollY <= visibleOffset) {
        revealCard();
      } else if (isScrollingDown) {
        hideCard();
      } else if (isScrollingUp) {
        revealCard();
      }

      lastScrollY = currentScrollY;
    }

    refineToggle.addEventListener("click", function () {
      if (refineCard.classList.contains("is-hidden")) {
        return;
      }

      if (refineCard.classList.contains("is-expanded")) {
        collapseCard();
      } else {
        expandCard();
      }
    });

    window.addEventListener("scroll", updateCardVisibility, { passive: true });
    window.addEventListener("resize", updateCardVisibility);
    updateCardVisibility();
  }
  // ========================= shop refine card end =====================

  // ==========================================
  //      Start Document Ready function
  // ==========================================

  $(document).ready(function () {
    setBackgroundImage();
    new WOW().init();
    initializeSwiper();
    setHeight("--header-h", "header");
    initializeCookieCard();
    initializeShopRefineCard();
  });

  // ========================= Preloader Js Start =====================
  $(window).on("load", function () {
    $(".preloader").fadeOut();
  });
  // ========================= Preloader Js End=====================
})(jQuery);
