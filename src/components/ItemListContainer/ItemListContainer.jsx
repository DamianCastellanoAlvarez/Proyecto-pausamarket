import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { Spinner } from 'reactstrap';
import { useProductos } from '../hooks/useProductos'
import Loader from '../Loader/Loader';



const ItemListContainer = () => {

    const { productos, loading } = useProductos()
    
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
            {
                loading 
                ? <Loader/>
                : <ItemList productos={productos}/>
            }
        </>
    )
}


export default ItemListContainer