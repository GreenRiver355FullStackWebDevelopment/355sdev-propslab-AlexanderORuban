const Recipe = ({ recipe: {name, ingredients, instructions} }) => {
    return (
        <div>
            <h1>Recipe Name: {name}</h1>
            <h2>Ingredients: {ingredients}</h2>
            <p>Instructions: {instructions}</p>
            <div className="optionalGlaze">
            </div>
        </div>
    )
}

export default Recipe