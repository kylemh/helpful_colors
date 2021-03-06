import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const initialState = {
  isLoading: true,
  error: '',
  randomColor: {},
  listedColors: [],
  colorsOfName: [],
}

function colors(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_COLORS_PENDING':
      return { ...state, isLoading: true };

    case 'FETCH_COLORS_REJECTED':
      return { ...state, isLoading: false, error: action.payload };

    case 'FETCH_COLORS_FULFILLED':
      return { ...state, isLoading: false, listedColors: action.payload.data };

    case 'FETCH_COLORS_BY_NAME_PENDING':
      return { ...state, isLoading: true };

    case 'FETCH_COLORS_BY_NAME_REJECTED':
      return { ...state, isLoading: false, error: action.payload };

    case 'FETCH_COLORS_BY_NAME_FULFILLED':
      return { ...state, isLoading: false, colorsOfName: action.payload.data };

    case 'FETCH_RANDOM_COLOR_PENDING':
      return { ...state, isLoading: true };

    case 'FETCH_RANDOM_COLOR_REJECTED':
      return { ...state, isLoading: false, error: action.payload };

    case 'FETCH_RANDOM_COLOR_FULFILLED':
      return { ...state, isLoading: false, randomColor: action.payload.data }

    default:
      return state;
  }
}

const reducers = combineReducers({
  colors,
  routing: routerReducer,
});

export default reducers;
