import React from 'react';
import carrito from '../../assets/carrito.svg';
import '../CartWidget/CartWidget.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';


const CartWidget = () => {
    const {cartQuantity} = useContext(CartContext)
    return(
        <div className="carrito">
            <li>
                <Link to='/cart'><img src={carrito} alt="carrito" /></Link>
                <span>{cartQuantity()}</span>
            </li>
        </div>
    )
}


export default CartWidget