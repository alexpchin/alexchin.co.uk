import React from 'react';
import Helmet from 'react-helmet';
import { Page } from '../common';

const NoMatch = () => (
  <Page>
    <h1>404?!</h1>
    <Helmet title="404" />
  </Page>
);

export { NoMatch };
