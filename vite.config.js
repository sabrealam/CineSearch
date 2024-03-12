import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})


/**
 import { useState } from "react";
import "./App.css"; 
import SignIn from "./Authentication/SignUp";
import Login from "./Authentication/Login";

function App() {
  return (
    <>
      { <SignIn/> }
      <Login />
    </>
  );
}

export default App;


import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
 */