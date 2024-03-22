import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { useState } from 'react';

const App3 = () => {    
    const [input, setInput] = useState(0);
    const getInput = (e) => {
        setInput(e.target.value)
    }
    const money = useSelector((state) => state.bank.money);
    const dispatch = useDispatch();
    const addMoney = () => {
        dispatch({ type: 'PLUS', amount: Number(input) });
        setInput(0);
    };
    const minusMoney = () => {
        dispatch({ type: 'MINUS', amount: Number(input) });
        setInput(0);
    }
    return (
        <div className='App2'>
            <h1>은행</h1>
            <h2>잔액: {money} </h2>
            <input type='text' value={input} onChange={(e) => getInput(e)}></input>
            <button onClick={() => { 
                addMoney()
                }} >입금</button>
            <button onClick={() => { 
                minusMoney()
                }} >출금</button>
        </div>
    );
};

export default App3;