import PropsTypes from 'prop-types'

//자식이 받아와서 하는 경우
export default function FunctionComponent(props) {
    //여러개일 경우: 콜백함수 쪽에 또는 변수에 구조분해할당하기
    // 콜백함수 => function FunctionComponent({name, title})
    const {name, title, children} = props;
    return <div>
        {/* <h1>hi{props.name}</h1> */}
        <h1>{name}</h1>
        <h1>{title}</h1>
        <h1>{children}</h1>
    </div>
}

FunctionComponent.props = {
    // name = "홍길동"
    // 부모에서 name변수에 문자 형태가 아니면 오류가 나게 설정한 것
    // 유효성 검사때 좋을 듯
    name: PropsTypes.string,
}