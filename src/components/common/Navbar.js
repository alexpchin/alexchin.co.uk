import styled from 'styled-components';
import { Navbar as BulmaNavbar } from 'react-bulma-components';
import { transparent, black } from '../../data';

const Navbar = styled(BulmaNavbar)`
  background: ${transparent};
  &.is-active {
    background: ${black};
    height: 100vh;
    position: fixed;
    right: 0;
    width: 80vw;
  }
  .navbar-menu {
    &.is-active {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      font-size: 1.5rem;

      .navbar-start,
      .navbar-end {
        width: 100%;
        justify-content: center !important;
      }
    }
  }
`;

export { Navbar };
