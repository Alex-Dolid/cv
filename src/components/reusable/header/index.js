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

});

