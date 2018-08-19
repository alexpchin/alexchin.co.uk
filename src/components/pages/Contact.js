import styled from 'styled-components';
import React from 'react';
import Helmet from 'react-helmet';
import { Heading, VerticallyAlignedColumn } from '../common';
import { Container, Columns } from 'react-bulma-components';
import { Zoom } from 'react-reveal';
import { black, white } from '../../data';
import img from '../../images/backgrounds/noise.gif';

const Intro = styled.section`
  height: 100vh;
  padding: 3rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  background: ${black};
  background: url(${img}) no-repeat;
  background-size: cover;
  background-position: 50%;
`;

const ContactDetails = styled.div`
  width: 100%;
  background: ${white};
  border-radius: 5px;
  padding: 2rem;
`;

const Input = styled.input`
  box-shadow: none;
`;

const Textarea = styled.textarea`
  box-shadow: none;
`;

const Contact = () => (
  <div>
    <Helmet title="Contact" />
    <Intro>
      <Container>
        <Zoom bottom>
          <Columns>
            <VerticallyAlignedColumn>
              <Heading size={2}>
                Go crazy,
                <br />
                Say hi!
              </Heading>
            </VerticallyAlignedColumn>
            <VerticallyAlignedColumn>
              <ContactDetails>
                <form
                  action="https://formspree.io/alex@alexchin.co.uk"
                  method="POST"
                >
                  <div className="field">
                    <label className="label">What is your name?</label>
                    <div className="control">
                      <Input className="input" type="text" name="name" />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">What is your email?</label>
                    <div className="control">
                      <Input className="input" type="email" name="email" />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Your message</label>
                    <div className="control">
                      <Textarea
                        className="textarea"
                        placeholder="e.g. Hello world"
                        name="message"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <button className="button is-link is-pulled-right has-background-black">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </ContactDetails>
            </VerticallyAlignedColumn>
          </Columns>
        </Zoom>
      </Container>
    </Intro>
  </div>
);

export { Contact };
