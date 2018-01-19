import {createStore} from 'redux';
import {combineReducers} from 'redux';
import {searchBarReducer} from '../search-bar/search-bar-reducer.js';


const reducer = combineReducers({
  search: searchBarReducer
});

export default createStore(reducer);