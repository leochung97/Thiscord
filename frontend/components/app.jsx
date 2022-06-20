import React from "react";
import { AuthRoute, ProtRoute } from "../utils/route_util";
import { Switch, Route, Routes, withRouter } from "react-router-dom";
import SignupContainer from "./session/signup_container";
import NavBarContainer from "./nav_bar/nav_bar_container";
import SplashContainer from "./splash/splash_container";
import LoginContainer from "./session/login_form_container"

const App = () => (
  <div>
    <Switch>
      <AuthRoute path="/signup" element={<SignupContainer/>} />
      <AuthRoute path="/login" element={<LoginContainer />} />
      <Route path="/" element={<NavBarContainer/>}/>
      <Route exact path="/" element={<SplashContainer/>}/>
    </Switch>
  </div>
);

export default App;