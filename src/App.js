import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Helmet from 'react-helmet';

// import logo from './logo.svg';
import './App.css';

import { Home, About, NoMatch } from './components/static';
import { Footer } from './components/common';

const title = 'Web Developer, Coding Instructor & Innovator';
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
      <div className="App">
        <Router>
          <div>
            <header>
              <Helmet titleTemplate={`%s - ${title}`} />
              <nav>
                {routes.map((route, i) => (
                  <Link key={i} to={route.path}>
                    {route.title}
                  </Link>
                ))}
              </nav>
            </header>
            <Switch>
              {routes.map((route, i) => (
                <Route key={i} {...route} />
              ))}
              <Route component={NoMatch} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
