import { VariableConstant } from "../constants/blockConstant";

const initState = {
};

const VariableReducer = (state = initState, action) => {
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
