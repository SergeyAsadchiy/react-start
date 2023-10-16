import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from '../router'
import {AuthContext} from "../context";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
  const {isAuth, isAuthLoading} = useContext(AuthContext)
  if(isAuthLoading) {
    return <Loader/>
  }

  return (
    <Routes>
      {isAuth
        ? privateRoutes.map(route =>
          <Route path={route.path} element={route.element} key={route.path}/>
        )
        : publicRoutes.map(route =>
          <Route path={route.path} element={route.element} key={route.path}/>
        )
      }
    </Routes>
  );
};

export default AppRouter;