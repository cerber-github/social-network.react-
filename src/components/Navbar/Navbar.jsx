import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return <nav className={s.Navbar}>
        <div className={s.item}>
            <NavLink className = {navData => navData.isActive ? s.active : s.item} to="/profile">Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink className = {navData => navData.isActive ? s.active : s.item} to="/dialogs">Message</NavLink>
        </div>
        <div className={s.item}>
            <a>News</a>
        </div>
        <div className={s.item}>
            <a>Music</a>
        </div>
        <div className={s.item}>
            <a>Settings</a>
        </div>
    </nav>
}

export default Navbar;