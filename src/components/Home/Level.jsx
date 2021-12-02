import React from "react";
import { Link } from "react-router-dom";
const Level = (props) => {
  const setLevel = (e) => {
    let level = e.target.value;
    props.setLevel(level);
  };
  return (
    <div>
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
            <Link to='/level'>
              <button className='btn btnoutline-dark'>Start</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Level;
