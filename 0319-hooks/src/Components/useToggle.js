import React, {useState}from "react";

export default function useToggle (initValue = false) {

// custom hook :

    //value: 토글 상태
    //setValue: 토글 상태를 변화시키는 setter
    const [value, setValue] = useState(initValue)

    // 토글 상태 스위칭 true면 false, false면 true
    const toggleValue = () => {
        setValue(!value);
    };
    // 다른 컴포넌트에서 함수 호출 시 반환되는 값: value, 그리고 토글 함수
    return [value, toggleValue]
}