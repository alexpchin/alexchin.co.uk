import styled from 'styled-components';
import React from 'react';
import Helmet from 'react-helmet';
import { white } from '../../constants/colors';

const Intro = styled.section`
  color: ${white};
  text-align: center;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 4rem;
  }
  h2 {
    font-size: 2rem;
  }
`;

const Home = () => (
  <div className="container">
    <Intro>
      <div>
        <h1>Apps for All Screens</h1>
        <h2>Web and mobile application development services</h2>
      </div>
    </Intro>
    <Helmet title="Home" />
  </div>
);

export { Home };
