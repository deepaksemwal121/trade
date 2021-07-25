import { combineReducers } from "redux";
import UserReducer from "./User/UserReducer";

const RootReducer = combineReducers({
    user : UserReducer
})

export default RootReducer;