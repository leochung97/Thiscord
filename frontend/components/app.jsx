import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import SplashContainer from "./splash/splash_container";
import OverviewContainer from "./app/overview_container"
import { AuthRoute, ProtRoute } from '../util/route_util';

const App = () => (
  <>
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <ProtRoute path="/channels/" component={OverviewContainer} />
      <Route exact path="/" component={SplashContainer} />
    </Switch>
  </>
);

export default App;