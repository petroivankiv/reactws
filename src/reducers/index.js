import { combineReducers } from "redux";
import { chat } from "../components/chat/reducer";

const rootReducer = combineReducers({
    chat
});

export default rootReducer;