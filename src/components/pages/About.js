import React from 'react';
import Helmet from 'react-helmet';
import { Section } from '../common';
import { Container } from 'react-bulma-components';
import { white, green } from '../../constants/colors';

const Intro = Section.extend`
  color: ${white};
  background: ${green};
  h1 {
    line-height: 10rem;
  }
`;

const About = () => (
  <div>
    <Intro>
      <Container>
        <h1>About</h1>
      </Container>
    </Intro>
    <Helmet title="About" />
  </div>
);

export { About };
