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
    case actionTypes.REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case actionTypes.TASK_DONE:
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.id) {
            task.completed = action.payload.completed;
          }
          return task;
        }),
      };
    case actionTypes.DELETE_LIST_ITEM:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.listId !== action.payload),
      };
    default:
      return state;
  }
};

export default taskReducer;
