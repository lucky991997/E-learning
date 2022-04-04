import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
      navigate('/login',{replace: true})
  };
  return (
    <div>
      <button onClick={() => handleLogout()}>LOGout</button>
    </div>
  );
};

export default Logout;
