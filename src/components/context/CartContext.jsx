import {createContext, useState } from "react";
import Swal from 'sweetalert2'



export const CartContext = createContext()

export const CartProvider = ({children}) => {
    
    const [cart, setCart] = useState([])

    const addToCart = (item) => {
        setCart ([...cart, item])
    }

    const isInCart = (id) => {
        cart.some ((item) => item.id === id)
    }

    const cartQuantity = () => {
        return cart.reduce ((acc, item) => acc + item.cantidad, 0)
    }

    const cartTotal = () => {
        return cart.reduce ((acc, item) => acc + item.cantidad * item.price, 0)
    }

    const eliminarItem = (id) => {
        Swal.fire({
            title: 'Estas seguro que deseas eliminar este producto?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar!'
        }).then((result) => {
            if (result.isConfirmed) {
                setCart(cart.filter((item) => item.id !== id));
            }
        })
    
    };

    const emptyCart = () => {
        Swal.fire({
            title: 'Estas seguro?',
            text: "Eliminar los productos seleccionados",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, vaciar el carrito!'
        }).then((result) => {
            if (result.isConfirmed) {
                setCart ([])
            }
        })

    }
    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            isInCart,
            cartQuantity,
            cartTotal,
            eliminarItem,
            emptyCart
        }}>
            {children}
        </CartContext.Provider>
    )
}
