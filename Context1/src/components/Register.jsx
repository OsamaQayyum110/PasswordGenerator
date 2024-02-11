import React, { useState } from "react";
import useUser from "../context/UserContext";

const Register = () => {
  const [username, setUsername] = useState("");

  const { user, setUser } = useUser();
  const login = () => {
    setUser( username );
  };
  return (
    <>
      <input
        type="text"
        placeholder="Enter Your Name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={login}>submit</button>
    </>
  );
};

export default Register;
