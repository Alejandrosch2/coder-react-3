
import './App.css';
import NavBar2 from './components/NavBar2/NavBar2';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
      <NavBar2  title="ecommerce" color="red"/>
      <ItemListContainer greeting='Hello 24925' />
   
    </div>
  );
}

export default App;
