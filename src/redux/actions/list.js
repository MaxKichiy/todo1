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

export const fetchingList = () => (dispatch) => {
  axios
    .get('http://localhost:3003/lists')
    .then(({ data }) => dispatch(setLists(data)))
    .catch((err) => console.log(err));
};

export const postListItem = (item) => (dispatch) => {
  axios
    .post('http://localhost:3003/lists', item)
    .then(({ data }) => dispatch(addList(data)));
};
