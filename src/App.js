import './App.css';
import image from './shopping.webp';
import imageTwo from './man.webp';
import {GroceryList} from './GroceryList';

function App() {
  return (
    <div className="app">
      <div className="container">
     <img src={image} alt="shoppingList" width="200px"/> 
     </div>
     <div className="container">
     <h1>Grocery List</h1> 
     </div>
     <GroceryList/>
     <div className="container">
     <img src={imageTwo} alt="shoppingMan" width="200px"/>
     </div>
    </div>
  );
}

export default App;
