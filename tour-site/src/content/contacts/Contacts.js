import React, {Component} from 'react';
import css from "./Contacts.module.css";
import NavBar from "../../NavBar/NavBar";
import map from "../../img/map.jpg";
import Logo from "../logo/Logo";
import instagram from "../../img/instagram_logo.png";
import facebook from "../../img/facebook_logo.png";
import gmail from "../../img/gmail_logo.png";

class Contacts extends Component {
    render() {
        return (
            <div className={css.bcgd}>
                <NavBar/>
                <Logo/>
                <div className={css.refers}>
                    <a href={`#`}><img src={instagram} className={css.instagram}/></a>
                    <a href={`#`}><img src={facebook} className={css.facebook}/></a>
                    <a href={`#`}><img src={gmail} className={css.gmail}/></a>
                </div>
                <pre className={css.address}>
                    Проспект Богоявленський, 21
                </pre>
                <pre className={css.phone}>
                    (093) 55 22 588
                    <br/>
                    (050) 42 74 003
                </pre>
                <img src={map} className={css.map}/>
            </div>
        );
    }
}

export default Contacts;