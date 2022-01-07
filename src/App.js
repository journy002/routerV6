import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/home";
import Profile from "./components/profile";

const App = (props) => (
  <BrowserRouter>
    <ul>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/profile"}>Profile</Link>
      </li>
    </ul>
    <Routes>
      <Route path="/" exact={true} element={<Home />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
    </Routes>
  </BrowserRouter>
);

export default App;
