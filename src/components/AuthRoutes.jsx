import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

function AuthRoutes() {
  const isAuth = useSelector((state) => state.users.isAuth);
  if (isAuth) {
    return <Navigate to="/home" replace />;
  }
  return <Outlet />;
}

export default AuthRoutes;
