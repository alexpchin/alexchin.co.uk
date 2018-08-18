import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Page } from '../common';

const Main = ({ routes, NoMatch }) => {
  return (
    <Page className="site-content">
      <Switch>
        {routes.map((route, i) => (
          <Route key={i} {...route} />
        ))}
        <Route component={NoMatch} />
      </Switch>
    </Page>
  );
};

export { Main };
