import { useState } from 'react'
import Cocktail from './assets/Cocktail.svg'
import './App.css'
import SingleCocktail from './Components/SingleCocktail';

function App() {
  const [productSection, setProductSection] = useState("");

  const onRender = () => {
    switch (productSection) {
      case "home":
        return(
          <div>
            home
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
