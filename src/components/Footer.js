import styled from 'styled-components';
import React from 'react';
import { white, darkGrey } from '../../constants/colors';
import { Footer as BulmaFooter } from 'react-bulma-components';

const StyledFooter = styled(BulmaFooter)`
  background: ${darkGrey};
  text-align: center;
  color: ${white};
`;

const date = new Date();
const year = date.getFullYear();

const Footer = () => {
  return (
    <StyledFooter>
      <div className="container">&copy; Alex Chin {year}</div>
    </StyledFooter>
  );
};

export { Footer };
