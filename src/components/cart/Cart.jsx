import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import '../cart/Cart'

export const Cart = () => {

    const {cart, cartTotal, emptyCart, cartQuantity } = useContext(CartContext)

    return(
        <div>
            <h2>Productos Seleccionados!</h2>
            <div className='d-flex justify-content-start'>
            {cart.map((item) =>
            <div key= {item.id}>
                <h1>{item.name}</h1>
                <h2>{item.cantidad}</h2>
                
                    <img width="350" src={item.img}/>
                    <h2></h2>
                
            </div> )}
            </div>
            <h2> Unidades: {cartQuantity()}</h2>
            <h4>Total: {cartTotal()}</h4>
            <button onClick={emptyCart}>Vaciar Carrito</button>
        </div>
    )
}