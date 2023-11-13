import { MAKE_ORDER } from "./ActionTypes";

const initialState = {
  noOfProducts: 100,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case MAKE_ORDER:
      return {
        ...state,
        noOfProducts: state.noOfProducts - 1,
      };
    default:
      return state;
  }
};
