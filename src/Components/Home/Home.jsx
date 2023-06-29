import './Home.css'
import { useEffect, useState } from "react";

const Home = ({ productSection, setProductSection ,cocktailName, setCocktailName}) => {
    const [typeDrink, setTypeDrink] = useState("Alcoholic");
    const [cocktails, setCokctails] = useState([]);
    const [searchCocktail, setSearchCokctail] = useState([]);

    let url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=' + typeDrink;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setCokctails(data))
    }, [typeDrink]);


    const onHandleAlcolClick = () => {
        setTypeDrink("Alcoholic")
    }
    const onHandleNonAlcolClick = () => {
        setTypeDrink("Non_Alcoholic")
    }
    const onHandleChange = (e) => {
        console.log(e.target.value);
        setSearchCokctail(e.target.value);
    }

    const onHandelSubmit = (e) => {
        e.preventDefault();
        setCocktailName(searchCocktail);
        console.log(cocktailName);
        console.log('ricerca');
        setProductSection("");
    }
    return (
        <div>
            <form onSubmit={onHandelSubmit}>
                <input type="text" placeholder='cerca il tuo drink' onChange={onHandleChange} />
            </form>
            <button onClick={onHandleAlcolClick}>Alcoholic</button>
            <button onClick={onHandleNonAlcolClick}>Analcoholic</button>
            <div className='cocktail_list'>
                {
                    cocktails.drinks?.map(drink => {
                        return   <div className='cocktail_card'>
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

export default Home;