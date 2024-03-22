import { combineReducers } from "redux";
import counterReducer from "./counterReducer";

//combineReducer: 여러 개으 리듀서를 하나로 합침
const rootReducer = combineReducers({
    counter: counterReducer
})

export default rootReducer;