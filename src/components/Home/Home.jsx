import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './HomePage';
import Category from './Category'
import Level from './Level'
const Home = () => {
    return (
       
            <Router>
                <Routes>
                    <Route path='/' element={<HomePage/>}></Route>
                    <Route path='/category' element={<Category/>}></Route>
                    <Route path='/level' element={<Level/>}></Route>
                </Routes>
            </Router>
      
    )
}

export default Home
