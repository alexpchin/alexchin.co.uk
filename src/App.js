import styled from 'styled-components';
import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header, Main } from './components/base';
import { Home, Teaching, About, Contact, NoMatch } from './components/pages';

// Font-awesome
import { library } from '@fortawesome/fontawesome-svg-core';
// import {  } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookSquare,
  faTwitterSquare,
  faGithubSquare,
} from '@fortawesome/free-brands-svg-icons';

// Add the icons you need in the project
library.add(faFacebookSquare, faTwitterSquare, faGithubSquare);

export const routes = [
  {
    title: 'Home',
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

export const socials = [
  {
    icon: 'facebook-square',
    path: 'https://www.facebook.com/alexpchin',
  },
  {
    icon: 'twitter-square',
    path: 'https://www.twitter.com/alexpchin',
  },
  {
    icon: 'github-square',
    path: 'https://www.github.com/alexpchin',
  },
];

const Site = styled.div`
  // https://philipwalton.github.io/solved-by-flexbox/demos/sticky-footer/
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

class App extends Component {
  state = {
    open: false,
  };

  render() {
    return (
      <Router>
        <Site>
          <Header routes={routes} socials={socials} state={this.state} />
          <Main routes={routes} NoMatch={NoMatch} />
        </Site>
      </Router>
    );
  }
}

export default App;
