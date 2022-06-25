import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
       return <header className={s.Header}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/7/7e/Falanster_logo_300x300.png'/>

            <div className={s.loginBlock}>
                { props.isAuth ? props.login
                    : <NavLink to={'/login'}>Login</NavLink> }
            </div>
        </header>
}

export default Header;