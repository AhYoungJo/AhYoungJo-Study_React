import {useRef, useState} from 'react';
// import { useHistory } from 'react-router-dom';

export default function RefSample5 () {
    // const history = useHistory();

    const idRef = useRef(1);
    const [id, setId] = useState(10);

    const plusRef = () => {
        idRef.current += 1;
        console.log(idRef.current);
        // history.go(0);
    }
    const plusState = () => {
        setId(id+1)
        console.log(id)
    }
    
    return (
        <div className='RefSample5'>
            <h1>{idRef.current}</h1>
            <button type='button' onClick={plusRef}>Ref 더하기</button>

            <h2>{id}</h2>
            <button type='button' onClick={plusState}>State 더하기</button>
            {/* <input type='text' ref={inputRef} placeholder='작성해주세요'></input> */}
        </div>
    )
}