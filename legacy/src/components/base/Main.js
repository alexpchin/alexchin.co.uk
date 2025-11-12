import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Page } from '../common';

const Main = ({ location, routes, NoMatch }) => {
  return (
    <Page>
      <Switch>
        {routes.map((route, i) => (
          <Route exact key={i} {...route} />
        ))}
        <Route component={NoMatch} />
      </Switch>
    </Page>
  );
};

export { Main };
