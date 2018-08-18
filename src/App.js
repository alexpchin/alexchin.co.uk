import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Home, About, Teaching, Contact, NoMatch } from './components/pages';
import { Header, Main, Footer } from './components/base';

const routes = [
  {
    title: 'Work',
    path: '/',
    component: Home,
    exact: true,
  },
  {
    title: 'Teaching',
    path: '/teaching',
    component: Teaching,
  },
  {
    title: 'About',
    path: '/about',
    component: About,
  },
  {
    title: 'Contact',
    path: '/contact',
    component: Contact,
  },
];

class App extends Component {
  state = {
    open: false,
  };

  render() {
    return (
      <Router>
        {/* .site is used for the sticky-footer */}
        <div className="site">
          <Header routes={routes} state={this.state} />
          <Main routes={routes} NoMatch={NoMatch} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
