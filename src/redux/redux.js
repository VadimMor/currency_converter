import { combineReducers, createStore } from "redux";
import conversionReduser from "./conversionReduser";

const reduxReducer = combineReducers({
    conversionReduser: conversionReduser
})

const store = createStore(reduxReducer)

export default store;