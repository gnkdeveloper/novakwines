import NavBar from "./Components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemCount from "./Components/ItemCount/ItemCount/ItemCount.js";
import ItemList from "./Components/ItemList/ItemList";

function App() {

  
  return (
    <div>
      <NavBar/>
      <ItemListContainer titulo="Bienvenidos a Novak Wines"></ItemListContainer>
      <ItemCount
      img src="../../media/norton.jpg"
      title="ALTURA CABERNET FRANC"
      text= "Bodega Norton"
      />
      <ItemList/>
    </div>
  );
}



export default App;
