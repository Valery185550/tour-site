import React, {Component} from 'react';
import logo from "../../img/logo.png";
import css from "./Logo.module.css";

class Logo extends Component {
    render() {
        return (
            <div className={css.logo}>
                <img src={logo} />
            </div>
        );
    }
}

export default Logo;