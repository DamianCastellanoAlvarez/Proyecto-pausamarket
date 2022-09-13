import ItemCount from "../ItemCount/ItemCount";
import { Card, CardBody, CardHeader, CardText, CardTitle } from "reactstrap";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";


const ItemDetail = ( {item} ) => {
    const { name, price, img, stock } = item;
    const {addToCart, isInCart} = useContext(CartContext)
    const [cuenta, setCuenta] = useState(1)
    const [add, setAdd] = useState (false)
    const {cart, cartTotal, emptyCart, cartQuantity} = useContext(CartContext)

    const agregaralcarrito = () =>{
        const itemToCart = {
            id: item.id,
            nombre: item.name,
            Precio: item.price
        }
        addToCart(itemToCart)
    }

    return(
        <div className="cart">
            
            <div className="d-flex justify-content-evenly">    
                <Card
                    className="my-2"
                    style={{
                    width: '18rem'
                    }}>
                    <CardHeader className="text-center text-success fs-3">
                        {name}
                    </CardHeader>
                    <CardBody>
                        
                        <CardText className=" text-center fst-italic">
                            <img className="img-thumbnail" src={`${img}`} />
                        </CardText>
                        <CardTitle tag="h5" className="text-center text-danger">
                            {price}
                        </CardTitle>
                            <div className="detalle d-flex justify-content-center">
                            <ItemCount 
                            cart={cart}
                            initial={1} 
                            stock={stock} 
                            addToCart={addToCart} 
                            cuenta={agregaralcarrito}
                            setCounter= {setCuenta} />
                            </div>        
                        </CardBody>
                        <div className="d-flex justify-content-evenly">
                            
                            <Link to='/cart'><button className="btn btn-info">Finalizar Compra</button></Link>
                        </div>
                </Card>
            </div>
                <div className="d-flex justify-content-end">
                    <p className="fw-bolder text-center">{item.detalle}</p>
                </div>
        </div>
)           
}

export default ItemDetail