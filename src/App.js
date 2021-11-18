import NavBar from "./Components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";


function App() {

  
  return (
    <div>
      <NavBar/>
      <ItemListContainer titulo="Bienvenidos a Novak Wines"></ItemListContainer>
     
    </div>
  );
}



export default App;
