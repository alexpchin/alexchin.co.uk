import styled from 'styled-components';
import { Navbar } from 'react-bulma-components';
import { white, black } from '../../constants/colors';

const NavbarMenu = styled(Navbar.Menu)`
  color: ${white};
  &.is-active {
    background: ${black};
    box-shadow: none;
  }
`;

export { NavbarMenu };
