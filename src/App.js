import './App.css';
import NavBar2 from './components/NavBar2/NavBar2';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {


  const handleSubmit = (e) => {

     e.preventDefault()
     console.log('submit')

  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar2/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
         
          <Route path='/about' element={<h1>About</h1>} />
          <Route path='/category/:categoryId' element={<ItemListContainer />}/>
          <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
        </Routes>
      </BrowserRouter>
      <form onSubmit={handleSubmit}>
        
        <button type="submit">ir al carrito</button>
      </form>
    </div>
  );
}

export default App;