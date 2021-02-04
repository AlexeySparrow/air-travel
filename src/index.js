import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/index.scss';
import './assets/scss/_variables.scss';
import './assets/scss/scroll.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();