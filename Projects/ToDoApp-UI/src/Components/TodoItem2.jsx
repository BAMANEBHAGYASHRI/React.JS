function TodoItem2(){
    let todoName='Go to Collage';
    let todoDate='4/10/2024';
    return(
        <div class="container">
        <div class="row Td-row">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
        <button type="button" class="btn btn-danger Td-Btn">Delete</button>
        </div>
        </div>
        </div>
    )
}
export  default TodoItem2;