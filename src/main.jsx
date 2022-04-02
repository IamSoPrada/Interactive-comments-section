import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import store from './slices/index.js';
import './index.css';
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
