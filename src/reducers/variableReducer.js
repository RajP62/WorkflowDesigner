const initState = {
  name: "Name of the customer",
  age: "Age of the customer",
  otp: "OTP provided by the customer to authorize",
};

const VariableReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default VariableReducer;
