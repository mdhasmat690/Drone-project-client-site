import { CircularProgress } from "@mui/material";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/UseAuth";

const AdminRoute = ({ children}) => {
  let location = useLocation();
  const { user, admin, adminLoading } = useAuth();
  if (adminLoading) {
    return <CircularProgress />;
  }
  if (user.email && admin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};

export default AdminRoute;
