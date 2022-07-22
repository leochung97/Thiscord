import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import SplashPage from "./splash/splash.jsx";
import OverviewContainer from "./app/overview_container";
import ChannelContainer from './app/channels/channel';
import { AuthRoute, ProtRoute } from '../util/route_util';

const App = () => (
  <>
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <ProtRoute path="/channels" component={OverviewContainer} />
      <ProtRoute path="/channels/:serverId" component={ChannelContainer} />
      <Route exact path="/" component={SplashPage} />
    </Switch>
  </>
);

export default App;