import { useState } from "react";
import '../ex/HandlerInput.css'

export default function HandlerInput () {
    const [comment, setComment] = useState("");
    const [color, setColor] = useState("black");
    const [bg, setBg] = useState("white");
    const [imgURL, setImgURL] = useState('../img/apple.png'); 
    const styleImg = {
        width: 100,
        height: 100,
    }
    const styles = {
        backgroundColor: bg,
        color: color,
    }
    const onInput = (e) => {
        setComment(e.target.value)
    }

    const onSelect = (e) => {
        console.log(e.target.value)    
    switch (e.target.value) {
        case "apple":
            setImgURL('../img/apple.png');
            break;
        case "banana":
            setImgURL('../img/banana.png');
            break;
        case "peach":
            setImgURL('../img/peach.png');
            break;
        case "orange":
            setImgURL('../img/orange.png');
            break;
        default:
            break;
    }

    switch (e.target.value) {
        case "black":
            setColor("black");
            break;
        case "white":
            setColor("white");
            break;
        case "red":
            setColor("red");
            break;
        case "orange":
            setColor("orange");
            break;
        case "yellow":
            setColor("yellow");
            break;
        case "green":
            setColor("green");
            break;
        case "blue":
            setColor("blue");
            break;
        case "purple":
            setColor("purple");
            break;
        case "pink":
            setColor("pink");
            break;
        default:
            break;
    }

    switch (e.target.value) {
        case "blackBg":
            setBg("black");
            break;
        case "whiteBg":
            setBg("white");
            break;
        case "redBg":
            setBg("red");
            break;
        case "orangeBg":
            setBg("orange");
            break;
        case "yellowBg":
            setBg("yellow");
            break;
        case "greenBg":
            setBg("green");
            break;
        case "blueBg":
            setBg("blue");
            break;
        case "purpleBg":
            setBg("purple");
            break;
        case "pinkBg":
            setBg("pink");
            break;
        default:
            break;
    }

}
    return(
        <div className="HandlerInput">
        <br />
        <div className="selectBox">
        <label htmlFor="fruit">과일</label>
        <select onChange={onSelect}>
            <option id="fruit" value="apple">사과</option>
            <option id="fruit" value="banana">바나나</option>
            <option id="fruit" value="peach">복숭아</option>
            <option id="fruit" value="orange">오렌지</option>
        </select>
        <label htmlFor="bg">배경</label>
        <select onChange={onSelect}>
            <option id="bg" value="blackBg">검정</option>
            <option id="bg" value="whiteBg">하양</option>
            <option id="bg" value="redBg">빨강</option>
            <option id="bg" value="orangeBg">주황</option>
            <option id="bg" value="yellowBg">노랑</option>
            <option id="bg" value="greenBg">초록</option>
            <option id="bg" value="blueBg">파랑</option>
            <option id="bg" value="purpleBg">보라</option>
            <option id="bg" value="pinkBg">분홍</option>
        </select>
        <label htmlFor="color">글자색</label>
        <select onChange={onSelect}>
            <option id="color" value="black">검정</option>
            <option id="color" value="white">하양</option>
            <option id="color" value="red">빨강</option>
            <option id="color" value="orange">주황</option>
            <option id="color" value="yellow">노랑</option>
            <option id="color" value="green">초록</option>
            <option id="color" value="blue">파랑</option>
            <option id="color" value="purple">보라</option>
            <option id="color" value="pink">분홍</option>
        </select >
        </div>
        <br/>
        <input type="text" placeholder="댓글을 작성해주세요." onChange={onInput} value={comment}/>
        <span style={styles}>{comment}</span>
        <br />
        <img src={imgURL} style={styleImg}></img>
        </div>
    )
}