export default function Input ({setData}){
    return(
        <div className="Input">
            <span>글자를 입력하세요.</span>  
            <input type="text" onChange={(e)=>{setData((prevData => {return {...prevData, comment: e.target.value}}))}}></input>
        </div>
    )
}