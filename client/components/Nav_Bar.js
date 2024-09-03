import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

class Nav_Bar extends React.Component {
    render() {
        return (
            <div className="nav-bar">
                <img src="/assets/logo.png" className="logo"></img>
                {/* <NavLink to='/' className={({ isActive }) => isActive ? "nav-item nav-item-active" : "nav-item"}>
                    Home
                </NavLink> */}
                <NavLink to='/tutorial/introduction' className={({ isActive }) => isActive ? "nav-item nav-item-active" : "nav-item"}>
                    Start Journey
                </NavLink>
            </div>

        )
    }
}

export default Nav_Bar;