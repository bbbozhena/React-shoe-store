import Header from "../Header/Header";
import Content from "../Content/Content";
import "./App.scss";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Drawer from "../Drawer/Drawer";
import Home from "../Home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
