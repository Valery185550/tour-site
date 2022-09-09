import React, {useState} from 'react';
import css from './Test.module.css'
import NavBar from "../../NavBar/NavBar";
import {Route,Routes} from "react-router-dom";
import Question from "./question/Question";
import StartTest from "./startTest/StartTest";
import Logo from "../logo/Logo";
import Finish from "./finish/Finish";

const Test = ()=> {
const [finish,setFinish]=useState(false);
let [answers,setAnswers] = useState([]);
     return (
            <div className={css.test} >
                <NavBar ></NavBar>
                <Routes>
                    <Route path="/question" element={finish? <Finish answers={answers} />: <Question setAnswers={setAnswers} answers={answers} setFinish={setFinish}/>}></Route>
                    <Route path="/" element={<StartTest/>}></Route>
                </Routes>

                <Logo/>
            </div>
        );
}


export default Test;