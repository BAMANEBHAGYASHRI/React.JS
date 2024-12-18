import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import FruitItems from './Components/FruitItems';
import ErrorMessage from './Components/ErrorMessage';

function App() {
  let fruitItems = ['Apple' , 'Banana', 'cheery','DragonnFruit','Papaya'];
  // let fruitItems= [];
  return( 
    <>
{/* //   <React.Fragment>
//     <h1>Fruit List</h1>
//   <div class="list-group">
//   <button type="button" class="list-group-item list-group-item-action active" aria-current="true">
//      Fav Fruit List
//   </button>
//   <button type="button" class="list-group-item list-group-item-action">Apple</button>
//   <button type="button" class="list-group-item list-group-item-action">Banana</button>
//   <button type="button" class="list-group-item list-group-item-action">Cheery</button>
//   <button type="button" class="list-group-item list-group-item-action" disabled>Dragon-Fruit</button>
// </div>
// </React.Fragment>
//   ); */}

{/* //Map method */}
<h1>Healthy food</h1>
  <ErrorMessage items={fruitItems}></ErrorMessage>
    <FruitItems items={fruitItems} ></FruitItems>
    </>

  );
}
 export default App;

