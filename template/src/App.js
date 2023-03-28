import React, { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { useDispatch } from "react-redux";
import AppRoutes from "./appRoutes";
import Layout from "./Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  const dispatch = useDispatch();

  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("token-1"));

  useEffect(() => {
    dispatch({ type: "CHECK_PERSISTED_USER" });
  }, []);

  return (
    <BrowserRouter>
      {isLoggedIn ? (
        <Layout>
          <AppRoutes />
        </Layout>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default App;
