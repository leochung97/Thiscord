import React from "react";
import { Link, Switch, Route, withRouter, Router } from "react-router-dom";
import { AuthRoute, ProtRoute } from "../util/route_util";
import SignupContainer from "./session/signup_container";
import NavBarContainer from "./nav_bar/nav_bar_container";
import SplashContainer from "./splash/splash_container";
import LoginContainer from "./session/login_form_container"

const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/login" element={<LoginContainer />} />
      <AuthRoute exact path="/signup" element={<SignupContainer/>} />
      <Route path="/" element={<NavBarContainer/>}/>
      <Route path="/" element={<SplashContainer/>}/>
    </Switch>
  </div>
);

export default App;