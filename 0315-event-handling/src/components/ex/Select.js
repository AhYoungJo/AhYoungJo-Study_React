import Selects from 'react-select';

const FRUITS = [
    { name: "사과", value:"apple", lable:"과일"},
    { name: "바나나", value: "banana", lable:"과일"},
    { name: "복숭아", value: "peach", lable:"과일"},
    { name: "오렌지", value: "orange", lable:"과일"},
]
const options = [
    { value:"apple", label:"사과"},
    { value: "banana", label:"바나나"},
    { value: "peach", label:"복숭아"},
    { value: "orange", label:"오렌지"},
]
const COLORS = [
    { value: "black", name: "검정"},
    { value: "white", name: "하양"},
    { value: "red", name: "빨강"},
    { value: "orange", name: "주황"},
    { value: "yellow", name: "노랑"},
    { value: "green", name: "초록"},
    { value: "blue", name: "파랑"},
    { value: "purple", name: "보라"},
    { value: "pink", name: "분홍"},
]
const COLORSOptions = [
    { value: "black", label: "검정"},
    { value: "white", label: "하양"},
    { value: "red", label: "빨강"},
    { value: "orange", label: "주황"},
    { value: "yellow", label: "노랑"},
    { value: "green", label: "초록"},
    { value: "blue", label: "파랑"},
    { value: "purple", label: "보라"},
    { value: "pink", label: "분홍"},
]

export default function Select ({setData}){


    return (

        <div className="SelectBox">
        <div className='FruitSelect'>
        <label>JS 과일</label>
        <select className="Fruit" onChange={(e) => {setData((prevData)=> {return {...prevData, fruit: e.target.value}})}}>
            {FRUITS.map((option) => (
                <option value={option.value}>{option.name}</option>
            ))}
        </select>
        <span>react-select 과일</span>
         <Selects
         onChange={(e) => {{setData((prevData)=> {return {...prevData, fruit: e.value}})}}}
        defaultValue={options[0]}
        options={options}>
        </Selects>
        </div>
        <br />
        <div className='BgSelect'>
        <label>배경</label>
        <select className="Background" onChange={(e) => {setData((prevData)=> {return {...prevData, backgroundColor: e.target.value}})}}>
            {COLORS.map(option => (
                <option value={option.value}>{option.name}</option>
            ))}
        </select>
        <span>react-select 배경</span>
         <Selects
         onChange={(e) => {{setData((prevData)=> {return {...prevData, backgroundColor: e.value}})}}}
        defaultValue={COLORSOptions[0]}
        options={COLORSOptions}>
        </Selects>
        </div>
        <br />
        <div className='FontSelect'>
        <label>글자 색</label>
        <select className="FontColor" onChange={(e) => {setData((prevData) => {return {...prevData, color: e.target.value}})}}>
            {COLORS.map(option => (
                <option value={option.value}>{option.name}</option>
            ))}
        </select>
        <span>react-select 글자 색</span>
         <Selects
         onChange={(e) => {{setData((prevData)=> {return {...prevData, backgroundColor: e.value}})}}}
        defaultValue={COLORSOptions[0]}
        options={COLORSOptions}>
        </Selects>
        </div>
        </div>
    )
}