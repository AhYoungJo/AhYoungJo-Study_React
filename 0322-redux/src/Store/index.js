import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import isVisibleReducer from "./isVisibleReducer";
import banckReducer from "./banckReducer";

//combineReducer: 여러 개으 리듀서를 하나로 합침
const rootReducer = combineReducers({
    counter: counterReducer,
    isVisible : isVisibleReducer,
    bank : banckReducer,
})

export default rootReducer;