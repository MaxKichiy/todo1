import * as actionTypes from '../actions/actionTypes';

import axios from 'axios';

const setColors = (color) => ({
  type: actionTypes.SET_COLORS,
  payload: color,
});

export const fetchColors = () => (dispatch) => {
  axios
    .get('http://localhost:3003/colors')
    .then(({ data }) => dispatch(setColors(data)))
    .catch((err) => console.log(err));
};
