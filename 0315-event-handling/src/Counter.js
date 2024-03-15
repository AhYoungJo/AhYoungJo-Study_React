import { useState } from "react"

export default function Counter() {
    const [number, setNumber] = useState(0)
    const increase = () => {
        setNumber(number+1)
    }

    //인자가 있을 땐, 익명 함수로 감싸서 처리하기
    const alertMsg = (msg) => {
        alert(`${msg}~ number는 ${number}입니다.`)
    }

    //인자가 있는 경우 event 객체를 받아오는 방법은?
    const alertMsg2 = (e, msg) => {
        alert(`${msg}~ number는 ${number}입니다.`)
        console.log(e)
        
    }


    /**
     * currentTarget은 이벤트 핸들러가 있는 요소 (eg. button과 그 안의 span 태그들)
     * target은 부모로부터 이벤트가 위임되어 발생하는 자식의 위치 (eg. span태그 2번째 클릭하면 2번째 출력)
     */
    const handleEvent = (e) => {
        console.log('e.target', e.target)
        console.log('e.currentTarget', e.currentTarget)
    }

    return(
        <div>
            <h1>Function Component Event</h1>
            <h2>{number}</h2>
            <button onClick={increase}>더하기</button>
            <button onClick={()=> alertMsg('hello')}>alert 출력</button>
            <button onClick={(e)=> alertMsg2(e, 'hello')}>alert2 출력</button>


            {/* e.target vs e.currentTarget */}
            <button onClick={handleEvent}>
                <span>handle Event</span>
                <span>handle Event2</span>
                <span>handle Event3</span>
                <span>handle Event4</span>
            </button>

        </div>
    )
}

