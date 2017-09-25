import axios from 'axios';

let API = axios.create({
  baseURL: 'https://helpful-colors.firebaseio.com/',
});

export function fetchColors(pageNumber) {
  return dispatch => {
    dispatch({
      type: 'FETCH_COLORS',
      payload: API.get(`all_colors/${pageNumber - 1}.json`)
    });
  }
}

export function fetchColorsFromName(colorName) {
  return dispatch => {
    dispatch({
      type: 'FETCH_COLORS_BY_NAME',
      payload: API.get(`colors_by_name/${colorName}.json`)
    });
  }
}

export function fetchRandomColor() {
  return dispatch => {
    dispatch({
      type: 'FETCH_RANDOM_COLOR',
      payload: API.get(`all_colors/${Math.floor(Math.random() * 49) + 1}/${Math.floor(Math.random() * 11) + 1}`)
    });
  }
}
