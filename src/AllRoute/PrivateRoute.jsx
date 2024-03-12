import React from "react";
import { Navigate } from "react-router-dom";
import { useFirebase } from "../Firebase";
export default function PrivateRoute(props) {
  let {isloggedIn} = useFirebase();
 
  return isloggedIn ? props.children : <Navigate to="/login" />;
}
