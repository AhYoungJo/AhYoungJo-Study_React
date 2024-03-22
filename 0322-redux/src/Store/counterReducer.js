//reducer에서 타입을 여러 개 사용할 경우
const PLUS = 'counter/PLUS';
const MINUS = 'counter/MINUS';
//근데 일일이 기억할 수 없으니까 컴포넌트에서 액션을 쉽게 발생시킬 수 있도록 함수 사용
export const plus = () => ({type: PLUS});
export const minus = () => ({type: MINUS});

//store 초기값 정의
const initialState = {
    number: 50,
}

// reducer: 현재 상태의 변화를 일으키는 함수
const counterReducer = (state = initialState, action) => {
    // action 객체 : {type과, playload라는 어떠한 값이 들어있음}

    switch(action.type) {
        case PLUS:
            //객체 분할이 어떻게 이렇게 가능하지?
            return {number: state.number +1};
        case MINUS:
            return {number: state.number -1};
        default:
            return state;
    }
}



export default counterReducer;