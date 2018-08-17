import React from 'react';
import { Route, Switch } from 'react-router-dom';

const Main = ({ routes, NoMatch }) => {
  return (
    <Switch>
      {routes.map((route, i) => (
        <Route key={i} {...route} />
      ))}
      <Route component={NoMatch} />
    </Switch>
  );
};

export { Main };
