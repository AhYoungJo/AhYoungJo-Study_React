import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {plus, minus} from './counterReducer'

const App2 = () => {
    // store에 있는 상태 가져오기
    const number = useSelector((state) => state.counter.number);

    const dispatch = useDispatch();

    return (
        <div className='App2'>
            <h1>React Redux Example</h1>
            <h2>{number}</h2>
            <button onClick={() => {
                dispatch(plus())
            }}>PLUS</button>
            <button onClick={() => {
                dispatch(minus())
            }}>MINUS</button>
        </div>
    );
};

export default App2;