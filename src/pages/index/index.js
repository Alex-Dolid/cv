//js
import $ from "jquery";
import {pagesNames} from "src/init/pages";
//styles
import "../../styles/libs/themify-icons.css";
import "styles/index.scss";
import "./index.scss";
import "components/reusable/preloader/index";
import "components/reusable/header/index";

$(document).ready(function () {
  for (let page of pagesNames) {
    $(`<a class="root__item" href="/${page}.html">${page}</a>`).appendTo('.root');
  }
});
