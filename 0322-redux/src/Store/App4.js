import React from 'react';
import {useSelector, useDispatch} from 'react-redux'

const App4 = () => {
    // store에 있는 상태 가져오기
    const data = useSelector((state) => {return {isVisible: state.isVisible, number: state.counter.number}});

    const dispatch = useDispatch();

    return (
        <div className='App2'>
            <h2>isVisible 값은 "{data.isVisible ? `${data.number}` : '거짓'}"이다</h2>
            <button onClick={() => { 
                dispatch({type: 'CHANGE'})
                }} >Change</button>
        </div>
    );
};

export default App4;