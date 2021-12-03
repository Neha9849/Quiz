import React from "react";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div className='homepage'>
      <div>
        <h1 className='text-monospace'>Welcome to Quizy</h1>
        <Link to='/category'>
          <button className='btn btn-outline-dark'>Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
