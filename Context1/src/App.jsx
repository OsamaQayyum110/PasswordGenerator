import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import { UserContextProvider } from "./context/UserContext";
import Register from "./components/Register";
import Profile from "./components/Profile";

function App() {
  

  return (
    <UserContextProvider>
      <Register />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
