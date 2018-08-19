import styled from 'styled-components';
import React from 'react';
import Helmet from 'react-helmet';
import { Heading, Recommendations, Section } from '../common';
import { recommendations } from '../../data';

import { Fade, Slide } from 'react-reveal';
import { white, lightBlue, purpleBlue, blue } from '../../data';

const Intro = Section.extend`
  color: ${white};
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60vh;
  margin-bottom: 20vh;
`;

const MainHeader = Heading.extend`
  background-image: linear-gradient(
    to right,
    ${purpleBlue} 0%,
    ${purpleBlue} 100%
  );
  background-position: 0 0.84em;
  background-repeat: repeat-x;
  background-size: 1px 15px;
  display: inline-block;
  margin: 0.5rem 0;
`;

const Projects = Section.extend`
  margin: 0 3rem;
  background: ${lightBlue};
  transform: rotate(20deg);
  margin-bottom: 3rem;
  padding: 3rem;
  h2 {
    color: ${blue};
  }
`;

const Project = styled.div`
  width: 100%;
  border: 1px solid ${blue};
  min-height: 100px;
  background: ${white};
`;

const Home = () => (
  <div>
    <Helmet title="Home" />
    <Intro>
      <div>
        <Slide bottom cascade>
          <p>Hola</p>
          <MainHeader size={1}>I make apps and things.</MainHeader>
          <Heading size={3} renderAs="h2">
            Web and mobile application development services
          </Heading>
        </Slide>
      </div>
    </Intro>
    <Fade cascade>
      <Projects>
        <Heading size={3} renderAs="h2">
          Recent Work
        </Heading>
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </Projects>
    </Fade>
    <Recommendations data={recommendations} col={1} />
  </div>
);

export { Home };
