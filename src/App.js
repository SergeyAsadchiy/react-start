import React, {useEffect, useState} from "react";
import {BrowserRouter} from 'react-router-dom'
import './styles/App.css'
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context";

function App() {
  const [isAuth, setIsAuth] = useState(false)
  const [isAuthLoading, setIsAuthLoading] = useState(true)

  useEffect(() => {
    if (localStorage.getItem('auth')) setIsAuth(true)
    setIsAuthLoading(false)
  }, [])

  return (
    <AuthContext.Provider value={{isAuth, setIsAuth, isAuthLoading}}>
      <BrowserRouter>
        <Navbar/>
        <AppRouter/>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App;
