import {NavLink} from "react-router-dom";
import css from "./StartTest.module.css";

const StartTest = ()=>{
    return(
        <div>
            <p>Цей тест допоможе визначити, яка країна підходть вам для подорожі </p>
            <NavLink className={css.testButton} to="question">Розпочати тестування</NavLink>
        </div>
    );
}

export default StartTest;