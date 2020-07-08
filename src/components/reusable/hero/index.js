//core
import $ from "jquery";
import "slick-carousel/slick/slick";
//styles
import "./index.scss";

$(document).ready(function () {

// Hero slider background setting
  function sliderBgSetting() {
    if ($(".hero-slider .slide").length) {
      $(".hero-slider .slide").each(function() {
        const $this = $(this);
        const img = $this.find(".slider-bg").attr("src");
        const sliderBg = $this.find(".slider-image");

        sliderBg.css({
          backgroundImage: "url("+ img +")",
          backgroundSize: "cover",
          backgroundPosition: "center center"
        })
      });
    }
  }


  //Setting hero slider
  function heroSlider() {
    if ($(".hero-slider").length) {
      const $status = $('.pagi-info');

      $(".hero-slider").on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        let i = (currentSlide ? currentSlide : 0) + 1;
        let slideCount;
        if(i < 10) {
          i = '0' + i;
        }

        if(slick.slideCount < 10) {
          slideCount = '0' + slick.slideCount;
        } else {
          slideCount = slick.slideCount;
        }

        $status.text(i + ' / ' + slideCount);
      });

      $(".hero-slider").slick({
        autoplay: true,
        autoplaySpeed: 6000,
        arrows: false,
        dots: true,
        speed: 1000,
        cssEase: 'cubic-bezier(.4,.72,.22,.99)',
        // speed: 1000,
        // fade: true,
        // cssEase: 'ease-in-out',
        draggable: false
      });
    }
  }

  //Active heor slider
  heroSlider();
  sliderBgSetting();
});
