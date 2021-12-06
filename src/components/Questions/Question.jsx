import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import he from 'he'
const Question = (props) => {
  // question number state
  let [number, setNumber] = useState(0);
  let [checkAnswers, setCheckAnswers] = useState(false);
  const checkAnswersFxn = () => {
    setCheckAnswers(true);
    const checkAnswersbtn = document.getElementById('checkAnswers')
    checkAnswersbtn.disabled=true;
  };
  const nextQuestion = () => {
    if (number < 10) {
      let checkedAns = "";
      let array = [1, 2, 3, 4];
      array.map((e) => {
        let el = document.getElementById(e);
        console.log(el);
        if (el.checked) {
          checkedAns = el.value;
          console.log(checkedAns);
          el.checked = false;
        }
      });
      if (checkedAns == props.questions.results[number].correct_answer) {
        let currentCount = props.count;
        props.setCount(currentCount + 1);
        console.log(props.count);
      }

      //increase qn no.
      number = number + 1;
      setNumber(number++);
    }
  };
  // function to shuffle array
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    console.log(array);
  }

  if (number < 10) {
    let optionsArray = [
      props.questions.results[number].correct_answer,
      ...props.questions.results[number].incorrect_answers,
    ];
    console.log(optionsArray);
    shuffleArray(optionsArray);
    return (
      <div>
        <div className='category'>
          <div className='box qnPageBox'>
            <div className='qnBox'>
              <p className='m-2'>{he.decode(props.questions.results[number].question)}</p>

              <div className='optionsBox'>
                <label htmlFor='1' className='optionBox'>
                  <input
                    type='radio'
                    name='optoin'
                    id='1'
                    className='option'
                    value={optionsArray[0]}
                  />
                  {he.decode(optionsArray[0])}
                </label>
                <label htmlFor='2' className='optionBox'>
                  <input
                    type='radio'
                    name='optoin'
                    id='2'
                    className='option'
                    value={optionsArray[1]}
                  />
                  {he.decode(optionsArray[1])}
                </label>
                <label htmlFor='3' className='optionBox'>
                  <input
                    type='radio'
                    name='optoin'
                    id='3'
                    className='option'
                    value={optionsArray[2]}
                  />
                  {he.decode(optionsArray[2])}
                </label>
                <label htmlFor='4' className='optionBox'>
                  <input
                    type='radio'
                    name='optoin'
                    id='4'
                    className='option'
                    value={optionsArray[3]}
                  />
                  {he.decode(optionsArray[3])}
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
  }
else{
  return (
    <div>
      <div className='results category'>
        
          <div className='box resultsbox'>
            {props.count > 5 ? (
              <h1 className='text-center'>Congratulations,</h1>
            ) : (
              <h1 className='text-center'>Well tried,</h1>
            )}

            <h4 className='m-4 text-center'>
              You scored {props.count} out of 10
            </h4>
            <div className='btns'>
              <Link to='/'>
                <button className='btn m-3'>Retake Quiz</button>
              </Link>
              <button className='btn m-3' onClick={checkAnswersFxn} id="checkAnswers">
                Check Answers
              </button>
            </div>
        </div>
        {checkAnswers ? (
          <div className='answersBox'>
           
            <ol>
              {props.questions.results.map((i) => (
                <li>
                  <b>{he.decode(i.question)}</b>
                  <p>{he.decode(i.correct_answer)}</p>
                </li>
              ))}
            </ol>
          </div>
        ) : (
          <h1></h1>
        )}
      </div>
    </div>
  );
}
 
};

export default Question;
