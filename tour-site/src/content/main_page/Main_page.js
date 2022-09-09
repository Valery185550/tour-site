import React, {Component} from 'react';
import css from './Main_page.module.css'
import NavBar from "../../NavBar/NavBar";
import Logo from "../logo/Logo";

class MainPage extends Component {
    render() {
        return (
            <div className={css.content}>
                <NavBar></NavBar>
                <Logo/>
                <h1 className={css.h1}>Подорожуй разом з нами!</h1>
            </div>
        );
    }
}

export default MainPage;