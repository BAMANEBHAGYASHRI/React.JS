const ErrorMessage = ({items}) => {
    let fruitItems = ['Apple' , 'Banana', 'cheery','DragonnFruit','Papaya'];
    return(
        <> {fruitItems.length === 0  && <h3>i am still hungery</h3>}</>
       
    );
      
}
export default ErrorMessage;