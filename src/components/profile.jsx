import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = (props) => {
  const history = useNavigate();

  return (
    <div>
      <p>Profile</p>
      <button onClick={() => history("/")}>Go to Home</button>
    </div>
  );
};

export default Profile;
