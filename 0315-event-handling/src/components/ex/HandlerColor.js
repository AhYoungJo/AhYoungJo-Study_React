import { useState } from "react";

export default function HandlerColor () {
    const [fontColor, setColor] = useState("black");
    const styles = {
        color: fontColor,
    }
    
    const handlerRed = () => {
        setColor("red")
    }
    const handlerBlue = () => {
        setColor("blue")
    }

    return(
        <div>
            <h1 style={styles}>글씨 색상 변경</h1>
            <button onClick={handlerRed}>빨간색</button>
            <button onClick={handlerBlue}>파란색</button>
        </div>
    )
}