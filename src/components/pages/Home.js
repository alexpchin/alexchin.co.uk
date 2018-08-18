import React from 'react';
import Helmet from 'react-helmet';
import { white } from '../../data';
import { Section } from '../common';
import { Heading, Recommendations } from '../common';
import { recommendations } from '../../data';

const Intro = Section.extend`
  color: ${white};
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Home = () => (
  <div>
    <Intro>
      <div>
        <p>Hola</p>
        <h1>I make apps and things.</h1>
        <h2>Web and mobile application development services</h2>
      </div>
    </Intro>
    <Helmet title="Home" />
    <Heading size={2}>Recommendations</Heading>
    <Recommendations data={recommendations} col={2} />
  </div>
);

export { Home };
