import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";

// 
const Auth = ({ component: Component, path, loggedIn }) => (
  <Route path={path} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    )
  )} />
);

const Protected = ({ component: Component, path, loggedIn }) => (
  <Route path={path} render={(props) => (
    loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/login"/>
    )
  )} />
);

const mSTP = state => ({
  loggedIn: Boolean(state.session.id),
})

export const AuthRoute = withRouter(connect(mSTP, null)(Auth));
export const ProtRoute = withRouter(connect(mSTP, null)(Protected));