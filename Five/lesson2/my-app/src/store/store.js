import {combineReducers, createStore} from "redux"
import {titleReducer} from "./titleReducer";
import {usersReducer} from "./usersReducer"
import {inputNumber} from "./inputNumber";

export const rootReducer = combineReducers({
    // titleReducer: titleReducer,
    // usersReducer: usersReducer,
    inputNumber: inputNumber
})
// export const rootReducer = createStore(inputNumber)