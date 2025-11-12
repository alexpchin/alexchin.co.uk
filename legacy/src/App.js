import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header, Main, ScrollToTop } from './components/base';
import { Home, Teaching, About, Contact, NoMatch } from './components/pages';
import { socials } from './data';

// Font-awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookSquare,
  faTwitterSquare,
  faGithubSquare,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

// Add the icons you need in the project
library.add(
  faFacebookSquare,
  faTwitterSquare,
  faGithubSquare,
  faInstagram,
  faHeart
);

export const routes = [
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
        <ScrollToTop>
          <Header routes={routes} socials={socials} state={this.state} />
          <Main routes={routes} NoMatch={NoMatch} />
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
