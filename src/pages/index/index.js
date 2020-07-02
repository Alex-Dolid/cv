//js
import $ from "jquery";
import {pagesNames} from "src/init/pages";
//styles
import "styles/style";
import "./index.scss";

$(document).ready(function () {
    for (let page of pagesNames) {
        $(`<a class="root__item" href="/${page}.html">${page}</a>`).appendTo('.root');
    }
});

