import React from "react";
import ReactDOM from "react-dom";

import ProductTopList from "./../components/ProductTopList";
import NewsTopList from "../components/NewsTopList";


ReactDOM.render(
    <div>
        <ProductTopList/>
        <NewsTopList/>
    </div>
    ,document.getElementById("root")
);