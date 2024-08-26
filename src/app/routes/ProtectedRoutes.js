import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { authLogin } from "app/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const ProtectedRoute = () => {
  const [user, loading] = useAuthState(authLogin);

  if (loading) {
    return <div>Loading...</div>;
  }

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
