import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import Main from './main-component/main.js';
import store from './store/store.js';

import './index.css';

ReactDOM.render(
  <Provider store= {store}>
    <Main />
  </Provider>,
  document.getElementById('root'));

