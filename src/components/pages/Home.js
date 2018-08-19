import styled from 'styled-components';
import React from 'react';
import Helmet from 'react-helmet';
import { Heading, Recommendations, Projects } from '../common';
import { recommendations, projects } from '../../data';

import { Slide } from 'react-reveal';
import { white, blue, lightGrey, purpleBlue, black } from '../../data';

const Intro = styled.section`
  color: ${white};
  background: ${blue};
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding-bottom: 20vh;
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
  margin: 1rem 0;
`;

const WorkRecommendations = styled.section`
  min-height: 100vh;
  background: ${lightGrey};
  padding: 3rem 0;

  p,
  h3,
  .card {
    color: ${black} !important;
    outline-color: ${black};
  }
`;

const Home = () => (
  <div>
    <Helmet title="Home" />
    <Intro>
      <div>
        <Slide bottom cascade>
          <p>Hola,</p>
          <MainHeader size={1}>"I make apps and things"</MainHeader>
          <Heading size={3} renderAs="h2">
            Me ← Digital entrepreneur &amp; teacher.
          </Heading>
        </Slide>
      </div>
    </Intro>
    <Projects data={projects} />
    <WorkRecommendations>
      <Recommendations
        heading="Recommendations"
        data={recommendations}
        col={1}
      />
    </WorkRecommendations>
  </div>
);

export { Home };
