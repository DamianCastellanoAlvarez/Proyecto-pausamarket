import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc } from 'firebase/firestore'
import { db } from "../firebase/config";


const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const [loading, setloading] = useState(false);

    const {itemId} = useParams()

    useEffect(() => {
        setloading(true)
        const docRef = doc (db, 'productos', itemId )
        getDoc(docRef)
            .then((doc) => {
                setItem({id: doc.id, ...doc.data()})
            })
            .finally(() =>{
                setloading(false)
            })
    }, [])

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