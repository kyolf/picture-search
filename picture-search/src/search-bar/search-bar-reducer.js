import * as actions from './search-bar-action.js';

const initialState = {
  imageList: [],
  loading: false,
  error: false
}

export const searchBarReducer = (state = initialState, action) => {
  switch(action.type) {
    case actions.SEARCH_FOR_IMAGES_REQUEST:
    console.log('loading');
      return Object.assign({}, state, {loading: true});
    case actions.SEARCH_FOR_IMAGES_SUCCESS:
    console.log(action.imageList, 'asdafasf');
      return Object.assign({}, state, {loading: false, imageList: action.imageList});
    case actions.SEARCH_FOR_IMAGES_ERROR:
      return Object.assign({}, state, {loading: false, error: action.error});
    default:
      return state;
  }
}