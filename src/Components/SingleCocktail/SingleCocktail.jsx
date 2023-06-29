import './SingleCocktail.css'
import { useState, useEffect } from "react";

const SingleCocktail = ({productSection, setProductSection}) => {
    const [cocktail, setCokctail] = useState({});

    useEffect(() => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
        .then(res => res.json())
        .then(data => setCokctail(data.drinks[0]))
    }, []);
    console.log(cocktail);
    const onHandleClick = () => setProductSection("home");
    
    return (
            <div >
                <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                <div >
                    <div >
                        <h1>{cocktail.strDrink}</h1>
                        <p>{cocktail.strAlcoholic}</p>
                    </div>
                    <p>❤️</p>
                </div>
                <ul >
                    <li>{cocktail.strIngredient1}</li>
                    <li>{cocktail.strIngredient2}</li>
                    <li>{cocktail.strIngredient3}</li>
                    <li>{cocktail.strIngredient4}</li>
                </ul>
                <p >{cocktail.strInstructions}</p>
                <button onClick={onHandleClick}>
                    ❌
                </button>
            </div>
            )
}

export default SingleCocktail;