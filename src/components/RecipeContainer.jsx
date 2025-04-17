import Recipe from "./Recipe.jsx";

const RecipeContainer = ({recipes}) => {
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