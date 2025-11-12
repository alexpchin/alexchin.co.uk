import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { white, transparent } from '../../data';

const NavbarLink = styled(NavLink)`
  color: ${white};
  &.active {
    text-decoration: line-through;
  }
  &:hover {
    background: ${transparent} !important;
    color: ${white} !important;
    font-weight: 700;
  }
`;

export { NavbarLink };
