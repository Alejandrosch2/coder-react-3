import './App.css';
import NavBar2 from './components/NavBar2/NavBar2';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './Context/CartContext';
import Cart from './components/Cart/Cart';
import { NotificationServicesProvider } from './services/NotificationServices/NotificationServices';

const App = () => {

  return (
      <div className='background'>
      <NotificationServicesProvider>   
      <CartContextProvider>
      <BrowserRouter>
        <NavBar2 />
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/category/:categoryId' element={<ItemListContainer />}/>
          <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
      </CartContextProvider>
      </NotificationServicesProvider>
      </div>
  );
}

export default App;