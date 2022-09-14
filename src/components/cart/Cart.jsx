import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"

export const Cart = () => {

    const {cart, cartTotal, emptyCart } = useContext(CartContext)

    

    return(
        <div>
            <h2>CARRITO !</h2>

            {cart.map((item) =>
            <div key= {item.id}>
                <h1>{item.name}</h1>
                <p>{item.stock}</p>
                <img src={item.img}/>
                
            </div> )}
            <h4>Total: ${cartTotal()}</h4>
            <button onClick={emptyCart}>Vaciar Carrito</button>
        </div>
    )
}