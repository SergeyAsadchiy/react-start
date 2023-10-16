import React from 'react';
import {Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostPage from "../pages/PostPage";
import Login from "../pages/Login";

const privateRoutes = [
  {path: '/about', element: <About/>},
  {path: '/posts', element: <Posts/>},
  {path: '/posts/:id', element: <PostPage/>},
  {path: '/', element: <Posts/>},
  {path: '*', element: <Error/>},
]

const publicRoutes = [
  {path: '/login', element: <Login/>},
  {path: '/', element: <Login/>},
  {path: '*', element: <Error/>},
]

const isAuth = false

const AppRouter = () => {
  return (
    <Routes>
      {isAuth
        ? privateRoutes.map(route =>
          <Route path={route.path} element={route.element} key={route.path}/>
        )
        :publicRoutes.map(route =>
          <Route path={route.path} element={route.element} key={route.path}/>
        )
      }
    </Routes>
  );
};

export default AppRouter;