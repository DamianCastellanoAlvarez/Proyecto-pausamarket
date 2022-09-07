import React, { useState } from "react";
import '../ItemCount/ItemCount.css';


const ItemCount = ({stock, initial}) => {
    const [cuenta, setCuenta] = useState(initial)

    const sumar = () =>{
        cuenta < stock && setCuenta(cuenta + 1)
            cuenta >= stock && alert('STOCK INSUFICIENTE')
    }

    const restar = () =>{
        setCuenta(Math.max (cuenta - 1, 1))
    }

    const onAdd = () => {
        alert(`Agregaste al carrito ${cuenta} productos de PAUSA MARKET`)
    }

    return (
        <div className="justify-content-evenly">
            <div className="d-flex justify-content-evenly">
                <button className="btn btn-success" onClick={restar}>-</button>
                <p className="fs-5">{cuenta}</p>
                <button className="btn btn-success" onClick={sumar}>+</button>
            </div>
            <div className="d-flex justify-content-evenly">
                <button type="button" className="btn btn-danger" onClick={onAdd}>Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default ItemCount