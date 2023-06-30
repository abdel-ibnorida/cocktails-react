import CocktailsByIngredient from '../CocktailsByIngredient';
import Filters from '../Filters';
import './Home.css'
import { useEffect, useState } from "react";

const Home = ({ setProductSection, setCocktailName }) => {
    const [typeDrink, setTypeDrink] = useState("Alcoholic");
    const [cocktailsByType, setCokctailsByType] = useState([]);
    const [searchCocktail, setSearchCokctail] = useState([]);
    const [ingredient, setIngredient] = useState("");

    let url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=' + typeDrink;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setCokctailsByType(data))
    }, [typeDrink]);


    const onHandleAlcolClick = () => {
        setTypeDrink("Alcoholic")
    }
    const onHandleNonAlcolClick = () => {
        setTypeDrink("Non_Alcoholic")
    }
    const onHandleChange = (e) => {
        setSearchCokctail(e.target.value);
    }

    const onHandelSubmit = (e) => {
        e.preventDefault();
        setCocktailName(searchCocktail);
        setProductSection("");
    }
    return (
        <>
            <form onSubmit={onHandelSubmit}>
                <input
                    type="text"
                    placeholder='cerca il tuo drink'
                    value={searchCocktail}
                    onChange={onHandleChange} />
            </form>
            <div>
                <Filters/>
                <CocktailsByIngredient ingredient="rum"/>
                <CocktailsByIngredient ingredient="whiskey"/>            
                <CocktailsByIngredient ingredient="vodka"/>
                <CocktailsByIngredient ingredient="gin"/>
            </div>
            <div className='drinks_by_type'>

                <button onClick={onHandleAlcolClick}>Alcoholic</button>
                <button onClick={onHandleNonAlcolClick}>Analcoholic</button>
                <div className='cocktail_list'>

                    {
                        cocktailsByType.drinks?.map(drink => {
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
        </>
    )
}

export default Home;