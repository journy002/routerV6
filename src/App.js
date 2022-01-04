import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/home";
import Profile from "./components/profile";

const App = (props) => (
  // router 버전이 v5 -> v6로 업데이트 되면서 달라진 점들.
  // Switch => Routes
  // component => element
  <BrowserRouter>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
    </ul>
    <Routes>
      <Route path="/" exact={true} element={<Home />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
    </Routes>
  </BrowserRouter>
);

export default App;
