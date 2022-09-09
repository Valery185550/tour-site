import React, {Component, useEffect, useState} from 'react';
import css from "./Finish.module.css";
import img from "../../../img/finish.jpg";

function Finish (props) {
    const [result,setResult]=useState('');

    useEffect(async ()=>{
        let params="";
        for(let i=0; i< props.answers.length; i++)
        {
            params+="answers="+props.answers[i]+"&";
        }
        let text = await fetch("http://localhost:3001/result?"+params).then((res)=>res.text());
        setResult(text);
    },[]);

        return (
            <div className={css.bcgd}>
                <h2>Finish</h2>
                <img src={img}/>
                <div className={css.result}>
                    {result}
                </div>
            </div>
        );
    }


export default Finish;