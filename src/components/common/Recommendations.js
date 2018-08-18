import React from 'react';
import { Columns, Media, Image, Content } from 'react-bulma-components';
import { Heading, Card } from '../common';

// Function to split array into chunks, r is array j is chunk size
const chunk = (r, j) =>
  r.reduce((a, b, i, g) => (!(i % j) ? a.concat([g.slice(i, i + j)]) : a), []);

const Recommendations = ({ data, col }) => {
  // convert the students into an array of rows
  const rows = chunk(data, col);
  return rows.map((row, i) => {
    return (
      <Columns key={i}>
        {row.map((column, i) => {
          return (
            <Columns.Column key={i}>
              <Card>
                <Card.Content>
                  <Media>
                    <Media.Item renderAs="figure" position="left">
                      <Image
                        renderas="p"
                        size={64}
                        alt="64x64"
                        src={column.image}
                      />
                    </Media.Item>
                    <Media.Item>
                      <Heading size={4}>{column.name}</Heading>
                      <Heading subtitle size={6}>
                        <time>{column.date}</time>
                      </Heading>
                    </Media.Item>
                  </Media>
                  <Content>
                    {column.quote}. <a href="#1">#css</a>{' '}
                    <a href="#2">#responsive</a>
                    <br />
                  </Content>
                </Card.Content>
              </Card>
            </Columns.Column>
          );
        })}
      </Columns>
    );
  });
};

export { Recommendations };
