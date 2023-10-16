import About from "../pages/About";
import Posts from "../pages/Posts";
import PostPage from "../pages/PostPage";
// import Error from "../pages/Error";
import Login from "../pages/Login";

export const privateRoutes = [
  {path: '/about', element: <About/>},
  {path: '/posts', element: <Posts/>},
  {path: '/posts/:id', element: <PostPage/>},
  {path: '/', element: <Posts/>},
  {path: '*', element: <Posts/>},
]

export const publicRoutes = [
  {path: '/login', element: <Login/>},
  {path: '/', element: <Login/>},
  {path: '*', element: <Login/>},
]