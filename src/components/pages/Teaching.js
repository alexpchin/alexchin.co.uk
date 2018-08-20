import styled from 'styled-components';
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import {
  Heading,
  Skills,
  Recommendations,
  VerticallyAlignedColumn,
  Heart,
} from '../common';
import { students, skills } from '../../data';
import { Slide } from 'react-reveal';
import { Columns, Container } from 'react-bulma-components';
import { blue, white } from '../../data';
import img from '../../images/backgrounds/teaching.gif';

const Intro = styled.section`
  height: 100vh;
  padding: 3rem 0;
  background: url(${img}) no-repeat;
  display: flex;
  background-size: cover;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-position: 50%;
  a {
    text-decoration: underline;
    color: ${white};
  }
  @media (max-width: 1087px) {
    padding: 0 3rem;
  }
`;

const StudentRecommendations = styled.section`
  min-height: 100vh;
  background: ${blue};
  padding: 3rem 0;
`;

class Teaching extends Component {
  render() {
    return (
      <div>
        <Helmet title="Teaching" />
        <Intro>
          <Container>
            <Columns>
              <VerticallyAlignedColumn>
                <Slide left cascade>
                  <Heading size={2}>
                    Over 300 students have taught me how to code better.
                  </Heading>
                </Slide>
              </VerticallyAlignedColumn>
              <VerticallyAlignedColumn>
                <Slide right cascade>
                  <div>
                    <p>
                      I began teaching people to code at{' '}
                      <a
                        href="https://generalassemb.ly/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        General Assembly
                      </a>{' '}
                      London in 2014 as a teaching assistant. After learning the
                      ropes, I began teaching my own classes as a Lead
                      Instructor shortly after, eventually graduating to 'Head
                      of Curriculum' in London in 2016.
                    </p>
                    <br />
                    <p>
                      I <Heart icon="heart" /> helping people to learn new
                      skills and am always amazed at how discovering a new skill
                      always seems to bring the most out of people.
                    </p>
                  </div>
                </Slide>
              </VerticallyAlignedColumn>
            </Columns>
          </Container>
        </Intro>
        <Skills data={skills} col={4} />
        <StudentRecommendations>
          <Recommendations
            heading="What students say"
            data={students}
            col={1}
          />
        </StudentRecommendations>
      </div>
    );
  }
}

export { Teaching };
