import {useState} from 'react';

export default function InputN ({setInputName, setInputMail}) {

    // 객체로 이름을 바꿔서, 이걸로 배열에 넣기
    return(
        <div className="InputName">


           <input type="text" placeholder="이름" onChange={(e) => 
                    {   const input = e.target.value;
                        if (input.trim().length === 0) return;
                        setInputName(input);
                    }
           }></input>
           <input type="email" placeholder="이메일" onChange={(e) => 
                    {   const input = e.target.value;
                        if (input.trim().length === 0) return;
                        setInputMail(input);
                    }
           }></input>



        </div>
    )
}
