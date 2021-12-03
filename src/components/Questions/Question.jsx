import React from "react";
import { Link } from "react-router-dom";
import QuestionBox from "./QuestionBox";
import { useState } from "react";
const Question = (props) => {
  let [number, setNumber] = useState(1);
  const nextQuestion = () => {
    if(number+1>10){
      return 0
    }
    setNumber(number++);
    console.log(props.questions.results[0]);
  };
  return (
    <div>
      <div className='category'>
        <div className='box'>
            <QuestionBox questions={props.questions}number={number}/>
          <div className='nextBtn'>
            <Link to='/questions'>
              <button className='btn btnoutline-dark' onClick={nextQuestion}>
                Next
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
