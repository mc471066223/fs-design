import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
function RenderRoutes(props) {
  const { routes, extraProps = {}, switchProps = {} } = props;
  const mapFunc = routes => {
    return routes.map((route, index) => {
      if (route.redirect) {
        return (
          <Redirect
            key={route.path || index}
            exact={route.exact}
            strict={route.strict}
            from={route.path}
            to={route.redirect}
          />
        );
      } 
      if (route.routes && route.routes.length > 0) {
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
                  <Switch>
                    {React.createElement(
                      route.component && route.component,
                      {},
                      mapFunc(route.routes)
                    )}
                  </Switch>
                </Suspense>
              );
            }}
          />
        );
      } else {
        // 只存在一个路由
        return (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            strict={route.strict}
            render={props => (
              <Suspense fallback={null}>
                {/* 路由渲染 */}
                {route.render ? (
                  route.render({ ...props, ...extraProps, route: route })
                ) : (
                  <route.component {...props} {...extraProps} route={route}></route.component>
                )}
              </Suspense>
            )}
          />
        );
      }
    });
  };

  return routes ? <Switch {...switchProps}>{mapFunc(routes)}</Switch> : null;
}

export default RenderRoutes;
