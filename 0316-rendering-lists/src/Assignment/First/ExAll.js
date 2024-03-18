import {useState} from 'react';
import InputN from './Input'
// import InputM from './InputM';
import Result from './Result';
import Buttons from './Buttons'

export default function ExAll () {
    const [datas, setDatas] = useState([
        {
            key: "userInfo",
            name: "홍길동",
            email: "coding@gamil.com",
        }
    ])

    const [inputName, setInputName] = useState('');
    const [inputMail, setInputMail] = useState('');

    return(
        <div className='ExAll'>
            <InputN setInputName={setInputName} setInputMail={setInputMail}/>
            <br/>
            <Buttons datas={datas} setDatas={setDatas} inputName={inputName} inputMail={inputMail}/>
            <Result datas={datas}/>
        </div>
    )
}