import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import './App.css'

function App() {
  
  // let fruitItems = ['Apple' , 'Banana', 'cheery','DragonnFruit','Papaya'];
  let fruitItems=[];

  //Logical Oprator
  let emptyMessage = fruitItems.length ===0 ? <h3>i am still hungry</h3>: null;

  //if -else statements
  // if( fruitItems.length === 0){
  //   return <h3>I am  still Hungry.....</h3>;
  // }
  return(
    <>
    <h1>Healthy food</h1>
    {/* Logical oprator value */}
    {emptyMessage}
    {/* Ternary oprator */}
    {/* {fruitItems.length ===0 ? <h3>i am still hungry</h3>: null} */}
    <ul className="list-group">{fruitItems.map((item) => (<li  key="{item}" className="list-group-item">{item}</li>) )}
      </ul>
    </>
    
  )
 
}

export default App
