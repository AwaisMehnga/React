import { useEffect, useState } from "react";
import React from "react";
import Axios from "axios";

export default function Search(props) {
  const [char, setChar] = useState("");
  const [recipeNames, setRecipeNames] = useState({});

  const getRecipe = async () => {
    try {
      const response = await Axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${props.recipeName}`
      );
      props.setRecipeData(response.data);
    } catch (error) {
      console.error("Error fetching recipe:", error);
    }
  };
  useEffect(() => {
    getRecipe();
  }, []);
  //   get names for list
  useEffect(() => {
    getRecipeNames();
  }, [char]);

  const getRecipeNames = async () => {
    try {
      const response = await Axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${char}`
      );
      setRecipeNames(response.data);
    } catch (error) {
      console.error("Error fetching recipe:", error);
    }
  };
  //   rendering
  return (
    <div className="search">
      <input
        list="sug"
        className="recipeInput"
        type="text"
        placeholder="Enter Recipe..."
        onChange={(e) => {
          props.setRecipeName(e.target.value);
          e.target.value.length == 1 && setChar(e.target.value);
        }}
      />
      <datalist id="sug">
        {recipeNames &&
          recipeNames.meals &&
          Array.isArray(recipeNames.meals) &&
          recipeNames.meals.map((recipe, index) => (
            <option key={index} value={recipe.strMeal}></option>
          ))}
      </datalist>

      <button className="recipeBTN" onClick={() => getRecipe(props.recipeName)}>
        Recipe
      </button>
      {/* <button onClick={()=>{console.log(props.recipeName)}}>tet</button> */}
    </div>
  );
}
