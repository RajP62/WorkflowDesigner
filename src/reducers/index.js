import { combineReducers } from "redux";
import blocks from "./blockReducer";
import variables from "./variableReducer";

const rootReducer = combineReducers({
    variables,
    blocks
});

export default rootReducer;