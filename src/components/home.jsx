import React from "react";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  const history = useNavigate();
  return (
    <div>
      <p>Home</p>
      <button onClick={() => history("/profile")}>Go to Profile</button>
    </div>
  );
};

export default Home;
