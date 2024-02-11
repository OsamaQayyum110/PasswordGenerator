import React from "react";
import useUser from "../context/UserContext";

const Profile = () => {
  const { user } = useUser();
  if (!user) return <div>user not exist!</div>;
  return <div>Hello {user}</div>;
};

export default Profile;
