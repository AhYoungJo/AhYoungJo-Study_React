
export default function Buttons ({datas, setDatas, inputName, inputMail}) {
    // console.log("버튼1",datas)
    // console.log("버튼2", inputName)

    const addInfo = () => {
        const newName = inputName;
        const newMail = inputMail;

        const newInfo = datas.concat({
            name: newName,
            email: newMail,
            key: datas[0].key + '-' + datas.length,
        })
        setDatas(newInfo)
    }

    return(
        <button onClick={addInfo}>등록</button>
    )
}