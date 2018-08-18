import React from 'react';
import Helmet from 'react-helmet';
import { Container, Columns } from 'react-bulma-components';

const Teaching = () => (
  <Container>
    <h1>Teaching</h1>
    <Helmet title="Teaching" />
    <Columns>
      <Columns.Column>First column</Columns.Column>
      <Columns.Column>Second column</Columns.Column>
      <Columns.Column>Third column</Columns.Column>
      <Columns.Column>Fourth column</Columns.Column>
    </Columns>
  </Container>
);

export { Teaching };
