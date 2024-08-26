import React from "react";
import { Navigate } from "react-router-dom";
import { authLogin } from "app/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const ProtectedRoute = ({ children }) => {
  const [user, loading, error] = useAuthState(authLogin);
//   console.log("🚀 ~ ProtectedRoute ~ user:", user);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error("Firebase authentication error:", error);
    return <div>Error while loading authentication state.</div>;
  }

  return user ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
