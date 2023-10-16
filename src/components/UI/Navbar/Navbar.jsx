import React from 'react';
import {Link} from "react-router-dom";
import cl from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={cl.navbar}>
      <div className={cl.navbarLinks}>
        <Link className={cl.navbarItem} to="/about">О компании</Link>
        <Link className={cl.navbarItem} to="/posts">Посты</Link>
      </div>
    </div>
  );
};

export default Navbar;