import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
const Level = (props) => {
  let navigate = useNavigate()
  const setLevel = (e) => {
    let level = e.target.value;
    props.setLevel(level);
  };
  const fetchQns =async ()=>{
    
      const url=`https://opentdb.com/api.php?amount=10&category=${props.category}&difficulty=${props.level}&type=multiple`
      console.log(url);
    let res=await fetch(url)
    res= await res.json();
    props.setQuestions(res)
    console.log(res)
    navigate('/questions',{replace:true})
}
  return (
    <div className="level">
      <div className='category'>
        <div className='box'>
          <h2 className='text-center m-3 '>Select a level</h2>
          <div className='parentBox'>
            <select class='form-control form-select' onChange={setLevel}>
              <option value='any'>Any Difficulty</option>
              <option value='easy'>Easy</option>
              <option value='medium'>Medium</option>
              <option value='hard'>Hard</option>
            </select>
          </div>
          <div className='nextBtn'>
         
              <button className='btn btnoutline-dark' onClick={fetchQns}>Start</button>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Level;
