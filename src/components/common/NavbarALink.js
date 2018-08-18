import styled from 'styled-components';
import { white } from '../../data';

const NavbarALink = styled.a`
  color: ${white};
  &.active {
    text-decoration: line-through;
  }
`;

export { NavbarALink };
