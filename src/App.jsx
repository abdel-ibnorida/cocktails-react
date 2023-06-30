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
              setProductSection={setProductSection}
              setCocktailName={setCocktailName}
            />
          </div>
        )
      case "":
        return (
          <SingleCocktail
            setProductSection={setProductSection}
            cocktailName={cocktailName}
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
