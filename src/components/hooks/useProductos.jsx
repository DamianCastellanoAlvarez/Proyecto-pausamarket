import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where} from 'firebase/firestore'
import { db } from '../firebase/config'

export const useProductos = () => {
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

    return ({
        productos, loading
    })
}