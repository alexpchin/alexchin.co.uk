import styled from 'styled-components';
import { white, transparent } from '../../data';

const NavbarALink = styled.a`
  color: ${white};
  font-size: 1.5rem;
  &.active {
    text-decoration: line-through;
  }
  &:hover {
    background: ${transparent} !important;
    color: ${white} !important;
    font-weight: 700;
  }
`;

export { NavbarALink };
