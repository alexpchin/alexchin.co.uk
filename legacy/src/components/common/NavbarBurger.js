import styled from 'styled-components';
import { Navbar } from 'react-bulma-components';
import { white } from '../../data';

const NavbarBurger = styled(Navbar.Burger)`
  color: ${white};
  span {
    height: 2px;
  }
`;

export { NavbarBurger };
