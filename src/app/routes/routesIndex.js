import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoutes";

const Login = lazy(() => import("app/containers/auth/Login"));
const Register = lazy(() => import("app/containers/auth/Register"));
const ForgotPassword = lazy(() => import("app/containers/auth/Resetpassword"));
const Dashboard = lazy(() => import("app/containers/home/Dashboard"));

const RoutesMain = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="/register"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Register />
            </Suspense>
          }
        />
        <Route
          path="/reset"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ForgotPassword />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
};

export default RoutesMain;
