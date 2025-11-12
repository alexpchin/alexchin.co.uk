import styled from 'styled-components';
import React from 'react';
import Helmet from 'react-helmet';
import { white, blue } from '../../data';
import img from '../../images/backgrounds/dancing-tomato.gif';

const StyledNoMatch = styled.section`
  background: url(${img}) no-repeat;
  background-color: ${blue};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-size: cover;
  background-position: 50%;

  h1 {
    color: ${white};
    font-size: 6rem;
  }
`;

const NoMatch = () => (
  <StyledNoMatch>
    <h1>404</h1>
    <Helmet title="404" />
  </StyledNoMatch>
);

export { NoMatch };
