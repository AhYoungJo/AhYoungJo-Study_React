import React, { useReducer } from "react";

export default function useReducerEx () {

    // const [state, dispatch] = useReducer(reducer, initState);
    // reducer : state를 업데이트하는 함수
    // dispatch : 액션을 발생시키는 함수 (액션: state가 어떻게 변경되어야 하는지에 대한 정보를 담고 있음)
    // reducer: 업데이트 정보를 가지고 있는 것
    // state: 현재 상태
    // initState: 초기값
    // useReducer는 [state, dispatch]를 리턴함

    
    // 1. state에 value가 0이라는 초기값 부여
    const initState = {value: 0};
    
    // 5. state 업데이트 정보 정의
    const reducer = (prevState, action) => {
        console.log('prevState', prevState);
        console.log('action', action) // INCREMENT
        
        switch(action.type){
            case 'INCREMENT':
                return {value: prevState.value + 1};
                case 'DECREMENT':
                    return {value: prevState.value - 1};
                    case 'RESET':
                        return {value: 0};
                        default:
                            break;
                        }
                        
    }
                    
    // 0. useReducer에 변수저장..?????
    // 반드시 reducer 정의한 후 이 코드를 적어줘야 오류가 발생하지 않음
    // 현재 상태 값에 number라는 이름을 주고 액션을 발생시키는 함수 dispatch를 가져옵니다. 그리고 useReducer 함수의 첫 번째 인자로 reducer함수, 두 번째 인자로 초기값은 0으로 설정!
    const [state, dispatch] = useReducer(reducer, initState);
    
    //dispatch로 업데이트 액션 발동하기
    // 4. const increment = () => dispatch(action의 힌트(힌트를 다른 말로 type이라고 한다) 
    // const increment = () => dispatch('INCREMENT'); 
    // const decrement = () => dispatch('DECREMENT'); 
    // const reset = () => dispatch('RESET'); 
    // 여러개일 경우 객체로 action을 적을 수 있다.
    const increment = () => dispatch({type: 'INCREMENT' }); 
    const decrement = () => dispatch({type: 'DECREMENT' }); 
    const reset = () => dispatch({type: 'RESET' }); 


    return(
        <div>
            <h1>UseReducerEx</h1>
            {/* 2. 초기값이 객체이므로 객체 분할해서 가져옴 */}
            <h2>{state.value}</h2>

            {/* 3. 각각 한 개씩 함수 연결해줌 */}
            <button type='button' onClick={increment}>plus</button>
            <button type='button' onClick={decrement}>minus</button>
            <button type='button' onClick={reset}>reset</button>
        </div>
    )
}