import * as actionTypes from '../actions/actionTypes';

const initialState = {
  tasks: [],
  isLoading: false,
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };
    case actionTypes.NEW_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    default:
      return state;
  }
};

export default taskReducer;
