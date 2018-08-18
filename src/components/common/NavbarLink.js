import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { white } from '../../data';

const NavbarLink = styled(NavLink)`
  color: ${white};
  &.active {
    text-decoration: line-through;
  }
`;

export { NavbarLink };
