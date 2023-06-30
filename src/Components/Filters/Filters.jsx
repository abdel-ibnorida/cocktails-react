import './Filters.css'

const Filters = () => {
    const onHandleSubmit = (e) => {
        e.preventDefault();
    }
    return(
        <form className="Filters" onSubmit={onHandleSubmit} >
        <label htmlFor="rum">Rum</label>
        <input
          type="checkbox"
          name="rum"
        />
  
        <label htmlFor="vodka">Vodka</label>
        <input
          type="checkbox"
          name="vodka"
        />
  
        <label htmlFor="gin">Gin</label>
        <input
          type="checkbox"
          name="gin"
        />
  
        <input type="submit" value="Apply" />
        
    </form>
  
    )
}

export default Filters;