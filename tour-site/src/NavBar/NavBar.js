import css from './NavBar.module.css';
import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
                <nav>
                    <NavLink className = {css.nav} to='/'>Головна</NavLink>
                    <NavLink className = {css.nav} to='/catalog'>Каталог</NavLink>
                    <NavLink className = {css.nav} to='/contacts'>Контакти</NavLink>
                    <NavLink className = {css.nav} to='/reviews'>Відгуки</NavLink>
                    <NavLink className = {css.nav} to='/test' > Де відпочити?</NavLink>
                </nav>
        );
    }
}

export default NavBar;