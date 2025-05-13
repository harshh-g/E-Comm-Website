import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import UserLayout from "./Layout/UserLayout";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<UserLayout />} />
      </Routes>
    </div>
  );
};

export default App;
