//core
import $ from "jquery";
import {pagesNames} from "src/init/pages";
import "src/init/libs/bootstrap.min.js";
//styles
import "../../styles/libs/themify-icons.css";
import "../../styles/libs/fontawesome/css/all.min.css";
import "styles/index.scss";
import "./index.scss";
//components
import "components/reusable/preloader";
import "components/reusable/header";
import "components/reusable/hero";

$(document).ready(function () {
  for (let page of pagesNames) {
    $(`<a class="root__item" href="/${page}.html">${page}</a>`).appendTo('.root');
  }
});
