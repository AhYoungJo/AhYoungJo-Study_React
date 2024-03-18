import { useState } from 'react';

import Select from './Select';
import Result from './Result';
import Input from './Input';
import './ExAll.css'


export default function Exall () {
    const [data, setData] = useState({
        color: "black",
        fruit: "apple",
        backgroundColor: "white",
        comment: "안녕하세요."
    })
    return (
        <div className='ExAll'>
            <Select setData={setData}/>
            <Input setData={setData}/>
            <br/>
            <Result data={data}/>
        </div>
    )
} 