import React from "react";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  const history = useNavigate();
  return (
    <>
      <h1>HOME</h1>
      <button
        onClick={() => {
          history("/profile");
        }}
      >
        Go to Profile
      </button>
    </>
  );
};

export default Home;
