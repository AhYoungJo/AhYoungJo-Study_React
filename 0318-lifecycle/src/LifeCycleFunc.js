import {useState} from 'react'
import LifeCycleFuncChild from './LifeCycleFuncChild';

export default function LifeCycleFunc (){
    const [number, setNumber] = useState(0)
    const [visible, setVisible] = useState(true);

    //숫자 증가 함수
    const changeNumber = () => {
        setNumber(number+1);
    }

    const changeVisible = () => {
        setVisible(!visible);
    }


    return(
        <div className='LifeCycleFunc'>
            <button type='button' onClick={changeNumber}>Plus</button>
            <button type='button' onClick={changeVisible}>On/Off</button>
            {visible && <LifeCycleFuncChild number={number} />}
        </div>
    )
}