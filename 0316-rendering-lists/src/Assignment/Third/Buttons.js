
export default function Buttons ({datas, setDatas, inputName, inputTitle}) {
    // console.log("버튼1",datas)
    // console.log("버튼2", inputName)

    const addInfo = () => {
        const newName = inputName;
        const newTitle = inputTitle;

        const newInfo = datas.concat({
            name: newName,
            title: newTitle,
            key: datas.length + 1,
        })
        setDatas(newInfo)
    }

    return(
        <button onClick={addInfo}>등록</button>
    )
}