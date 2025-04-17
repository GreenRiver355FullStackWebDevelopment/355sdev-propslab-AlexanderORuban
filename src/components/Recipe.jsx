import { Typography} from '@mui/material';
import RestaurantIcon from '@mui/icons-material/Restaurant';

const Recipe = ({ recipe: { name, ingredients, instructions, optionalGlaze } }) => {
    return (
        <div>
            <Typography variant='h1' sx={{color: 'crimson'}}>
                Recipes:
                <RestaurantIcon sx={{ marginLeft: 1, fontSize: '70px' }} />
            </Typography> 

            <Typography variant='h2' sx={{color: 'royalblue'}}>{name}</Typography>

            <Typography variant='h3' sx={{color: 'mediumseagreen'}}>Ingredients:</Typography>
            <ul>
                {ingredients.map((item, index) => (
                    <li key={index} >{item}</li>
                ))}
            </ul>

            <Typography variant='h3' sx={{color: 'mediumseagreen'}}>Instructions:</Typography>
            <ol>
                {instructions.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ol>

            {optionalGlaze && ( //JSX if statement on whether or not to render the optionalGlaze that some recipes include
                <div className="optionalGlaze">
                    <Typography variant='h4' sx={{color: 'sienna'}}>Optional Glaze: {optionalGlaze.name}</Typography>

                    <Typography variant='h4' sx={{color: 'slateblue'}}>Glaze Ingredients:</Typography>
                    <ul>
                        {optionalGlaze.ingredients.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>

                    <Typography variant='h4' sx={{color: 'forestgreen'}}>Glaze Instructions:</Typography>
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