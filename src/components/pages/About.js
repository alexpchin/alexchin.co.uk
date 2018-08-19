import styled from 'styled-components';
import React from 'react';
import Helmet from 'react-helmet';
import { VerticallyAlignedColumn } from '../common';
import { Container, Columns, Image } from 'react-bulma-components';
import { Slide, Fade } from 'react-reveal';
import { orange } from '../../data';

const Intro = styled.section`
  height: 100vh;
  padding: 3rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  background: ${orange};
  background-size: cover;
  background-position: 50%;
`;

const About = () => (
  <div>
    <Helmet title="About" />
    <Intro>
      <Container>
        <Columns>
          <VerticallyAlignedColumn>
            <Fade>
              <div>
                <p>Dear visitor,</p>
                <br />
                <p>Hello....</p>
                <br />
                <p>Regards,</p>
                <p>Alex Chin</p>
              </div>
            </Fade>
          </VerticallyAlignedColumn>
          <VerticallyAlignedColumn>
            <Slide top cascade />
          </VerticallyAlignedColumn>
        </Columns>
      </Container>
    </Intro>
  </div>
);

export { About };
