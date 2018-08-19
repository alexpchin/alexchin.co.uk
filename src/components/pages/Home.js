import styled from 'styled-components';
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Heading, Recommendations, Projects, Heart } from '../common';
import { recommendations, projects } from '../../data';
import { Slide } from 'react-reveal';
import { white, blue, lightGrey, purpleBlue, black, red } from '../../data';
import img from '../../images/backgrounds/smiling.png';

const Intro = styled.section`
  color: ${white};
  background: ${blue};
  text-align: left;
  height: 100vh;
`;

const IntroInner = styled.div`
  background: ${black};
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  z-index: 2;
  position: relative; // IMPORTANT
`;

const MainHeader = Heading.extend`
  background-image: linear-gradient(
    to right,
    ${purpleBlue} 0%,
    ${purpleBlue} 100%
  );
  background-position: 0 0.84em;
  background-repeat: repeat-x;
  background-size: 1px 10px;
  display: inline-block;
  margin: 1rem 0;
`;

const WorkRecommendations = styled.section`
  min-height: 100vh;
  background: ${lightGrey};
  padding: 3rem 0;

  p,
  h3,
  .card {
    color: ${black} !important;
    outline-color: ${black};
  }
`;

const Slider = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

class Home extends Component {
  componentDidMount() {
    this.createParticles();
  }

  createParticles() {
    const ParticleSlider = window.ParticleSlider;
    var ps = new ParticleSlider({
      ptlGap: 1,
      mouseForce: 100,
      // monochrome: true,
      color: red,
      ptlSize: 2,
    });
    var ptl = new ps.Particle(ps);
    ptl.ttl = 20;
  }

  render() {
    return (
      <div>
        <Helmet title="Home" />
        <Intro>
          <Slider id="particle-slider">
            <div className="slides">
              <div className="slide" data-src={img} />
            </div>
            <canvas className="draw" />
          </Slider>
        </Intro>
        <IntroInner>
          <div>
            <Slide bottom cascade>
              <p>Hola,</p>
              <MainHeader size={1}>
                "I <Heart icon="heart" />
                making things"
              </MainHeader>
              <Heading size={3} renderAs="h2">
                Me ← Digital entrepreneur &amp; teacher.
              </Heading>
            </Slide>
          </div>
        </IntroInner>
        <Projects data={projects} />
        <WorkRecommendations>
          <Recommendations
            heading="Recommendations"
            data={recommendations}
            col={1}
          />
        </WorkRecommendations>
      </div>
    );
  }
}

export { Home };
