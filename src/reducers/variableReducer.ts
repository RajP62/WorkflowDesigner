import { VariableConstant } from "../constants/blockConstant";

const initState = {
};

type TActionType = {
  type: string,
  payload: object
}

const VariableReducer = (state = initState, action:TActionType) => {
  const payload = action.payload;
  switch (action.type) {
    case VariableConstant.ADD_VARIABLE: {
      return { ...state, ...payload };
    }
    default:
      return state;
  }
};

export default VariableReducer;
