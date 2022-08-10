import React from "react";
import { Route, Switch } from "react-router-dom";
import modal from "./modal/modal";
import ServerNav from "./servers/server_nav/server_nav";
import ServerContent from "./servers/server_content/server_content";
import ConversationContent from "./conversations/conversation_content";
import Conversation from "./conversations/conversation";
import Channel from "./channels/channel";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import Splash from "./splash/splash";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

const App = () => (
  <div className="app">
    <Route path="/" component={modal}></Route>

    <ProtectedRoute path="/channels" component={ServerNav} />

    <Switch>
      <ProtectedRoute path="/channels/@me" component={ConversationContent} />
      <ProtectedRoute
        path="/channels/:serverId/:channelId"
        component={ServerContent}
      />
    </Switch>

    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute
        path="/channels/@me/:conversationId"
        component={Conversation}
      />
      <ProtectedRoute
        exact
        path="/channels/:serverId/:channelId"
        component={Channel}
      />
      <Route exact path="/" component={Splash} />
    </Switch>
  </div>
);

export default App;
