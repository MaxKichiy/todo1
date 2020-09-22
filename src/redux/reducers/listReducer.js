import * as actionTypes from '../actions/actionTypes';
const initialState = {
  list: [],
  isLoading: false,
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_LIST:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};

export default listReducer;
