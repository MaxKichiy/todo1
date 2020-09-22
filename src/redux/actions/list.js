import * as actionTypes from '../actions/actionTypes';
import axios from 'axios';

const setLists = (list) => ({
  type: actionTypes.SET_LIST,
  payload: list,
});

export const fetchingList = () => (dispatch) => {
  axios
    .get('http://localhost:3003/lists')
    .then(({ data }) => dispatch(setLists(data)))
    .catch((err) => console.log(err));
};
