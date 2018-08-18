import React from 'react';
import Helmet from 'react-helmet';
import { Heading, Recommendations } from '../common';
import { students } from '../../data';

const Teaching = () => (
  <div>
    <Helmet title="Teaching" />
    <Heading size={2}>Teaching</Heading>
    <Recommendations data={students} col={2} />
  </div>
);

export { Teaching };
