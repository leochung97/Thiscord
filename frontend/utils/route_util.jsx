import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";

const Auth = ({ component: Component, path, loggedIn }) => (
  <Route 
    path={path} 
    render={(props) => (
    loggedIn ? (
      <Redirect to="/" />
    ) : (
      <Component {...props} />
    )
  )} />
);

const Prot = ({ component: Component, path, loggedIn }) => (
  <Route 
    path={path} 
    render={(props) => (
    loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/login"/>
    )
  )} />
);

const mSTP = state => ({
  loggedIn: Boolean(state.session.currentUser),
})

export const AuthRoute = withRouter(connect(mSTP)(Auth));
export const ProtRoute = withRouter(connect(mSTP)(Prot));