import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import Clock from "./Clock"; //문법 오류가 왜 나지?
// import MyAnimall from "./App";
import IsTrue  from "./App";
// import Larva from "./Larva";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    //<h1>hello world</h1>
    <React.StrictMode>
        {/* <Larva/> */}
        {/* <APP />
        <MyAnimall /> */}
        <IsTrue />
    </React.StrictMode>
);

// //Clock 렌더링
// setInterval(() => {
//     root.render(
//         //react virtual dom은 변경된 부분만 update
//         //전체가 아니라 시간 부분만 변경 되고 있음
//     <React.StrictMode>
//         <Clock />
//     </React.StrictMode> 
//     )
// }, 1000)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
