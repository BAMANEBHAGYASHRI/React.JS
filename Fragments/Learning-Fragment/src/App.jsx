import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'

function App() {
  let fruitItems = ['Apple' , 'Banana', 'cheery','DragonnFruit','Papaya'];
  return( 
//   <React.Fragment>
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
//   );


//Map method

    <ul class="list-group">{fruitItems.map((item) => (<li  key="{item}" class="list-group-item">{item}</li>) )}
    </ul>
  );
}

export default App
