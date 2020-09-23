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
    case actionTypes.CHANGE_TITLE:
      return {
        ...state,
        list: state.list.map((el) => {
          if (el.id === action.payload.id) {
            el.name = action.payload.name;
          }
          return el;
        }),
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
