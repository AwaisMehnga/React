export default function Recipe(props){
    const recipeData = props.recipeData;
    return(
        <>
        {
        
        recipeData.meals && recipeData.meals.length > 0 && (
          <><h1 className='recipeHeading'>{recipeData.meals[0].strMeal}</h1>
          <div className='Recipe'>
            
            {/* left side */}
            <div className='leftSide'>
              <div className='thumb'>
                <img  src={recipeData.meals[0].strMealThumb} alt="" />
                
                <br />
                
                {recipeData.meals[0].strYoutube && <a className="ExLinks" href={(recipeData.meals[0].strYoutube)}>Watch On Youtube</a>}
                <p>
                <span>{recipeData.meals[0].strArea}</span>
                </p>
              </div>
              <div >
                <table className='ing'>
                  <thead>
                    <tr>
                      <th>Ingredient</th>
                      <th>Measure</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[...Array(20)].map((_, index) => {
                      const ingredientKey = `strIngredient${index + 1}`;
                      const measureKey = `strMeasure${index + 1}`;
                      const ingredient = recipeData.meals[0][ingredientKey];
                      const measure = recipeData.meals[0][measureKey];

                      // Render row only if both ingredient and measure exist
                      if (ingredient && measure) {
                        return (
                          <tr key={index}>
                            <td>{ingredient}</td>
                            <td>{measure}</td>
                          </tr>
                        );
                      }

                      return null; // Skip rendering if either ingredient or measure is missing
                    })}
                  </tbody>
                </table>
                
              </div>
              
            </div>
            {/* right side */}
            <div className='rightSide'>
              <h2>
                Instructions
              </h2>
              <div className="Instructions">
                {
                  recipeData.meals[0].strInstructions.split('\r\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
              </div>
            </div>
          </div>
          </>
      )}</>
      )
}