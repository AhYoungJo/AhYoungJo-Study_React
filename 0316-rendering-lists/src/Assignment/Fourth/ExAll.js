import {useState} from 'react';
import Input from './Input'
import Result from './Result';
import Buttons from './AddButtons';
import SearchButtons from './SearchButtons';
import SearchInput from './SearchInput';
import {useRef} from 'react';

export default function ExAll () {

    //부모에서 useRef 선언
    inputRef = useRef();
    const handleInput = (e) => {
        if(e.key === 'enter' && newName.trim().length === 0) {
            inputRef.current.focus();
        }
      }


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
            <div className='AddBox'>
            <Input setInputName={setInputName} setInputTitle={setInputTitle} ref={inputRef}  onClick={(e) => handleInput(e)}/>
            <br/>
            <Buttons datas={datas} setDatas={setDatas} inputName={inputName} inputTitle={inputTitle}/>
            </div>
            <div className='SearchBox'>
            <SearchInput setInputName={setInputName} setInputTitle={setInputTitle}/>
            <SearchButtons />
            </div>  
            <Result datas={datas}/>
        </div>
    )
}