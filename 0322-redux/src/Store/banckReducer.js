const initialState = {
    money: 0,
}

const banckReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'PLUS':
            return {money: state.money + action.amount};
        case 'MINUS':
            return {money: state.money - action.amount};
        default:
            return state;
    }
};

export default banckReducer;
