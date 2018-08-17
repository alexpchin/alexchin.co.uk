import React from 'react';
import Helmet from 'react-helmet';

const NoMatch = () => (
  <div className="container">
    <h1>404?!</h1>
    <Helmet title="404" />
  </div>
);

export { NoMatch };
