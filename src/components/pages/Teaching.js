import React from 'react';
import Helmet from 'react-helmet';
import {
  Card,
  Columns,
  Media,
  Image,
  Heading,
  Content,
} from 'react-bulma-components';

const students = [
  {
    name: 'Dave',
    quote: 'Alex is a good teacher',
    date: '11:09 PM - 1 Jan 2016',
  },
  {
    name: 'Dave',
    quote: 'Alex is a good teacher',
    date: '11:09 PM - 1 Jan 2016',
  },
  {
    name: 'Dave',
    quote: 'Alex is a good teacher',
    date: '11:09 PM - 1 Jan 2016',
  },
  {
    name: 'Dave',
    quote: 'Alex is a good teacher',
    date: '11:09 PM - 1 Jan 2016',
  },
  {
    name: 'Dave',
    quote: 'Alex is a good teacher',
    date: '11:09 PM - 1 Jan 2016',
  },
  {
    name: 'Dave',
    quote: 'Alex is a good teacher',
    date: '11:09 PM - 1 Jan 2016',
  },
];

const Teaching = () => (
  <div>
    <Helmet title="Teaching" />
    <Heading size={2}>Teaching</Heading>
    <Columns>
      {students.map((student, i) => {
        return (
          <Columns.Column>
            <Card>
              <Card.Content>
                <Media>
                  <Media.Item renderAs="figure" position="left">
                    <Image
                      renderAs="p"
                      size={64}
                      alt="64x64"
                      src="http://bulma.io/images/placeholders/128x128.png"
                    />
                  </Media.Item>
                  <Media.Item>
                    <Heading size={4}>John Smith</Heading>
                    <Heading subtitle size={6}>
                      @johnsmith
                    </Heading>
                  </Media.Item>
                </Media>
                <Content>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                  <a href="#1">#css</a> <a href="#2">#responsive</a>
                  <br />
                  <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </Content>
              </Card.Content>
            </Card>
          </Columns.Column>
        );
      })}
    </Columns>
  </div>
);

export { Teaching };
