import React from 'react';
import { render } from 'react-snapshot';
// create-react-app doesn't handle scss files
import 'bulma/css/bulma.css';
import './css/index.css';
import App from './App';

// Add back in when https is added to heroku with paid dynos
// import registerServiceWorker from './registerServiceWorker';

const rootEl = document.getElementById('root');
render(<App />, rootEl);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    render(<NextApp />, rootEl);
  });
}

// The service worker is a web API that helps you cache your assets and other files so that when the user is offline or on slow network, he/she can still see results on the screen, as such, it helps you build a better user experience, that's what you should know about service worker's for now. It's all about adding offline capabilities to your site
// Add back in when https is added to heroku with paid dynos
// registerServiceWorker();
