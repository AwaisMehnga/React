import { useState } from 'react'

export default function Navbar(){
  const[isNavOpen, setisNavOpen]= useState(false)
  return(<div className="navbar">
  <a href="https://github.com/AwaisMehnga/React/tree/main/Projects/MazedarMeal">GitHub</a>
  <a href="https://www.linkedin.com/in/awaismehnga/">LinkedIn</a>
  <a href="https://www.themealdb.com/">MealDB</a>
  <a href="#">Support Me</a>
  <div onClick={() => setisNavOpen(!isNavOpen)} className="navbar-burger">
    {isNavOpen ? 
    (<span>X</span> ) : (<span>&#9776;</span> )}
  </div>
  {(isNavOpen)&&<div  className="navbar-responsive">
  <a href="https://github.com/AwaisMehnga/React/tree/main/Projects/MazedarMeal">GitHub</a>
  <a href="https://www.linkedin.com/in/awaismehnga/">LinkedIn</a>
  <a href="https://www.themealdb.com/">MealDB</a>
  <a href="#">Support Me</a>

  </div>}
  </div>)
}