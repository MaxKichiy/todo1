import * as actionTypes from '../actions/actionTypes';
import axios from 'axios';

const setLists = (list) => ({
  type: actionTypes.SET_LIST,
  payload: list,
});

const addList = (listItem) => ({
  type: actionTypes.ADD_LIST_ITEM,
  payload: listItem,
});

const removeList = (listId) => ({
  type: actionTypes.DELETE_LIST_ITEM,
  payload: listId,
});

const setTitle = (newTitle) => ({
  type: actionTypes.CHANGE_TITLE,
  payload: newTitle,
});

const setLoading = (status) => ({
  type: actionTypes.SET_LOADING,
  payload: status,
});

export const setActiveIndex = (index) => ({
  type: actionTypes.SET_ACTIVE_INDEX,
  payload: index,
});

export const fetchingList = () => (dispatch) => {
  axios
    .get('http://localhost:3003/lists')
    .then(({ data }) => dispatch(setLists(data)))
    .catch((err) => console.log(err));
};

export const postListItem = (item) => (dispatch) => {
  dispatch(setLoading(true));
  axios.post('http://localhost:3003/lists', item).then(({ data }) => {
    dispatch(addList(data));
    dispatch(setLoading(false));
  });
};

export const deleteListItem = (itemId) => (dispatch) => {
  axios.delete(`http://localhost:3003/lists/${itemId}`).then((res) => {
    dispatch(removeList(itemId));
    dispatch(setActiveIndex(itemId - 1));
  });
};

export const changeTitle = (newTitle, titleId) => (dispatch) => {
  axios
    .patch(`http://localhost:3003/lists/${titleId}`, newTitle)
    .then(({ data }) => dispatch(setTitle(data)));
};
