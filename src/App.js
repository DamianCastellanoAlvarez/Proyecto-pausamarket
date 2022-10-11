import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer.jsx/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Blog from '../src/components/Blog/Blog'
import Contacto from '../src/components/Contacto/Contacto'
import { CartProvider } from './components/context/CartContext';
import { Cart } from './components/cart/Cart';
import Checkout from './components/Checkout/Checkout';

function App () {
  return (
    <CartProvider>
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/' element={<ItemListContainer />} />
      <Route path='/productos' element= {< ItemListContainer/> }/>
      <Route path='/productos/:categoryId' element= {< ItemListContainer/> }/>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/blog' element={<Blog />}/>
      <Route path='/contacto' element={<Contacto />}/>
      <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
      <Route path='*'element={<Navigate to='/'/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
    </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}



export default App;
