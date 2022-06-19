import React from "react";
import { Routes, Route } from "react-router-dom";
import SignupContainer from "./session/signup_container";

const App = () => (
  <div>
    <Routes>
      <Route path="/signup" component={SignupContainer} />
    </Routes>
  </div>
);

export default App;