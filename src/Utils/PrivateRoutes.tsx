import React, { useEffect, useState} from 'react'
import { Route, Outlet, useNavigate, Navigate } from "react-router-dom";
import { auth } from '../db/firebase';
import { useAuthState } from "react-firebase-hooks/auth";

const PrivateRoutes = () => {

  const [user, loading, error] = useAuthState(auth)
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate();

  useEffect(() => {
      if (loading) {
          return;
      }
      if (!user) navigate("/login");
  }, [user, loading]);

  return  <Outlet /> 
}

export default PrivateRoutes