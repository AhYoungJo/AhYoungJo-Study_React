import {useEffect} from 'react'

export default function LifeCycleFuncChild({number}){
    
    //mount 시점에 실행
    useEffect(()=> {
        console.log('컴포넌트 마운트')
        //의존값을 빈 배열로 넣으면 실행될때 나온다?
    }, [])

    //mount & unmount 시점에 실행
    useEffect(() => {
        //마운트 될때 실행되는 코드
        console.log('컴포넌트 언마운트 코드 전');
        //언마운트 될때 실행되는 값 : return값
        return() => {
            console.log("컴포넌트 언마운트")
        }
    })

    //update
    useEffect(() => {
        console.log('number', number);
    }, [number])

    return(
        <>
        <h1>현재 Number값은 {number}입니다.</h1>
        </>
    )
}