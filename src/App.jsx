import { useState } from 'react'
import Cocktail from './assets/Cocktail.svg'
import './App.css'
import SingleCocktail from './Components/SingleCocktail';
import Home from './Components/Home';

function App() {
  const [productSection, setProductSection] = useState("");

  const onRender = () => {
    switch (productSection) {
      case "home":
        return (
          <div>
            home
            <Home
              productSection={productSection}
              setProductSection={setProductSection} 
            />
          </div>
        )
      case "":
        return (
          <SingleCocktail
            productSection={productSection}
            setProductSection={setProductSection}
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
