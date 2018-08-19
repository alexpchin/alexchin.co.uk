import React from 'react';
import Helmet from 'react-helmet';
import { Heading, Section, Recommendations } from '../common';
import { students } from '../../data';
import { Slide } from 'react-reveal';
import { white } from '../../data';

const Intro = Section.extend`
  color: ${white};
  text-align: left;
  // display: flex;
  // align-items: center;
  // justify-content: center;
  height: 60vh;
  // margin-bottom: 20vh;
`;

const Teaching = () => (
  <div>
    <Helmet title="Teaching" />
    <Intro>
      <div>
        <Slide bottom cascade>
          <Heading size={2}>Teaching</Heading>
          <p>I've been a teacher for...</p>
        </Slide>
      </div>
    </Intro>
    <Recommendations data={students} col={2} />
  </div>
);

export { Teaching };
