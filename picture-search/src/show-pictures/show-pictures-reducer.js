import * as actions from './show-pictures-action.js';

const initialState = {
  hasOverlay: false,
  img: null,
  title: null
};

export const pictureReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.CHANGE_OVERLAY:
      return Object.assign({}, state, {
          hasOverlay: action.hasOverlay,
          img: action.img,
          title: action.title });
    default:
      return state;
  }
}