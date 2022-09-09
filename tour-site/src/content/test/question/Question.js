import React, {useEffect, useState} from 'react';
import css from './Question.module.css';

const Question = (props) => {
    const [question, setQuestion] = useState(`-`);
    const [options, setOptions] = useState([]);
    const [count,setCount] = useState(1);
    const [isChecked, setChecked] = useState([]);
    const [image,setImage] = useState("");
    let countQuestion;


    useEffect(() => {
        async function f() {
            debugger;
            let response = await fetch(`http://localhost:3001/question?id=${count}`);
            let document = await response.json();
            countQuestion=document.options.length;
            let massChecked=[];
            for(let i=0; i<countQuestion;i++)
            {
                massChecked[i]=false;
            }
            let src= (await import(`../../../img/picture_question${count}.jpg`)).default;
            setImage(<img src={src}/>);
            setChecked(massChecked);
            setQuestion(document.question);
            setOptions(document.options);
        }

        if(count==13)
        {
            props.setFinish(true);
            return;
        }

        f();
    },[count]);


    return (
        <div className={css.Question}>
            <h2>{question}</h2>
            {image}
            <div>
                {
                    options.map(
                        (option,index) => <div className={css.optionText} key={index}>{option} <input num={index+1} key={index} onChange={()=>{}} checked={isChecked[index]} onClick={(e) => {
                            let newAnswers = Array.from(props.answers);
                            newAnswers.push(e.target.attributes.num.value);
                            props.setAnswers(newAnswers);
                            setCount(count + 1);
                        }} type='checkbox' value={option}/></div>)
                }
            </div>
        </div>
        );
}

export default Question;