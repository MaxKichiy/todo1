import * as actionTypes from '../actions/actionTypes';

import axios from 'axios';

const setTasks = (tasks) => ({
  type: actionTypes.SET_TASKS,
  payload: tasks,
});

export const fetchingTasks = () => (dispatch) => {
  axios
    .get('http://localhost:3003/tasks')
    .then(({ data }) => dispatch(setTasks(data)))
    .catch((err) => alert(err));
};
