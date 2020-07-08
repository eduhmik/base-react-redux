import { TEST_CONSTANT } from "../constants/actionTypes";

const initialState = {
  isLoading: false,
};

const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case TEST_CONSTANT:
      return {
        ...state,
        isLoading: true,
      };
      default:
        return state
  }
};

export default testReducer;
