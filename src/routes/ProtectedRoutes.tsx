/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Route, RouteComponentProps, Redirect } from "react-router-dom";
import useGlobalStoreProvider from "../context";

import { APP_ROUTES, AUTHENTICATED_ROUTES } from "./path";

export interface AppRouteObjectProps {
  component: any;
  path: string | string[];
  title?: string;
  key: string;
  isAuthenticated?: boolean;
  exact?: boolean;
}

const ProtectedRoute = ({
  component: Component,
  ...rest
}: AppRouteObjectProps): JSX.Element => {
  const { isAuthenticated } = useGlobalStoreProvider();

  return (
    <Route
      {...rest}
      exact
      render={(props: RouteComponentProps) =>
        isAuthenticated ? (
          <Component {...props} {...rest} />
        ) : (
          <Redirect
            push
            to={{
              pathname: AUTHENTICATED_ROUTES.signin,
            }}
          />
        )
      }
    />
  );
};
export const PublicRoute = ({
  component: Component,
  ...rest
}: AppRouteObjectProps): JSX.Element => {
  const { isAuthenticated } = useGlobalStoreProvider();

  return (
    <Route
      {...rest}
      exact
      render={(props: RouteComponentProps) =>
        !isAuthenticated ? (
          <Component {...props} {...rest} />
        ) : (
          <Redirect
            push
            to={{
              pathname: APP_ROUTES.home,
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;
