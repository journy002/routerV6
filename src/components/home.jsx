import React from "react";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  // router 버전이 v5 -> v6로 업데이트 되면서 달라진 점들.
  // useHistory() => useNavigate()로 바뀜
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
