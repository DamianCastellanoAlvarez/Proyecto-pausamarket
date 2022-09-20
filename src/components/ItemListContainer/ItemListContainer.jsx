import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { Spinner } from 'reactstrap';
import { useParams } from 'react-router-dom';
import {collection, getDocs, query, where} from "firebase/firestore"
import { db } from '../firebase/config';



const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false);

    const {categoryId} = useParams()
    
    useEffect(() => {
        setLoading(true)
            const productosRef = collection (db, 'productos')
            const q = categoryId
            ? query ( productosRef, where ('categoria', '==', categoryId))
            : productosRef
        getDocs(q)
            .then((resp) => {
                const productosDB = resp.docs.map ((doc) => ({id: doc.id, ...doc.data()}))
                setProductos(productosDB)
            })
            .finally(() => {
                setLoading(false)
            })
        }, [categoryId])
    
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
            <div>
                <Spinner
                    color="success"
                    size="sm"
                    type="grow">
                </Spinner>  
            </div>
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
            <ItemList productos = {productos} />
        </>
    )
}


export default ItemListContainer