import styled from 'styled-components';
import { Card as BulmaCard } from 'react-bulma-components';
import { transparent, white, orange } from '../../data';

const Card = styled(BulmaCard)`
  background: ${transparent};
  box-shadow: none;
  outline: 1px solid ${white};
  color: ${white};
  a {
    color: ${orange};
  }
  img {
    border-radius: 100%;
  }
`;

export { Card };
