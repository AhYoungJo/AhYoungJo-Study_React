//store 초기값 정의
const initialState = {
    number: 50,
}

// reducer: 현재 상태의 변화를 일으키는 함수
const counterReducer = (state = initialState, action) => {
    // action 객체 : {type과, playload라는 어떠한 값이 들어있음}

    switch(action.type) {
        case 'PLUS':
            //객체 분할이 어떻게 이렇게 가능하지?
            return {number: state.number +1};
        case 'MINUS':
            return {number: state.number -1};
        default:
            return state;
    }
}

export default counterReducer;