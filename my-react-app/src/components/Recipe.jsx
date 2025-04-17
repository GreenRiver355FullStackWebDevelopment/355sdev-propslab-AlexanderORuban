const Recipe = ({ recipe: { name, ingredients, instructions, optionalGlaze } }) => {
    return (
        <div>
            <h1>Recipe Name: {name}</h1>

            <h2>Ingredients:</h2>
            <ul>
                {ingredients.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            <h2>Instructions:</h2>
            <ol>
                {instructions.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ol>

            {optionalGlaze && (
                <div className="optionalGlaze">
                    <h2>Optional Glaze: {optionalGlaze.name}</h2>

                    <h3>Glaze Ingredients:</h3>
                    <ul>
                        {optionalGlaze.ingredients.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>

                    <h3>Glaze Instructions:</h3>
                    <ol>
                        {optionalGlaze.instructions.map((step, index) => (
                            <li key={index}>{step}</li>
                        ))}
                    </ol>
                </div>
            )}
        </div>
    )
}

export default Recipe