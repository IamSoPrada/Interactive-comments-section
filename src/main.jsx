import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import AuthProvider from './providers/authProvider';
import App from './components/App';
import store from './slices/index.js';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
