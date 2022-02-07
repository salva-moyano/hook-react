import React from "react";
import {Link, NavLink} from "react-router-dom";

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link to="/" className="navbar-brand">UseContext</Link>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink to="/home"  className={isActive => "nav-link" + (!isActive ? " unselected" : "") }>Home</NavLink>
                    <NavLink to="/about" className={isActive => "nav-link" + (!isActive ? " unselected" : "") }>About</NavLink>
                    <NavLink to="/login" className={isActive => "nav-link" + (!isActive ? " unselected" : "") }>Login</NavLink>
                </div>
            </div>
        </nav>
    )
}