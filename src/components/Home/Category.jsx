import React from "react";
import {Link} from "react-router-dom"
const Category = (props) => {
    const setCategory=(e)=>{
        let category=e.target.value;
        props.setCategory(category)
       }
  return (
    <div className='category'>
      <div className='box'>
        <h2 className='text-center m-3 '>Select a category</h2>
        <div className='parentBox'>
          <select name='trivia_category' class='form-control form-select' id="categoryInput" onChange={setCategory}>
            <option value='any'>Any Category</option>
            <option value='9'>General Knowledge</option>
            <option value='10'>Entertainment: Books</option>
            <option value='11'>Entertainment: Film</option>
            <option value='12'>Entertainment: Music</option>
            <option value='13'>Entertainment: Musicals &amp; Theatres</option>
            <option value='14'>Entertainment: Television</option>
            <option value='15'>Entertainment: Video Games</option>
            <option value='16'>Entertainment: Board Games</option>
            <option value='17'>Science &amp; Nature</option>
            <option value='18'>Science: Computers</option>
            <option value='19'>Science: Mathematics</option>
            <option value='20'>Mythology</option>
            <option value='21'>Sports</option>
            <option value='22'>Geography</option>
            <option value='23'>History</option>
            <option value='24'>Politics</option>
            <option value='25'>Art</option>
            <option value='26'>Celebrities</option>
            <option value='27'>Animals</option>
            <option value='28'>Vehicles</option>
            <option value='29'>Entertainment: Comics</option>
            <option value='30'>Science: Gadgets</option>
            <option value='31'>
              Entertainment: Japanese Anime &amp; Manga
            </option>
            <option value='32'>Entertainment: Cartoon &amp; Animations</option>
        </select>
        </div>
        <div className="nextBtn">
            <Link to='/level'>
            <button className="btn btnoutline-dark">Next</button>
            </Link>
         
        </div>
      
      </div>
    </div>
  );
};

export default Category;
