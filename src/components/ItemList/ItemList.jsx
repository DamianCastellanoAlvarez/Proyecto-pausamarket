import React from "react";
import Item from "../Item/Item";


const ItemList = ({ productos = [] }) => {
    return (
        <div className="row">
            {productos.map((prod) => (
                <div className="col-4" key={prod.id}>
                    <Item producto={prod} />
                </div>))}
            
        </div>
)           
}

export default ItemList