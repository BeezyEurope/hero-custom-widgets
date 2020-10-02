import "core-js/stable";
import 'regenerator-runtime/runtime';
import 'whatwg-fetch';

import React from "react";
import ReactDom from "react-dom";

import App from "./components/App/App";

ReactDom.render(<App />, document.querySelector("#root"));
