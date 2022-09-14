import '../ItemCount/ItemCount.css';



const ItemCount = ({counter, agregar, setCounter, cantMax}) => {

    
    
    
    const handleRestar = () => {
        if (counter > 1 ) {
            setCounter(counter - 1)
        }
    }
    
    const handleSumar = () => {
        if(counter < cantMax)
        setCounter(counter + 1)
    }

    
    return (
        <div className="justify-content-evenly">
            <div className="d-flex justify-content-evenly">
                <button className="btn btn-success" onClick={handleRestar}>-</button>
                <p className="fs-5">{counter}</p>
                <button className="btn btn-success" onClick={handleSumar}>+</button>
            </div>
            <div className="d-flex justify-content-evenly">
                <button type="button" className="btn btn-danger" onClick={agregar}>Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default ItemCount