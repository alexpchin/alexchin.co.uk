import React from 'react';
import Helmet from 'react-helmet';

import { HeaderLink, NavBar, Logo } from '../common';

// This is the second part of the title, i.e. Home - ↓
const title = 'Web Developer, Coding Instructor & Innovator';

const Header = ({ routes }) => {
  return (
    <header>
      <Helmet titleTemplate={`%s - ${title}`} />
      <NavBar className="navbar" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <Logo className="navbar-item" href="/">
              Alex Chin
            </Logo>
            <a
              role="button"
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
          <div className="navbar-menu">
            <div className="navbar-end">
              {routes.map((route, i) => (
                <HeaderLink key={i} to={route.path} className="navbar-item">
                  {route.title}
                </HeaderLink>
              ))}
            </div>
          </div>
        </div>
      </NavBar>
    </header>
  );
};

export { Header };
