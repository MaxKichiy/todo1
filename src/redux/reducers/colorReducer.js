import * as actionTypes from '../actions/actionTypes';

const initialState = {
  colors: [],
  isLoading: false,
};

const colorReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_COLORS:
      return {
        ...state,
        colors: action.payload,
      };

    default:
      return state;
  }
};
export default colorReducer;
