import React from "react";
import { Switch, Route, Routes } from "react-router-dom";
import SignupContainer from "./session/signup_container";
import NavBarContainer from "./nav_bar/nav_bar_container";
import SplashContainer from "./splash/splash_container";

const App = () => (
  <div>
    <Routes>
      <Route path="/signup" element={<SignupContainer/>} />
      <Route path="/" element={<NavBarContainer/>}/>
      <Route exact path="/" element={<SplashContainer/>}/>
    </Routes>
  </div>
);

export default App;