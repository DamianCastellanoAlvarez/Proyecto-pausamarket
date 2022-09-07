import ItemCount from "../ItemCount/ItemCount";
import { Card, CardBody, CardHeader, CardText, CardTitle } from "reactstrap";



const ItemDetail = ( {item} ) => {
    const { name, price, img, detalle, stock } = item;


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
                                <ItemCount initial={1} stock={stock} />
                            </div>        
                        </CardBody>
                </Card>
            </div>
                <div className="d-flex justify-content-end">
                    <p className="fw-bolder text-center">{item.detalle}</p>
                </div>
        </div>
)           
}

export default ItemDetail