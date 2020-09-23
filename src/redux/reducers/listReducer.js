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
    case actionTypes.ADD_LIST_ITEM:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case actionTypes.DELETE_LIST_ITEM:
      return {
        ...state,
        list: state.list.filter((list) => list.id !== action.payload),
      };
    default:
      return state;
  }
};

export default listReducer;
