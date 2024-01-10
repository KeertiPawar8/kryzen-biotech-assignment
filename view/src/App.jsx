import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import Login from "./components/signupLogin";
import UserDetails from "./components/UserDetails";
import Protected from "./components/protected";
import Preview from "./components/Preview";



function App() {
 
  return (
    <div className="App">
  
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/userDetails"
            element={
              <Protected>
                <UserDetails />
              </Protected>
            }
          />
          <Route
            path="/preview"
            element={
              <Protected>
                <Preview />
              </Protected>
            }
          />
        </Routes>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
