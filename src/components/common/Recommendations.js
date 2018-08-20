import styled from 'styled-components';
import React from 'react';
import { Columns, Media, Image, Content } from 'react-bulma-components';
import { Heading, Card } from '../common';
import { Fade } from 'react-reveal';
import { chunk } from '../../helpers';

const Wrapper = styled.div`
  max-width: 80vw;
  margin: 0 auto;
`;

const Recommendations = ({ heading, data, col }) => {
  // convert the students into an array of rows
  const rows = chunk(data, col);
  return (
    <Wrapper>
      <Heading size={3} renderAs="h3">
        {heading}
      </Heading>
      {rows.map((row, i) => {
        return (
          <Columns key={i}>
            {row.map((column, i) => {
              return (
                <Columns.Column key={i}>
                  <Fade>
                    <Card>
                      <Card.Content>
                        <Media>
                          <Media.Item renderAs="figure" position="left">
                            <Image
                              renderas="p"
                              size={64}
                              alt={'An image of ' + column.name}
                              src={column.image}
                            />
                          </Media.Item>
                          <Media.Item>
                            <Heading size={4} renderAs="p">
                              {column.name}
                            </Heading>
                            <Heading subtitle size={6} renderAs="p">
                              {column.date}
                            </Heading>
                          </Media.Item>
                        </Media>
                        <Content>{column.quote}</Content>
                      </Card.Content>
                    </Card>
                  </Fade>
                </Columns.Column>
              );
            })}
          </Columns>
        );
      })}
    </Wrapper>
  );
};

export { Recommendations };
