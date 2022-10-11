import React, {useContext, useState} from "react";
import { CartContext } from "../context/CartContext";
import {addDoc, collection, getFirestore} from 'firebase/firestore'


export default function Checkout() {
  const { cartTotal, cart, fincompra} = useContext(CartContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [orderId, setOrderId] = useState('')
  
  function validateForm(){
    const order = {
      buyer: {name, tel, email},
      cart,
    };

    const db = getFirestore()
    const orders = collection(db, 'orders');
    addDoc(orders, order).then(({id})=>{
      setOrderId(id);
      fincompra()
    });
  }


  return (
    <>
      <div className="text-center h3 text-info bg-dark">
        {
          orderId 
          ? ( "Gracias por confiar en Pausa Market!! Tu codigo de compra es : " + orderId 
          ) : ( 
            
        <div>
          <h1>Terminar compra, ingrese datos</h1>
          <br></br>
          <form class="row gy-2 gx-3 align-items-center">
                  <div class="col-auto">
                      <label class="visually-hidden" for="autoSizingInput">Name</label>
                      <input type="text" class="form-control" id="autoSizingInput" placeholder="Nombre" onChange={(e)=>setName (e.target.value)}/>
                    </div>
                    <div class="col-auto">
                      <label class="visually-hidden" for="autoSizingInput">Telefono</label>
                      <input type="text" class="form-control" id="autoSizingInput" placeholder="Telefono" onChange={(e)=>setTel (e.target.value)}/>
                    </div>
                    <div class="col-auto">
                    <label class="visually-hidden" for="autoSizingInputGroup">Username</label>
                    <div class="input-group">
                      <div class="input-group-text">@</div>
                      <input type="text" class="form-control" id="autoSizingInputGroup" placeholder="Email" onChange={(e)=>setEmail (e.target.value)}/>
                    </div>
                  </div>
          </form>
          <br></br>
            <div class="col-auto">
              <button type="submit" class="btn btn-primary"onClick={validateForm}>Terminar Compra</button>
            </div>
        </div>
          )}
          </div>
    </>
    )
}