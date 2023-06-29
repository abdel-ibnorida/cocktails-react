import { useState } from 'react'
import Cocktail from './assets/Cocktail.svg'
import './App.css'
import SingleCocktail from './Components/SingleCocktail';
import Home from './Components/Home';

function App() {
  const [productSection, setProductSection] = useState("");
  const [cocktailName, setCocktailName] = useState("");

  const onRender = () => {
    switch (productSection) {
      case "home":
        return (
          <div>
            <Home
              productSection={productSection}
              setProductSection={setProductSection}
              cocktailName={cocktailName}
              setCocktailName={setCocktailName}
            />
          </div>
        )
      case "":
        return (
          <SingleCocktail
            productSection={productSection}
            setProductSection={setProductSection}
            cocktailName={cocktailName}
            setCocktailName={setCocktailName}
          />
        );
    }
  };

  return (
    <div className="App">
      {onRender()}
    </div>
  );
}
export default App
