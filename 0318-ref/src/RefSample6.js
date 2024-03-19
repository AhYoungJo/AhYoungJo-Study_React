import {useRef} from 'react';
export default function RefSample5 () {
    const inputRef = useRef();
    const inputRef2 = useRef();
    const handleFocus = (e) => {
        if(e.key==='Enter') {
            if(inputRef.current.value.trim().length === 0){
                inputRef.current.focus();
                return;
            }
            if(inputRef2.current.value.trim().length === 0) {
                inputRef2.current.focus();
                return;
            }
        }
    }
    const handleFocus2 = () => {
        if(inputRef.current.value.trim().length === 0) {inputRef.current.focus()}
        if(inputRef2.current.value.trim().length === 0) {inputRef2.current.focus()}
        
    }
    return (
        <div className='RefSample5'>
            <input type='text' ref={inputRef} onKeyDown={(e)=> handleFocus(e)} placeholder='작성자'></input>
            <input type='text' ref={inputRef2} onKeyDown={(e)=> handleFocus(e)} placeholder='제목'></input>
            <button type='button' onClick={handleFocus2}>포커스</button>
        </div>
    )
}