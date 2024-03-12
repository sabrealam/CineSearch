import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Movies from "../Pages/Movies";
import WebSeries from "../Pages/Web-Series";
import Others from "../Pages/Others";
import SignUp from "../AuthenticationPages/SignUp";
import Login from "../AuthenticationPages/Login";
import PrivateRoute from "./PrivateRoute";
import Search from "../Pages/Search";
import SignleMoviePage from "../Pages/SignleMoviePage";
export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/search"
          element={
            <PrivateRoute>
              <Search />
            </PrivateRoute>
          }
        />
        <Route
          path="/movies"
          element={
            <PrivateRoute>
              <Movies />
            </PrivateRoute>
          }
        />
        <Route
          path="/webseries"
          element={
            <PrivateRoute>
              <WebSeries />
            </PrivateRoute>
          }
        />
        <Route path="/search/:id" element={<SignleMoviePage/>} />
        <Route path="/others" element={<Others />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}
