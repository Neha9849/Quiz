import React from "react";
import { useState } from "react";

const QuestionBox = (props) => {
    const o1= document.getElementById('1')
    const o2= document.getElementById('2')
    const o3= document.getElementById('3')
    const o4= document.getElementById('4')
    const changeBg=(o)=>{
        console.log(o)
        console.log(o1)
        console.log(o2)
        // o1.style.backgroundColor="#F3F3FB"
        // o2.style.backgroundColor="#F3F3FB"
        // o3.style.backgroundColor="#F3F3FB"
        // o4.style.backgroundColor="#F3F3FB"
        // o.style.backgroundColor="#a5a5f7"
    }
  //let qn=props.questions.results[0].question
  //console.log(props.questions.results[0].question);
  let [optionChecked, setOption] = useState("");

  let number = props.number;


  return (
   
    <div className='qnBox'>
      {/* {props.questions.results[number].question} */}
      <div className='optionsBox'>
        <div className='optionBox' onClick={()=>{setOption('1');changeBg(o1)}} id="1"></div>
        <div className='optionBox' onClick={()=>{setOption('2');changeBg(o2)}} id="2"></div>
        <div className='optionBox' onClick={()=>{setOption('3');changeBg(o3)}} id="3"></div>
        <div className='optionBox' onClick={()=>{setOption('4');changeBg(o4)}} id="4"></div>
      </div>
    </div>
  );
};

export default QuestionBox;
