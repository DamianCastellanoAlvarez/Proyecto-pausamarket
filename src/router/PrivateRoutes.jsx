import NavBar from '../components/NavBar/NavBar';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'
import Contacto from '../components/Contacto/Contacto';
import {Cart} from '../components/cart/Cart'
import {  Routes, Route, Navigate } from 'react-router-dom'
import Blog from '../components/Blog/Blog'
import Checkout from '../components/Checkout/Checkout';

const PrivateRoutes = () => {

    return (
        <>
                <NavBar />
                <Routes>
                    <Route path='/' element={<ItemListContainer />} />
                    <Route path='/productos' element= {< ItemListContainer/> }/>
                    <Route path='/productos/:categoryId' element= {< ItemListContainer/> }/>
                    <Route path='/Cart' element={<Cart/>}/>
                    <Route path='/checkout' element={<Checkout/>}/>
                    <Route path='/blog' element={<Blog />}/>
                    <Route path='/contacto' element={<Contacto />}/>
                    <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
                    <Route path='*'element={<Navigate to='/'/>}/>
                </Routes>
        </>
    )
}

export default PrivateRoutes