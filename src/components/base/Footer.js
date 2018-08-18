import styled from 'styled-components';
import React from 'react';
import { white, darkGrey } from '../../constants/colors';

const StyledFooter = styled.footer`
  background: ${darkGrey};
  text-align: center;
  color: ${white};
`;

const date = new Date();
const year = date.getFullYear();

const Footer = () => {
  return (
    <StyledFooter className="footer">
      <div className="container">&copy; Alex Chin {year}</div>
    </StyledFooter>
  );
};

export { Footer };
