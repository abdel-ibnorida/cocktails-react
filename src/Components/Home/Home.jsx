import './Home.css'
import { useEffect, useState } from "react";

const Home = ({ productSection, setProductSection }) => {
    const [typeDrink, setTypeDrink] = useState("Alcoholic");
    const [cocktails, setCokctails] = useState([]);

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

    return (
        <div>
            <button onClick={onHandleAlcolClick}>Alcoholic</button>
            <button onClick={onHandleNonAlcolClick}>Analcoholic</button>
            <div className='cocktail_list'>
                <div className='cocktail_card'>
                    <img src={cocktails.drinks[1].strDrinkThumb}></img>
                    <p>{cocktails.drinks[1].strDrink}</p>
                </div>
                <div className='cocktail_card'>
                    <img src={cocktails.drinks[2].strDrinkThumb}></img>
                    <p>{cocktails.drinks[2].strDrink}</p>
                </div>
                <div className='cocktail_card'>
                    <img src={cocktails.drinks[5].strDrinkThumb}></img>
                    <p>{cocktails.drinks[5].strDrink}</p>
                </div>
                <div className='cocktail_card'>
                    <img src={cocktails.drinks[15].strDrinkThumb}></img>
                    <p>{cocktails.drinks[15].strDrink}</p>
                </div>
            </div>
        </div>
    )
}

export default Home;