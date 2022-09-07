import React from 'react';
import carrito from '../../assets/carrito.svg';
import '../CartWidget/CartWidget.css';





const CartWidget = () => {
    return(
        <div className="carrito">
            <li>
                <a><img src={carrito} alt="carrito" /></a>
            </li>
        </div>
    )
}


export default CartWidget