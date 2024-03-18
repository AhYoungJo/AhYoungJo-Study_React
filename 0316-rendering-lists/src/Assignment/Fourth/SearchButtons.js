
export default function Buttons () {
    // console.log("버튼1",datas)
    // console.log("버튼2", inputName)

    const addInfo = () => {
        // const newName = inputName;
        // const newTitle = inputTitle;

        // const newInfo = datas.concat({
        //     name: newName,
        //     title: newTitle,
        //     key: datas.length + 1,
        // })
        // setDatas(newInfo)
    }

    return(
        <button className="Button" onClick={addInfo}>검색</button>
    )
}