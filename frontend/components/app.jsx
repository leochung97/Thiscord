import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import SplashContainer from "./splash/splash_container";
import Overview from "./app/overview";
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <ProtectedRoute path="/channels/" component={Overview} />
      <Route exact path="/" component={SplashContainer} />
    </Switch>
  </div>
);

export default App;