import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import Pedirdatos from '../../helpers/pedirdatos';
import ItemDetail from "../ItemDetail/ItemDetail";



const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const [loading, setloading] = useState(false);

    const {itemId} = useParams()

    useEffect(() => {
        setloading(true)
        Pedirdatos()
            .then( (res) => {
                if(!itemId){
                setItem(res)
            }else{setItem(res.find((prod)=> prod.id === Number(itemId)))
            }})
            .catch( (error) => {
                console.log(error)
            })
            .finally(() => {
                setloading(false)
            })
    }, [itemId])

    if(loading){
        return (
            <div className="d-flex justify-content-around spinner">
                <div>
                    <Spinner
                        color="success"
                        size="sm"
                        type="grow">
                    </Spinner>  
                </div>
            </div>
        )
        }

    return (
        <>
            <ItemDetail item={item} />
        </>
    );
}

export default ItemDetailContainer