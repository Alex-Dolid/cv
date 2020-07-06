//js
import $ from "jquery";
//styles
import "./index.scss";

function preloader() {
  $('.preloader').delay(100).fadeOut(500, function () {});
}

$(window).on('load', function () {
  preloader();
});
