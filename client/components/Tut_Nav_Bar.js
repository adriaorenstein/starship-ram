import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

class Tut_Nav_Bar extends React.Component {
    render() {
        return (
            <div className="tut-nav-bar">
                <NavLink to='/tutorial/introduction' className={({ isActive }) => isActive ? "tut-nav-item tut-nav-item-active" : "tut-nav-item"}>
                    Introduction
                </NavLink>
                <NavLink to='/tutorial/simplest-pro' className={({ isActive }) => isActive ? "tut-nav-item tut-nav-item-active" : "tut-nav-item"}>
                    The Simplest Program
                </NavLink>
            </div>
        )
    }
}

export default Tut_Nav_Bar;