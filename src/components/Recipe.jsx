import { Typography} from '@mui/material';
import RestaurantIcon from '@mui/icons-material/Restaurant';

const Recipe = ({ recipe: { name, ingredients, instructions, optionalGlaze } }) => {
    return (
        <div>
            <Typography variant='h1' sx={{color: 'burlywood'}}>
                Recipes:
                <RestaurantIcon sx={{ marginLeft: 1, fontSize: '70px' }} />
            </Typography> 

            <Typography variant='h2' sx={{color: 'beige'}}>{name}</Typography>

            <Typography variant='h3' sx={{color: 'gray'}}>Ingredients:</Typography>
            <ul>
                {ingredients.map((item, index) => (
                    <li key={index} >{item}</li>
                ))}
            </ul>

            <Typography variant='h3' sx={{color: 'gray'}}>Instructions:</Typography>
            <ol>
                {instructions.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ol>

            {optionalGlaze && ( //JSX if statement on whether or not to render the optionalGlaze that some recipes include
                <div className="optionalGlaze">
                    <Typography variant='h4' sx={{color: '#9E5B40'}}>Optional Glaze: {optionalGlaze.name}</Typography>

                    <Typography variant='h4' sx={{color: 'lightblue'}}>Glaze Ingredients:</Typography>
                    <ul>
                        {optionalGlaze.ingredients.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>

                    <Typography variant='h4' sx={{color: 'lightgreen'}}>Glaze Instructions:</Typography>
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