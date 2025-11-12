import styled from 'styled-components';
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Typing from 'react-typing-animation';
import { Container } from 'react-bulma-components';
import { Fade } from 'react-reveal';
import { orange, black } from '../../data';

const Intro = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  background: ${orange};
  background-size: cover;
  background-position: 50%;
  font-size: 2rem;
  span {
    background: ${black};
  }
  .hashtag {
    background: ${black};
    padding: 0 1rem;
  }
  @media (max-width: 1087px) {
    padding: 0 3rem;
  }
`;

class About extends Component {
  render() {
    return (
      <div>
        <Helmet title="About" />
        <Intro>
          <Container>
            <Fade>
              <Typing>
                <p>
                  Hello, my name is Alex Chin. I'm 30 years old and I'm a
                  tech-guy who lives in Shoreditch.{' '}
                  <span className="hashtag">#original</span>
                </p>
              </Typing>
            </Fade>
          </Container>
        </Intro>
      </div>
    );
  }
}

export { About };
