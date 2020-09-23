import * as actionTypes from '../actions/actionTypes';

import axios from 'axios';

const setTasks = (tasks) => ({
  type: actionTypes.SET_TASKS,
  payload: tasks,
});

const newTask = (task) => ({
  type: actionTypes.NEW_TASK,
  payload: task,
});

const removeTask = (taskId) => ({
  type: actionTypes.REMOVE_TASK,
  payload: taskId,
});
export const fetchingTasks = () => (dispatch) => {
  axios
    .get('http://localhost:3003/tasks')
    .then(({ data }) => dispatch(setTasks(data)))
    .catch((err) => alert(err));
};

export const addTask = (task) => (dispatch) => {
  axios.post('http://localhost:3003/tasks', task).then(({ data }) => {
    dispatch(newTask(data));
  });
};

export const deleteTask = (taskId) => (dispatch) => {
  axios.delete(`http://localhost:3003/tasks/${taskId}`).then((res) => {
    dispatch(removeTask(taskId));
  });
};
