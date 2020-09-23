import * as actionTypes from '../actions/actionTypes';

import axios from 'axios';

const setColors = (colorsList) => ({
  type: actionTypes.SET_COLORS,
  payload: colorsList,
});

export const fetchingColors = () => (dispatch) => {
  axios
    .get('http://localhost:3003/colors')
    .then(({ data }) => dispatch(setColors(data)))
    .catch((err) => console.log(err));
};
