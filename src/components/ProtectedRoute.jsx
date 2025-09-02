import React from "react";
import { Navigate } from "react-router-dom";

export function ProtectedRoute({ children, allowedRoles = [] }) {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/user/auth" replace />;
  }

  // Optional: decode user role from token (here a stub)
  let userRole = null;
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    userRole = payload.role || null;
  } catch {}

  if (allowedRoles.length && !allowedRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
}
