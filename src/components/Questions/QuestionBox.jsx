import React from "react";
import { useState } from "react";
import { useEffect } from "react";
const QuestionBox = (props) => {
  let [optionChecked, setOption] = useState("");
  let number = props.number;
  return (
    <div className='qnBox'>
      {/* {props.questions.results[number].question} */}
      <div className='optionsBox'>
      
         <label htmlFor="1" className="optionBox">
            <input type="radio" name="optoin" id="1" onChange={()=>{setOption('1')}}/>
        </label>
        <label htmlFor="2" className="optionBox">
            <input type="radio" name="optoin" id="2" onChange={()=>{setOption('2')}} />
        </label>
        <label htmlFor="3" className="optionBox">
            <input type="radio" name="optoin" id="3" onChange={()=>{setOption('3')}}/>
        </label>
        <label htmlFor="4" className="optionBox">
            <input type="radio" name="optoin" id="4" onChange={()=>{setOption('4')}}/>
        </label>
      </div>
    </div>
  );
};

export default QuestionBox;
