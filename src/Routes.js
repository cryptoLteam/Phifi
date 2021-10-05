/**
 * Caution: Consider this file when using react-scripts
 *
 * You may delete this file and its occurrences from the project filesystem if you are using GatsbyJS or NextJS version
 */
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import WithLayout from 'WithLayout';
import {
  Main as MainLayout,
  Minimal as MinimalLayout,
  DocsLayout,
} from './layouts';

import {
  IndexView,
  TokenEconomic,
  Team,
  Charity,
  Documentation as DocumentationView,
  NotFound as NotFoundView,
  NotFoundCover as NotFoundCoverView,
} from './views';

const Routes = () => {
  return (
    <Switch>
      <Route
        exact
        path="/aaa"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={IndexView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/home"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={IndexView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/tokeneconomic"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={TokenEconomic}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/"
        render={matchProps => (
          <WithLayout {...matchProps} component={Charity} layout={MainLayout} />
        )}
      />
      <Route
        exact
        path="/team"
        render={matchProps => (
          <WithLayout {...matchProps} component={Team} layout={MainLayout} />
        )}
      />
      <Route
        exact
        path="/whitepaper"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={DocumentationView}
            layout={DocsLayout}
          />
        )}
      />
      <Route
        exact
        path="/not-found"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={NotFoundView}
            layout={MinimalLayout}
          />
        )}
      />
      <Route
        exact
        path="/not-found-cover"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={NotFoundCoverView}
            layout={MinimalLayout}
          />
        )}
      />
      <Redirect to="/not-found-cover" />
    </Switch>
  );
};

export default Routes;
