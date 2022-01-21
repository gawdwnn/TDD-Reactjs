import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './locale/i18n';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import createStore from './state/store';

ReactDOM.render(
  <Router>
    <Provider store={createStore()}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
