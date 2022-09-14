import ItemCount from "../ItemCount/ItemCount";
import { Card, CardBody, CardHeader, CardText, CardTitle } from "reactstrap";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const ItemDetail = ( {item} ) => {
    const { name, price, img, stock } = item;
    const [cantidad, setCantidad] = useState(1)
    const {addToCart, isInCart} = useContext(CartContext)
    
    
    

    const handleAgregar = () => {
        const itemToCart = {
            id: item.id,
            name: item.name,
            price: item.price,
            img: item.img,
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
                                initial={1} 
                                counter= {cantidad} 
                                cantMax= {stock}
                                agregar={handleAgregar} 
                                setCounter= {setCantidad}/>
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