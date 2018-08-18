import React from 'react';
import Helmet from 'react-helmet';
import { Container } from 'react-bulma-components';

const NoMatch = () => (
  <Container>
    <h1>404?!</h1>
    <Helmet title="404" />
  </Container>
);

export { NoMatch };
