import './CocktailsByIngredient.css'
import { useState, useEffect } from "react";

const CocktailsByIngredient = ({ ingredient }) => {
    const [cocktails, setCocktails] = useState([]);
    useEffect(() => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + ingredient)
            .then(res => res.json())
            .then(data => setCocktails(data))
    }, []);

    return (
        <div className='drinks_by_ingredient'>    
            <p className='ingredient_name'>{ingredient}</p>
            <div className='cocktail_list'>


                {
                    cocktails.drinks?.map(drink => {
                        return <div className='cocktail_card'>
                            <img src={drink.strDrinkThumb}></img>
                            <p>
                                {drink.strDrink}
                            </p>
                        </div>
                    })
                }
            </div>
        </div>

    )
}

export default CocktailsByIngredient;