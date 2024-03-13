import {useState} from 'react';

const SayFunc = () => {
    const [message, setMessage] = useState('Welcome!');
    console.log(useState('Welcome!')); //['Welcome!', ƒ]
    // 배열 뿐만 아니라 숫자, 문자 등 자유롭게 넣을 수 있음
    //message와 setMessage의 기본 값으로 자동 지정됨
    // f: 변수명 = useState 값을 바꾸는 함수
    
    const onClickEnter = ()=> {
        setMessage('안녕하세요')
    }

    const onClickLeave = () => {
        setMessage('안녕히가세요')
    }
    
    // 리액트에서 인라인에 onclick를 적용할 때, 이미 정의되어 있는 함수를 호출할 경우 끝에 ()를 붙이지 않는다.
    // 왜냐면 문자 형태로 들어가기 때문....

    const alertMSG = () => {
        alert(`${message}입니다!`)
    }
    const alertMSG2 = (e, message) => {
        alert(`${message}입니다!`)
    }

    return(
        <div>
            <h1>{message}</h1>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            {/** 함수에 인자 보내기:
             * 인자가 있는 함수는 익명 함수로 감싸서 처리할 수 있다.
            */}
            <button onClick={() => alertMSG('msg')}>메시지 알림</button>
            <button onClick={(e) => alertMSG2(e, 'msg2')}>메시지 알림</button>
        </div>
        
    )
}

export default SayFunc;