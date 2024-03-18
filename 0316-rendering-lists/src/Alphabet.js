import {useState} from 'react';

export default function Alphabet() {
    const [alphabet, setAlphabet] = useState(['b', 'a', 'n', 'a', 'n', 'a'])
    const [alphabet2, setAlphabet2] = useState([{id:1, alpha: "k"}, {id:2, alpha:"i"},{id:3, alpha:"w"},{id:4, alpha:"i"}])
    const [inputAlpha, setInputAlpha] = useState('');
    
    //인자, 인덱스
    // alphabet.map((e, id, arr) => console.log(e, id, arr))

    // input이 빈값이면 alphabet2가 상태변경되지 않도록 하기
    // inputAlpha === '' ? alert("값을 입력해주세요") :  setAlphabet2(newAlpha)
    
    
    const addAlpha = () => {
        // setAlphabet2((prev) => {return {...prev, alpha: inputAlpha}})
        const newAlpha = alphabet2.concat({
            id: alphabet2.length + 1,
            alpha: inputAlpha,
        })
        
        if(inputAlpha.trim().length === 0) return;

        setAlphabet2(newAlpha);
        setInputAlpha('');
    }

    const handleKeyDown = (e) => {
        //엔터를 누르면 추가되도록
        console.log(e)
        if(e.key === "Enter") {
            addAlpha()
        }
    }

    const deleteAlpha = (id) => {
        console.log(id);

        const newAlpha = alphabet2.filter(alpha => {
            return alpha.id !== id
        }) 

        setAlphabet2(newAlpha)
    }



    return(


        <div className="Alphabet">
            <ol>
            {alphabet.map((e, id) => 
            (<li key={id}>{e}</li>))}
            </ol>
            
            
            <ol>
                {alphabet2.map((e) => {
                    return <li key={e.id}>{e.alpha}</li>
                })}
            </ol>






            <hr />
            <h1>doubleclick</h1>
            {alphabet2.map((value) => {
                return <li key={value.id} onDoubleClick={() => deleteAlpha(value.id)} >{value.alpha}</li>
            })}






            <hr />
            <input type='text' placeholder='알파벳 입력' value={inputAlpha} 
            onChange={
                (e) => {
                    setInputAlpha(e.target.value);
            }}
            onKeyDown = {(e) => handleKeyDown(e)}
            ></input>

            <button onClick={addAlpha}>Add</button>

            {/* 단축 평가 */}
            {/* && : 선행 코드가 참이어야 실행 */}
            {inputAlpha.length === 0 && <span>알파벳을 입력해주세요!</span>}
            {/* || : 선행 코드가 거짓이어도 뒤의 코드가 참이면 뒤의 코드 실행 */}
            {inputAlpha.length === 0 || <span>잘 적어주고 계시는군요</span>}

        </div>
    )
}