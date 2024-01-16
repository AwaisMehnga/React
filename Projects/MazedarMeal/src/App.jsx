import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Search from './components/search'
import Recipe from './components/Recipe'



function App() {
  // getting all the variables here
  const[recipeName,setRecipeName] = useState("biryani")
  const[recipeData, setRecipeData]= useState({})
  
  

  return (
    <>
    
      <Navbar></Navbar>
      <div className="hero">
        <h1>Mazedar</h1>
        <p>Search recipes from all around the globe.</p>
      </div>
      <Search setRecipeName={setRecipeName} setRecipeData={setRecipeData} recipeName={recipeName}></Search>
      <Recipe recipeData={recipeData}></Recipe>
      <div className="footer">copyright&copy; By Awais Mehnga. <a className="ExLinks" href="">Support me</a></div>
    </>
  )
}

export default App
