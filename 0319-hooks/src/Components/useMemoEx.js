import React, {useState, useMemo} from 'react';

//useMemo
// 메모이제이션으로 수행한 연산값을 기억함으로써 불필요한 연산을 최소화
// 연산 결과가 바뀌지 않으면 당연히
// but, 내 생각: 공식은 같은데 대입 값이 달라지는 경우엔 재사용해도 될까?

export default function UseMemoEx() {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState(0);

    //임의의 큰 연산을 하는 함수
    // const calc = () => {
    //     console.log('열심히 계산 중')
    //     for(let i = 0; i < 100000000; i++){}
    //     return count ** 2;
    // }


//함수 컴포넌트가 렌더링 될 때마다 useState로 저장한 값들 외 내부 변수들은 초기화가되어 연산, 버튼 input 등 모든 것이 재실행 
//=> 이 때문에 과부하 발생 
//=> 이러한 이슈를 해결하기 위해 use--들이 나왔는데
// 연산같은 경우엔 useMemo()로 계산 결과만 저장해서 재사용
// useMemo는 결과가 달라졌을 떄만 연산 함수가 실행됨


    // count의 값이 바뀔 때만 함수 실행
    // input 상태가 바뀌면 컴포넌트는 리렌더링, 이때 clac 연산은 되지 않게
    const calc = useMemo(() => {
        console.log('열심히 계산 중')
        for(let i = 0; i < 100000000; i++){}
        return count ** 2;
    }, [count])

    const code = "<button onClick={() => setCount(count + 1)}>plus</button> " + " <div>count: {count}</div>"
    return(
        <div>UseMemoEx
            <h1>UseMemo</h1>
            <p style={{fontSize:10}}>{code}</p>
            <button onClick={() => setCount(count + 1)}>plus</button>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <div>count: {count}</div>
            
            {/** calc함수가 계속 실행되게끔 호출 */}

            {/* useMemo를 사용하면 이렇게 함수를 호출해줄 필요가 없다. */}
            {/* <div>Calc: {calc()}</div> */}
            <div>calc: {calc}</div>
        </div>
    )
}

