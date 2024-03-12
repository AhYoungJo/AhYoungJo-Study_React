import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import Clock from "./Clock"; //문법 오류가 왜 나지?
// import Login from "./App";
// import Larva from "./Larva";
import reportWebVitals from "./reportWebVitals";


import * as APP from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <APP.Login />
        <br />
        <br />
        <APP.MyAnimall />
    </React.StrictMode>
);

reportWebVitals();
