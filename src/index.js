import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const injectGA = () => {
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag('js', new Date());

  gtag('config', 'GA_TRACKING_ID');
};

ReactDOM.render(
  <React.StrictMode>
    <App />
    <script
      async
      src='https://www.googletagmanager.com/gtag/js?id=G-C51N10NTE4'
    ></script>
    <script>{injectGA()}</script>
  </React.StrictMode>,
  document.getElementById('root')
);
