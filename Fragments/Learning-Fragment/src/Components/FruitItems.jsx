import Item from "./Item";

const  FruitItems = ({items}) =>{
    let fruitItems = ['Apple' , 'Banana', 'cheery','DragonnFruit','Papaya'];
    return (
        <ul className="list-group">
        {items.map((item) => (
            <Item  key={item} fruitItem={item}></Item>
            ) 
            )
        }
          </ul>
    );
}
export default FruitItems;
