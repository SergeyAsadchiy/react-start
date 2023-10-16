import React from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from '../router'

const isAuth = false

const AppRouter = () => {
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