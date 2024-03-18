import {useRef} from 'react';

export default function RefSample4 () {
    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.focus();
    }
    
    return (
        <div className='RefSample4'>
            <p>{inputRef.current}</p>
            <input type='text' ref={inputRef} placeholder='작성해주세요'></input>
            <button type='button' onClick={handleClick}>작성</button>
        </div>
    )
}