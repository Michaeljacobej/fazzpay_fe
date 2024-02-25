import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

function PrivateRoutes() {
  const auth = useSelector((state) => state.users);
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, [pathname]);

  if (!auth.isAuth) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}

export default PrivateRoutes;
