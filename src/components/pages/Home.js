import React from 'react';
import Helmet from 'react-helmet';
import { white } from '../../data';
import { Heading, Recommendations, Section } from '../common';
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
        <Heading size={1}>I make apps and things.</Heading>
        <Heading size={3} renderAs="h2">
          Web and mobile application development services
        </Heading>
      </div>
    </Intro>
    <Helmet title="Home" />
    <Recommendations data={recommendations} col={1} />
  </div>
);

export { Home };
