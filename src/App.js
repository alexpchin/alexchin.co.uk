import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Home, About, NoMatch } from './components/static';
import { Header, Main, Footer } from './components/common';

const routes = [
  {
    title: 'Home',
    path: '/',
    component: Home,
    exact: true,
  },
  {
    title: 'About',
    path: '/about',
    component: About,
  },
];

class App extends Component {
  render() {
    return (
      <Router>
        {/* .site is used for the sticky-footer */}
        <div className="site">
          <Header routes={routes} />
          <Main routes={routes} NoMatch={NoMatch} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
