import styled from 'styled-components';
import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Home, About, Teaching, Contact, NoMatch } from './components/pages';
import { Header, Main } from './components/base';

const routes = [
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
          <Header routes={routes} state={this.state} />
          <Main routes={routes} NoMatch={NoMatch} />
        </Site>
      </Router>
    );
  }
}

export default App;
