import styled from 'styled-components';
import { white } from '../../constants/colors';
import { Link } from 'react-router-dom';

const LogoLink = styled(Link)`
  color: ${white};
  font-size: 1.5rem;
  &:hover {
    color: ${white};
  }
`;

export { LogoLink };
