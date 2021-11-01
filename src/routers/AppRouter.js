import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import config from './config';

const renderRoutes = routes => {
  if (!Array.isArray(routes)) {
    return null;
  }
  return (
    <Switch>
      {routes.map((route, index) => {
        if (route.childRoutes && route.childRoutes.length > 0) {
          // 存在二级菜单
          return (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              strict={route.strict}
              render={() => {
                return (
                  <Suspense fallback={null}>
                    {React.createElement(route.component, {}, renderRoutes(route.childRoutes))}
                  </Suspense>
                );
              }}
            />
          );
        }
        return (
          <Route
            key={route.path || index}
            path={route.path}
            exact={route.exact}
            strict={route.strict}
            render={() => {
              const renderChildRoutes = renderRoutes(route.childRoutes);
              if (route.component) {
                return (
                  <Suspense fallback={null}>
                    <route.component route={route}>{renderChildRoutes}</route.component>
                  </Suspense>
                );
              }
              return renderChildRoutes;
            }}
          />
        );
      })}
    </Switch>
  );
};
const AppRouter = () => <Router>{renderRoutes(config)}</Router>;

export default AppRouter;
