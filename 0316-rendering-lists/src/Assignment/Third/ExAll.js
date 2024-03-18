import {useState} from 'react';
import InputN from './Input'
// import InputM from './InputM';
import Result from './Result';
import Buttons from './Buttons'

export default function ExAll () {
    const [datas, setDatas] = useState([
        {
            key: "1",
            name: "홍길동",
            title: "첫 번째 글"
        }
    ])

    const [inputName, setInputName] = useState('');
    const [inputTitle, setInputTitle] = useState('');

    return(
        <div className='ExAll'>
            <InputN setInputName={setInputName} setInputTitle={setInputTitle}/>
            <br/>
            <Buttons datas={datas} setDatas={setDatas} inputName={inputName} inputTitle={inputTitle}/>
            <Result datas={datas}/>
        </div>
    )
}