import {createStore, combineReducers, applyMiddleware} from 'redux';
import {searchBarReducer} from '../search-bar/search-bar-reducer.js';
import {pictureReducer} from '../show-pictures/show-pictures-reducer.js';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  search: searchBarReducer,
  picture: pictureReducer
});

export default createStore(reducer, applyMiddleware(thunk));