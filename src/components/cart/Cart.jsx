import { useContext } from "react"
import { CartContext } from '../context/CartContext'
import '../cart/Cart'
import { BsFillTrashFill } from 'react-icons/bs'
import { Link } from "react-router-dom"

export const Cart = () => {

    const {cart, cartTotal, emptyCart, cartQuantity, eliminarItem } = useContext(CartContext)

    return(
        <div>
            <div  className="carta">
            {cart.length > 0
            ?
            <div>
            <h2 className="link-warning border border-warning text-center">Productos Seleccionados!</h2>
            <div className='d-flex justify-content-start'>
            {cart.map((item) =>
            <div key= {item.id}> 
                <h1 className="text-primary"> {item.name} - x - {item.cantidad} </h1>
                    <img width="350" src={item.img}/>
                    <br></br>
                <button onClick={() => eliminarItem(item.id)} className="btnelimiar btn btn-outline-danger float-end"><BsFillTrashFill/></button>
            </div> )}
            </div> 
            <br></br>
            <h2 className="text-primary">Total de Unidades : {cartQuantity()}</h2>
            <br></br>
            <h4>Total a pagar : {cartTotal()}</h4> 
            <button className="btn btn-danger" onClick={emptyCart}>Vaciar Carrito</button>
            <Link to="/checkout" className="btn btn-success mx-5">Pagar</Link>
            </div>
            :
                <Link to="/"><h3 className="text-center">Tu carrito está vacio!!
                <br></br>
                Hace click en este enlace para ver los productos!!</h3></Link>
            }     
        </div>   
        </div>
    )
}