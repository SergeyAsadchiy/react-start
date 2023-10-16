import React from 'react';
import {Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostPage from "../pages/PostPage";

const routes = [
  {path: '/about', element: <About/>},
  {path: '/posts', element: <Posts/>},
  {path: '/posts/:id', element: <PostPage/>},
  {path: '/', element: <Posts/>},
  {path: '*', element: <Error/>},

]

const AppRouter = () => {
  return (
    <Routes>
      {routes.map(route =>
        <Route path={route.path} element={route.element}/>
      )}
    </Routes>
  );
};

export default AppRouter;