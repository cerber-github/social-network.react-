import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import headerPhoto from "../../assets/images/switzerland-national-soccer-team-logo-333716.png"

const Header = (props) => {
    return <header className={s.Header}>
        <img src={headerPhoto}/>
        <div className={s.loginBlock}>
            {props.isAuth ? props.login
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header;
