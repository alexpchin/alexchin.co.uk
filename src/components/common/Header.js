import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';

const title = 'Web Developer, Coding Instructor & Innovator';

const Header = ({ routes }) => {
  return (
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
  );
};

export { Header };
