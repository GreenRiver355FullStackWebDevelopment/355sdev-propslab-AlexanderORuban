import Recipe from "./Recipe.jsx";
import { recipes } from "../data.js"; 

const RecipeContainer = () => {
    return (
        <div className="recipe-container">
            {
                recipes.map(recipe => (
                    <Recipe
                        recipe={recipe}
                    />
                ))
            }
        </div>
    )
}

export default RecipeContainer