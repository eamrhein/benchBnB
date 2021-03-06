/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={(props) => (
      !loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    )}
  />
);
const Prot = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={(props) => (
      loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    )}
  />
);

const mapStateToProps = (state) => {
  return { loggedIn: Boolean(state.session.id) };
};

export const ProtectedRoute = withRouter(
  connect(
    mapStateToProps,
    null
  )(Prot)
);
export const AuthRoute = withRouter(
  connect(
    mapStateToProps,
    null,
  )(Auth),
);
