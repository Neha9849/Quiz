import React from "react";
import { Link } from "react-router-dom";
import QuestionBox from "./QuestionBox";
import { useState } from "react";
const Question = (props) => {
  // question number state
  let [number, setNumber] = useState(1);
  const nextQuestion = () => {
    let checkedAns=''
    let array = [1, 2, 3, 4];
     array.map((e)=>{
       let el=document.getElementById(e)
       console.log(el)
       if(el.checked){
        checkedAns=el.value;
         console.log(checkedAns)
         el.checked=false;
       }
     })
     if(checkedAns==props.questions.results[number].correct_answer){
        let currentCount=props.count;
        props.setCount(currentCount+1)
        console.log(props.count)
     }
     
    //increase qn no.
    number=number+1;
    if (number + 1 > 10) {
      return 0;
    }
    setNumber(number++);
  };
  // function to shuffle array
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    console.log(array);
  }
  let optionsArray = [
    props.questions.results[number].correct_answer,
    ...props.questions.results[number].incorrect_answers,
  ];
  console.log(optionsArray);
  shuffleArray(optionsArray);

  return (
    <div>
      <div className='category'>
        <div className='box'>
          <div className='qnBox'>
            <h3 >
            {props.questions.results[number].question}
            </h3>
          
            <div className='optionsBox'>
              <label htmlFor='1' className='optionBox'>
                <input type='radio' name='optoin' id='1' className='option' value={optionsArray[0]} />
                {optionsArray[0]}
              </label>
              <label htmlFor='2' className='optionBox'>
                <input type='radio' name='optoin' id='2' className='option' value={optionsArray[1]}  />
                {optionsArray[1]}
              </label>
              <label htmlFor='3' className='optionBox'>
                <input type='radio' name='optoin' id='3' className='option' value={optionsArray[2]} />
                {optionsArray[2]}
              </label>
              <label htmlFor='4' className='optionBox'>
                <input type='radio' name='optoin' id='4' className='option' value={optionsArray[3]}  />
                {optionsArray[3]}
              </label>
            </div>
          </div>
          <div className='nextBtn'>
            <button className='btn btnoutline-dark' onClick={nextQuestion}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
