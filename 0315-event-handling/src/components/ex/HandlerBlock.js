// import { useState } from "react";

// export default function HandlerBlock(){
//     const [blocking, setBlock] = useState("block");
//     const [text, setText] = useState("사라져라");

//     //스타일에 쓸 때는 {}로 안 감쌈
//     const styles = {
//         display: blocking,
//     }

//     const handlerClick = () => {
//         text === "사라져라" ? setText("보여라") : setText("사라져라")
//         blocking === "block" ? setBlock("none"): setBlock("block")
//     }
//     return(
//         <div>
//             <button onClick={handlerClick}>{text}</button>
//             <h1 style={styles}>안녕하세요</h1>
//         </div>
//     )
// }

