import {useState} from 'react';


//함수형 컴포넌트
const Number = () => {
    const [number, setNumber] = useState(0);

    const increase = () => {
        //재할당해주는 것이 아니기 때문에 +=, -=는 적용 안됌
        setNumber(number+1)
    }
    const decrease = () => {
        setNumber(number-1)
    }
    return (
        <>
        <h1>{number}</h1>
        <button onClick={increase}>더하기</button>
        <button onClick={decrease}>빼기</button>
        </>
    )
}

export default Number;