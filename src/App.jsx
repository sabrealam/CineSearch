import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import AllRoutes from "./AllRoute/AllRoutes";
import Login from "./AuthenticationPages/Login";
function App() {
  return (
    <>
      <Navbar />
      <AllRoutes />
      {/* <Login /> */}
    </>
  );
}

export default App;
