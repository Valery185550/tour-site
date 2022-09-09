
import React, { Component } from 'react';
import css from "./Review.module.css";

function Review(props) {
    
        return (
            <div className={css.bcgd}>
                <div className={css.name}>{props.name}</div>
                {props.text}
                <div className={css.date}>{props.date}</div>
            </div>
        );
    
}

export default Review;