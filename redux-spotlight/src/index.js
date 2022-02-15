import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './store/store';

render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
);
