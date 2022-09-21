import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import '../cart/Cart'
import { BsFillTrashFill } from 'react-icons/bs'
import { Link } from "react-router-dom"

export const Cart = () => {

    const {cart, cartTotal, emptyCart, cartQuantity, eliminarItem } = useContext(CartContext)

    return(
        <div>
            <div>
            {cart.length > 0
            ?
            <div>
            <h2>Productos Seleccionados!</h2>
            <div className='d-flex justify-content-start'>
            {cart.map((item) =>
            <div key= {item.id}>
                <h1>{item.name}</h1>
                <h2>{item.cantidad}</h2>
                    <img width="350" src={item.img}/>
                    <h2></h2>
                <button onClick={() => eliminarItem(item.id)} className="btnelimiar"><BsFillTrashFill/></button>
            </div> )}
            </div>
            <h2> Unidades: {cartQuantity()}</h2>
            <h4>Total: ${cartTotal()}</h4> 
            <button onClick={emptyCart}>Vaciar Carrito</button>
            <div className="btn btn-success mx-2">Comprar</div>
            </div>
            :
                <Link to="/"><h3 className="carritoVacio">Tu carrito está vacio!!
                <br></br>
                Hace click en este enlace para ver los productos!!</h3></Link>
            }     
        </div>   
        </div>
    )
}