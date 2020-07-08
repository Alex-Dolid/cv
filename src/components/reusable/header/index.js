//js
import $ from "jquery";
import "components/mixins/nav-list/index";
//styles
import "./index.scss";

$(document).ready(function () {
  // Toggle mobile navigation
  function toggleMobileNavigation() {
    const navbar = $(".navigation-holder");
    const openBtn = $(".navbar-header .open-btn");
    const closeBtn = $(".navigation-holder .close-navbar");

    openBtn.on("click", function() {
      if (!navbar.hasClass("slideInn")) {
        navbar.addClass("slideInn");
      }
      return false;
    });

    closeBtn.on("click", function() {
      if (navbar.hasClass("slideInn")) {
        navbar.removeClass("slideInn");
      }
      return false;
    })
  }

  toggleMobileNavigation();

  // Function for toggle a class for small menu
  function toggleClassForSmallNav() {
    const windowWidth = window.innerWidth;
    const mainNav = $("#navbar > ul");

    if (windowWidth <= 991) {
      mainNav.addClass("small-nav");
    } else {
      mainNav.removeClass("small-nav");
    }
  }

  toggleClassForSmallNav();

  // Function for small menu
  function smallNavFunctionality() {
    const windowWidth = window.innerWidth;
    const mainNav = $(".navigation-holder");
    const smallNav = $(".navigation-holder > .small-nav");
    const subMenu = smallNav.find(".sub-menu");
    const megamenu = smallNav.find(".mega-menu");
    const menuItemWidthSubMenu = smallNav.find(".menu-item-has-children > a");

    if (windowWidth <= 991) {
      subMenu.hide();
      megamenu.hide();
      menuItemWidthSubMenu.on("click", function(e) {
        const $this = $(this);
        $this.siblings().slideToggle();
        e.preventDefault();
        e.stopImmediatePropagation();
      })
    } else if (windowWidth > 991) {
      mainNav.find(".sub-menu").show();
      mainNav.find(".mega-menu").show();
    }
  }

  smallNavFunctionality();


  // Function for clone an element for sticky menu
  function cloneNavForSticyMenu($ele, $newElmClass) {
    $ele.addClass('original').clone().insertAfter($ele).addClass($newElmClass).removeClass('original');
  }

  // clone home style 1 navigation for sticky menu
  if ($('.site-header .navigation').length) {
    cloneNavForSticyMenu($('.site-header .navigation'), "sticky-header");
  }

  let lastScrollTop = '';

  function stickyMenu($targetMenu, $toggleClass) {
    const st = $(window).scrollTop();
    const mainMenuTop = $('.site-header .navigation');

    if ($(window).scrollTop() > 1000) {
      if (st > lastScrollTop) {
        // hide sticky menu on scroll down
        $targetMenu.removeClass($toggleClass);

      } else {
        // active sticky menu on scroll up
        $targetMenu.addClass($toggleClass);
      }

    } else {
      $targetMenu.removeClass($toggleClass);
    }

    lastScrollTop = st;
  }


  // HEADER STYLE 1 TOGGLE NAVIGATION SUBMENUS
  if($(".header-style-1").length) {
    const menuItem = $(".navigation-holder > ul .menu-item-has-children > a");
    const menuItemParent = menuItem.parent();

    menuItem.on("click", function(e) {
      e.preventDefault();
      const $this = $(this);
      $this.next(".sub-menu").toggleClass("open-submenu");
      $this.parent().siblings().find(".sub-menu").removeClass("open-submenu");
    });

    const navigationHolder = $(".header-style-1 .navigation-holder");
    const menuOpenBtn = $(".header-style-1 .menu-open-btn");
    const menuClosenBtn = $(".header-style-1 .close-navbar-2");

    menuOpenBtn.on("click", function() {
      navigationHolder.addClass("open-navigation-menu");
    });

    menuClosenBtn.on("click", function() {
      navigationHolder.removeClass("open-navigation-menu");
    });
  }

});

