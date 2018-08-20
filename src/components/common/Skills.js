import styled from 'styled-components';
import React from 'react';
import { Container } from 'react-bulma-components';
import { Heading } from '../common';
import { black, white } from '../../data';
import { Fade } from 'react-reveal';

const SkillsSection = styled.section`
  background: ${white};
  color: ${black};
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .container {
    text-align: center;
    h3 {
      color: ${black};
    }
    p {
      margin: 0 0 1rem;
    }
    div {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
    }
    i {
      font-size: 5rem;
      padding: 5px;
      @media (max-width: 769px) {
        font-size: 3rem;
      }
    }
  }
`;

const Skills = ({ data, col }) => {
  return (
    <SkillsSection>
      <Fade cascade>
        <Container>
          <Heading size={3} renderAs="h3">
            Skills
          </Heading>
          <p>A bad workman never blames his tools...</p>
          <div>
            {data.map((skill, i) => (
              <i key={i} className={skill} />
            ))}
          </div>
        </Container>
      </Fade>
    </SkillsSection>
  );
};

export { Skills };
