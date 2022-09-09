import React, {Component, useEffect, useState} from 'react';
import css from "./Reviews.module.css";
import NavBar from "../../NavBar/NavBar";
import Logo from "../logo/Logo";
import Review from "./review/Review";

function Reviews() {

    const[jsonReviews,setJsonReviews]=useState([]);


    useEffect(()=>{
        async function f()
        {
            setJsonReviews(Array.from(await fetch("http://localhost:3001/reviews").then((res)=>res.json())));
        }

        f();

    },[]);
    
        return (
            <div className={css.bcgd}>
                <NavBar className={css.navBar}/>
                <Logo/>

                {
                    jsonReviews.map((review)=><div className={css.review}><Review name={review.name} text = {review.text} date={review.date}/></div>)
                }

            </div>
        );
    
}

export default Reviews;