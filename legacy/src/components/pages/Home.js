import styled from 'styled-components';
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Heading, Recommendations, Projects } from '../common';
import {
  recommendations,
  projects,
  lightYellow,
  white,
  blue,
  lightGrey,
  black,
  red,
  green,
} from '../../data';
import { Slide } from 'react-reveal';
import img from '../../images/backgrounds/smiling.png';

import ParticleSlider from '../../lib/particleslider';

const Intro = styled.section`
  color: ${white};
  background: ${blue};
  text-align: left;
  height: 100vh;
`;

const Slogan = styled.div`
  background: ${black};
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  position: relative;
  h1 {
    display: inline-block;
    margin: 1rem 0;
  }
  h2 {
    color: ${lightYellow};
  }

  @media (max-width: 1087px) {
    padding: 0 3rem;
  }
`;

const WorkRecommendations = styled.section`
  min-height: 100vh;
  background: ${lightGrey};
  padding: 3rem 0;

  p,
  h3,
  .card {
    color: ${black} !important;
    outline-color: ${green};
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

  componentWillUnmount() {
    // This is due to an issue caused by the timeouts used within the ParticleSlider
    var id = window.setTimeout(function() {}, 0);
    while (id--) {
      window.clearTimeout(id);
    }
  }

  createParticles() {
    new ParticleSlider({
      ptlGap: 1,
      mouseForce: 100,
      color: red,
      ptlSize: 2,
    });
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
        <Slogan>
          <div>
            <Slide bottom cascade>
              <p>Namaste,</p>
              <Slide left>
                <Heading size={1}>I build things</Heading>
              </Slide>
              <Slide right>
                <Heading size={3} renderAs="h2">
                  Me ← Digital entrepreneur &amp; teacher.
                </Heading>
              </Slide>
            </Slide>
          </div>
        </Slogan>
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
