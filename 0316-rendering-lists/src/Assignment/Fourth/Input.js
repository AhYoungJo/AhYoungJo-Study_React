// import React, {useRef} from 'react';

export default function InputN ({setInputName, setInputTitle, inputRef, handleInput}) {

    return(
        <div className="InputName">
           작성자: <input type="text" placeholder="작성자" ref={inputRef} onChange={(e) => 
                    {   const input = e.target.value;
                        if (input.trim().length === 0) return;
                        setInputName(input);
                    }
           }></input>
           제목: <input type="email" placeholder="제목" onChange={(e) => 
                    {   const input = e.target.value;
                        if (input.trim().length === 0) return;
                        setInputTitle(input);
                    }
           }></input>
        </div>
    )
}
