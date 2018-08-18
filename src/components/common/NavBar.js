import styled from 'styled-components';
import { Navbar as BulmaNavbar } from 'react-bulma-components';
import { transparent, black } from '../../data';

const Navbar = styled(BulmaNavbar)`
  background: ${transparent};
  &.is-active {
    background: ${black};
    height: 100%;
  }
`;

export { Navbar };
