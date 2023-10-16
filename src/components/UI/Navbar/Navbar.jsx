import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import cl from './Navbar.module.css'
import {AuthContext} from "../../../context";
import MyButton from "../button/MyButton";

const Navbar = () => {
  const {setIsAuth} = useContext(AuthContext)

  const logout = () => {
    setIsAuth(false)
  }

  return (
    <div className={cl.navbar}>
      <MyButton onClick={logout}>Выйти</MyButton>
      <div className={cl.navbarLinks}>
        <Link className={cl.navbarItem} to="/about">О компании</Link>
        <Link className={cl.navbarItem} to="/posts">Посты</Link>
      </div>
    </div>
  );
};

export default Navbar;