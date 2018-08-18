import styled from 'styled-components';
import React from 'react';
import Helmet from 'react-helmet';
import { Container } from 'react-bulma-components';
import { white } from '../../constants/colors';
import img from '../../images/dancing-tomato.gif';

const StyledNoMatch = styled(Container)`
  background: url(${img}) no-repeat;
  height: 100vh;
  display: flex;
  background-size: cover;
  justify-content: center;
  align-items: center;
  align-content: center;
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
