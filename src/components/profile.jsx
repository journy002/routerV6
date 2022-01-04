import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const history = useNavigate();
  return (
    <>
      <h1>PROFILE</h1>
      <button
        onClick={() => {
          history("/");
        }}
      >
        Go to Home
      </button>
    </>
  );
};

export default Profile;
