import React from "react";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import { BrowserRouter,Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter basename="/social-app/">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
